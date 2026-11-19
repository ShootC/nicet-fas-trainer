// Local preview server:  node tools/serve.mjs  then open http://localhost:5190
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
const root = resolve('.'), port = +process.argv[2] || 5190;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };
createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let f = join(root, p);
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  try { if ((await stat(f)).isDirectory()) f = join(f, 'index.html'); const d = await readFile(f);
    res.writeHead(200, { 'Content-Type': types[extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(d);
  } catch { res.writeHead(404); res.end('not found'); }
}).listen(port, '127.0.0.1', () => console.log('NICET FAS Trainer at http://localhost:' + port));
