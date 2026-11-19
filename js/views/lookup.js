// Code lookup: drills that build the habit of going straight to the right page,
// plus a book map (and printable tab list) built from the same data.
import { el, esc, shuffle, pct } from '../util.js';
import { BOOKS } from '../../data/books.js';
import { LOOKUPS } from '../../data/lookups/index.js';
import { state } from '../store.js';
import { isUnlocked, lookupStats } from '../xp.js';
import { askLookup } from './asklk.js';
import { recordLookup } from '../record.js';

const SESSION = 10;
const bookOpen = id => BOOKS[id].levels.some(l => isUnlocked(l));
const itemsFor = id => LOOKUPS.filter(x => x.book === id && x.levels.some(l => isUnlocked(l)));

export function render(main) {
  main.append(el('div', { class: 'head' },
    '<span class="eyebrow">Open book, but timed</span><h1>Code lookup</h1>' +
    '<p class="lede">The NICET exam puts NFPA 72 and the NEC on screen, and you may bring tabbed, highlighted copies. ' +
    'At Level I you get about 78 seconds a question. Techs who know where things live finish; techs who search, don’t. ' +
    'Start with <b>Which chapter?</b>, then move to <b>Exact section</b>.</p>'));
  const g = el('div', { class: 'grid g3' });
  for (const id of Object.keys(BOOKS)) {
    const B = BOOKS[id]; const open = bookOpen(id); const s = lookupStats(id); const n = itemsFor(id).length;
    const c = el('div', { class: 'card ' + (open ? 'copper' : 'locked') },
      '<span class="eyebrow">' + esc(B.full) + '</span><h3 style="margin:4px 0 6px">' + esc(B.name) + ' · ' + esc(B.edition) + '</h3>' +
      (open
        ? '<p class="small muted">' + s.total + ' lookups · ' + s.chap + ' chapters known · ' + s.exact + ' exact sections found</p>' +
          '<div class="meter" style="margin-bottom:10px"><i style="width:' + pct(s.exact, s.total) + '%"></i></div>' +
          (n ? '<div class="row"><a class="btn sm" href="#/lookup/drill/' + id + '/chapter">Which ' + esc(B.groupWord) + '?</a><a class="btn primary sm" href="#/lookup/drill/' + id + '/exact">Exact section</a><a class="btn ghost sm" href="#/lookup/book/' + id + '">Book map</a></div>'
             : '<p class="small">Lookups for this book are being written.</p>')
        : '<p class="small muted">Level II reference. Unlocks with Level II.</p>'));
    g.append(c);
  }
  main.append(g);
  main.append(el('div', { class: 'section callout small' },
    '<b>Tabbing tips.</b> Permanent tabs and highlighting are allowed in bring-in books; sticky notes and handwriting are not. ' +
    'Each book map has a printable tab list built from the drills. Tab the tables you use on every job: room and ceiling strobe tables, detector spacing, test methods and frequencies, battery and cable tables.'));
}

