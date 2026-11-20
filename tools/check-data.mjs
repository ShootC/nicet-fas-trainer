// Checks every question and lookup for mistakes that would break the app or mislead a trainee.
// Run:  node tools/check-data.mjs      (GitHub runs it on every push before publishing)
import { QUESTIONS } from '../data/questions/index.js';
import { LOOKUPS } from '../data/lookups/index.js';
import { BOOKS } from '../data/books.js';
import { LEVELS } from '../data/levels.js';
import { BADGES, BADGE_GROUPS } from '../data/badges.js';
import { CONFIG } from '../data/config.js';
import { citeFor } from '../js/cite.js';

const errors = [], warns = [];
const err = (where, msg) => errors.push(where + ': ' + msg);
const warn = (where, msg) => warns.push(where + ': ' + msg);

const taskIds = new Set();
for (const L of LEVELS) for (const D of L.domains || []) for (const T of D.tasks) taskIds.add(T.id);

const qids = new Set(); let qn = 0;
for (const [task, list] of Object.entries(QUESTIONS)) {
  if (!taskIds.has(task)) err('questions', 'task "' + task + '" is not in data/levels.js');
  if (!Array.isArray(list)) { err(task, 'must be an array'); continue; }
  list.forEach((q, i) => {
    const w = task + ' #' + (i + 1) + (q && q.id ? ' (' + q.id + ')' : '');
    qn++;
    if (!q || typeof q !== 'object') return err(w, 'not an object');
    if (!q.id) err(w, 'missing id'); else if (qids.has(q.id)) err(w, 'duplicate id'); else qids.add(q.id);
    if (!q.q || typeof q.q !== 'string') err(w, 'missing question text "q"');
    if (!q.ex) err(w, 'missing explanation "ex" (this is a teaching tool)');
    if (!['mc', 'multi', 'num'].includes(q.type)) err(w, 'type must be mc, multi or num');
    if (q.type === 'mc') {
      if (!Array.isArray(q.opts) || q.opts.length < 2) err(w, 'mc needs at least 2 opts');
      else if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.opts.length) err(w, 'a must be the index (0-based) of the right option');
      else if (new Set(q.opts.map(o => String(o).trim().toLowerCase())).size !== q.opts.length) err(w, 'duplicate options');
    }
    if (q.type === 'multi') {
      if (!Array.isArray(q.opts) || q.opts.length < 3) err(w, 'multi needs at least 3 opts');
      if (!Array.isArray(q.a) || q.a.length < 2) err(w, 'multi needs an array of 2+ right indexes in a');
      else if (q.a.some(x => !Number.isInteger(x) || x < 0 || x >= (q.opts || []).length)) err(w, 'multi a has an index out of range');
    }
    if (q.type === 'num') {
      if (typeof q.a !== 'number' || !isFinite(q.a)) err(w, 'num needs a numeric a');
      if (q.tol != null && !(q.tol >= 0)) err(w, 'tol must be >= 0');
    }
    if (!q.ref) warn(w, 'no "ref" (book reference)');
  });
}

const lids = new Set();
LOOKUPS.forEach((x, i) => {
  const w = 'lookup #' + (i + 1) + (x && x.id ? ' (' + x.id + ')' : '');
  if (!x.id) err(w, 'missing id'); else if (lids.has(x.id)) err(w, 'duplicate id'); else lids.add(x.id);
  const B = BOOKS[x.book];
  if (!B) return err(w, 'unknown book "' + x.book + '"');
  if (!x.grp || !B.groups[x.grp]) err(w, 'grp "' + x.grp + '" is not a group of ' + x.book + ' in data/books.js');
  if (!x.sec) err(w, 'missing sec');
  if (!x.topic) err(w, 'missing topic');
  if (!Array.isArray(x.levels) || !x.levels.length || x.levels.some(l => !LEVELS.find(L => L.id === l))) err(w, 'levels must list l1 and/or l2');
});

const bids = new Set();
BADGES.forEach((b, i) => {
  const w = 'badge #' + (i + 1) + (b && b.id ? ' (' + b.id + ')' : '');
  if (!b.id) err(w, 'missing id'); else if (bids.has(b.id)) err(w, 'duplicate id'); else bids.add(b.id);
  if (!b.name || !b.desc || !b.icon) err(w, 'needs icon, name and desc');
  if (typeof b.test !== 'function') err(w, 'test must be a function');
  if (b.group && !BADGE_GROUPS.includes(b.group)) err(w, 'group "' + b.group + '" is not in BADGE_GROUPS');
  if (b.xp !== undefined && ![10, 25, 50].includes(b.xp)) err(w, 'xp must be 10, 25 or 50 (bronze, silver, gold)');
  if (b.hidden !== undefined && typeof b.hidden !== 'boolean') err(w, 'hidden must be true or false');
});

// Tech Level settings: titles start at Lv 1 and climb; caps stay within the 80-level curve.
const TL = CONFIG.titles || [];
if (!TL.length || TL[0].lv !== 1) err('config', 'titles must start at lv 1');
TL.forEach((t, i) => { if (!t.name) err('config', 'title #' + (i + 1) + ' needs a name'); if (i && !(t.lv > TL[i - 1].lv)) err('config', 'titles must be in rising lv order'); });
for (const [lv, cap] of Object.entries(CONFIG.levelCap || {})) if (!(cap >= 1 && cap <= 80)) err('config', 'levelCap.' + lv + ' must be 1-80');
const LC = CONFIG.levelCurve || {};
if (!(LC.start > 0 && LC.a >= 0 && LC.p >= 0)) err('config', 'levelCurve needs start > 0, a >= 0, p >= 0');

for (const w of warns) console.log('warn  ' + w);
for (const e of errors) console.log('ERROR ' + e);
// Cite it coverage, and overrides that would break the step.
let citeCh = 0, citeEx = 0;
for (const q of Object.values(QUESTIONS).flat()) {
  if (q.cite && typeof q.cite === 'object' && !(Array.isArray(q.cite.chapters) && q.cite.chapters.length)) err(q.id, 'cite override needs a chapters list');
  const c = citeFor(q); if (c) { citeCh++; if (c.exact.length) citeEx++; }
}
console.log('Cite it: ' + citeCh + ' questions have a chapter step, ' + citeEx + ' also an exact-section step.');
console.log(qn + ' questions in ' + Object.keys(QUESTIONS).length + ' tasks, ' + LOOKUPS.length + ' lookups, ' + BADGES.length + ' badges. ' + errors.length + ' error(s), ' + warns.length + ' warning(s).');
process.exit(errors.length ? 1 : 0);
