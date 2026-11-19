// App-wide settings a trainer may want to change. Edit here; no build step.
export const CONFIG = {
  // Code editions NICET uses for exams taken BEFORE April 19, 2027 (NICET FAS reference lists, Dec 2023).
  editions: { nfpa72: '2022', nec: '2020', ibc: '2021', uglys: '2020' },
  editionNote: 'NICET plans to move FAS exams to NFPA 72-2025, NFPA 70-2023 and IBC 2024 on April 19, 2027 (draft outlines, Oct 2026). This app teaches the 2022 / 2020 / 2021 set until then.',

  xp: {
    firstTry: 10,      // right on the first try
    secondTry: 5,      // right on the second try
    review: 2,         // each right answer in Review
    lookupExact: 10,   // exact section on the first try
    lookupClose: 5,    // right section family (parent number) or second try
    lookupChapter: 4,  // which-chapter drill, first try
    examPass: { l1: 150, l2: 200 }
  },

  // The practice exam gate that unlocks the next level. NICET does not publish its cut score;
  // this is the trainer's bar, deliberately set above a bare pass.
  passMark: 0.75,

  // Rank ladder. Rename or re-space freely; XP is recalculated from progress, so nothing breaks.
  ranks: [
    { xp: 0,    name: 'Trainee' },
    { xp: 150,  name: 'Helper' },
    { xp: 400,  name: 'Apprentice' },
    { xp: 750,  name: 'Installer' },
    { xp: 1200, name: 'Device Tech' },
    { xp: 1750, name: 'Service Tech' },
    { xp: 2400, name: 'Inspection Tech' },
    { xp: 3200, name: 'Lead Tech' },
    { xp: 4200, name: 'Senior Tech' },
    { xp: 5500, name: 'Master Tech' }
  ],

  // A task counts as mastered when this share of its questions are known
  // (right on the first try, or cleared through Review).
  taskMastery: 0.8
};
