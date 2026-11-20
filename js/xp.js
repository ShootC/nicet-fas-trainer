// XP, ranks, mastery and level gating. Everything is computed from saved progress,
// so changing point values or adding questions never corrupts a saved profile.
import { CONFIG } from '../data/config.js';
import { LEVELS } from '../data/levels.js';
import { LAB_STATIONS } from '../data/lab.js';
import { QUESTIONS } from '../data/questions/index.js';
import { LOOKUPS } from '../data/lookups/index.js';
import { BADGES, BADGE_XP } from '../data/badges.js';
import { state, labState } from './store.js';
import { today } from './util.js';

export function labPoints() {
  const L = labState(); let p = 0;
  for (const k in L.q || {}) p += (L.q[k] && L.q[k].pts) || 0;
  for (const s of LAB_STATIONS) if (s.puzzle) p += (L.puzzle && L.puzzle[s.puzzle]) || 0;
  return p;
}
export function labStation(st) {
  const L = labState(); let p = 0, done = 0;
  for (let i = 0; i < 10; i++) { const r = L.q && L.q[st.id + '-' + i]; if (r) { p += r.pts || 0; done++; } }
  const puz = st.puzzle ? ((L.puzzle && L.puzzle[st.puzzle]) || 0) : 0;
  return { pts: p + puz, max: 100 + (st.puzzle ? 10 : 0), answered: done, puzzleDone: !!puz };
}

export function xpBreakdown() {
  const S = state(); const b = { questions: 0, lookups: 0, review: S.bonus || 0, exams: 0, lab: labPoints() };
  for (const k in S.q) b.questions += S.q[k].pts || 0;
  for (const k in S.lk) b.lookups += S.lk[k].pts || 0;
  for (const k in S.lkc) b.lookups += S.lkc[k].pts || 0;
  b.cites = 0;
  for (const k in S.cite || {}) b.cites += (S.cite[k].ch || 0) + (S.cite[k].ex || 0);
  for (const lv in S.exams) if ((S.exams[lv] || []).some(e => e.pass)) b.exams += CONFIG.xp.examPass[lv] || 0;
  b.badges = earnedBadges().length * BADGE_XP;
  b.total = b.questions + b.cites + b.lookups + b.review + b.exams + b.lab + b.badges;
  return b;
}
export const totalXP = () => xpBreakdown().total;

/* ---- Tech Level ---- */
export const MAX_LEVEL = 80;
let TOTALS = null;
// Total XP needed to reach each Tech Level: levelTotals()[lv], with Lv 1 at 0 XP.
export function levelTotals() {
  if (TOTALS) return TOTALS;
  const { start, a, p } = CONFIG.levelCurve;
  const step = n => Math.round((start + a * Math.pow(n - 1, p)) / 5) * 5;
  TOTALS = [0, 0];
  for (let lv = 2; lv <= MAX_LEVEL; lv++) TOTALS[lv] = TOTALS[lv - 1] + step(lv - 1);
  return TOTALS;
}
// Highest Tech Level reachable right now: the largest cap among the NICET levels that are released.
export function levelCap() {
  let cap = 1;
  for (const L of LEVELS) if (!L.comingSoon) cap = Math.max(cap, CONFIG.levelCap[L.id] || 0);
  return Math.min(cap, MAX_LEVEL);
}
export function titleFor(lv) {
  let t = CONFIG.titles[0];
  for (const x of CONFIG.titles) if (lv >= x.lv) t = x;
  return t.name;
}
// The next title above a level, if one exists below the cap: { lv, name } or null.
export function nextTitle(lv) {
  return CONFIG.titles.find(x => x.lv > lv && x.lv <= levelCap()) || null;
}
// The first NICET level still to come, for "the cap rises when Level III opens".
export const nextNicetLevel = () => LEVELS.find(L => L.comingSoon) || null;

// Tech Level for an XP total. next is the XP total for the next level (null at the cap);
// frac is progress through the current level; banked is XP earned past the cap.
export function levelFor(xp) {
  const T = levelTotals(); const cap = levelCap();
  let lv = 1;
  while (lv < cap && xp >= T[lv + 1]) lv++;
  const atCap = lv >= cap; const next = atCap ? null : T[lv + 1];
  return {
    lv, title: titleFor(lv), floor: T[lv], next, cap, atCap,
    frac: atCap ? 1 : (xp - T[lv]) / (next - T[lv]),
    banked: atCap ? xp - T[cap] : 0
  };
}

