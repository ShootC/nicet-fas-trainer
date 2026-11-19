// Home: rank, what to do next, the four NICET levels, quick stats.
import { el, esc, pct, fmtInt } from '../util.js';
import { LEVELS } from '../../data/levels.js';
import { CONFIG } from '../../data/config.js';
import { QUESTIONS } from '../../data/questions/index.js';
import { totalXP, rankFor, levelStats, taskStats, isUnlocked, lookupStats, labPoints, streak, earnedBadges } from '../xp.js';
import { BADGES } from '../../data/badges.js';
import { dueReviews } from '../store.js';
import { isInstalled } from '../pwa.js';

function nextStep() {
  const due = dueReviews().length;
  if (due >= 5) return { href: '#/review', title: 'Clear your review pile', text: due + ' questions are due. Ten minutes here does more than an hour of new material.' };
  for (const L of LEVELS) {
    if (!isUnlocked(L.id)) continue;
    const ls = levelStats(L.id);
    if (ls.passed || !ls.total) continue;
    for (const D of L.domains) for (const T of D.tasks) {
      const s = taskStats(T.id);
      if ((QUESTIONS[T.id] || []).length && !s.mastered) return { href: '#/task/' + T.id, title: L.name + ' · ' + T.id + ' ' + T.name, text: s.seen ? 'You know ' + s.known + ' of ' + s.total + '. Keep going to mastery.' : 'Not started yet. ' + T.blurb };
    }
    return { href: '#/exam/' + L.id, title: 'Take the ' + L.name + ' practice exam', text: 'Every task is mastered. Score ' + Math.round(CONFIG.passMark * 100) + '% to ' + (L.id === 'l1' ? 'unlock Level II.' : 'finish this level.') };
  }
  return { href: '#/lookup', title: 'Sharpen your lookups', text: 'Find sections fast in NFPA 72 and the NEC.' };
}

export function render(main) {
  const xp = totalXP(); const r = rankFor(xp); const n = nextStep();
  const lk = lookupStats(); const due = dueReviews().length; const days = streak();

  main.append(el('div', { class: 'grid g2' },
    '<div class="card accent"><div class="rankcard"><div class="rankbadge" aria-hidden="true">' + r.n + '</div><div>' +
      '<span class="eyebrow">Rank ' + r.n + ' of ' + CONFIG.ranks.length + '</span><div class="rankname">' + esc(r.name) + '</div>' +
      '<div class="meter gold big" style="margin-top:8px"><i style="width:' + Math.round(r.frac * 100) + '%"></i></div>' +
      '<p class="small muted" style="margin:6px 0 0">' + fmtInt(xp) + ' XP' + (r.next ? ' · ' + fmtInt(r.next.xp - xp) + ' to ' + esc(r.next.name) : ' · top rank') + (days ? ' · ' + days + '-day streak' : '') + '</p>' +
    '</div></div></div>' +
    '<a class="card cool" href="' + n.href + '"><span class="eyebrow">Up next</span><h3 style="margin-top:4px">' + esc(n.title) + '</h3><p class="muted small">' + esc(n.text) + '</p><span class="btn primary sm">Go</span></a>'));

  const lv = el('div', { class: 'section' }, '<h2>NICET Fire Alarm Systems</h2>');
  const g = el('div', { class: 'grid g2' });
  for (const L of LEVELS) {
    if (L.comingSoon) {
      g.append(el('div', { class: 'card locked' }, '<span class="eyebrow">' + esc(L.name) + ' · ' + esc(L.title) + '</span><h3 style="margin-top:4px">Coming later</h3><p class="small muted">NICET exam: ' + L.exam.questions + ' questions in ' + L.exam.minutes + ' minutes.</p>'));
      continue;
    }
    const open = isUnlocked(L.id); const s = levelStats(L.id);
    const status = s.passed ? '<span class="pill ok">Practice exam passed</span>' : open ? '<span class="pill">' + s.mastered + ' of ' + s.tasks + ' tasks mastered</span>' : '<span class="pill warn">🔒 Pass Level I to unlock</span>';
    const c = el('a', { class: 'card' + (open ? ' accent' : ' locked'), href: '#/level/' + L.id },
      '<span class="eyebrow">' + esc(L.name) + ' · ' + esc(L.title) + '</span><h3 style="margin:4px 0 8px">' + pct(s.known, s.total) + '% known</h3>' +
      '<div class="meter"><i style="width:' + pct(s.known, s.total) + '%"></i></div>' +
      '<div class="meta" style="margin-top:8px">' + status + '<span>' + s.total + ' questions</span><span>NICET exam: ' + L.exam.questions + ' q · ' + L.exam.minutes + ' min</span></div>');
    g.append(c);
  }
  lv.append(g); main.append(lv);

  main.append(el('div', { class: 'section' },
    '<h2>Keep sharp</h2><div class="grid g3">' +
    '<a class="card copper" href="#/lookup"><span class="eyebrow">Code lookup</span><h3 style="margin-top:4px">' + lk.exact + ' of ' + lk.total + ' sections found</h3><p class="small muted">The exam is open book. Speed in the book is points.</p></a>' +
    '<a class="card copper" href="#/review"><span class="eyebrow">Review</span><h3 style="margin-top:4px">' + (due ? due + ' due now' : 'Nothing due') + '</h3><p class="small muted">Missed questions come back until they stick.</p></a>' +
    '<a class="card copper" href="#/lab"><span class="eyebrow">Circuit lab</span><h3 style="margin-top:4px">' + fmtInt(labPoints()) + ' of 1,160 points</h3><p class="small muted">Ohm’s law to strobe spacing, hands-on.</p></a>' +
    (() => { const got = earnedBadges(); const last = got[got.length - 1];
      return '<a class="card copper" href="#/progress"><span class="eyebrow">Badges</span><h3 style="margin-top:4px">' + got.length + ' of ' + BADGES.length + ' earned</h3><p class="small muted">' +
        (got.length ? '<span aria-hidden="true">' + got.map(b => b.icon).join(' ') + '</span>' : 'First one: answer a question. ' + esc(BADGES[0].name) + ' is waiting.') + '</p></a>'; })() +
    '</div>'));

  if (!isInstalled()) {
    main.append(el('div', { class: 'section callout small' }, '<b>Study on the job.</b> Install the trainer on your phone or computer. It works offline. <a href="#/install">Get the app →</a>'));
  }
  main.append(el('div', { class: 'section callout warn small' }, '<b>Code editions.</b> ' + esc(CONFIG.editionNote)));
}
