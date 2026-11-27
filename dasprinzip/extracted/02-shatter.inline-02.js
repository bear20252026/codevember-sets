  const __fail = (msg) => {
    const l = document.getElementById('loader');
    if (!l) return;
    l.classList.remove('hidden');
    const sp = l.querySelector('.spinner'); if (sp) sp.style.display = 'none';
    const t = l.querySelector('.loading-text');
    if (t) t.textContent = 'error — ' + msg;
  };
  window.addEventListener('error', e => __fail(e.message || 'script error'));
  window.addEventListener('unhandledrejection', e =>
    __fail(e.reason && e.reason.message ? e.reason.message : String(e.reason)));
