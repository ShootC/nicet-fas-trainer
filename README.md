# NICET FAS Trainer

A study app for NICET Fire Alarm Systems candidates, starting with Levels I and II. It runs in any browser and installs on a phone like an app. Nothing to sign up for: each trainee's progress stays in their own browser.

**What's in it**

- **Level tracks** built on NICET's own content outline. Each level has its domains, weights and tasks, a question bank per task, and a timed practice exam at the real exam's pace.
- **Leveling.** Every right answer earns XP. Ten ranks run from Trainee to Master Tech. Level II stays locked until the Level I practice exam is passed.
- **Badges.** Thirteen milestones (a perfect session, a mastered task, a fast lookup, a 7-day streak and more) are worth 25 XP each. Once earned, a badge is kept, even if new questions later pull a task back under mastery. Edit them in `data/badges.js`.
- **Code lookup drills** for NFPA 72-2022, NEC 2020 and IBC 2021. There are two drill types, "which chapter?" and "exact section", each timed against exam pace. A book map and a printable tab list come from the same data.
- **Review.** Spaced repetition brings back every miss after 1, 3 and 7 days until it sticks.
- **Circuit Lab.** These are the 11 hands-on stations from `FAS-Circuit-Lab.html`, and their points count as XP.

The standalone `FAS-Circuit-Lab.html` handout still works on its own. This app is the bigger study tool.

## Running it

- **Online:** GitHub Pages publishes it automatically on every push to `main` (see `.github/workflows/pages.yml`).
- **On your computer:** `node tools/serve.mjs`, then open http://localhost:5190. You need [Node.js](https://nodejs.org). The app uses JavaScript modules, so double-clicking `index.html` will not work.

## Editing questions

Questions live in `data/questions/`, one file per NICET domain (`1.1.js` = Level I Installation, and so on). Each file maps a task id to a list of questions:

```js
export default {
  '1.1.1': [
    { id: '1.1.1-01', type: 'mc',
      q: 'Question text',
      opts: ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
      a: 1,                                   // index of the right choice, counting from 0
      ex: 'Why the answer is right, and why the tempting wrong one is wrong.',
      ref: 'NFPA 72-2022 17.15.6' },
    { id: '1.1.1-02', type: 'num', q: '...', unit: 'V', a: 18.93, tol: 0.05, ex: '...', ref: '...' },
    { id: '1.1.1-03', type: 'multi', q: '...', opts: ['...', '...', '...', '...'], a: [0, 2], ex: '...', ref: '...' }
  ]
};
```

- **Never reuse or renumber an `id`.** Progress is stored by id. To retire a question, delete it. To add one, give it a new id.
- `ex` is required. This is a teaching tool, so explain the why.
- You can edit right on github.com: open the file, click the pencil, then commit. The publish workflow runs `tools/check-data.mjs` first. If a comma is missing or an answer index is out of range, the run fails, the site keeps the last good version, and the Actions tab says what to fix.
- To check on your own computer, run `node tools/check-data.mjs`.

## Editing lookups

Lookups live in `data/lookups/` (`nfpa72.js`, `nec.js`, `ibc.js`). Each item looks like this:

```js
{ id: '72-18.5.5.8.5', book: 'nfpa72', grp: '18', sec: '18.5.5.8.5', close: ['18.5.5.8'],
  topic: 'Corridor strobes: distance from the end and spacing between them',
  value: 'Within 15 ft of each end, no more than 100 ft apart',
  path: ['Ch 18', '18.5.5.8 Spacing in Corridors'],
  find: 'Right after the room spacing tables.',
  levels: ['l1', 'l2'], status: 'confirmed' }
```

- `grp` must match a chapter, article or section group in `data/books.js`.
- `status: 'confirmed'` means the number was checked against the edition NICET uses. Anything else shows a "verify in your book" note.

## Settings a trainer may change

`data/config.js` holds the XP values, rank names and thresholds, the practice-exam pass mark (75%), and the task-mastery bar (80%). XP is recalculated from saved answers, so changing these never breaks anyone's progress.

## Updating the Circuit Lab

After editing `FAS-Circuit-Lab.html` in the training folder, run this from this folder:

```
node tools/sync-lab.mjs ../FAS-Circuit-Lab.html
```

It copies the lab to `lab/index.html` and adds the "back to the trainer" bar.

## Code editions

NICET's current FAS exams use NFPA 72-2022, NFPA 70-2020, IBC 2021 and Ugly's 2020. NICET has announced updated exams on **April 19, 2027**, using NFPA 72-2025, NFPA 70-2023 and IBC 2024; those outlines are still marked draft. Section numbers move between editions. One example: the corridor strobe spacing rule is 18.5.5.8.5 in 2022 but 18.5.5.8.4 in 2025. A 2025 question set will need its own lookup numbers.

## Copyright

The app points to code sections; it does not reproduce code text. Topics and explanations are written in our own words. NFPA 72 and NFPA 70 are NFPA publications; the IBC is an ICC publication. This project is not affiliated with NICET, NFPA or ICC.
