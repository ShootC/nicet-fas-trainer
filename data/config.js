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
    citeChapter: 3,    // Cite it bonus after a task question: right chapter, NEC article or IBC section group
    citeExact: 5,      // Cite it bonus: right exact section or table
    // The cite bonus is paid only for a right cite, once per question. It is multiplied by citeHalf when the
    // answer was missed or right only on the second try, and by citeHalf again when the cite takes a second
    // try. Rounded to whole XP, never below 1. With 3 and 5: full 3 / 5, half 2 / 3, quarter 1 / 1.
    citeHalf: 0.5,
    examPass: { l1: 150, l2: 200 }
  },

  // The practice exam gate that unlocks the next level. NICET does not publish its cut score;
  // this is the trainer's bar, deliberately set above a bare pass.
  passMark: 0.75,

  // Tech Level: the player's own level, shown as "Lv 12". NICET Level I-IV keep their Roman numerals.
  // XP to go from Lv n to Lv n+1 = start + a × (n − 1)^p, rounded to the nearest 5. Early levels come
  // every few answers and later ones take longer, MMORPG style. With these numbers Lv 2 takes 50 XP,
  // Lv 40 takes 13,720 in total, Lv 60 36,450 and Lv 80 73,825. Retune freely: XP is recalculated from
  // saved progress, so nothing breaks.
  levelCurve: { start: 50, a: 3.2, p: 1.5 },

  // The cap rises as NICET levels are released (a level counts once it is no longer "comingSoon"):
  // Lv 40 with Levels I-II, 60 with Level III, 80 with Level IV. XP earned past the cap is kept
  // and counts as soon as the cap rises.
  levelCap: { l1: 40, l2: 40, l3: 60, l4: 80 },

  // Titles for bands of Tech Levels. Each title starts at the level shown and lasts until the next one.
  // Add titles past Lv 40 when Level III arrives. Keep them clear of NICET's own grade names.
  titles: [
    { lv: 1,  name: 'Trainee' },
    { lv: 5,  name: 'Helper' },
    { lv: 9,  name: 'Apprentice' },
    { lv: 13, name: 'Installer' },
    { lv: 17, name: 'Device Tech' },
    { lv: 21, name: 'Service Tech' },
    { lv: 25, name: 'Inspection Tech' },
    { lv: 29, name: 'Lead Tech' },
    { lv: 33, name: 'Senior Tech' },
    { lv: 40, name: 'Master Tech' }
  ],

  // A task counts as mastered when this share of its questions are known
  // (right on the first try, or cleared through Review).
  taskMastery: 0.8
};
