// Circuit Lab: the 11-station hands-on game, served from lab/index.html.
// Its points count toward rank XP one for one.
import { el, esc, pct, fmtInt } from '../util.js';
import { LAB_STATIONS } from '../../data/lab.js';
import { labStation, labPoints } from '../xp.js';

export function render(main) {
  const total = labPoints();
  main.append(el('div', { class: 'head' },
    '<span class="eyebrow">Hands-on</span><h1>Circuit lab</h1>' +
    '<p class="lede">Eleven benches: Ohm’s law through voltage drop, EOL supervision, battery sizing, NAC boosters, wire gauge and strobe and horn layout. ' +
    'Every lab point counts as 1 XP here. It is the same lab you can hand out as a single HTML file.</p>' +
    '<div class="row"><a class="btn primary" href="lab/index.html">Open the lab</a><span class="mono">' + fmtInt(total) + ' / 1,160 points</span></div>'));
  const g = el('div', { class: 'grid g3' });
  for (const st of LAB_STATIONS) {
    const s = labStation(st);
    g.append(el('a', { class: 'card' + (s.pts >= s.max ? ' accent' : ''), href: 'lab/index.html#' + st.id },
      '<span class="eyebrow">Station ' + st.n + '</span><h3 style="margin:2px 0 8px">' + esc(st.name) + '</h3>' +
      '<div class="meter"><i style="width:' + pct(s.pts, s.max) + '%"></i></div>' +
      '<div class="meta" style="margin:8px 0 0"><span>' + s.pts + ' / ' + s.max + ' pts</span><span>' + s.answered + ' / 10 questions</span>' + (st.puzzle ? '<span>' + (s.puzzleDone ? 'Jobs done ✓' : 'Jobs open') + '</span>' : '') + '</div>'));
  }
  main.append(g);
}
