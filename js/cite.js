// Citations for the "Cite it" bonus: which chapter (or NEC article, or IBC section group) and which exact
// section a question's answer comes from. Built from the question's free-text `ref`, for example
//   "NFPA 72-2022 Table 14.4.3.2(17); 14.4.4.3"  ->  chapter 14, exact Table 14.4.3.2(17) or 14.4.4.3
// Only NFPA 72, the NEC and the IBC are cited; other sources (OSHA, Ugly's, manufacturer data) are skipped.
// A question can override the result with  cite: { chapters: [...], exact: [...] }  or turn it off with  cite: false.
// No DOM here, so tools/check-data.mjs can use it too.
import { BOOKS } from '../data/books.js';
import { normRef } from './util.js';

// normRef, plus: commas and the word "figure" do not matter.
const norm = s => normRef(s).replace(/,/g, '').replace(/^(figure|fig\.?|art)/, '');

const BOOK_PREFIX = [
  [/^NFPA\s*72(?:-\d{4})?\s*/i, 'nfpa72'],
  [/^(?:NFPA\s*70\s*)?\(?NEC\)?(?:\s*\d{4})?\s*/i, 'nec'],
  [/^IBC(?:\s*\d{4})?\s*/i, 'ibc']
];
// Words that continue a citation in the same book rather than start another source.
const CONTINUES = /^(ch|chapter|table|figure|article|art)\b/i;

// The chapter / article / section group a section number belongs to: the longest matching group key.
export function groupOf(book, sec) {
  const n = String(sec).replace(/^(table|figure)\s*/i, '').replace(/\(.*$/, '');
  let best = null;
  for (const g of Object.keys(BOOKS[book].groups)) {
    if ((n === g || n.startsWith(g + '.')) && (!best || g.length > best.length)) best = g;
  }
  return best;
}

export function parseCite(ref) {
  const chapters = [], exact = [];
  const addCh = (book, grp) => { if (grp && BOOKS[book].groups[grp] && !chapters.some(c => c.book === book && c.grp === grp)) chapters.push({ book, grp }); };
  const addEx = (book, sec, grp) => {
    sec = sec.trim(); if (!sec || exact.some(e => e.book === book && e.sec === sec)) return;
    const g = grp || groupOf(book, sec);
    const base = sec.replace(/(\([0-9a-zA-Z]+\))+$/, '');           // 760.154(A) -> 760.154, Table 14.4.3.2(17) -> Table 14.4.3.2
    const forms = [sec, base, sec.replace(/^figure\s*/i, ''), base.replace(/^figure\s*/i, '')];
    exact.push({ book, sec, grp: g, accept: [...new Set(forms.map(norm))] });
    addCh(book, g);
  };
  let book = null;
  for (let seg of String(ref || '').split(';')) {
    seg = seg.trim();
    const hit = BOOK_PREFIX.find(([re]) => re.test(seg));
    if (hit) { book = hit[1]; seg = seg.replace(hit[0], ''); }
    else if (/^[A-Za-z]/.test(seg) && !CONTINUES.test(seg)) { book = null; continue; }  // another source
    if (!book) continue;
    seg = seg.replace(/\s+\([^)]*\)/g, '').replace(/\band its annex\b/gi, '');        // drop " (description)"
    let afterCh9 = false;
    for (let part of seg.split(/,|\band\b/)) {
      part = part.trim(); if (!part) continue;
      let m;
      if (book === 'nec' && (m = part.match(/^(?:ch|chapter)\s*9\s*table\s*(\d+)/i))) { addEx(book, 'Chapter 9, Table ' + m[1], 'ch9'); continue; }
      if ((m = part.match(/^(?:ch|chapter)\s*(\d+)/i))) {
        const g = book === 'nec' && m[1] === '9' ? 'ch9' : book === 'ibc' ? 'ch' + m[1] : m[1];
        addCh(book, g); afterCh9 = book === 'nec' && m[1] === '9'; continue;
      }
      if ((m = part.match(/^article\s*(\d+)/i))) { addCh(book, m[1]); continue; }
      if (book === 'nec' && afterCh9 && (m = part.match(/^table\s*(\d+)$/i))) { addEx(book, 'Chapter 9, Table ' + m[1], 'ch9'); continue; }
      if ((m = part.match(/^((?:table|figure)\s*)?(\d+(?:\.\d+)*(?:\([0-9a-zA-Z]+\))*)/i))) {
        addEx(book, (m[1] ? m[1].trim().replace(/^./, c => c.toUpperCase()) + ' ' : '') + m[2]);
      }
    }
  }
  // NEC Chapter 9 tables: typed "Table 8", "Ch 9 Table 8" or "Chapter 9, Table 8" all count.
  for (const e of exact) if (e.grp === 'ch9') { const t = e.sec.match(/Table\s*(\d+)/i); if (t) e.accept = [t[1], 'ch9' + t[1], 'chapter9' + t[1]]; }
  return { chapters, exact };
}

const cache = new Map();
// The citation for a question, or null when it has nothing citable.
export function citeFor(q) {
  if (cache.has(q.id)) return cache.get(q.id);
  let c = null;
  if (q.cite !== false) {
    const p = q.cite && typeof q.cite === 'object' ? q.cite : parseCite(q.ref);
    if (p.chapters && p.chapters.length) c = { chapters: p.chapters, exact: p.exact || [] };
  }
  cache.set(q.id, c);
  return c;
}

// Is a typed section right? 'right' = a cited section, or one inside it (17.15.9.2 for 17.15);
// 'close' = an ancestor of a cited section (17.7 for 17.7.4.2.3.1); otherwise 'wrong'. null = nothing typed.
export function checkExact(cite, typed) {
  const v = norm(typed);
  if (!v) return null;
  const acc = cite.exact.flatMap(e => e.accept);
  if (acc.some(a => v === a || v.startsWith(a + '.') || v.startsWith(a + '('))) return 'right';
  if (acc.some(a => a.startsWith(v + '.') || a.startsWith(v + '('))) return 'close';
  return 'wrong';
}
