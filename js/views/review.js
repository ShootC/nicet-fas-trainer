// Review: spaced repetition for anything missed. Box 1 comes back now, then 1, 3 and 7 days later.
// Four right answers in a row and the item graduates.
import { el, esc } from '../util.js';
import { state, dueReviews } from '../store.js';
import { questionById } from '../../data/questions/index.js';
import { LOOKUPS } from '../../data/lookups/index.js';
import { taskById } from '../../data/levels.js';
import { askQuestion } from './askq.js';
import { askLookup } from './asklk.js';
import { recordReview } from '../record.js';

const SESSION = 15;
const BOX_TEXT = { up: 'Moved up a box.', graduated: 'Graduated. This one is yours now.', reset: 'Back to box 1. It will come around again today.' };

function resolve(key) {
  const i = key.indexOf(':'); const kind = key.slice(0, i), id = key.slice(i + 1);
  if (kind === 'q') { const f = questionById(id); return f ? { kind, id, q: f.q, task: f.task } : null; }
  if (kind === 'lk') { const it = LOOKUPS.find(x => x.id === id); return it ? { kind, id, item: it } : null; }
  return null;
}

export function render(main) {
  const S = state();
  const due = dueReviews().map(k => [k, resolve(k)]).filter(([, r]) => r);
  const waiting = Object.values(S.review).length;
  main.append(el('div', { class: 'head' },
    '<span class="eyebrow">Spaced repetition</span><h1>Review</h1>' +
    '<p class="lede">Every question you miss lands here. Get it right and it comes back later (1, 3, then 7 days); miss it and it starts over. Four in a row and it graduates. Each right answer is +2 XP.</p>'));
  if (!due.length) {
    const next = Object.values(S.review).map(r => r.due).sort((a, b) => a - b)[0];
    main.append(el('div', { class: 'card' }, '<h3>Nothing due right now</h3><p class="muted small" style="margin-top:6px">' +
      (waiting ? waiting + ' item' + (waiting > 1 ? 's are' : ' is') + ' waiting. The next one is due ' + new Date(next).toLocaleString([], { weekday: 'short', hour: 'numeric', minute: '2-digit' }) + '.' : 'Miss a question in a task or a lookup drill and it will show up here.') +
      '</p><a class="btn primary sm" href="#/home">Back home</a></div>'));
    return;
  }
  const set = due.slice(0, SESSION);
  let i = 0, right = 0;
  const wrap = el('div', { class: 'qwrap' });
  const top = el('div', { class: 'qtop' }); const count = el('span', { class: 'mono small muted' });
  top.append(count, el('span', { class: 'pill' }, due.length + ' due'));
  const host = el('div'); const note = el('p', { class: 'small muted', style: 'margin-top:8px' });
  const act = el('div', { class: 'qactions' });
  const next = el('button', { type: 'button', class: 'btn primary', hidden: true }, 'Next');
  act.append(el('a', { class: 'btn ghost sm', href: '#/home' }, 'Stop for now'), next);
  wrap.append(top, host, note, act); main.append(wrap);

  const show = () => {
    const [key, r] = set[i];
    count.textContent = 'Item ' + (i + 1) + ' of ' + set.length; next.hidden = true; note.textContent = '';
    const box = (state().review[key] || {}).box || 1;
    const done = res => {
      const out = recordReview(key, res); if (res.right && res.tries === 1) right++;
      note.textContent = BOX_TEXT[out] || '';
      next.hidden = false; next.textContent = i + 1 < set.length ? 'Next' : 'Finish'; next.focus({ preventScroll: true });
    };
    if (r.kind === 'q') {
      const t = taskById(r.task);
      askQuestion(host, r.q, { tag: 'Review · box ' + box + (t ? ' · ' + t.task.id + ' ' + t.task.name : ''), showPts: false, onDone: done });
    } else askLookup(host, r.item, 'exact', { tag: 'Review · box ' + box, onDone: done });
  };
  next.addEventListener('click', () => {
    i++;
    if (i < set.length) { show(); return; }
    main.innerHTML = '';
    const left = dueReviews().length;
    main.append(el('div', { class: 'card accent', style: 'max-width:640px' },
      '<span class="eyebrow">Review done</span><h2 style="margin:4px 0 8px">' + right + ' of ' + set.length + ' right</h2>' +
      '<p class="muted">' + (left ? left + ' still due.' : 'Nothing else due right now.') + '</p>' +
      '<div class="row">' + (left ? '<a class="btn primary" href="#/review" onclick="setTimeout(()=>dispatchEvent(new HashChangeEvent(\'hashchange\')),0)">Keep going</a>' : '') + '<a class="btn" href="#/home">Home</a></div>'));
  });
  show();
}
