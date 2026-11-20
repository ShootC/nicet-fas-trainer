// Progress lives only in this browser (localStorage). Export/import moves it between devices.
import { today } from './util.js';

export const KEY = 'nicet-trainer-v1';
export const LAB_KEY = 'fas-circuit-lab-v1'; // written by the Circuit Lab page (lab/index.html)

const blank = () => ({
  v: 1,
  created: new Date().toISOString(),
  q: {},        // question id -> { pts (first attempt), n (attempts), last (true = right on first try last time), at }
  lk: {},       // lookup id   -> { pts, n, last, ms (best time) } for exact-section drills
  lkc: {},      // lookup id   -> { pts, n, last } for which-chapter drills
  cite: {},     // question id -> { ch: pts, ex: pts } from the Cite it bonus (0 = tried and missed)
  review: {},   // item key    -> { box 1-4, due (ms) }
  bonus: 0,     // XP from review answers
  exams: {},    // level id    -> [{ at, n, right, pct, pass, secs }]
  days: [],     // study days, yyyy-mm-dd
  stats: { perfect: 0, graduated: 0 }, // counters badges need that are not derivable from answers
  seenLevel: 1, // highest Tech Level already celebrated
  // badges: { id: time earned in ms, 0 if unknown } is added by app.js on first load. It is left out
  // here on purpose, so a profile without it is caught up silently instead of showing old badges as new.
  settings: { theme: 'auto' }
});

let S = load();
const listeners = new Set();

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && raw.v === 1) return Object.assign(blank(), raw);
  } catch (e) { /* fall through to a fresh profile */ }
  return blank();
}
export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage full or blocked: keep working in memory */ }
  listeners.forEach(f => f(S));
}
export const state = () => S;
export const onChange = f => { listeners.add(f); return () => listeners.delete(f); };

export function markStudyDay() {
  const d = today();
  if (!S.days.includes(d)) { S.days.push(d); if (S.days.length > 400) S.days = S.days.slice(-400); }
}
export function labState() {
  try { return JSON.parse(localStorage.getItem(LAB_KEY) || 'null') || { q: {}, puzzle: {} }; } catch (e) { return { q: {}, puzzle: {} }; }
}

/* ---- Review queue (Leitner boxes). Box 1 is due now; a right answer moves the item up a box. ---- */
const GAP_DAYS = [0, 0, 1, 3, 7]; // index = box
export function queueReview(key) {
  S.review[key] = { box: 1, due: Date.now() };
}
export function reviewAnswer(key, right) {
  const r = S.review[key]; if (!r) return 'none';
  if (!right) { r.box = 1; r.due = Date.now(); return 'reset'; }
  if (r.box >= 4) { delete S.review[key]; return 'graduated'; }
  r.box += 1; r.due = Date.now() + GAP_DAYS[r.box] * 864e5; return 'up';
}
export function dueReviews(now = Date.now()) {
  return Object.entries(S.review).filter(([, r]) => r.due <= now).map(([k]) => k);
}

/* ---- Export / import / reset ---- */
export function exportBlob() {
  const data = { app: 'nicet-fas-trainer', exported: new Date().toISOString(), trainer: S, lab: labState() };
  return new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
}
export function importData(text) {
  const d = JSON.parse(text);
  if (!d || d.app !== 'nicet-fas-trainer' || !d.trainer || d.trainer.v !== 1) throw new Error('This is not a NICET FAS Trainer progress file.');
  S = Object.assign(blank(), d.trainer);
  if (d.lab) { try { localStorage.setItem(LAB_KEY, JSON.stringify(d.lab)); } catch (e) {} }
  save();
}
export function resetAll(includeLab) {
  const theme = S.settings.theme;
  S = blank(); S.settings.theme = theme; save();
  if (includeLab) { try { localStorage.removeItem(LAB_KEY); } catch (e) {} }
}
