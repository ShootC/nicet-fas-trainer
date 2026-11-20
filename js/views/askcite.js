// "Cite it": the bonus step after a task question. Name the chapter (NEC article, IBC section group),
// then type the exact section or table number. Paid once per question, and only for a right cite:
// full bonus when the answer was right on the first try, half when it was right on the second try
// or missed, and half again when the cite itself takes a second try.
import { el, esc } from '../util.js';
import { BOOKS } from '../../data/books.js';
import { CONFIG } from '../../data/config.js';
import { checkExact } from '../cite.js';

export function citePoints(base, answerFirstTry, citeTries) {
  let m = answerFirstTry ? 1 : CONFIG.xp.citeHalf;
  if (citeTries > 1) m *= CONFIG.xp.citeHalf;
  return Math.max(1, Math.round(base * m));
}

/**
 * host: where the panel goes. cite: from citeFor(q). ctx:
 *   answer: { right, tries } from the question; levelId: 'l1' / 'l2'
 *   needChapter, needExact: which steps are still unpaid for this question
 *   onPoints(kind 'ch' | 'ex', pts): record the result of a step (0 when missed)
 *   onDone(): the panel is finished or skipped; show the explanation
 */
export function askCite(host, cite, ctx) {
  const firstTry = ctx.answer.right && ctx.answer.tries === 1;
  const chFull = CONFIG.xp.citeChapter, exFull = CONFIG.xp.citeExact;
  const chMax = citePoints(chFull, firstTry, 1), exMax = citePoints(exFull, firstTry, 1);
  const doExact = ctx.needExact && cite.exact.length > 0;
  const box = el('div', { class: 'cite', role: 'group', 'aria-label': 'Bonus: cite the code' });
  const skip = el('button', { type: 'button', class: 'btn ghost sm' }, 'Skip');
  const why = firstTry ? '' : ' Half bonus, because the answer was ' + (ctx.answer.right ? 'right on the second try' : 'missed') + '.';
  const offer = [ctx.needChapter ? '+' + chMax + ' chapter' : '', doExact ? '+' + exMax + ' exact section' : ''].filter(Boolean).join(', ');
  const head = el('div', { class: 'cite-h' }, '<div><b>Bonus: cite it</b> <span class="small muted">Up to ' + offer + '.' + why + ' A cite right on the second try pays half.</span></div>');
  head.append(skip);
  const step = el('div');
  const log = el('div', { class: 'cite-log small' });
  box.append(head, step, log);
  host.append(box);

  let finished = false;
  const end = () => { if (finished) return; finished = true; skip.remove(); step.innerHTML = ''; ctx.onDone(); };
  skip.addEventListener('click', end);
  const line = (cls, html) => log.append(el('div', { class: 'cite-fb ' + cls }, html));
  const chapterNames = () => cite.chapters.map(c => esc(BOOKS[c.book].name) + ' ' + esc(BOOKS[c.book].groups[c.grp])).join('; ');

  // Books to choose from: the level's books plus any the question cites.
  const books = Object.keys(BOOKS).filter(b => (BOOKS[b].levels || []).includes(ctx.levelId) || cite.chapters.some(c => c.book === b));

  function chapterStep() {
    let tries = 0;
    step.innerHTML = '';
    const words = [...new Set(books.map(b => BOOKS[b].groupWord))];
    const lab = el('label', { class: 'cite-q' }, 'Which ' + (words.length > 1 ? words.slice(0, -1).join(', ') + ' or ' + words[words.length - 1] : words[0]) + ' is this in?');
    const sel = el('select', { 'aria-label': 'Chapter, article or section group' });
    sel.innerHTML = '<option value="">Choose…</option>' + books.map(b =>
      '<optgroup label="' + esc(BOOKS[b].name) + '">' + Object.entries(BOOKS[b].groups).map(([g, name]) => '<option value="' + esc(b + '|' + g) + '">' + esc(name) + '</option>').join('') + '</optgroup>').join('');
    const chk = el('button', { type: 'button', class: 'btn primary sm' }, 'Check');
    const row = el('div', { class: 'row', style: 'margin-top:6px;gap:8px' }); row.append(sel, chk);
    const fb = el('div', { class: 'cite-fb', hidden: true, 'aria-live': 'polite' });
    step.append(lab, row, fb);
    const go = () => {
      if (!sel.value) return;
      const [b, g] = sel.value.split('|');
      tries++;
      if (cite.chapters.some(c => c.book === b && c.grp === g)) {
        const pts = citePoints(chFull, firstTry, tries);
        ctx.onPoints('ch', pts);
        line('ok', '<b>Chapter ✓</b> ' + esc(BOOKS[b].groups[g]) + ' · +' + pts);
        return next();
      }
      sel.querySelector('option[value="' + CSS.escape(sel.value) + '"]').disabled = true;
      if (tries >= 2) {
        ctx.onPoints('ch', 0);
        line('bad', '<b>Chapter:</b> it is in ' + chapterNames() + '.');
        return next();
      }
      fb.hidden = false; fb.className = 'cite-fb half'; fb.textContent = 'Not that one. One more try for half.';
      sel.value = '';
    };
    chk.addEventListener('click', go);
    sel.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  }

  function exactStep() {
    let tries = 0;
    step.innerHTML = '';
    const lab = el('label', { class: 'cite-q' }, 'Now the exact section or table number' + (cite.exact.length > 1 ? ' (any one of the cited sections counts)' : '') + '.');
    const inp = el('input', { type: 'text', autocomplete: 'off', spellcheck: 'false', placeholder: 'e.g. 17.7.4.2.3.1', 'aria-label': 'Section or table number' });
    const chk = el('button', { type: 'button', class: 'btn primary sm' }, 'Check');
    const give = el('button', { type: 'button', class: 'btn ghost sm' }, 'Show me');
    const row = el('div', { class: 'numin', style: 'margin-top:6px' }); row.append(inp, chk, give);
    const fb = el('div', { class: 'cite-fb', hidden: true, 'aria-live': 'polite' });
    step.append(lab, row, fb);
    setTimeout(() => inp.focus({ preventScroll: true }), 30);
    const secs = () => cite.exact.map(e => '<b class="mono">' + esc(e.sec) + '</b>').join(', ');
    const miss = () => { ctx.onPoints('ex', 0); line('bad', '<b>Section:</b> ' + secs() + '.'); end(); };
    const go = () => {
      const r = checkExact(cite, inp.value);
      if (!r) return;
      tries++;
      if (r === 'right') {
        const pts = citePoints(exFull, firstTry, tries);
        ctx.onPoints('ex', pts);
        const typed = inp.value.trim();
        const same = cite.exact.length === 1 && cite.exact[0].sec.toLowerCase() === typed.toLowerCase();
        line('ok', '<b>Section ✓</b> <span class="mono">' + esc(typed) + '</span> · +' + pts + (same ? '' : ' <span class="muted">(cited: ' + secs() + ')</span>'));
        return end();
      }
      if (tries >= 2) return miss();
      fb.hidden = false; fb.className = 'cite-fb half';
      fb.textContent = r === 'close' ? 'Right neighborhood. Find the exact paragraph or table for half.' : 'Not that one. One more try for half.';
      inp.select();
    };
    chk.addEventListener('click', go);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    give.addEventListener('click', miss);
  }

  function next() { if (doExact) exactStep(); else end(); }
  if (ctx.needChapter) chapterStep(); else if (doExact) exactStep(); else end();
}
