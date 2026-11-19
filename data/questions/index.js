// Question banks, one file per NICET domain. Each file exports { 'task id': [questions] }.
import d11 from './1.1.js';
import d12 from './1.2.js';
import d13 from './1.3.js';
import d21 from './2.1.js';
import d22 from './2.2.js';
import d23 from './2.3.js';
import d24 from './2.4.js';
export const QUESTIONS = Object.assign({}, d11, d12, d13, d21, d22, d23, d24);
export function questionById(id) {
  for (const t in QUESTIONS) { const q = QUESTIONS[t].find(x => x.id === id); if (q) return { q, task: t }; }
  return null;
}