/* ---- Mastery ---- */
// A question is "known" when it was right on the first try last time it was asked,
// or it graduated / is climbing in Review.
export function known(qid) {
  const S = state(); const r = S.q[qid]; if (!r) return false;
  const rv = S.review['q:' + qid];
  if (rv) return rv.box >= 3;
  return !!r.last || r.pts === CONFIG.xp.firstTry;
}
export function taskStats(taskId) {
  const qs = QUESTIONS[taskId] || []; const S = state();
  let seen = 0, kn = 0, pts = 0;
  for (const q of qs) { const r = S.q[q.id]; if (r) { seen++; pts += r.pts || 0; } if (known(q.id)) kn++; }
  const total = qs.length;
  return { total, seen, known: kn, pts, max: total * CONFIG.xp.firstTry, frac: total ? kn / total : 0, mastered: total > 0 && kn / total >= CONFIG.taskMastery };
}
export function levelStats(levelId) {
  const L = LEVELS.find(l => l.id === levelId); let total = 0, kn = 0, tasks = 0, mastered = 0;
  for (const D of L.domains || []) for (const T of D.tasks) { const s = taskStats(T.id); total += s.total; kn += s.known; tasks++; if (s.mastered) mastered++; }
  const ex = state().exams[levelId] || [];
  return { total, known: kn, frac: total ? kn / total : 0, tasks, mastered, passed: ex.some(e => e.pass), best: ex.reduce((m, e) => Math.max(m, e.pct), 0), attempts: ex.length };
}
export function isUnlocked(levelId) {
  const L = LEVELS.find(l => l.id === levelId);
  if (!L || L.comingSoon) return false;
  if (!L.unlockedBy) return true;
  return levelStats(L.unlockedBy).passed;
}

/* ---- Lookups ---- */
export function lookupStats(book) {
  const S = state(); const items = LOOKUPS.filter(x => !book || x.book === book);
  let exact = 0, chap = 0;
  for (const x of items) { if (S.lk[x.id] && S.lk[x.id].last) exact++; if (S.lkc[x.id] && S.lkc[x.id].last) chap++; }
  return { total: items.length, exact, chap };
}

/* ---- Streak ---- */
export function streak() {
  const days = new Set(state().days); let n = 0; const d = new Date();
  if (!days.has(today(d))) d.setDate(d.getDate() - 1); // a streak survives until the end of today
  while (days.has(today(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---- Badges ---- */
export function badgeStats() {
  const S = state(); const st = S.stats || {};
  let tasksMastered = 0, l1TasksMastered = 0;
  for (const L of LEVELS) for (const D of L.domains || []) for (const T of D.tasks) {
    if (taskStats(T.id).mastered) { tasksMastered++; if (L.id === 'l1') l1TasksMastered++; }
  }
  const times = Object.values(S.lk).map(r => r.ms).filter(ms => typeof ms === 'number' && ms > 0);
  return {
    answered: Object.keys(S.q).length,
    perfect: st.perfect || 0,
    tasksMastered, l1TasksMastered,
    l1Pass: levelStats('l1').passed, l2Pass: levelStats('l2').passed,
    exact: Object.values(S.lk).filter(r => r.last).length,
    citesChapter: Object.values(S.cite || {}).filter(r => r.ch > 0).length,
    citesExact: Object.values(S.cite || {}).filter(r => r.ex > 0).length,
    chapters: Object.values(S.lkc).filter(r => r.last).length,
    fastestMs: times.length ? Math.min(...times) : null,
    graduated: st.graduated || 0,
    streak: streak(),
    lab: labPoints(),
    labStations: LAB_STATIONS.filter(x => labStation(x).pts > 0).length
  };
}
// Earned = recorded in the profile (kept for good, see checkBadges in app.js) or passing its test now.
export function earnedBadges() {
  const s = badgeStats(); const kept = state().badges || {};
  return BADGES.filter(b => {
    if (b.id in kept) return true;
    try { return !!b.test(s); } catch (e) { return false; }
  });
}
