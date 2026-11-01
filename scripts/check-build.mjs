import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import path from 'node:path';

const manifest = JSON.parse(await readFile('build/.vite/manifest.json', 'utf8'));
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
const entry = Object.values(manifest).find(item => item.isEntry);
assert(entry, 'The build must have an entrypoint.');
const pages = ['Home/Home', 'About/About', 'Projects/Projects', 'Resume/ResumeNew'];
for (const page of pages) {
  assert(Object.entries(manifest).some(([key, item]) => key.includes(page) && item.isDynamicEntry), `Route ${page} must remain lazy loaded.`);
}
const visited = new Set();
async function totalGzip(item) {
  if (visited.has(item.file)) return 0;
  visited.add(item.file);
  let size = gzipSync(await readFile(path.join('build', item.file))).length;
  for (const key of item.imports || []) size += await totalGzip(manifest[key]);
  return size;
}
let initialBytes = await totalGzip(entry);
const home = Object.entries(manifest).find(([key]) => key.endsWith('/Home/Home.jsx'))[1];
initialBytes += await totalGzip(home);
assert(initialBytes < 200 * 1024, `Initial homepage JavaScript exceeds the 200 KiB gzip budget (${initialBytes}).`);
for (const file of ['cv.pdf', 'The_Seeker.pdf']) {
  const output = await readFile(path.join('build', file));
  assert(output.subarray(0, 5).toString() === '%PDF-', `${file} is not a PDF.`);
  assert(output.equals(await readFile(path.join('public', file))), `${file} differs from its source.`);
}
const assets = await readdir('build/assets');
assert(assets.some(name => /^pdf\.worker\.min.*\.mjs$/.test(name)), 'PDF worker must be bundled locally.');
const avatar = assets.find(name => /^avatar-.*\.webp$/.test(name));
assert(avatar && (await stat(`build/assets/${avatar}`)).size < 120 * 1024, 'Avatar must stay below 120 KiB.');
const csp = config.headers[0].headers.find(header => header.key === 'Content-Security-Policy')?.value;
assert(csp?.includes("object-src 'none'") && csp.includes("frame-ancestors 'none'"), 'Security headers must prevent object injection and framing.');
assert(!csp.includes("'unsafe-eval'"), 'JavaScript unsafe-eval must remain disabled.');
for (const name of assets.filter(name => name.endsWith('.js'))) {
  const text = await readFile(`build/assets/${name}`, 'utf8');
  assert(!text.includes('cdnjs.cloudflare.com/ajax/libs/pdf.js'), 'PDF code must not depend on an external worker.');
}
console.log(`Build contracts passed. Initial homepage JS: ${(initialBytes / 1024).toFixed(1)} KiB gzip; avatar: ${((await stat(`build/assets/${avatar}`)).size / 1024).toFixed(1)} KiB.`);
