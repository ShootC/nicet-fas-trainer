// A NICET level: exam facts, references, domains with their tasks, and the practice exam.
import { el, esc, pct } from '../util.js';
import { levelById } from '../../data/levels.js';
import { CONFIG } from '../../data/config.js';
import { LAB_STATIONS } from '../../data/lab.js';
import { taskStats, levelStats, isUnlocked } from '../xp.js';
import { state } from '../store.js';

export function render(main, levelId) {
  const L = levelById(levelId);
  if (!L || L.comingSoon) { main.innerHTML = '<div class="head"><h1>' + esc(L ? L.name : 'Level') + '</h1><p class="lede">Coming later.</p></div>'; return; }
  const open = isUnlocked(levelId); const s = levelStats(levelId);

  main.append(el('div', { class: 'head' },
    '<span class="eyebrow">NICET Fire Alarm Systems</span><h1>' + esc(L.name) + ' · ' + esc(L.title) + '</h1>' +
    '<p class="lede">NICET exam: ' + L.exam.questions + ' questions in ' + L.exam.minutes + ' minutes, computer-based, open book. ' + esc(L.experience) + '</p>'));

  if (!open) {
    main.append(el('div', { class: 'callout warn' }, '<b>Locked.</b> Pass the <a href="#/exam/l1">Level I practice exam</a> at ' + Math.round(CONFIG.passMark * 100) + '% or better to open Level II. You can look over the outline below in the meantime.'));
  }

  main.append(el('div', { class: 'grid g3', style: 'margin-bottom:8px' },
    '<div class="card"><span class="eyebrow">Bring into the exam</span><ul class="small" style="margin:6px 0 0;padding-left:18px">' + L.books.bring.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul><p class="small muted" style="margin:6px 0 0">Bound or in a binder. Highlighting and permanent tabs are allowed; handwritten notes are not.</p></div>' +
    '<div class="card"><span class="eyebrow">On screen during the exam</span><ul class="small" style="margin:6px 0 0;padding-left:18px">' + L.books.screen.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul><p class="small muted" style="margin:6px 0 0">View-only, with a basic search. Knowing the book beats searching it.</p></div>' +
    '<div class="card"><span class="eyebrow">Study only (not allowed in)</span><ul class="small" style="margin:6px 0 0;padding-left:18px">' + L.books.study.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul></div>'));

  for (const D of L.domains) {
    const sec = el('div', { class: 'section' }, '<div class="spread"><h2>' + esc(D.id + ' ' + D.name) + '</h2><span class="pill">' + D.weight[0] + '–' + D.weight[1] + '% of the exam</span></div>');
    const g = el('div', { class: 'grid g2', style: 'margin-top:10px' });
    for (const T of D.tasks) {
      const t = taskStats(T.id);
      const labs = (T.lab || []).map(id => LAB_STATIONS.find(x => x.id === id)).filter(Boolean);
      const status = !t.total ? '<span class="pill">Questions coming</span>' : t.mastered ? '<span class="pill ok">Mastered</span>' : t.seen ? '<span class="pill">' + t.known + ' / ' + t.total + ' known</span>' : '<span class="pill">' + t.total + ' questions</span>';
      const c = el('div', { class: 'card' + (open ? '' : ' locked') },
        '<span class="eyebrow">Task ' + esc(T.id) + '</span><h3 style="margin:2px 0 6px">' + esc(T.name) + '</h3><p class="small muted">' + esc(T.blurb) + '</p>' +
        '<div class="meter" style="margin-bottom:8px"><i style="width:' + pct(t.known, t.total) + '%"></i></div>' +
        '<div class="spread">' + status + (open && t.total ? '<a class="btn primary sm" href="#/task/' + T.id + '">' + (t.seen ? 'Practice' : 'Start') + '</a>' : '') + '</div>' +
        (labs.length ? '<p class="small" style="margin:10px 0 0">Hands-on: ' + labs.map(x => '<a href="lab/index.html#' + x.id + '">Lab ' + x.n + ' · ' + esc(x.name) + '</a>').join(' · ') + '</p>' : ''));
      g.append(c);
    }
    sec.append(g); main.append(sec);
  }

  const ex = state().exams[levelId] || [];
  const last = ex[ex.length - 1];
  main.append(el('div', { class: 'section' },
    '<h2>Practice exam</h2><div class="card accent"><div class="spread"><div>' +
    '<h3>' + L.practice.questions + ' questions · ' + L.practice.minutes + ' minutes</h3>' +
    '<p class="small muted" style="margin:4px 0 0">Same pace as the real exam, drawn across the domains by NICET’s weights. No feedback until you submit. ' +
    'Pass mark ' + Math.round(CONFIG.passMark * 100) + '% (this app’s bar; NICET does not publish its cut score).' +
    (L.id === 'l1' ? ' Passing unlocks Level II.' : '') + '</p>' +
    (ex.length ? '<p class="small" style="margin:6px 0 0">Best ' + s.best + '% · ' + ex.length + ' attempt' + (ex.length > 1 ? 's' : '') + (last ? ' · last ' + last.pct + '%' : '') + (s.passed ? ' · <span class="pill ok">Passed</span>' : '') + '</p>' : '') +
    '</div>' + (open ? '<a class="btn primary" href="#/exam/' + levelId + '">Start exam</a>' : '<span class="pill warn">🔒 Locked</span>') + '</div></div>'));
}
