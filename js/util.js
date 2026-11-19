// Small DOM and data helpers shared by every view.
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
// Question text may carry a little trusted markup from our own data files (<b>, <i>, <sub>, <sup>, <br>).
export function rich(s) {
  return esc(s).replace(/&lt;(\/?)(b|i|em|strong|sub|sup|br)&gt;/g, '<$1$2>');
}
export function el(tag, attrs = {}, html = '') {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v);
  }
  if (html) e.innerHTML = html;
  return e;
}
export function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
export const fmtInt = n => Math.round(n).toLocaleString('en-US');
export function today(d = new Date()) {
  const z = n => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate());
}
export function mmss(s) {
  s = Math.max(0, Math.round(s));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}
export function toast(msg) {
  const t = el('div', { class: 'toast' }, esc(msg));
  $('#toasts').append(t);
  setTimeout(() => t.remove(), 2600);
}
// Modals queue up: a rank-up and an exam pass can arrive together, and both should be seen.
const modalQueue = [];
export function modal(html, onClose) {
  modalQueue.push([html, onClose]);
  if (modalQueue.length === 1) showNextModal();
}
function showNextModal() {
  const [html, onClose] = modalQueue[0];
  const d = $('#modal');
  d.innerHTML = '<div class="card">' + html + '<div class="row" style="justify-content:center;margin-top:16px"><button class="btn primary" data-close>OK</button></div></div>';
  // Advance the queue from the OK button itself: some browsers deliver the dialog "close"
  // event late or not at all. The close event still covers the Escape key; a stale one that
  // arrives while the next modal is already open is ignored.
  let done = false;
  const onCloseEvent = () => { if (!d.open) finish(); };
  const finish = () => {
    if (done) return;
    done = true;
    d.removeEventListener('close', onCloseEvent);
    modalQueue.shift();
    if (onClose) onClose();
    if (modalQueue.length) showNextModal();
  };
  d.querySelector('[data-close]').addEventListener('click', () => { d.close(); finish(); });
  d.addEventListener('close', onCloseEvent);
  d.showModal();
}
// Normalize a typed code reference so "§ 17.15.6", "17.15.6 " and "Sec. 17.15.6" compare equal.
export function normRef(s) {
  return String(s || '').toLowerCase()
    .replace(/section|sec\.|art\.|article|table|§|nfpa\s*\d+|nec|ibc|\s+/g, '')
    .replace(/[–—]/g, '-')
    .replace(/\.$/, '');
}
