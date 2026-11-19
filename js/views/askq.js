// One question card with the two-try rule: full points on the first try, half on the second,
// then the answer and the explanation. Used by task quizzes and Review.
import { el, esc, rich } from '../util.js';
import { CONFIG } from '../../data/config.js';

const KEYS = 'ABCDEFGH';

export function checkNum(q, v) {
  const x = parseFloat(String(v).replace(/,/g, ''));
  if (!isFinite(x)) return null;
  const tol = q.tol != null ? q.tol : Math.max(Math.abs(q.a) * 0.01, 0.01);
  return Math.abs(x - q.a) <= tol + 1e-9;
}
export function answerText(q) {
  if (q.type === 'num') return q.a + (q.unit ? ' ' + q.unit : '');
  if (q.type === 'multi') return q.a.map(i => KEYS[i] + '. ' + q.opts[i]).join('; ');
  return KEYS[q.a] + '. ' + q.opts[q.a];
}

/**
 * Render a question into `host`. Calls onDone({ right, tries, pts }) once it is resolved.
 * opts.tag: small label above the question (task name, "Review", ...).
 */
export function askQuestion(host, q, opts = {}) {
  host.innerHTML = '';
  const card = el('div', { class: 'qcard' });
  const tag = opts.tag ? '<span class="tag">' + esc(opts.tag) + '</span>' : '';
  const multiNote = q.type === 'multi' ? ' <b>(Select ' + q.a.length + '.)</b>' : '';
  card.append(el('div', { class: 'qtext' }, tag + rich(q.q) + multiNote));
  const body = el('div');
  const fb = el('div', { class: 'fb', hidden: true, 'aria-live': 'polite' });
  card.append(body, fb);
  host.append(card);

  let tries = 0, done = false;
  const finish = (right) => {
    done = true;
    const pts = right ? (tries === 1 ? CONFIG.xp.firstTry : CONFIG.xp.secondTry) : 0;
    showExplain(right, pts);
    opts.onDone && opts.onDone({ right, tries, pts });
  };
  const showExplain = (right, pts) => {
    fb.hidden = false;
    fb.className = 'fb ' + (right ? (tries === 1 ? 'ok' : 'half') : 'bad');
    const verdict = right ? (tries === 1 ? 'Correct' : 'Correct on the second try') : 'Not this time';
    fb.innerHTML = '<span class="v">' + verdict + (opts.showPts !== false && pts ? ' · +' + pts : '') + '</span>' +
      (right ? '' : '<p><b>Answer:</b> ' + rich(answerText(q)) + '</p>') +
      '<div>' + rich(q.ex || '') + '</div>' +
      (q.ref ? '<span class="ref">📖 ' + esc(q.ref) + '</span>' : '');
  };
  const tryAgain = (msg) => {
    fb.hidden = false; fb.className = 'fb half';
    fb.innerHTML = '<span class="v">Not quite</span>' + esc(msg || 'Try once more for half points.');
  };

  if (q.type === 'mc') {
    const box = el('div', { class: 'opts', role: 'group', 'aria-label': 'Answer choices' });
    q.opts.forEach((o, i) => {
      const b = el('button', { type: 'button', class: 'opt' }, '<span class="k">' + KEYS[i] + '</span><span>' + rich(o) + '</span>');
      b.addEventListener('click', () => {
        if (done || b.disabled) return;
        tries++;
        if (i === q.a) {
          b.classList.add('right');
          box.querySelectorAll('.opt').forEach(x => (x.disabled = true));
          finish(true);
        } else {
          b.classList.add('wrong'); b.disabled = true;
          if (tries >= 2) {
            box.children[q.a].classList.add('right');
            box.querySelectorAll('.opt').forEach(x => (x.disabled = true));
            finish(false);
          } else tryAgain();
        }
      });
      box.append(b);
    });
    body.append(box);
  } else if (q.type === 'multi') {
    const box = el('div', { class: 'opts', role: 'group', 'aria-label': 'Answer choices, select ' + q.a.length });
    const picked = new Set();
    q.opts.forEach((o, i) => {
      const b = el('button', { type: 'button', class: 'opt', 'aria-pressed': 'false' }, '<span class="k">' + KEYS[i] + '</span><span>' + rich(o) + '</span>');
      b.addEventListener('click', () => {
        if (done) return;
        if (picked.has(i)) picked.delete(i); else picked.add(i);
        b.setAttribute('aria-pressed', picked.has(i) ? 'true' : 'false');
      });
      box.append(b);
    });
    const chk = el('button', { type: 'button', class: 'btn primary', style: 'margin-top:10px' }, 'Check');
    chk.addEventListener('click', () => {
      if (done) return;
      if (picked.size !== q.a.length) { fb.hidden = false; fb.className = 'fb'; fb.textContent = 'Pick exactly ' + q.a.length + '.'; return; }
      tries++;
      const right = q.a.every(i => picked.has(i));
      if (right || tries >= 2) {
        [...box.children].forEach((b, i) => { b.disabled = true; if (q.a.includes(i)) b.classList.add('right'); else if (picked.has(i)) b.classList.add('wrong'); });
        chk.disabled = true;
        finish(right);
      } else tryAgain('At least one pick is wrong. Try once more for half points.');
    });
    body.append(box, chk);
  } else {
    const row = el('div', { class: 'numin' });
    const inp = el('input', { type: 'text', inputmode: 'decimal', autocomplete: 'off', 'aria-label': 'Your answer' + (q.unit ? ' in ' + q.unit : '') });
    const chk = el('button', { type: 'button', class: 'btn primary' }, 'Check');
    row.append(inp);
    if (q.unit) row.append(el('span', { class: 'unit' }, esc(q.unit)));
    row.append(chk);
    const go = () => {
      if (done) return;
      const ok = checkNum(q, inp.value);
      if (ok === null) { fb.hidden = false; fb.className = 'fb'; fb.textContent = 'Enter a number.'; return; }
      tries++;
      if (ok) { inp.disabled = true; chk.disabled = true; finish(true); }
      else if (tries >= 2) { inp.disabled = true; chk.disabled = true; finish(false); }
      else tryAgain('Check your math and try once more for half points.');
    };
    chk.addEventListener('click', go);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    body.append(row);
    setTimeout(() => inp.focus(), 30);
  }
  return card;
}
