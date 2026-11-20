// Boot, hash router, app bar.
import { $, $$, modal, esc, toast } from './util.js';
import { state, save, onChange, dueReviews } from './store.js';
import { totalXP, levelFor, titleFor, nextTitle, nextNicetLevel, isUnlocked, earnedBadges } from './xp.js';
import { badgeXP } from '../data/badges.js';
import * as home from './views/home.js';
import * as level from './views/level.js';
import * as quiz from './views/quiz.js';
import * as exam from './views/exam.js';
import * as lookup from './views/lookup.js';
import * as review from './views/review.js';
import * as lab from './views/lab.js';
import * as progress from './views/progress.js';
import * as install from './views/install.js';
import './pwa.js'; // starts listening for the browser's install prompt right away

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
  [/^\/progress$/, () => progress.render(main), 'progress'],
  [/^\/install$/, () => install.render(main), 'install']
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

let lastLevel = null;
function paintBar() {
  const xp = totalXP();
  const r = levelFor(xp);
  $('#rcRank').innerHTML = '<b>Lv ' + r.lv + '</b><span class="rc-title"> · ' + esc(r.title) + '</span>';
  $('#rcXp').textContent = xp.toLocaleString('en-US') + ' XP';
  $('#rcBar').style.width = Math.round(r.frac * 100) + '%';
  $('#l2Lock').hidden = isUnlocked('l2');
  const due = dueReviews().length;
  const b = $('#reviewBadge');
  b.hidden = !due;
  b.textContent = due;
  const S = state();
  // Level-ups: a toast for an ordinary level, a pop-up for a new title or reaching the cap.
  if (lastLevel !== null && r.lv > lastLevel && r.lv > (S.seenLevel || 1)) {
    const before = Math.max(lastLevel, S.seenLevel || 1);
    S.seenLevel = r.lv;
    save();
    if (r.title !== titleFor(before) || r.atCap) {
      const nt = nextTitle(r.lv); const nn = nextNicetLevel();
      modal('<div class="eyebrow">Level up' + (r.title !== titleFor(before) ? ' · new title' : '') + '</div><div class="rankbadge">' + r.lv + '</div><div class="rankname">' + esc(r.title) +
        '</div><p class="muted" style="margin-top:8px">Tech Level ' + r.lv + ' · ' + xp.toLocaleString('en-US') + ' XP' +
        (nt ? ' · ' + esc(nt.name) + ' at Lv ' + nt.lv : '') + '</p>' +
        (r.atCap ? '<p class="small muted">Lv ' + r.cap + ' is the top level for now.' + (nn ? ' The cap rises when ' + esc(nn.name) + ' opens, and the XP you earn from here is banked for it.' : '') + '</p>' : ''));
    } else {
      toast('Level up · Lv ' + r.lv);
    }
  }
  lastLevel = r.lv;
  checkBadges();
}

// Celebrate badges earned since last time and record them for good. A recorded badge stays
// earned even if new questions later pull a task back under mastery. Profiles from before
// badges existed are caught up silently on first load, so nobody gets a pile of pop-ups for old work.
function checkBadges() {
  const S = state();
  let changed = false;
  if (!S.badges && Array.isArray(S.seenBadges)) {
    // The first badge release kept a "seen" list. It becomes the permanent record (no dates known).
    S.badges = {};
    for (const id of S.seenBadges) S.badges[id] = 0;
    delete S.seenBadges;
    changed = true;
  }
  const catchUp = !S.badges;
  if (catchUp) { S.badges = {}; changed = true; }
  const fresh = earnedBadges().filter(b => !(b.id in S.badges));
  const now = Date.now();
  for (const b of fresh) S.badges[b.id] = now;
  if (fresh.length) changed = true;
  if (changed) save();
  if (catchUp || !fresh.length) return;
  modal('<div class="eyebrow">Badge' + (fresh.length > 1 ? 's' : '') + ' earned</div>' +
    fresh.map(b => '<div class="badge-pop"><span class="badge-ico" aria-hidden="true">' + b.icon + '</span><div><b>' + esc(b.name) + '</b><br><span class="small muted">' + esc(b.desc) + '</span></div></div>').join('') +
    '<p class="small muted" style="margin-top:10px">+' + fresh.reduce((t, b) => t + badgeXP(b), 0) + ' XP · <a href="#/progress">see all badges</a></p>');
}

onChange(paintBar);
window.addEventListener('hashchange', route);
// The Circuit Lab writes its own storage key; refresh XP when it changes in another tab or on return.
window.addEventListener('storage', e => { if (e.key && e.key.startsWith('fas-circuit-lab')) paintBar(); });
window.addEventListener('focus', paintBar);
document.addEventListener('visibilitychange', () => { if (!document.hidden) paintBar(); });

// Nothing is celebrated for progress made before this load (or before Tech Levels existed).
lastLevel = levelFor(totalXP()).lv;
{
  const S = state(); let fix = false;
  if ('seenRank' in S) { delete S.seenRank; fix = true; } // replaced by seenLevel
  if (!S.seenLevel || S.seenLevel < lastLevel) { S.seenLevel = lastLevel; fix = true; }
  if (fix) save();
}
paintBar();
route();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
