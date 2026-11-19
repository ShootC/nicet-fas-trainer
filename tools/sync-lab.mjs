// Copy the standalone Circuit Lab handout into the app and add the "back to trainer" bar.
// Run from the repo folder:  node tools/sync-lab.mjs [path-to-FAS-Circuit-Lab.html]
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const src = resolve(process.argv[2] || '../FAS-Circuit-Lab.html');
let html = readFileSync(src, 'utf8');
const tag = '<script src="../js/lab-bridge.js"></script>\n';
if (!html.includes('</body>')) throw new Error('No </body> in ' + src);
html = html.replace(/<\/body>(?![\s\S]*<\/body>)/, tag + '</body>');
writeFileSync(resolve('lab/index.html'), html);
console.log('lab/index.html updated from', src, '(' + Buffer.byteLength(html) + ' bytes)');
