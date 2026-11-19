// Install support. Chrome, Edge and Android browsers fire "beforeinstallprompt" when the app
// can be installed; we keep that event so the Get the app page can offer a one-tap Install button.
let deferred = null;
const listeners = new Set();

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferred = e;
  listeners.forEach(f => f());
});
window.addEventListener('appinstalled', () => {
  deferred = null;
  listeners.forEach(f => f());
});

export const canPrompt = () => !!deferred;
export const onInstallChange = f => { listeners.add(f); return () => listeners.delete(f); };

export async function promptInstall() {
  if (!deferred) return 'unavailable';
  const e = deferred;
  deferred = null;
  e.prompt();
  const choice = await e.userChoice.catch(() => ({ outcome: 'dismissed' }));
  listeners.forEach(f => f());
  return choice.outcome; // 'accepted' or 'dismissed'
}

// Already running as an installed app (home-screen icon or desktop window)?
export function isInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: window-controls-overlay)').matches ||
    window.navigator.standalone === true;
}

// Best guess at the device, to open the right set of steps first.
export function platform() {
  const ua = navigator.userAgent || '';
  const touchMac = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1; // iPadOS reports as a Mac
  if (/iPhone|iPad|iPod/.test(ua) || touchMac) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'desktop';
}
