// Progress: XP breakdown, rank ladder, per-task mastery, exam history, and the save file tools.
import { el, esc, pct, fmtInt, modal } from '../util.js';
import { LEVELS } from '../../data/levels.js';
import { CONFIG } from '../../data/config.js';
import { state, save, exportBlob, importData, resetAll } from '../store.js';
import { xpBreakdown, levelFor, levelTotals, nextNicetLevel, taskStats, levelStats, isUnlocked, streak, earnedBadges } from '../xp.js';
import { BADGES, BADGE_XP } from '../../data/badges.js';

export function render(main) {
  const S = state(); const b = xpBreakdown(); const r = levelFor(b.total);
  main.append(el('div', { class: 'head' }, '<span class="eyebrow">Your record</span><h1>Progress</h1><p class="lede">Saved in this browser only. Export a file to move it to another device or to show your trainer.</p>'));

  const top = el('div', { class: 'grid g2' });
  top.append(el('div', { class: 'card accent' },
    '<h3>XP · ' + fmtInt(b.total) + '</h3><table style="margin-top:6px"><tbody>' +
    [['Task questions', b.questions], ['Cite it bonus', b.cites], ['Lookups', b.lookups], ['Review', b.review], ['Practice exams', b.exams], ['Badges', b.badges], ['Circuit lab', b.lab]]
      .map(([k, v]) => '<tr><td>' + k + '</td><td class="num mono">' + fmtInt(v) + '</td></tr>').join('') +
    '</tbody></table><p class="small muted" style="margin:8px 0 0">' + streak() + '-day streak · ' + S.days.length + ' study day' + (S.days.length === 1 ? '' : 's') + '</p>'));
  // Tech Level: one row per title band up to the cap.
  const T = levelTotals(); const nn = nextNicetLevel();
  const bands = CONFIG.titles.filter(t => t.lv <= r.cap).map((t, i, a) => ({ name: t.name, from: t.lv, to: a[i + 1] ? a[i + 1].lv - 1 : r.cap }));
  top.append(el('div', { class: 'card' },
    '<h3>Tech Level · Lv ' + r.lv + '</h3>' +
    '<p class="small muted" style="margin:4px 0 8px">' + (r.atCap ? 'Top level for now' + (r.banked ? ', with ' + fmtInt(r.banked) + ' XP banked' : '') : fmtInt(r.next - b.total) + ' XP to Lv ' + (r.lv + 1)) +
    '. Early levels come quickly; each one after that takes a little more XP. Lv ' + r.cap + ' is the cap' + (nn ? ' until ' + esc(nn.name) + ' opens' : '') + '.</p>' +
    '<table><thead><tr><th>Title</th><th>Levels</th><th class="num">XP to reach</th></tr></thead><tbody>' +
    bands.map(x => { const me = r.lv >= x.from && r.lv <= x.to;
      return '<tr' + (me ? ' style="font-weight:600"' : '') + '><td>' + esc(x.name) + (me ? ' ← you' : '') + '</td><td class="mono">' + (x.from === x.to ? 'Lv ' + x.from : 'Lv ' + x.from + '–' + x.to) + '</td><td class="num mono">' + fmtInt(T[x.from]) + '</td></tr>'; }).join('') +
    '</tbody></table>'));
  main.append(top);

  const got = new Set(earnedBadges().map(x => x.id));
  const when = S.badges || {};
  const earnedOn = id => when[id] ? ' ' + new Date(when[id]).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  const shelf = el('div', { class: 'section', id: 'badges' }, '<div class="spread"><h2>Badges</h2><span class="pill gold">' + got.size + ' of ' + BADGES.length + ' · ' + BADGE_XP + ' XP each</span></div>');
  shelf.append(el('div', { class: 'badges' }, BADGES.map(x =>
    '<div class="badge-card' + (got.has(x.id) ? ' got' : '') + '"><span class="badge-ico" aria-hidden="true">' + x.icon + '</span>' +
    '<div><b>' + esc(x.name) + '</b>' + (got.has(x.id) ? ' <span class="pill ok">Earned' + earnedOn(x.id) + '</span>' : '') + '<br><span class="small muted">' + esc(x.desc) + '</span></div></div>').join('')));
  main.append(shelf);

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
  const file = el('div', {}, '<span class="eyebrow">Save file</span><p class="small muted" style="margin:4px 0 8px">Includes Circuit Lab progress. Importing replaces what is on this device. To move to a new phone, export here and import there (<a href="#/install">install steps</a>).</p>');
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
