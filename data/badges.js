// Badges: milestones worth celebrating. Each one is worth BADGE_XP.
// test(s) reads the stats object built in js/xp.js (badgeStats). Badges are computed from progress,
// so adding, renaming or re-ordering them never breaks a saved profile. Keep ids stable.
export const BADGE_XP = 25;

export const BADGES = [
  { id: 'first-answer', icon: '🔰', name: 'First Call', desc: 'Answer your first question.', test: s => s.answered >= 1 },
  { id: 'perfect-session', icon: '🎯', name: 'Clean Install', desc: 'Get every question in a 10-question task session right on the first try.', test: s => s.perfect >= 1 },
  { id: 'task-mastered', icon: '🔧', name: 'Task Mastered', desc: 'Master any NICET task (80% of its questions known).', test: s => s.tasksMastered >= 1 },
  { id: 'l1-tasks', icon: '🧰', name: 'Level I Toolkit', desc: 'Master all six Level I tasks.', test: s => s.l1TasksMastered >= 6 },
  { id: 'l1-pass', icon: '🎓', name: 'Level I Ready', desc: 'Pass the Level I practice exam.', test: s => s.l1Pass },
  { id: 'l2-pass', icon: '🏅', name: 'Level II Ready', desc: 'Pass the Level II practice exam.', test: s => s.l2Pass },
  { id: 'lookup-25', icon: '📘', name: 'Tabbed Up', desc: 'Find 25 exact code sections in lookup drills.', test: s => s.exact >= 25 },
  { id: 'lookup-fast', icon: '⏱️', name: 'Quick Draw', desc: 'Find an exact section in under 30 seconds.', test: s => s.fastestMs != null && s.fastestMs < 30000 },
  { id: 'chapters-50', icon: '🗂️', name: 'Know the Book', desc: 'Name the right chapter, article or section group 50 times.', test: s => s.chapters >= 50 },
  { id: 'review-10', icon: '🔁', name: 'It Stuck', desc: 'Graduate 10 items out of Review.', test: s => s.graduated >= 10 },
  { id: 'streak-7', icon: '🔥', name: 'On Shift', desc: 'Study 7 days in a row.', test: s => s.streak >= 7 },
  { id: 'lab-500', icon: '🔌', name: 'Bench Tech', desc: 'Earn 500 Circuit Lab points.', test: s => s.lab >= 500 },
  { id: 'lab-all', icon: '⚡', name: 'Every Bench', desc: 'Score points at all 11 Circuit Lab stations.', test: s => s.labStations >= 11 }
];
