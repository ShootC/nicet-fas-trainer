/* Loaded by lab/index.html inside the NICET FAS Trainer: adds a way back to the app.
   The standalone handout copy of the lab does not include this file. */
(function () {
  var bar = document.createElement('div');
  bar.setAttribute('style', 'display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 0;font-family:var(--font-display);text-transform:uppercase;letter-spacing:.04em;font-weight:600;font-size:16px;border-bottom:1px solid var(--line)');
  bar.innerHTML = '<a href="../index.html#/lab" style="color:var(--fg);text-decoration:none">← NICET FAS Trainer</a><span style="color:var(--muted);font-size:13px">Lab points count as XP</span>';
  var wrap = document.querySelector('.wrap') || document.body;
  wrap.insertBefore(bar, wrap.firstChild);
})();
