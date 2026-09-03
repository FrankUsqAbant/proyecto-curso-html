/**
 * DevFauna Academy — Modal de Cheat Sheets & Snippets de Producción
 */

export const CHEAT_SNIPPETS = [
  {
    title: 'Centrado Perfecto en 1 Línea (CSS)',
    category: 'CSS',
    code: `display: grid;
place-items: center;`
  },
  {
    title: 'Modal Nativo Accesible (HTML5)',
    category: 'HTML',
    code: `<dialog id="myModal">
  <p>Contenido del modal</p>
  <form method="dialog"><button>Cerrar</button></form>
</dialog>
<button onclick="document.getElementById('myModal').showModal()">Abrir</button>`
  },
  {
    title: 'Galería Responsiva sin Media Queries (CSS)',
    category: 'CSS',
    code: `display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 1.5rem;`
  },
  {
    title: 'Debounce Nativo en 3 Líneas (JS)',
    category: 'JS',
    code: `function debounce(fn, ms = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}`
  },
  {
    title: 'Copiar al Portapapeles (JS)',
    category: 'JS',
    code: `async function copyText(text) {
  await navigator.clipboard.writeText(text);
  console.log("¡Copiado con éxito!");
}`
  }
];

export function openSnippetsModal() {
  const existing = document.getElementById('snippets-modal-overlay');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'snippets-modal-overlay';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.3rem;">📜</span>
          <h3 style="margin: 0; color: #ffffff; font-size: 1.1rem;">Cheat Sheet: Snippets de Élite</h3>
        </div>
        <button id="close-modal-btn" class="btn-fauna btn-ghost" style="padding: 0.3rem 0.6rem;">✕</button>
      </div>

      <div class="modal-body">
        ${CHEAT_SNIPPETS.map((s, idx) => `
          <div style="background: var(--bg-app); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.9rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-weight: 700; color: #ffffff; font-size: 0.85rem;">${s.title}</span>
              <span style="font-size: 0.68rem; font-weight: 800; padding: 0.15rem 0.4rem; border-radius: 4px; background: rgba(255,255,255,0.08); color: var(--text-secondary);">
                ${s.category}
              </span>
            </div>
            <pre style="margin: 0; background: #06080e; padding: 0.65rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.78rem; color: #38bdf8; overflow-x: auto;"><code>${s.code}</code></pre>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('#close-modal-btn').addEventListener('click', () => {
    modal.remove();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}