export function renderDrill(main, bookId, mode) {
  const B = BOOKS[bookId];
  if (!B || !['chapter', 'exact'].includes(mode)) { location.replace('#/lookup'); return; }
  const head = '<div class="crumbs"><a href="#/lookup">Code lookup</a> › ' + esc(B.name) + '</div>';
  if (!bookOpen(bookId)) { main.innerHTML = head + '<div class="callout warn">This book unlocks with Level II.</div>'; return; }
  const pool = itemsFor(bookId);
  main.innerHTML = head;
  main.append(el('div', { class: 'head' }, '<h1>' + (mode === 'chapter' ? 'Which ' + esc(B.groupWord) + '?' : 'Exact section') + '</h1><p class="lede">' + esc(B.name) + '-' + esc(B.edition) + '. ' + (mode === 'exact' ? 'Open your book and find it. Typing the parent section earns a nudge; the timer shows how fast you were.' : 'Pick where this lives in the book.') + '</p>'));
  if (!pool.length) { main.append(el('div', { class: 'callout' }, 'Lookups for this book are being written.')); return; }
  const wrap = el('div', { class: 'qwrap' });
  main.append(wrap);
  start();

  function start() {
    const S = state(); const rec = mode === 'chapter' ? S.lkc : S.lk;
    const fresh = shuffle(pool.filter(x => !rec[x.id])), shaky = shuffle(pool.filter(x => rec[x.id] && !rec[x.id].last)), solid = shuffle(pool.filter(x => rec[x.id] && rec[x.id].last));
    const set = [...fresh, ...shaky, ...solid].slice(0, SESSION);
    const res = []; let i = 0;
    wrap.innerHTML = '';
    const top = el('div', { class: 'qtop' }); const count = el('span', { class: 'mono small muted' });
    const dots = el('div', { class: 'dots', 'aria-hidden': 'true' }, set.map(() => '<i></i>').join(''));
    top.append(count, dots);
    const host = el('div'); const act = el('div', { class: 'qactions' });
    const next = el('button', { type: 'button', class: 'btn primary', hidden: true }, 'Next');
    act.append(el('a', { class: 'btn ghost sm', href: '#/lookup' }, 'Leave'), next);
    wrap.append(top, host, act);
    const show = () => {
      count.textContent = 'Lookup ' + (i + 1) + ' of ' + set.length;
      [...dots.children].forEach((d, k) => d.classList.toggle('cur', k === i));
      next.hidden = true;
      askLookup(host, set[i], mode, { onDone: r => {
        res[i] = r; recordLookup(set[i].id, mode, r);
        dots.children[i].className = r.right ? (r.tries === 1 ? 'r' : 'h') : 'w';
        next.hidden = false; next.textContent = i + 1 < set.length ? 'Next' : 'See results'; next.focus({ preventScroll: true });
      } });
    };
    next.addEventListener('click', () => {
      i++;
      if (i < set.length) { show(); return; }
      const first = res.filter(r => r.right && r.tries === 1).length;
      const times = res.filter(r => r.right).map(r => r.ms / 1000);
      const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : null;
      wrap.innerHTML = '';
      const c = el('div', { class: 'card copper' },
        '<span class="eyebrow">Drill complete</span><h2 style="margin:4px 0 10px">' + first + ' of ' + set.length + ' on the first try</h2>' +
        (mode === 'exact' && avg != null ? '<p>Average time when found: <b class="mono">' + avg + ' s</b>' + (avg > 78 ? ' — over the exam pace of about 78 s. Tab the slow ones.' : ' — inside exam pace.') + '</p>' : '') +
        (mode === 'exact' ? '<p class="small muted">Misses went to Review.</p>' : ''));
      const row = el('div', { class: 'row' });
      const again = el('button', { type: 'button', class: 'btn primary' }, 'Another round'); again.addEventListener('click', start);
      row.append(again, el('a', { class: 'btn', href: '#/lookup/book/' + bookId }, 'Book map'), el('a', { class: 'btn ghost', href: '#/lookup' }, 'All books'));
      c.append(row); wrap.append(c);
    });
    show();
  }
}

export function renderBook(main, bookId) {
  const B = BOOKS[bookId];
  if (!B) { location.replace('#/lookup'); return; }
  const items = LOOKUPS.filter(x => x.book === bookId);
  const S = state();
  main.append(el('div', { class: 'head' },
    '<div class="crumbs noprint"><a href="#/lookup">Code lookup</a> › ' + esc(B.name) + '</div>' +
    '<span class="eyebrow">Book map</span><h1>' + esc(B.name) + '-' + esc(B.edition) + '</h1>' +
    '<p class="lede">Where the things a technician looks up actually live. Topics are in our words; the book has the rule. ✓ marks sections you have found in a drill.</p>' +
    '<div class="row noprint"><button type="button" class="btn sm" id="printTabs">Print tab list</button></div>'));
  const map = el('div', { class: 'bookmap' });
  for (const [g, label] of Object.entries(B.groups)) {
    const rows = items.filter(x => x.grp === g);
    if (!rows.length) continue;
    const d = el('details', { open: true }, '<summary>' + esc(label) + '<span class="pill">' + rows.length + '</span></summary>');
    d.append(el('div', { class: 'tablewrap' }, '<table><thead><tr><th>Section</th><th>Topic</th><th>Key value</th></tr></thead><tbody>' +
      rows.map(x => '<tr><td class="mono" style="white-space:nowrap">' + esc(x.sec) + (S.lk[x.id] && S.lk[x.id].last ? ' ✓' : '') + '</td><td>' + esc(x.topic) + '</td><td class="small">' + esc(x.value || '') + '</td></tr>').join('') + '</tbody></table>'));
    map.append(d);
  }
  if (!items.length) map.append(el('div', { class: 'callout' }, 'Lookups for this book are being written.'));
  main.append(map);
  const btn = main.querySelector('#printTabs');
  if (btn) btn.addEventListener('click', () => { main.querySelectorAll('details').forEach(d => (d.open = true)); window.print(); });
}
