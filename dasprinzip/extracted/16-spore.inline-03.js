// two scenes in one page: the static heap and the endless tunnel, swapped by the button in each
const stage = document.getElementById('stage');
const load = (key) => {
  const bin = atob(document.getElementById('src-' + key).textContent.trim());
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  stage.srcdoc = new TextDecoder().decode(u8);
  // the address only follows along where the page is allowed to change it
  try { if (location.hash !== '#' + key) history.replaceState(null, '', '#' + key); } catch (e) { /* framed as srcdoc */ }
  stage.focus();
};
window.addEventListener('message', (e) => { if (e.data && (e.data.scene === 'heap' || e.data.scene === 'tunnel')) load(e.data.scene); });
window.addEventListener('hashchange', () => { const k = location.hash.slice(1); if (k === 'heap' || k === 'tunnel') load(k); });
load(location.hash === '#heap' ? 'heap' : 'tunnel');
