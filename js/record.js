// Writing results into progress, in one place, so XP rules stay consistent everywhere.
import { state, save, markStudyDay, queueReview, reviewAnswer } from './store.js';
import { CONFIG } from '../data/config.js';
import { toast } from './util.js';

// Task quiz answer. XP is earned on the first time a question is ever answered;
// later attempts update "known" status but never add XP (Review is where repeat XP comes from).
export function recordQuestion(qid, res) {
  const S = state();
  const firstTryRight = res.right && res.tries === 1;
  const prev = S.q[qid];
  if (!prev) {
    S.q[qid] = { pts: res.pts, n: 1, last: firstTryRight, at: Date.now() };
    if (res.pts) toast('+' + res.pts + ' XP');
  } else {
    prev.n = (prev.n || 0) + 1; prev.last = firstTryRight; prev.at = Date.now();
  }
  const key = 'q:' + qid;
  if (!firstTryRight) queueReview(key);
  else if (S.review[key]) reviewAnswer(key, true);
  markStudyDay(); save();
}

// Review answer: moves the item through the boxes and pays the small review bonus.
export function recordReview(key, res) {
  const S = state();
  const right = res.right && res.tries === 1;
  const outcome = reviewAnswer(key, right);
  if (outcome === 'graduated') { S.stats = S.stats || {}; S.stats.graduated = (S.stats.graduated || 0) + 1; }
  if (right) { S.bonus = (S.bonus || 0) + CONFIG.xp.review; toast('+' + CONFIG.xp.review + ' XP · review'); }
  // Keep the underlying record's "last" flag in step so task mastery reflects review work.
  const [kind, id] = [key.slice(0, key.indexOf(':')), key.slice(key.indexOf(':') + 1)];
  const bucket = kind === 'q' ? S.q : kind === 'lk' ? S.lk : null;
  if (bucket && bucket[id]) bucket[id].last = right;
  markStudyDay(); save();
  return outcome;
}

// Lookup drill answer. mode 'exact' or 'chapter'.
export function recordLookup(id, mode, res) {
  const S = state();
  const bucket = mode === 'chapter' ? S.lkc : S.lk;
  const firstTryRight = res.right && res.tries === 1;
  const prev = bucket[id];
  if (!prev) {
    bucket[id] = { pts: res.pts, n: 1, last: firstTryRight, ms: res.ms || null };
    if (res.pts) toast('+' + res.pts + ' XP');
  } else {
    prev.n = (prev.n || 0) + 1; prev.last = firstTryRight;
    if (res.right && res.ms && (!prev.ms || res.ms < prev.ms)) prev.ms = res.ms;
  }
  if (mode === 'exact') {
    const key = 'lk:' + id;
    if (!firstTryRight) queueReview(key);
    else if (S.review[key]) reviewAnswer(key, true);
  }
  markStudyDay(); save();
}

// A full task session with every question right on the first try.
export function recordPerfectSession() {
  const S = state();
  S.stats = S.stats || {};
  S.stats.perfect = (S.stats.perfect || 0) + 1;
  save();
}

export function recordExam(levelId, result) {
  const S = state();
  const before = (S.exams[levelId] || []).some(e => e.pass);
  (S.exams[levelId] = S.exams[levelId] || []).push(result);
  for (const qid of result.missed || []) queueReview('q:' + qid);
  markStudyDay(); save();
  return { firstPass: result.pass && !before };
}
