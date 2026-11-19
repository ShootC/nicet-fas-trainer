// One lookup prompt: "where in the book is this?" Two modes:
//   chapter: pick the chapter / article / section group from four choices
//   exact:   type the section or table number (two tries; the parent number earns a nudge)
import { el, esc, shuffle, normRef } from '../util.js';
import { BOOKS } from '../../data/books.js';
import { CONFIG } from '../../data/config.js';

export function lookupAnswer(item) { return item.sec; }

function accepts(item) { return [item.sec, ...(item.accept || [])].map(normRef); }

export function askLookup(host, item, mode, opts = {}) {
  host.innerHTML = '';
  const book = BOOKS[item.book];
  const card = el('div', { class: 'qcard' });
  card.append(el('div', { class: 'qtext' },
    '<span class="tag">' + esc((opts.tag ? opts.tag + ' · ' : '') + book.name + '-' + book.edition) + '</span>' +
    '<div class="lkprompt">' + esc(item.topic) + '</div>' +
    '<span class="small muted">' + (mode === 'chapter' ? 'Which ' + book.groupWord + ' covers this?' : 'Find the section or table number.') + '</span>'));
  const body = el('div');
  const fb = el('div', { class: 'fb', hidden: true, 'aria-live': 'polite' });
  card.append(body, fb);
  host.append(card);
  const t0 = performance.now();
  let tries = 0, done = false;

  const reveal = (right, pts) => {
    done = true;
    const secs = Math.round((performance.now() - t0) / 1000);
    fb.hidden = false;
    fb.className = 'fb ' + (right ? (tries === 1 ? 'ok' : 'half') : 'bad');
    fb.innerHTML = '<span class="v">' + (right ? (tries === 1 ? 'Found it' : 'Found it on the second try') : 'Here it is') + (pts ? ' · +' + pts : '') + (right && mode === 'exact' ? ' · ' + secs + ' s' : '') + '</span>' +
      '<p style="margin:0 0 6px"><b class="mono">' + esc(item.sec) + '</b>' + (item.value ? ' — ' + esc(item.value) : '') + '</p>' +
      (item.path ? '<div class="path">' + item.path.map(p => '<span>' + esc(p) + '</span>').join('') + '</div>' : '') +
      (item.find ? '<p class="small" style="margin:8px 0 0"><b>How to find it:</b> ' + esc(item.find) + '</p>' : '') +
      (item.status && item.status !== 'confirmed' ? '<p class="small muted" style="margin:6px 0 0">Number not yet checked against the printed ' + esc(book.edition) + ' book. Verify in yours.</p>' : '') +
      (right && mode === 'exact' && secs > 80 ? '<p class="small muted" style="margin:6px 0 0">The real exam allows about 78 seconds per question. Tab this one.</p>' : '');
    opts.onDone && opts.onDone({ right, tries, pts, ms: Math.round(performance.now() - t0) });
  };

  if (mode === 'chapter') {
    const all = Object.keys(book.groups);
    const choices = shuffle([item.grp, ...shuffle(all.filter(g => g !== item.grp)).slice(0, 3)]);
    const box = el('div', { class: 'opts' });
    choices.forEach((g, k) => {
      const b = el('button', { type: 'button', class: 'opt' }, '<span class="k">' + 'ABCD'[k] + '</span><span>' + esc(book.groups[g]) + '</span>');
      b.addEventListener('click', () => {
        if (done) return;
        tries++;
        if (g === item.grp) { b.classList.add('right'); box.querySelectorAll('.opt').forEach(x => (x.disabled = true)); reveal(true, tries === 1 ? CONFIG.xp.lookupChapter : Math.ceil(CONFIG.xp.lookupChapter / 2)); }
        else {
          b.classList.add('wrong'); b.disabled = true;
          if (tries >= 2) { box.children[choices.indexOf(item.grp)].classList.add('right'); box.querySelectorAll('.opt').forEach(x => (x.disabled = true)); reveal(false, 0); }
          else { fb.hidden = false; fb.className = 'fb half'; fb.innerHTML = '<span class="v">Not that one</span>One more try.'; }
        }
      });
      box.append(b);
    });
    body.append(box);
    return;
  }

  const row = el('div', { class: 'numin' });
  const inp = el('input', { type: 'text', autocomplete: 'off', spellcheck: 'false', placeholder: 'e.g. 17.7.3.2', 'aria-label': 'Section or table number' });
  const chk = el('button', { type: 'button', class: 'btn primary' }, 'Check');
  const give = el('button', { type: 'button', class: 'btn ghost sm' }, 'Show me');
  row.append(inp, chk, give);
  body.append(row);
  setTimeout(() => inp.focus(), 30);
  const go = () => {
    if (done) return;
    const v = normRef(inp.value);
    if (!v) return;
    tries++;
    if (accepts(item).includes(v)) { inp.disabled = chk.disabled = give.disabled = true; reveal(true, tries === 1 ? CONFIG.xp.lookupExact : CONFIG.xp.lookupClose); return; }
    // "Close" = a listed parent, or any dotted ancestor of the answer (18.5.5 for 18.5.5.8.5).
    const close = (item.close || []).map(normRef).includes(v) || (v.includes('.') && accepts(item).some(a => a.startsWith(v + '.')));
    if (tries >= 2) { inp.disabled = chk.disabled = give.disabled = true; reveal(false, 0); return; }
    fb.hidden = false; fb.className = 'fb half';
    fb.innerHTML = close
      ? '<span class="v">Right neighborhood</span>You are in the right section. Find the exact paragraph or table for one more try.'
      : '<span class="v">Not that one</span>Hint: it is in ' + esc(book.groups[item.grp] || 'another part of the book') + '. One more try.';
    inp.select();
  };
  chk.addEventListener('click', go);
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  give.addEventListener('click', () => { if (done) return; tries = Math.max(tries, 2); inp.disabled = chk.disabled = give.disabled = true; reveal(false, 0); });
}
