// Progress: XP breakdown, rank ladder, per-task mastery, exam history, and the save file tools.
import { el, esc, pct, fmtInt, modal } from '../util.js';
import { LEVELS } from '../../data/levels.js';
import { CONFIG } from '../../data/config.js';
import { state, save, exportBlob, importData, resetAll } from '../store.js';
import { xpBreakdown, rankFor, taskStats, levelStats, isUnlocked, streak } from '../xp.js';

export function render(main) {
  const S = state(); const b = xpBreakdown(); const r = rankFor(b.total);
  main.append(el('div', { class: 'head' }, '<span class="eyebrow">Your record</span><h1>Progress</h1><p class="lede">Saved in this browser only. Export a file to move it to another device or to show your trainer.</p>'));

  const top = el('div', { class: 'grid g2' });
  top.append(el('div', { class: 'card accent' },
    '<h3>XP · ' + fmtInt(b.total) + '</h3><table style="margin-top:6px"><tbody>' +
    [['Task questions', b.questions], ['Lookups', b.lookups], ['Review', b.review], ['Practice exams', b.exams], ['Circuit lab', b.lab]]
      .map(([k, v]) => '<tr><td>' + k + '</td><td class="num mono">' + fmtInt(v) + '</td></tr>').join('') +
    '</tbody></table><p class="small muted" style="margin:8px 0 0">' + streak() + '-day streak · ' + S.days.length + ' study day' + (S.days.length === 1 ? '' : 's') + '</p>'));
  top.append(el('div', { class: 'card' },
    '<h3>Ranks</h3><table style="margin-top:6px"><tbody>' +
    CONFIG.ranks.map((k, i) => '<tr' + (i + 1 === r.n ? ' style="font-weight:600"' : '') + '><td class="mono">' + (i + 1) + '</td><td>' + esc(k.name) + (i + 1 === r.n ? ' ← you' : '') + '</td><td class="num mono">' + fmtInt(k.xp) + '</td></tr>').join('') +
    '</tbody></table>'));
  main.append(top);

  for (const L of LEVELS) {
    if (L.comingSoon) continue;
    const ls = levelStats(L.id); const open = isUnlocked(L.id);
    const sec = el('div', { class: 'section' }, '<div class="spread"><h2>' + esc(L.name) + '</h2>' + (open ? '' : '<span class="pill warn">🔒 locked</span>') + '</div>');
    let rows = '';
    for (const D of L.domains) for (const T of D.tasks) {
      const t = taskStats(T.id);
      rows += '<tr><td class="mono">' + T.id + '</td><td>' + esc(T.name) + '</td><td class="num mono">' + t.seen + ' / ' + t.total + '</td><td class="num mono">' + pct(t.known, t.total) + '%</td><td>' + (t.mastered ? '<span class="pill ok">Mastered</span>' : '') + '</td></tr>';
    }
    sec.append(el('div', { class: 'card tablewrap' }, '<table><thead><tr><th>Task</th><th>Name</th><th class="num">Seen</th><th class="num">Known</th><th></th></tr></thead><tbody>' + rows + '</tbody></table>'));
    const ex = S.exams[L.id] || [];
    if (ex.length) sec.append(el('div', { class: 'card tablewrap', style: 'margin-top:10px' },
      '<h3>Practice exams</h3><table><thead><tr><th>Date</th><th class="num">Score</th><th class="num">Time</th><th></th></tr></thead><tbody>' +
      ex.slice().reverse().map(e => '<tr><td>' + new Date(e.at).toLocaleDateString() + '</td><td class="num mono">' + e.pct + '% (' + e.right + '/' + e.n + ')</td><td class="num mono">' + Math.round(e.secs / 60) + ' min</td><td>' + (e.pass ? '<span class="pill ok">Pass</span>' : '') + '</td></tr>').join('') + '</tbody></table>'));
    sec.append(el('p', { class: 'small muted', style: 'margin-top:6px' }, ls.known + ' of ' + ls.total + ' questions known · ' + ls.mastered + ' of ' + ls.tasks + ' tasks mastered'));
    main.append(sec);
  }

  const tools = el('div', { class: 'section' }, '<h2>Settings and save file</h2>');
  const card = el('div', { class: 'card grid', style: 'gap:16px' });
  const theme = el('div', {}, '<span class="eyebrow">Theme</span>');
  const seg = el('div', { class: 'seg', style: 'margin-top:6px' });
  for (const [v, label] of [['auto', 'Match device'], ['light', 'Light'], ['dark', 'Dark']]) {
    const bt = el('button', { type: 'button', 'aria-pressed': S.settings.theme === v ? 'true' : 'false' }, label);
    bt.addEventListener('click', () => {
      S.settings.theme = v; save();
      if (v === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', v);
      seg.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === bt ? 'true' : 'false'));
    });
    seg.append(bt);
  }
  theme.append(seg);
  const file = el('div', {}, '<span class="eyebrow">Save file</span><p class="small muted" style="margin:4px 0 8px">Includes Circuit Lab progress. Importing replaces what is on this device.</p>');
  const row = el('div', { class: 'row' });
  const exp = el('button', { type: 'button', class: 'btn sm' }, 'Export progress');
  exp.addEventListener('click', () => {
    const a = el('a', { href: URL.createObjectURL(exportBlob()), download: 'nicet-trainer-progress-' + new Date().toISOString().slice(0, 10) + '.json' });
    document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  });
  const imp = el('label', { class: 'btn sm' }, 'Import progress<input type="file" accept="application/json,.json" hidden>');
  imp.querySelector('input').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => { importData(t); modal('<h3>Progress imported</h3>', () => location.reload()); }).catch(err => modal('<h3>Could not import</h3><p>' + esc(err.message) + '</p>'));
  });
  const rst = el('button', { type: 'button', class: 'btn sm ghost' }, 'Reset everything');
  rst.addEventListener('click', () => {
    if (!confirm('Erase all trainer progress on this device? Export first if you want a copy.')) return;
    const lab = confirm('Also erase Circuit Lab progress? (OK = yes, Cancel = keep the lab)');
    resetAll(lab); location.hash = '#/home'; location.reload();
  });
  row.append(exp, imp, rst); file.append(row);
  card.append(theme, file); tools.append(card); main.append(tools);
}
