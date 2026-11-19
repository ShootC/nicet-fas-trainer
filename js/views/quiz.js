// Task practice: a session of up to 10 questions from one NICET task.
// Unseen questions come first, then ones not yet known, then a refresher of known ones.
import { el, esc, rich, shuffle, pct } from '../util.js';
import { QUESTIONS } from '../../data/questions/index.js';
import { taskById } from '../../data/levels.js';
import { CONFIG } from '../../data/config.js';
import { state } from '../store.js';
import { known, taskStats, isUnlocked } from '../xp.js';
import { askQuestion, answerText } from './askq.js';
import { recordQuestion } from '../record.js';

const SESSION = 10;

function pickSession(qs) {
  const S = state();
  const unseen = shuffle(qs.filter(q => !S.q[q.id]));
  const shaky = shuffle(qs.filter(q => S.q[q.id] && !known(q.id)));
  const solid = shuffle(qs.filter(q => S.q[q.id] && known(q.id)));
  return [...unseen, ...shaky, ...solid].slice(0, SESSION);
}

export function renderTask(main, taskId) {
  const info = taskById(taskId);
  if (!info) { main.innerHTML = '<p>Unknown task.</p>'; return; }
  const { level, domain, task } = info;
  const crumbs = '<div class="crumbs"><a href="#/level/' + level.id + '">' + esc(level.name) + '</a> › ' + esc(domain.id + ' ' + domain.name) + '</div>';
  if (!isUnlocked(level.id)) {
    main.innerHTML = crumbs + '<div class="head"><h1>' + esc(task.id + ' ' + task.name) + '</h1></div><div class="callout warn">' + esc(level.name) + ' is locked. Pass the Level I practice exam to open it.</div>';
    return;
  }
  const qs = QUESTIONS[taskId] || [];
  const head = el('div', { class: 'head' }, crumbs + '<span class="eyebrow">Task ' + esc(task.id) + '</span><h1>' + esc(task.name) + '</h1><p class="lede">' + esc(task.blurb || '') + '</p>');
  main.append(head);
  if (!qs.length) {
    main.append(el('div', { class: 'callout' }, 'Questions for this task are being written. Check back soon.'));
    return;
  }
  const wrap = el('div', { class: 'qwrap' });
  main.append(wrap);
  start();

  function start() {
    const set = pickSession(qs);
    const res = [];
    let i = 0;
    wrap.innerHTML = '';
    const top = el('div', { class: 'qtop' });
    const dots = el('div', { class: 'dots', 'aria-hidden': 'true' }, set.map(() => '<i></i>').join(''));
    const count = el('span', { class: 'mono small muted' });
    top.append(count, dots);
    const host = el('div');
    const actions = el('div', { class: 'qactions' });
    const quit = el('a', { class: 'btn ghost sm', href: '#/level/' + level.id }, 'Leave');
    const next = el('button', { type: 'button', class: 'btn primary', hidden: true }, 'Next');
    actions.append(quit, next);
    wrap.append(top, host, actions);

    const show = () => {
      count.textContent = 'Question ' + (i + 1) + ' of ' + set.length;
      [...dots.children].forEach((d, k) => d.classList.toggle('cur', k === i));
      next.hidden = true;
      askQuestion(host, set[i], {
        tag: task.id + ' · ' + task.name,
        onDone: r => {
          res[i] = r;
          recordQuestion(set[i].id, r);
          dots.children[i].className = r.right ? (r.tries === 1 ? 'r' : 'h') : 'w';
          next.hidden = false;
          next.textContent = i + 1 < set.length ? 'Next' : 'See results';
          next.focus({ preventScroll: true });
        }
      });
    };
    next.addEventListener('click', () => { i++; if (i < set.length) { show(); window.scrollTo({ top: wrap.offsetTop - 120 }); } else summary(set, res); });
    show();
  }

  function summary(set, answered) {
    const res = set.map((_, k) => answered[k] || { right: false, tries: 0, pts: 0 });
    const first = res.filter(r => r.right && r.tries === 1).length;
    const second = res.filter(r => r.right && r.tries === 2).length;
    const st = taskStats(taskId);
    const missed = set.map((q, k) => ({ q, r: res[k] })).filter(x => !(x.r.right && x.r.tries === 1));
    wrap.innerHTML = '';
    const card = el('div', { class: 'card accent' });
    card.innerHTML =
      '<span class="eyebrow">Session complete</span><h2 style="margin:4px 0 10px">' + first + ' of ' + set.length + ' on the first try</h2>' +
      '<div class="stats"><div class="stat"><b>' + first + '</b><span>first try</span></div><div class="stat"><b>' + second + '</b><span>second try</span></div><div class="stat"><b>' + (set.length - first - second) + '</b><span>missed</span></div>' +
      '<div class="stat"><b>' + pct(st.known, st.total) + '%</b><span>task known (' + st.known + '/' + st.total + ')</span></div></div>' +
      '<div class="meter big" style="margin-top:12px" aria-label="Task mastery"><i style="width:' + pct(st.known, st.total) + '%"></i></div>' +
      '<p class="small muted" style="margin-top:6px">' + (st.mastered ? 'Task mastered. ' : 'Mastery at ' + Math.round(CONFIG.taskMastery * 100) + '% known. ') + 'Questions you missed went to Review, where they come back over the next week until they stick.</p>';
    const row = el('div', { class: 'row', style: 'margin-top:12px' });
    const again = el('button', { type: 'button', class: 'btn primary' }, 'Practice again');
    again.addEventListener('click', start);
    row.append(again, el('a', { class: 'btn', href: '#/level/' + level.id }, 'Back to ' + esc(level.name)));
    if (missed.length) row.append(el('a', { class: 'btn', href: '#/review' }, 'Review'));
    card.append(row);
    wrap.append(card);
    if (missed.length) {
      const list = el('div', { class: 'section' }, '<h2>Go over these</h2>');
      for (const { q } of missed) {
        list.append(el('div', { class: 'card', style: 'margin-bottom:10px' },
          '<p>' + rich(q.q) + '</p><p><b>Answer:</b> ' + rich(answerText(q)) + '</p><div class="small">' + rich(q.ex || '') + '</div>' + (q.ref ? '<span class="ref">📖 ' + esc(q.ref) + '</span>' : '')));
      }
      wrap.append(list);
    }
  }
}
