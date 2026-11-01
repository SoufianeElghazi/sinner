import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { preview } from 'vite';

const server = await preview({ preview: { host: '127.0.0.1', port: 0, strictPort: true } });
const base = `http://127.0.0.1:${server.httpServer.address().port}`;
try {
  for (const route of ['/', '/about', '/project', '/resume']) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, `Direct link ${route} failed.`);
    assert((await response.text()).includes('<div id="root"></div>'), `${route} must serve the application.`);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    assert.equal(response.headers.get('x-frame-options'), 'DENY');
    assert(response.headers.get('content-security-policy').includes("worker-src 'self'"));
  }
  for (const file of ['/cv.pdf', '/The_Seeker.pdf']) {
    const response = await fetch(base + file);
    assert.equal(response.status, 200);
    assert(response.headers.get('content-type').includes('application/pdf'));
    assert.equal(Buffer.from(await response.arrayBuffer()).subarray(0, 5).toString(), '%PDF-');
  }
  const manifest = JSON.parse(await readFile('build/.vite/manifest.json', 'utf8'));
  const entry = Object.values(manifest).find(item => item.isEntry);
  assert.equal((await fetch(`${base}/${entry.file}`)).status, 200, 'Hashed entrypoint is missing.');
  const missing = await fetch(base + '/assets/missing.js');
  assert.equal(missing.status, 404, 'Missing assets must return 404 instead of application HTML.');
  console.log('HTTP smoke checks passed: direct routes, PDFs, assets, and security headers.');
} finally {
  await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()));
}
