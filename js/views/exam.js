// Timed practice exam for a level. Works like the NICET screen: one question at a time,
// back and forward, flag for review, no feedback until you submit.
import { el, esc, rich, shuffle, pct, mmss, modal } from '../util.js';
import { levelById } from '../../data/levels.js';
import { QUESTIONS } from '../../data/questions/index.js';
import { CONFIG } from '../../data/config.js';
import { isUnlocked } from '../xp.js';
import { recordExam } from '../record.js';
import { checkNum, answerText } from './askq.js';

const KEYS = 'ABCDEFGH';

function draw(L, n) {
  const pools = L.domains.map(D => shuffle(D.tasks.flatMap(T => (QUESTIONS[T.id] || []).map(q => ({ q, D, T })))));
  const mids = L.domains.map(D => (D.weight[0] + D.weight[1]) / 2);
  const sum = mids.reduce((a, b) => a + b, 0);
  const avail = pools.reduce((a, p) => a + p.length, 0);
  n = Math.min(n, avail);
  const want = mids.map(m => Math.round((n * m) / sum));
  const take = want.map((w, i) => Math.min(w, pools[i].length));
  let left = n - take.reduce((a, b) => a + b, 0);
  // Hand any shortfall (or rounding remainder) to domains that still have questions.
  for (let guard = 0; left !== 0 && guard < 500; guard++) {
    const i = guard % pools.length;
    if (left > 0 && take[i] < pools[i].length) { take[i]++; left--; }
    else if (left < 0 && take[i] > 0) { take[i]--; left++; }
  }
  return shuffle(pools.flatMap((p, i) => p.slice(0, take[i])));
}

