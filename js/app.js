// Boot, hash router, app bar.
import { $, $$, modal, esc } from './util.js';
import { state, save, onChange, dueReviews } from './store.js';
import { totalXP, rankFor, isUnlocked } from './xp.js';
import * as home from './views/home.js';
import * as level from './views/level.js';
import * as quiz from './views/quiz.js';
import * as exam from './views/exam.js';
import * as lookup from './views/lookup.js';
import * as review from './views/review.js';
import * as lab from './views/lab.js';
import * as progress from './views/progress.js';

const main = $('#main');
let cleanup = null;

// Routes: #/home, #/level/l1, #/task/1.1.1, #/exam/l1, #/lookup, #/lookup/drill/nfpa72/exact,
//         #/lookup/book/nfpa72, #/review, #/lab, #/progress
const ROUTES = [
  [/^\/home$/, () => home.render(main), 'home'],
  [/^\/level\/(l\d)$/, m => level.render(main, m[1]), m => m[1]],
  [/^\/task\/([\d.]+)$/, m => quiz.renderTask(main, m[1]), m => 'l' + m[1][0]],
  [/^\/exam\/(l\d)$/, m => exam.render(main, m[1]), m => m[1]],
  [/^\/lookup$/, () => lookup.render(main), 'lookup'],
  [/^\/lookup\/drill\/(\w+)\/(\w+)$/, m => lookup.renderDrill(main, m[1], m[2]), 'lookup'],
  [/^\/lookup\/book\/(\w+)$/, m => lookup.renderBook(main, m[1]), 'lookup'],
  [/^\/review$/, () => review.render(main), 'review'],
  [/^\/lab$/, () => lab.render(main), 'lab'],
  [/^\/progress$/, () => progress.render(main), 'progress']
];

function route() {
  const h = (location.hash || '#/home').slice(1);
  if (typeof cleanup === 'function') { try { cleanup(); } catch (e) { /* ignore */ } }
  cleanup = null;
  for (const [re, fn, tab] of ROUTES) {
    const m = h.match(re);
    if (!m) continue;
    main.innerHTML = '';
    cleanup = fn(m) || null;
    const t = typeof tab === 'function' ? tab(m) : tab;
    $$('#tabs a').forEach(a => a.classList.toggle('on', a.dataset.tab === t));
    const on = $('#tabs a.on');
    if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
    return;
  }
  location.replace('#/home');
}

let lastRank = null;
function paintBar() {
  const xp = totalXP();
  const r = rankFor(xp);
  $('#rcRank').textContent = r.name;
  $('#rcXp').textContent = xp.toLocaleString('en-US') + ' XP';
  $('#rcBar').style.width = Math.round(r.frac * 100) + '%';
  $('#l2Lock').hidden = isUnlocked('l2');
  const due = dueReviews().length;
  const b = $('#reviewBadge');
  b.hidden = !due;
  b.textContent = due;
  const S = state();
  if (lastRank !== null && r.n > lastRank && r.n > (S.seenRank || 1)) {
    S.seenRank = r.n;
    save();
    modal('<div class="eyebrow">Rank up</div><div class="rankbadge">' + r.n + '</div><div class="rankname">' + esc(r.name) +
      '</div><p class="muted" style="margin-top:8px">' + xp.toLocaleString('en-US') + ' XP' +
      (r.next ? ' · next: ' + esc(r.next.name) + ' at ' + r.next.xp.toLocaleString('en-US') + ' XP' : ' · top rank') + '</p>');
  }
  lastRank = r.n;
}

onChange(paintBar);
window.addEventListener('hashchange', route);
// The Circuit Lab writes its own storage key; refresh XP when it changes in another tab or on return.
window.addEventListener('storage', e => { if (e.key && e.key.startsWith('fas-circuit-lab')) paintBar(); });
window.addEventListener('focus', paintBar);
document.addEventListener('visibilitychange', () => { if (!document.hidden) paintBar(); });

lastRank = rankFor(totalXP()).n;
if (!state().seenRank || state().seenRank < lastRank) { state().seenRank = lastRank; save(); }
paintBar();
route();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
