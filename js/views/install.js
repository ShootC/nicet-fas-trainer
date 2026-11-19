// Get the app: how a technician installs the trainer on a phone or computer.
// Written so a training manager can send one link: .../#/install
import { el, esc, toast } from '../util.js';
import { canPrompt, promptInstall, isInstalled, platform, onInstallChange } from '../pwa.js';

const STEPS = {
  ios: {
    title: 'iPhone or iPad',
    steps: [
      'Open this page in <b>Safari</b>.',
      'Tap the <b>Share</b> button (the square with an arrow pointing up). On an iPhone it is at the bottom of the screen; on an iPad, at the top.',
      'Scroll down and tap <b>Add to Home Screen</b>.',
      'Tap <b>Add</b>. The red NICET FAS Trainer icon appears on your home screen.'
    ],
    note: 'Newer iPhones also offer Add to Home Screen from the Share menu in Chrome and Edge. From now on, open the app from the icon: on iPhone the home-screen app keeps its own progress, separate from Safari.'
  },
  android: {
    title: 'Android phone or tablet',
    steps: [
      'Open this page in <b>Chrome</b>.',
      'Tap <b>Install</b> if a banner offers it, or use the button at the top of this page.',
      'No banner? Tap the <b>⋮</b> menu at the top right, then <b>Add to Home screen</b> (or <b>Install app</b>), then <b>Install</b>.',
      'The app shows up on your home screen and in your app drawer.'
    ],
    note: 'Samsung Internet works too: menu ☰, then Add page to, then Home screen.'
  },
  desktop: {
    title: 'Windows, Mac or Chromebook',
    steps: [
      'Open this page in <b>Chrome</b> or <b>Microsoft Edge</b>.',
      '<b>Chrome:</b> click the install icon at the right end of the address bar (a screen with a down arrow). Or open the <b>⋮</b> menu, then <b>Cast, save, and share</b>, then <b>Install</b>.',
      '<b>Edge:</b> open the <b>⋯</b> menu, then <b>Apps</b>, then <b>Install this site as an app</b>.',
      'The trainer opens in its own window and gets a Start menu, taskbar or Dock icon like any program.'
    ],
    note: 'Mac with Safari (macOS Sonoma or newer): File, then Add to Dock. Firefox cannot install web apps; bookmark the page instead.'
  }
};

export function render(main) {
  const here = platform();
  const url = location.origin + location.pathname.replace(/index\.html$/, '');

  main.append(el('div', { class: 'head' },
    '<span class="eyebrow">Free · no account · no app store</span><h1>Get the app</h1>' +
    '<p class="lede">Install the NICET FAS Trainer on your phone or computer in under a minute. ' +
    'Once installed it opens like any other app and keeps working with no signal, in basements and mechanical rooms included.</p>'));

  // Status and one-tap install where the browser supports it.
  const status = el('div', { class: 'card accent', style: 'max-width:820px' });
  const paint = () => {
    if (isInstalled()) {
      status.innerHTML = '<h3>You are using the installed app ✓</h3><p class="small muted" style="margin:6px 0 0">Nothing else to do. Updates arrive on their own whenever you open it with a signal.</p>';
      return;
    }
    status.innerHTML = '<span class="eyebrow">Your link</span><p class="mono" style="margin:4px 0 10px;word-break:break-all">' + esc(url) + '</p>';
    const row = el('div', { class: 'row' });
    if (canPrompt()) {
      const b = el('button', { type: 'button', class: 'btn primary' }, 'Install the app');
      b.addEventListener('click', async () => {
        const r = await promptInstall();
        if (r === 'accepted') toast('Installed. Look for the red icon.');
        paint();
      });
      row.append(b);
    }
    const copy = el('button', { type: 'button', class: 'btn' + (canPrompt() ? '' : ' primary') }, 'Copy link');
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(url); toast('Link copied'); }
      catch (e) { toast('Select the link above and copy it'); }
    });
    row.append(copy);
    status.append(row);
    if (!canPrompt()) status.append(el('p', { class: 'small muted', style: 'margin:10px 0 0' }, 'Follow the steps for your device below.'));
  };
  paint();
  const off = onInstallChange(paint);
  main.append(status);

  // Steps: the reader's own device first and open; the others folded.
  const order = [here, ...Object.keys(STEPS).filter(k => k !== here)];
  const list = el('div', { class: 'section bookmap', style: 'max-width:820px' }, '<h2>Install steps</h2>');
  for (const k of order) {
    const s = STEPS[k];
    const d = el('details', k === here ? { open: true } : {},
      '<summary>' + esc(s.title) + (k === here ? '<span class="pill">this device</span>' : '') + '</summary>' +
      '<ol style="margin:0 14px 10px 32px;padding:0">' + s.steps.map(t => '<li style="margin-bottom:6px">' + t + '</li>').join('') + '</ol>' +
      '<p class="small muted" style="margin:0 14px 14px">' + esc(s.note) + '</p>');
    list.append(d);
  }
  main.append(list);

  main.append(el('div', { class: 'section', style: 'max-width:820px' },
    '<h2>Good to know</h2><div class="grid g2">' +
    '<div class="card"><h3>Your progress</h3><p class="small" style="margin:6px 0 0">Saved on this device only; there is no account. To switch phones or show your trainer, use <a href="#/progress">Progress</a> → <b>Export progress</b>, then <b>Import progress</b> on the other device. Clearing browser data or removing the app erases progress, so export first.</p></div>' +
    '<div class="card"><h3>Updates and offline</h3><p class="small" style="margin:6px 0 0">Open the app once with a signal and it works offline after that. New questions and fixes load automatically the next time you open it with a signal.</p></div>' +
    '<div class="card"><h3>Have your books</h3><p class="small" style="margin:6px 0 0">The NICET exam is open book. Practice the lookups with the books you will bring. Level I: NFPA 72-2022, NEC 2020 and Ugly’s 2020. Level II adds IBC 2021.</p></div>' +
    '<div class="card"><h3>Where to start</h3><p class="small" style="margin:6px 0 0">Open <a href="#/level/l1">Level I</a> and start with task 1.1.1. Pass the Level I practice exam at 75% to open Level II. Missed questions come back in Review.</p></div>' +
    '</div><p class="small muted" style="margin-top:12px">A study aid. Not affiliated with NICET, NFPA or ICC.</p>'));

  return off;
}