export function render(main, levelId) {
  const L = levelById(levelId);
  if (!L || L.comingSoon) { location.replace('#/home'); return; }
  const head = '<div class="crumbs"><a href="#/level/' + L.id + '">' + esc(L.name) + '</a></div>';
  if (!isUnlocked(levelId)) { main.innerHTML = head + '<div class="callout warn">' + esc(L.name) + ' is locked.</div>'; return; }
  const bankSize = L.domains.reduce((a, D) => a + D.tasks.reduce((b, T) => b + (QUESTIONS[T.id] || []).length, 0), 0);
  const n = Math.min(L.practice.questions, bankSize);
  const minutes = Math.max(5, Math.round((L.practice.minutes * n) / L.practice.questions));

  let timer = null;
  const unload = e => { e.preventDefault(); e.returnValue = ''; };
  const cleanup = () => { clearInterval(timer); window.removeEventListener('beforeunload', unload); };

  main.innerHTML = head;
  const intro = el('div', { class: 'card accent', style: 'max-width:760px' });
  if (bankSize < 10) {
    intro.innerHTML = '<h2>Practice exam</h2><p>There are not enough ' + esc(L.name) + ' questions in the bank yet for an exam.</p>';
    main.append(intro); return cleanup;
  }
  intro.innerHTML = '<span class="eyebrow">' + esc(L.name) + ' practice exam</span><h1 style="margin:4px 0 10px">' + n + ' questions · ' + minutes + ' minutes</h1>' +
    '<ul style="padding-left:18px;margin:0 0 12px">' +
    '<li>Questions are drawn across the domains by NICET’s published weights.</li>' +
    '<li>Move back and forward and flag questions, like the real exam. No feedback until you submit.</li>' +
    '<li>Have your books open. The real exam is open book, and so is this one.</li>' +
    '<li>Pass mark: ' + Math.round(CONFIG.passMark * 100) + '%. When time runs out, the exam submits itself.</li>' +
    '<li>Leaving this page abandons the attempt.</li></ul>';
  const go = el('button', { type: 'button', class: 'btn primary' }, 'Start the clock');
  intro.append(go);
  main.append(intro);
  go.addEventListener('click', () => run(draw(L, n), minutes));

  function run(items, mins) {
    window.addEventListener('beforeunload', unload);
    const ans = items.map(() => null), flag = items.map(() => false);
    const end = Date.now() + mins * 60e3, t0 = Date.now();
    let i = 0;
    main.innerHTML = '';
    const top = el('div', { class: 'qtop' });
    const count = el('span', { class: 'mono' });
    const clock = el('span', { class: 'timer', role: 'timer', 'aria-live': 'off' });
    const fl = el('button', { type: 'button', class: 'btn sm', 'aria-pressed': 'false' }, '⚑ Flag');
    top.append(count, fl, clock);
    const host = el('div');
    const nav = el('div', { class: 'qactions' });
    const prev = el('button', { type: 'button', class: 'btn' }, '← Back');
    const next = el('button', { type: 'button', class: 'btn' }, 'Next →');
    const sub = el('button', { type: 'button', class: 'btn primary' }, 'Submit');
    nav.append(prev, next, sub);
    const grid = el('div', { class: 'dots', style: 'margin-top:16px', 'aria-label': 'Question map' });
    const wrap = el('div', { class: 'qwrap' });
    wrap.append(top, host, nav, grid);
    main.append(wrap);

    const paintGrid = () => {
      grid.innerHTML = '';
      items.forEach((_, k) => {
        const b = el('button', { type: 'button', class: 'btn sm', style: 'min-width:38px;padding:3px 6px;font-family:var(--font-mono);' + (k === i ? 'border-color:var(--fg);' : '') + (flag[k] ? 'box-shadow:inset 0 -3px 0 var(--gold);' : '') + (ans[k] != null && ans[k] !== '' ? 'background:var(--fg);color:var(--bg);' : ''), 'aria-label': 'Question ' + (k + 1) + (ans[k] != null ? ', answered' : '') + (flag[k] ? ', flagged' : '') }, String(k + 1));
        b.addEventListener('click', () => { i = k; show(); });
        grid.append(b);
      });
    };
    const show = () => {
      const { q } = items[i];
      count.textContent = 'Question ' + (i + 1) + ' of ' + items.length;
      fl.setAttribute('aria-pressed', flag[i] ? 'true' : 'false');
      host.innerHTML = '';
      const card = el('div', { class: 'qcard' }, '<div class="qtext">' + rich(q.q) + (q.type === 'multi' ? ' <b>(Select ' + q.a.length + '.)</b>' : '') + '</div>');
      if (q.type === 'num') {
        const inp = el('input', { type: 'text', inputmode: 'decimal', autocomplete: 'off', 'aria-label': 'Your answer', value: ans[i] || '' });
        inp.addEventListener('input', () => { ans[i] = inp.value.trim() || null; paintGrid(); });
        const row = el('div', { class: 'numin' }); row.append(inp); if (q.unit) row.append(el('span', { class: 'unit' }, esc(q.unit)));
        card.append(row);
      } else {
        const box = el('div', { class: 'opts' });
        q.opts.forEach((o, k) => {
          const on = q.type === 'multi' ? (ans[i] || []).includes(k) : ans[i] === k;
          const b = el('button', { type: 'button', class: 'opt', 'aria-pressed': on ? 'true' : 'false' }, '<span class="k">' + KEYS[k] + '</span><span>' + rich(o) + '</span>');
          b.addEventListener('click', () => {
            if (q.type === 'multi') { const s = new Set(ans[i] || []); s.has(k) ? s.delete(k) : s.add(k); ans[i] = s.size ? [...s] : null; }
            else ans[i] = k;
            show();
          });
          box.append(b);
        });
        card.append(box);
      }
      host.append(card);
      prev.disabled = i === 0; next.disabled = i === items.length - 1;
      paintGrid();
    };
    const tick = () => {
      const left = (end - Date.now()) / 1000;
      clock.textContent = mmss(left);
      clock.classList.toggle('low', left < 300);
      if (left <= 0) finish(true);
    };
    fl.addEventListener('click', () => { flag[i] = !flag[i]; show(); });
    prev.addEventListener('click', () => { if (i > 0) { i--; show(); } });
    next.addEventListener('click', () => { if (i < items.length - 1) { i++; show(); } });
    sub.addEventListener('click', () => {
      const blank = ans.filter(a => a == null).length, flagged = flag.filter(Boolean).length;
      const msg = (blank ? blank + ' unanswered. ' : '') + (flagged ? flagged + ' flagged. ' : '');
      if (msg && !confirm(msg + 'Submit anyway?')) return;
      finish(false);
    });
    timer = setInterval(tick, 1000); tick(); show();

    let done = false;
    function finish(timeUp) {
      if (done) return; done = true; cleanup();
      const graded = items.map(({ q, D }, k) => {
        const a = ans[k]; let right = false;
        if (a != null) {
          if (q.type === 'num') right = !!checkNum(q, a);
          else if (q.type === 'multi') right = a.length === q.a.length && q.a.every(x => a.includes(x));
          else right = a === q.a;
        }
        return { q, D, a, right };
      });
      const right = graded.filter(g => g.right).length;
      const p = pct(right, graded.length);
      const byDomain = {};
      for (const g of graded) { const d = byDomain[g.D.id] = byDomain[g.D.id] || { name: g.D.name, n: 0, r: 0 }; d.n++; if (g.right) d.r++; }
      const result = { at: Date.now(), n: graded.length, right, pct: p, pass: p / 100 >= CONFIG.passMark, secs: Math.round((Date.now() - t0) / 1000), byDomain: Object.fromEntries(Object.entries(byDomain).map(([k, v]) => [k, Math.round((v.r / v.n) * 100)])), missed: graded.filter(g => !g.right).map(g => g.q.id) };
      const { firstPass } = recordExam(L.id, result);
      results(graded, result, byDomain, timeUp);
      if (firstPass) {
        modal('<div class="eyebrow">Practice exam passed</div><h2 style="margin:6px 0">' + p + '%</h2><p>+' + (CONFIG.xp.examPass[L.id] || 0) + ' XP.' + (L.id === 'l1' ? ' <b>Level II is now open.</b>' : '') + '</p>');
      }
    }
  }

  function results(graded, r, byDomain, timeUp) {
    main.innerHTML = head;
    main.append(el('div', { class: 'card ' + (r.pass ? 'accent' : 'cool'), style: 'max-width:820px' },
      '<span class="eyebrow">' + (timeUp ? 'Time ran out · ' : '') + esc(L.name) + ' practice exam</span>' +
      '<h1 style="margin:4px 0 6px">' + r.pct + '% · ' + (r.pass ? 'Pass' : 'Not yet') + '</h1>' +
      '<p class="muted">' + r.right + ' of ' + r.n + ' right in ' + mmss(r.secs) + '. Pass mark ' + Math.round(CONFIG.passMark * 100) + '%.' + (r.pass ? '' : ' Missed questions are in Review.') + '</p>' +
      '<table><thead><tr><th>Domain</th><th class="num">Questions</th><th class="num">Right</th></tr></thead><tbody>' +
      Object.entries(byDomain).map(([k, d]) => '<tr><td>' + esc(k + ' ' + d.name) + '</td><td class="num">' + d.n + '</td><td class="num">' + pct(d.r, d.n) + '%</td></tr>').join('') +
      '</tbody></table>' +
      '<div class="row" style="margin-top:12px"><a class="btn primary" href="#/level/' + L.id + '">Back to ' + esc(L.name) + '</a>' + (r.pass ? '' : '<a class="btn" href="#/review">Review misses</a>') + '</div>'));
    const list = el('div', { class: 'section', style: 'max-width:820px' }, '<h2>Every question</h2>');
    graded.forEach((g, k) => {
      const yours = g.a == null ? 'No answer' : g.q.type === 'num' ? g.a + (g.q.unit ? ' ' + g.q.unit : '') : g.q.type === 'multi' ? g.a.map(x => KEYS[x]).join(', ') : KEYS[g.a] + '. ' + g.q.opts[g.a];
      list.append(el('details', { class: 'card', style: 'margin-bottom:8px' },
        '<summary style="cursor:pointer"><span class="pill ' + (g.right ? 'ok' : 'bad') + '">' + (g.right ? 'Right' : 'Missed') + '</span> <span class="mono small">' + (k + 1) + '.</span> ' + rich(g.q.q) + '</summary>' +
        '<p style="margin-top:8px"><b>Yours:</b> ' + rich(yours) + '<br><b>Answer:</b> ' + rich(answerText(g.q)) + '</p><div class="small">' + rich(g.q.ex || '') + '</div>' + (g.q.ref ? '<span class="ref">📖 ' + esc(g.q.ref) + '</span>' : '')));
    });
    main.append(list);
  }
  return cleanup;
}
