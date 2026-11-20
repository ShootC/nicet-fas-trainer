// NICET Fire Alarm Systems levels, domains and tasks.
// Source: NICET FAS content outlines (Dec 18, 2023; exams released Mar 25, 2024) and Selected General References.
// NICET publishes tasks and weight ranges only; topics under each task are the trainer's interpretation.
export const LEVELS = [
  {
    id: 'l1', name: 'Level I', title: 'Technician Trainee',
    exam: { questions: 85, minutes: 110 },          // the real NICET exam
    practice: { questions: 40, minutes: 52 },       // our gate exam, same pace (about 1.3 min per question)
    books: {
      bring: ['NFPA 72-2022', 'NFPA 70 (NEC) 2020', "Ugly's Electrical References 2020"],
      screen: ['NFPA 72-2022', 'NFPA 70 (NEC) 2020'],
      study: ['OSHA 29 CFR 1910', 'OSHA 29 CFR 1926', 'Red Cross First Aid/CPR/AED manual', 'Fire Alarm Signaling Systems, 4th ed.']
    },
    experience: '6 months fire detection and signaling work, plus 5 supervisor-verified performance measures.',
    domains: [
      { id: '1.1', name: 'Installation', weight: [44, 54], tasks: [
        { id: '1.1.1', name: 'Mount and terminate peripherals', blurb: 'Initiating and notification devices: where they go, how high, how they land on the circuit.', lab: ['supervision', 'notify', 'doors', 'beams'] },
        { id: '1.1.2', name: 'Install cabling and infrastructure', blurb: 'NEC Article 760 cable types, support, separation, raceways, wire size and voltage drop.', lab: ['drop', 'wire', 'colors'] },
        { id: '1.1.3', name: 'Job site safety', blurb: 'OSHA ladders, fall protection, lockout/tagout, PPE, electrical safety and first aid basics.' }
      ]},
      { id: '1.2', name: 'Maintenance', weight: [40, 50], tasks: [
        { id: '1.2.1', name: 'Periodic testing', blurb: 'Chapter 14: what gets tested, how often, and how. Batteries, detectors, appliances, records.', lab: ['battery'] },
        { id: '1.2.2', name: 'Repair or replace impaired devices', blurb: 'Troubleshooting opens, shorts and grounds; trouble vs supervisory vs alarm; impairment handling.', lab: ['ohm', 'series', 'parallel', 'builder'] }
      ]},
      { id: '1.3', name: 'Submittal preparation and system layout', weight: [1, 11], tasks: [
        { id: '1.3.1', name: 'Technical documents', blurb: 'Reading drawings, symbols, specifications, riser diagrams and the record of completion.' }
      ]}
    ]
  },
  {
    id: 'l2', name: 'Level II', title: 'Associate Engineering Technician', unlockedBy: 'l1',
    exam: { questions: 110, minutes: 155 },
    practice: { questions: 50, minutes: 70 },
    books: {
      bring: ['NFPA 72-2022', 'NFPA 70 (NEC) 2020', 'IBC 2021'],
      screen: ['NFPA 72-2022', 'NFPA 70 (NEC) 2020'],
      study: ['OSHA 29 CFR 1910', 'OSHA 29 CFR 1926', "Ugly's Electrical References 2020", 'NASCLA Contractor’s Guide, Basic 13th ed.', 'AIA A201 (2017)']
    },
    experience: '2 years fire detection and signaling work (at least 12 months fire alarm), plus 6 more performance measures.',
    domains: [
      { id: '2.1', name: 'Installation', weight: [30, 40], tasks: [
        { id: '2.1.1', name: 'Work plans from field conditions', blurb: 'Turning drawings and site conditions into an install plan: sequencing, materials, coordination.' },
        { id: '2.1.2', name: 'Circuits, pathways and raceways', blurb: 'Pathway classes, survivability, NEC 760 wiring methods, fill and derating, firestopping.', lab: ['drop', 'wire'] },
        { id: '2.1.3', name: 'Install fire alarm equipment', blurb: 'Panels, power supplies, detectors and appliances placed and connected per NFPA 72.', lab: ['booster', 'notify'] },
        { id: '2.1.4', name: 'Commissioning', blurb: 'Acceptance testing, 100% device test, sequence of operations, record of completion.' }
      ]},
      { id: '2.2', name: 'Maintenance', weight: [25, 35], tasks: [
        { id: '2.2.1', name: 'Periodic testing', blurb: 'Chapter 14 methods and frequencies, sensitivity testing, battery tests, supervising station tests.', lab: ['battery'] },
        { id: '2.2.2', name: 'Correct impairments and deficiencies', blurb: 'Impairment procedures, ground faults, NAC and SLC faults, fixing what the test found.', lab: ['supervision'] },
        { id: '2.2.3', name: 'Maintain documentation', blurb: 'Inspection and test records, retention, the record of completion and site-specific software.' }
      ]},
      { id: '2.3', name: 'Submittal preparation and system layout', weight: [20, 30], tasks: [
        { id: '2.3.1', name: 'Shop drawing information', blurb: 'What NFPA 72 Chapter 7 requires on shop drawings, riser diagrams and sequence matrices.' },
        { id: '2.3.2', name: 'Site survey against the design', blurb: 'Ceiling heights, beams, ambient sound, room sizes and occupancy that change the layout.', lab: ['notify', 'beams'] },
        { id: '2.3.3', name: 'Basic technical drawings', blurb: 'Symbols, scales, floor plans, risers and point-to-point wiring diagrams.' },
        { id: '2.3.4', name: 'Power supply and loading', blurb: 'Battery calculations, NAC loading, voltage drop and booster power supplies.', lab: ['battery', 'booster', 'drop'] }
      ]},
      { id: '2.4', name: 'Management and supervision', weight: [5, 15], tasks: [
        { id: '2.4.1', name: 'Coordinate work activities', blurb: 'Scheduling, other trades, AHJ inspections, safety leadership and contract basics.' }
      ]}
    ]
  },
  { id: 'l3', name: 'Level III', title: 'Engineering Technician', comingSoon: true, exam: { questions: 115, minutes: 170 } },
  { id: 'l4', name: 'Level IV', title: 'Senior Engineering Technician', comingSoon: true, exam: { questions: 120, minutes: 290 } }
];

export const levelById = id => LEVELS.find(l => l.id === id);
export function taskById(id) {
  for (const L of LEVELS) for (const D of L.domains || []) for (const T of D.tasks) if (T.id === id) return { level: L, domain: D, task: T };
  return null;
}
