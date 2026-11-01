import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

async function modules(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? modules(path.join(dir, entry.name))
    : entry.name.endsWith('.jsx') ? [path.join(dir, entry.name)] : []));
  return nested.flat();
}

// Only process artwork actually used by the site; preserve the source originals.
const files = await modules('src');
const inputs = new Set(['public/The_Seeker.png']);
for (const file of files) {
  const text = await readFile(file, 'utf8');
  for (const match of text.matchAll(/from ["']([^"']+\.(?:png|webp))["']/g)) {
    const source = path.resolve(path.dirname(file), match[1]);
    const original = source.includes(`${path.sep}optimized${path.sep}`)
      ? source.replace(`${path.sep}optimized${path.sep}`, path.sep).replace(/\.webp$/, '.png') : source;
    if (!original.endsWith('logo.png')) inputs.add(path.basename(original) === 'The_Seeker.png' ? 'public/The_Seeker.png' : original);
  }
}

let before = 0;
let after = 0;
const replacements = new Map();
for (const input of inputs) {
  const relative = input === 'public/The_Seeker.png' ? 'The_Seeker.png' : path.relative(path.resolve('src/Assets'), input);
  const output = path.join('src/Assets/optimized', relative.replace(/\.png$/, '.webp'));
  await mkdir(path.dirname(output), { recursive: true });
  const original = await readFile(input);
  const image = await sharp(original).resize({ width: relative === 'avatar.png' ? 720 : relative === 'The_Seeker.png' ? 640 : 1200, withoutEnlargement: true })
    .webp({ quality: 88, effort: 6 }).toBuffer();
  await writeFile(output, image);
  replacements.set(path.resolve(input), path.resolve(output));
  before += original.length;
  after += image.length;
}
for (const file of files) {
  const text = await readFile(file, 'utf8');
  const updated = text.replace(/from (["'])([^"']+\.png)\1/g, (full, quote, url) => {
    const output = replacements.get(path.resolve(path.dirname(file), url));
    if (!output) return full;
    let relative = path.relative(path.dirname(file), output).split(path.sep).join('/');
    if (!relative.startsWith('.')) relative = './' + relative;
    return `from ${quote}${relative}${quote}`;
  });
  if (updated !== text) await writeFile(file, updated);
}
console.log(`Optimized ${inputs.size} images: ${(before / 1024 / 1024).toFixed(2)} MB to ${(after / 1024 / 1024).toFixed(2)} MB.`);
