// Badges: milestones worth celebrating.
// test(s) reads the stats object built in js/xp.js (badgeStats). Once a test passes, the badge id is
// recorded in the profile and kept, even if later content (more questions in a task) means the test
// would no longer pass. Adding, renaming or re-ordering badges never breaks a saved profile. Keep ids stable.
//
// Fields: id, icon, name, desc, test, group (shelf heading), xp (default BADGE_XP).
// The tier follows the XP: 10 bronze, 25 silver, 50 gold. hidden: true keeps the name and
// description secret until it is earned.
export const BADGE_XP = 25;
export const badgeXP = b => (typeof b.xp === 'number' ? b.xp : BADGE_XP);
export const badgeTier = b => { const x = badgeXP(b); return x >= 50 ? 'gold' : x >= 25 ? 'silver' : 'bronze'; };

export const BADGE_GROUPS = ['Getting started', 'Study habits', 'Questions', 'Mastery', 'Code lookup', 'Cite it', 'Practice exams', 'Review', 'Circuit Lab', 'Hidden'];

export const BADGES = [
  // The first thirteen (each 25 XP, kept as they were).
  { id: 'first-answer', group: 'Getting started', icon: '🔰', name: 'First Call', desc: 'Answer your first question.', test: s => s.answered >= 1 },
  { id: 'perfect-session', group: 'Questions', icon: '🎯', name: 'Clean Install', desc: 'Get every question in a 10-question task session right on the first try.', test: s => s.perfect >= 1 },
  { id: 'task-mastered', group: 'Mastery', icon: '🔧', name: 'Task Mastered', desc: 'Master any NICET task (80% of its questions known).', test: s => s.tasksMastered >= 1 },
  { id: 'l1-tasks', group: 'Mastery', icon: '🧰', name: 'Level I Toolkit', desc: 'Master all six Level I tasks.', test: s => s.l1TasksMastered >= 6 },
  { id: 'l1-pass', group: 'Practice exams', icon: '🎓', name: 'Level I Ready', desc: 'Pass the Level I practice exam.', test: s => s.l1Pass },
  { id: 'l2-pass', group: 'Practice exams', icon: '🏅', name: 'Level II Ready', desc: 'Pass the Level II practice exam.', test: s => s.l2Pass },
  { id: 'lookup-25', group: 'Code lookup', icon: '📘', name: 'Tabbed Up', desc: 'Find 25 exact code sections in lookup drills.', test: s => s.exact >= 25 },
  { id: 'lookup-fast', group: 'Code lookup', icon: '⏱️', name: 'Quick Draw', desc: 'Find an exact section in under 30 seconds.', test: s => s.fastestMs != null && s.fastestMs < 30000 },
  { id: 'chapters-50', group: 'Code lookup', icon: '🗂️', name: 'Know the Book', desc: 'Name the right chapter, article or section group 50 times.', test: s => s.chapters >= 50 },
  { id: 'review-10', group: 'Review', icon: '🔁', name: 'It Stuck', desc: 'Graduate 10 items out of Review.', test: s => s.graduated >= 10 },
  { id: 'streak-7', group: 'Study habits', icon: '🔥', name: 'On Shift', desc: 'Study 7 days in a row.', test: s => s.streak >= 7 },
  { id: 'lab-500', group: 'Circuit Lab', icon: '🔌', name: 'Bench Tech', desc: 'Earn 500 Circuit Lab points.', test: s => s.lab >= 500 },
  { id: 'lab-all', group: 'Circuit Lab', icon: '⚡', name: 'Every Bench', desc: 'Score points at every Circuit Lab station.', test: s => s.labStations >= s.labStationCount },

  // Study habits
  { id: 'days-50', group: 'Study habits', xp: 10, icon: '📅', name: 'Regular', desc: 'Study on 50 different days.', test: s => s.days >= 50 },
  { id: 'streak-30', group: 'Study habits', xp: 25, icon: '🗓️', name: 'Full Month', desc: 'Study 30 days in a row.', test: s => s.streak >= 30 },
  { id: 'streak-100', group: 'Study habits', xp: 50, icon: '🏆', name: 'Hundred-Day Shift', desc: 'Study 100 days in a row.', test: s => s.streak >= 100 },

  // Questions
  { id: 'answered-100', group: 'Questions', xp: 10, icon: '📋', name: 'Punch List', desc: 'Answer 100 different task questions.', test: s => s.answered >= 100 },
  { id: 'answered-250', group: 'Questions', xp: 25, icon: '🏢', name: 'Full Floor', desc: 'Answer 250 different task questions.', test: s => s.answered >= 250 },
  { id: 'answered-500', group: 'Questions', xp: 50, icon: '🏙️', name: 'Whole Building', desc: 'Answer 500 different task questions.', test: s => s.answered >= 500 },
  { id: 'run-10', group: 'Questions', xp: 10, icon: '🎳', name: 'On a Roll', desc: 'Get 10 task questions in a row right on the first try.', test: s => s.bestRun >= 10 },
  { id: 'run-25', group: 'Questions', xp: 25, icon: '📡', name: 'Dialed In', desc: 'Get 25 task questions in a row right on the first try.', test: s => s.bestRun >= 25 },
  { id: 'perfect-10', group: 'Questions', xp: 25, icon: '💯', name: 'Ten Clean Installs', desc: 'Finish 10 task sessions with every question right on the first try.', test: s => s.perfect >= 10 },

  // Mastery
  { id: 'domain-any', group: 'Mastery', xp: 25, icon: '🧱', name: 'Domain Down', desc: 'Master every task in one NICET domain.', test: s => s.domainsMastered >= 1 },
  { id: 'l2-tasks', group: 'Mastery', xp: 50, icon: '🛠️', name: 'Level II Toolkit', desc: 'Master all twelve Level II tasks.', test: s => s.l2TasksMastered >= 12 },

  // Code lookup
  { id: 'lookup-100', group: 'Code lookup', xp: 25, icon: '📚', name: 'Well Tabbed', desc: 'Find 100 exact code sections in lookup drills.', test: s => s.exact >= 100 },
  { id: 'lookup-books', group: 'Code lookup', xp: 25, icon: '📖', name: 'Three Books Deep', desc: 'Find at least 5 exact sections in each of NFPA 72, the NEC and the IBC.', test: s => s.exactNfpa72 >= 5 && s.exactNec >= 5 && s.exactIbc >= 5 },
  { id: 'lookup-15s', group: 'Code lookup', xp: 25, icon: '🚀', name: 'Speed Tab', desc: 'Find an exact section in under 15 seconds.', test: s => s.fastestMs != null && s.fastestMs < 15000 },
  { id: 'lookup-all', group: 'Code lookup', xp: 50, icon: '🗄️', name: 'Every Tab', desc: 'Find every exact section in the lookup drills.', test: s => s.lookupTotal > 0 && s.exact >= s.lookupTotal },

  // Cite it
  { id: 'cite-ch-50', group: 'Cite it', xp: 10, icon: '🧭', name: 'Right Chapter', desc: 'Name the right chapter 50 times in Cite it.', test: s => s.citesChapter >= 50 },
  { id: 'cite-ex-25', group: 'Cite it', xp: 10, icon: '🔖', name: 'Chapter and Verse', desc: 'Cite the exact section 25 times in Cite it.', test: s => s.citesExact >= 25 },
  { id: 'cite-ex-100', group: 'Cite it', xp: 25, icon: '📑', name: 'Walking Codebook', desc: 'Cite the exact section 100 times in Cite it.', test: s => s.citesExact >= 100 },
  { id: 'cite-ex-250', group: 'Cite it', xp: 50, icon: '🏛️', name: 'Book Smart', desc: 'Cite the exact section 250 times in Cite it.', test: s => s.citesExact >= 250 },

  // Practice exams
  { id: 'exam-first-try', group: 'Practice exams', xp: 25, icon: '🥇', name: 'First Time Through', desc: 'Pass a practice exam on your first attempt at that level.', test: s => s.examFirstTry },
  { id: 'exam-90', group: 'Practice exams', xp: 25, icon: '🌟', name: 'Overqualified', desc: 'Score 90% or better on a practice exam.', test: s => s.examBest >= 90 },
  { id: 'exam-fast', group: 'Practice exams', xp: 10, icon: '⌛', name: 'Time to Spare', desc: 'Pass a practice exam with at least a fifth of the time left.', test: s => s.examFast },

  // Review
  { id: 'review-50', group: 'Review', xp: 25, icon: '🧠', name: 'Locked In', desc: 'Graduate 50 items out of Review.', test: s => s.graduated >= 50 },
  { id: 'review-200', group: 'Review', xp: 50, icon: '🗃️', name: 'Long-Term Memory', desc: 'Graduate 200 items out of Review.', test: s => s.graduated >= 200 },

  // Circuit Lab
  { id: 'lab-station-full', group: 'Circuit Lab', xp: 25, icon: '🎚️', name: 'Calibrated', desc: 'Score full marks at one Circuit Lab station.', test: s => s.labFull >= 1 },
  { id: 'lab-all-full', group: 'Circuit Lab', xp: 50, icon: '🏭', name: 'Bench Master', desc: 'Score full marks at every Circuit Lab station.', test: s => s.labStationCount > 0 && s.labFull >= s.labStationCount },

  // Hidden until earned
  { id: 'exam-100', group: 'Hidden', hidden: true, xp: 50, icon: '💎', name: 'Clean Sweep', desc: 'Score 100% on a practice exam.', test: s => s.examBest >= 100 },
  { id: 'exam-comeback', group: 'Hidden', hidden: true, xp: 25, icon: '🔄', name: 'Comeback', desc: 'Pass a practice exam after failing one at the same level.', test: s => s.examComeback }
];
