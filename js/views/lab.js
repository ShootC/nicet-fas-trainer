// Circuit Lab: the hands-on stations, served from lab/index.html.
// Its points count toward rank XP one for one.
import { el, esc, pct, fmtInt } from '../util.js';
import { LAB_STATIONS } from '../../data/lab.js';
import { labStation, labPoints, labMaxPoints } from '../xp.js';

export function render(main) {
  const total = labPoints();
  main.append(el('div', { class: 'head' },
    '<span class="eyebrow">Hands-on</span><h1>Circuit lab</h1>' +
    '<p class="lede">Thirteen benches: Ohm’s law through voltage drop, EOL supervision, battery sizing, NAC boosters, wire gauge, strobe and horn layout, door release detectors and beam pockets. ' +
    'Every lab point counts as 1 XP here. The free handout version of the lab has the first eleven.</p>' +
    '<div class="row"><a class="btn primary" href="lab/index.html">Open the lab</a><span class="mono">' + fmtInt(total) + ' / ' + fmtInt(labMaxPoints()) + ' points</span></div>'));
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
