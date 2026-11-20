// Circuit Lab stations (lab/index.html). Each has 10 quiz questions worth 10 points;
// stations with a puzzle key also have a puzzle or job set worth 10.
export const LAB_STATIONS = [
  { id: 'ohm', n: 1, name: "Ohm's law" },
  { id: 'series', n: 2, name: 'Series circuits' },
  { id: 'parallel', n: 3, name: 'Parallel circuits' },
  { id: 'builder', n: 4, name: 'Build a circuit' },
  { id: 'drop', n: 5, name: 'Voltage drop', puzzle: 'dropfix' },
  { id: 'supervision', n: 6, name: 'EOL supervision' },
  { id: 'battery', n: 7, name: 'Battery sizing', puzzle: 'batfix' },
  { id: 'booster', n: 8, name: 'NAC booster', puzzle: 'boostfix' },
  { id: 'colors', n: 9, name: 'Resistor color code', puzzle: 'colorfix' },
  { id: 'wire', n: 10, name: 'Wire gauge', puzzle: 'wirefix' },
  { id: 'notify', n: 11, name: 'Strobes and horns', puzzle: 'notifyfix' },
  { id: 'doors', n: 12, name: 'Door release', puzzle: 'doorfix' },
  { id: 'beams', n: 13, name: 'Beam pockets', puzzle: 'beamfix' }
];
export const LAB_QUESTIONS_PER_STATION = 10;
