(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const l=[{id:"html-semantic-layout",title:"1. El Esqueleto Sagrado: Layout Semántico",level:"Fundamental",guardian:"html",badge:"🦉 Archie",description:"Reemplaza el infierno de <div> anidados (Divitis) por elementos semánticos que los motores de búsqueda y lectores de pantalla adoran.",theory:"HTML5 introdujo etiquetas con significado real: <header>, <nav>, <main>, <article>, <aside> y <footer>. Usarlas mejora tu SEO en un 40% y hace que tu sitio sea accesible por ley.",objectives:["Usa <header> para el título y el logo","Usa <main> para el contenido principal único","Estructura una tarjeta con <article> y un pie de página con <footer>"],initialCode:{html:`<!-- 🦉 Reto de Archie: Convierte estos divs genéricos en HTML semántico puro -->
<div class="site-header">
  <h1>Reserva Natural DevFauna</h1>
  <p>Santuario de Código Limpio</p>
</div>

<div class="site-main">
  <div class="card">
    <h2>🦉 El Búho Nival</h2>
    <p>Guardián de la estructura web semántica y el código limpio.</p>
  </div>
</div>

<div class="site-footer">
  <p>© 2026 DevFauna Sanctuary</p>
</div>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
  margin: 0;
}
header, .site-header {
  border-bottom: 1px solid #1e293b;
  padding-bottom: 1rem;
}
article, .card {
  background: #131b2e;
  border: 1px solid #10b981;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
h1 { color: #10b981; margin: 0; }
h2 { color: #38bdf8; margin-top: 0; }
p { color: #94a3b8; line-height: 1.5; }
footer, .site-footer {
  font-size: 0.8rem;
  color: #64748b;
  border-top: 1px solid #1e293b;
  padding-top: 1rem;
}`,js:`console.log("🦉 Archie dice: 'Inspecciona los elementos semánticos en el preview'");`},solutionCode:{html:`<header class="site-header">
  <h1>Reserva Natural DevFauna</h1>
  <p>Santuario de Código Limpio</p>
</header>

<main class="site-main">
  <article class="card">
    <h2>🦉 El Búho Nival</h2>
    <p>Guardián de la estructura web semántica y el código limpio.</p>
  </article>
</main>

<footer class="site-footer">
  <p>© 2026 DevFauna Sanctuary</p>
</footer>`}},{id:"html-dialog-native",title:"2. Modales Nativos con <dialog>",level:"Intermedio",guardian:"html",badge:"🦉 Archie",description:"Olvida librerías de 50KB para abrir modales. HTML5 incluye la etiqueta nativa <dialog> con soporte de teclado (Esc) y fondo oscurecido.",theory:"El elemento <dialog> se abre mediante JavaScript llamando a dialog.showModal(). Esto crea automáticamente un backdrop que bloquea el resto de la página y cierra con la tecla Escape sin escribir una sola línea de código extra.",objectives:['Define un elemento <dialog id="faunaModal">',"Agrega un botón para abrir el modal con dialog.showModal()",'Agrega un formulario con method="dialog" para cerrarlo automáticamente'],initialCode:{html:`<!-- 🦉 Reto de Archie: Crea un modal nativo con <dialog> -->
<button id="openBtn" class="btn">✨ Ver Pasaporte de Fauna</button>

<dialog id="faunaModal" class="fauna-dialog">
  <h2>🐾 Pasaporte DevFauna</h2>
  <p>Has desbloqueado el rango de "Explorador de HTML5 Semántico".</p>
  <form method="dialog">
    <button class="btn btn-close">Cerrar Pasaporte (o presiona Esc)</button>
  </form>
</dialog>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 3rem;
  text-align: center;
}
.btn {
  background: #10b981;
  color: #020617;
  font-weight: 700;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.fauna-dialog {
  background: #131b2e;
  border: 2px solid #10b981;
  border-radius: 16px;
  color: #ffffff;
  padding: 2rem;
  max-width: 400px;
}
.fauna-dialog::backdrop {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
}
.btn-close {
  background: #334155;
  color: #ffffff;
  margin-top: 1rem;
}`,js:`const dialog = document.getElementById('faunaModal');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
  dialog.showModal(); // Método nativo de HTML5
  console.log("🦉 Modal abierto con soporte de tecla Escape nativo.");
});`}},{id:"html-modern-forms",title:"3. Formularios con Validación Nativa",level:"Avanzado",guardian:"html",badge:"🦉 Archie",description:"Aprovecha las validaciones nativas de HTML5: required, pattern regex, minlength y tipos de input especializados sin dependencias.",theory:'Atributos como type="email", required, pattern y minlength permiten que el navegador valide campos instantáneamente y aplique pseudoclases CSS como :valid e :invalid de forma automática.',objectives:['Crea un input con type="email" y required','Crea un input con pattern="[A-Z]{3}-[0-9]{3}" para un código de espécimen',"Estiliza estados válidos con :valid"],initialCode:{html:`<form id="faunaForm" class="fauna-form">
  <h2>📋 Registro de Especie</h2>
  
  <label for="email">Correo del Investigador:</label>
  <input type="email" id="email" required placeholder="investigador@fauna.org">

  <label for="specimen">Código de Espécimen (3 Letras - 3 Números):</label>
  <input type="text" id="specimen" required pattern="[A-Za-z]{3}-[0-9]{3}" placeholder="OWL-007">

  <button type="submit" class="submit-btn">Registrar Especie</button>
</form>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
  display: flex;
  justify-content: center;
}
.fauna-form {
  background: #131b2e;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
label { font-size: 0.85rem; color: #94a3b8; }
input {
  background: #0b0f17;
  border: 1px solid #334155;
  color: #ffffff;
  padding: 0.6rem;
  border-radius: 6px;
  font-size: 0.9rem;
}
input:focus { border-color: #38bdf8; outline: none; }
input:valid { border-color: #10b981; }
.submit-btn {
  background: #10b981;
  color: #020617;
  font-weight: 700;
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
}`,js:`document.getElementById('faunaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('🦉 ¡Especie validada con éxito usando validación nativa de HTML5!');
});`}}],p=[{id:"css-grid-autofit",title:"1. Grid Responsivo sin Media Queries",level:"Fundamental",guardian:"css",badge:"🦎 Chroma",description:"Aprende la fórmula matemática mágica de CSS Grid: repeat(auto-fit, minmax(...)) para crear galerías responsivas sin escribir un solo @media query.",theory:"Con grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); el navegador calcula automáticamente cuántas columnas caben según el ancho de pantalla y las estira de forma fluida.",objectives:["Aplica display: grid al contenedor de tarjetas","Usa repeat(auto-fit, minmax(180px, 1fr)) para las columnas","Agrega un gap moderno de 1rem"],initialCode:{html:`<!-- 🦎 Reto de Chroma: Crea una galería de hábitats responsiva -->
<div class="habitat-grid">
  <div class="card">
    <span class="emoji">🌲</span>
    <h3>Bosque Boreal</h3>
    <p>Hogar del lince y el búho nival.</p>
  </div>
  <div class="card">
    <span class="emoji">🦎</span>
    <h3>Selva Tropical</h3>
    <p>Territorio del camaleón pantera.</p>
  </div>
  <div class="card">
    <span class="emoji">🏔️</span>
    <h3>Tundra Ártica</h3>
    <p>Refugio de zorros y osos polares.</p>
  </div>
  <div class="card">
    <span class="emoji">🌊</span>
    <h3>Arrecife Coralino</h3>
    <p>Santuario de tortugas y manta rayas.</p>
  </div>
</div>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
  margin: 0;
}

/* 🦎 Aplica aquí el Grid Responsivo */
.habitat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
}

.card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  border-color: #06b6d4;
}
.emoji { font-size: 2.5rem; display: block; margin-bottom: 0.5rem; }
h3 { margin: 0.5rem 0; color: #06b6d4; }
p { font-size: 0.85rem; color: #9ca3af; line-height: 1.4; margin: 0; }`,js:`console.log("🦎 Chroma dice: 'Cambia el tamaño de la ventana y observa cómo las columnas se adaptan solas'");`}},{id:"css-glassmorphism",title:"2. Glassmorphism & Efectos de Vidrio Esmerilado",level:"Intermedio",guardian:"css",badge:"🦎 Chroma",description:"Domina la técnica de vidrio esmerilado usando background semitransparente, bordes tenues y backdrop-filter: blur().",theory:"El secreto del Glassmorphism consiste en superponer una superficie translúcida (rgba) sobre un fondo colorido con backdrop-filter: blur(12px) y un borde de 1px con brillo tenue.",objectives:["Aplica background: rgba(255, 255, 255, 0.08)","Aplica backdrop-filter: blur(16px)","Agrega un borde sutil con box-shadow suave"],initialCode:{html:`<div class="scene-container">
  <div class="floating-orb orb-1"></div>
  <div class="floating-orb orb-2"></div>
  
  <div class="glass-card">
    <h2>🦎 Camaleón Pantera</h2>
    <span class="badge">Furcifer pardalis</span>
    <p>Capaz de cambiar el color de su piel en menos de 20 milisegundos gracias a nanocristales de guanina.</p>
    <button class="action-btn">Explorar Fisiología</button>
  </div>
</div>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #090d16;
  color: #ffffff;
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scene-container {
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
}
.orb-1 { width: 180px; height: 180px; background: #06b6d4; top: 10px; left: 10px; }
.orb-2 { width: 160px; height: 160px; background: #10b981; bottom: 20px; right: 20px; }

/* 🦎 Estilizado Glassmorphism */
.glass-card {
  position: relative;
  z-index: 10;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  text-align: center;
}
h2 { margin: 0; color: #ffffff; }
.badge {
  display: inline-block;
  font-size: 0.75rem;
  color: #06b6d4;
  font-style: italic;
  margin: 0.4rem 0 1rem;
}
p { font-size: 0.88rem; color: #cbd5e1; line-height: 1.5; }
.action-btn {
  background: #06b6d4;
  color: #020617;
  font-weight: 700;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}`,js:`console.log("🦎 Chroma: 'Mueve el mouse para admirar el efecto óptico'");`}}],m=[{id:"js-dom-filtering",title:"1. Filtro Reactivo del DOM en Vivo",level:"Fundamental",guardian:"js",badge:"🦊 Kitsune",description:"Aprende a capturar eventos de teclado (input) y actualizar una lista en el DOM en tiempo real usando métodos funcionales como filter() y map().",theory:"En lugar de reescribir todo el DOM con bucles antiguos, el estándar moderno consiste en mantener un arreglo de datos (Estado) y crear una función render() pura que proyecta el estado al DOM.",objectives:["Escucha el evento input en la barra de búsqueda","Filtra el arreglo de fauna con .toLowerCase().includes()","Renderiza los elementos filtrados con .innerHTML y .map()"],initialCode:{html:`<div class="search-container">
  <h2>🦊 Explorador de Fauna Silvestre</h2>
  <input type="text" id="searchInput" placeholder="Buscar animal por nombre o hábitat..." class="search-box">
  
  <div id="resultsGrid" class="cards-grid"></div>
</div>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 1.5rem;
}
.search-container { max-width: 600px; margin: 0 auto; }
h2 { color: #f59e0b; margin-bottom: 1rem; }
.search-box {
  width: 100%;
  background: #111827;
  border: 1px solid #374151;
  color: #ffffff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  box-sizing: border-box;
}
.search-box:focus { border-color: #f59e0b; outline: none; }
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.25rem;
}
.animal-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 1rem;
}
.animal-card h4 { margin: 0 0 0.3rem 0; color: #f8fafc; }
.animal-card p { font-size: 0.8rem; color: #9ca3af; margin: 0; }`,js:`const ANIMALS = [
  { name: 'Búho Real', habitat: 'Bosque', emoji: '🦉' },
  { name: 'Camaleón de Velo', habitat: 'Selva', emoji: '🦎' },
  { name: 'Zorro Rojo', habitat: 'Pradera', emoji: '🦊' },
  { name: 'Lobo Ártico', habitat: 'Tundra', emoji: '🐺' },
  { name: 'Jaguar', habitat: 'Amazonía', emoji: '🐆' },
  { name: 'Nutria Marina', habitat: 'Costa', emoji: '🦦' }
];

const input = document.getElementById('searchInput');
const grid = document.getElementById('resultsGrid');

function render(list) {
  if (list.length === 0) {
    grid.innerHTML = '<p style="color: #64748b; grid-column: span 2;">No se encontraron especímenes.</p>';
    return;
  }
  grid.innerHTML = list.map(a => \`
    <div class="animal-card">
      <h4>\${a.emoji} \${a.name}</h4>
      <p>Hábitat: \${a.habitat}</p>
    </div>
  \`).join('');
}

// Render inicial
render(ANIMALS);

// 🦊 Escucha el evento 'input'
input.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = ANIMALS.filter(a => 
    a.name.toLowerCase().includes(query) || 
    a.habitat.toLowerCase().includes(query)
  );
  render(filtered);
  console.log(\`🦊 Kitsune filtró: \${filtered.length} coincidencias.\`);
});`}},{id:"js-audio-synthesis",title:"2. Sintetizador de Audio con Web Audio API",level:"Avanzado",guardian:"js",badge:"🦊 Kitsune",description:"Genera efectos sonoros matemáticos en tiempo real usando osciladores y nodos de ganancia nativos del navegador sin cargar archivos MP3.",theory:"La Web Audio API es un motor de audio profesional dentro de JavaScript. Con AudioContext, OscillatorNode y GainNode puedes crear sonidos de campanas, trinos de pájaros y sintetizadores analógicos puros.",objectives:["Instancia new AudioContext()","Crea un oscilador senoidal con createOscillator()","Aplica una curva exponencial de decaimiento con exponentialRampToValueAtTime()"],initialCode:{html:`<div class="synth-box">
  <h2>🦊 Sintetizador de la Selva</h2>
  <p>Toca las frecuencias de fauna con la Web Audio API:</p>
  <div class="keys-row">
    <button class="key-btn" data-freq="523.25">🦉 Búho (C5)</button>
    <button class="key-btn" data-freq="659.25">🦎 Camaleón (E5)</button>
    <button class="key-btn" data-freq="783.99">🦊 Zorro (G5)</button>
    <button class="key-btn" data-freq="1046.50">🦅 Halcón (C6)</button>
  </div>
</div>`,css:`body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2.5rem;
  text-align: center;
}
.synth-box {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
}
h2 { color: #f59e0b; margin-top: 0; }
.keys-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  margin-top: 1.5rem;
}
.key-btn {
  background: #1e293b;
  color: #ffffff;
  font-weight: 700;
  border: 1px solid #334155;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease;
}
.key-btn:active {
  background: #f59e0b;
  color: #080b11;
  transform: scale(0.96);
}`,js:`let audioCtx = null;

function playTone(freq) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const now = audioCtx.currentTime;

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.55);
}

document.querySelectorAll('.key-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const freq = parseFloat(btn.getAttribute('data-freq'));
    playTone(freq);
    console.log(\`🦊 Frecuencia emitida: \${freq} Hz\`);
  });
});`}}];class b{constructor(e){this.container=e,this.activeTab="html",this.code={html:"",css:"",js:""},this.debounceTimer=null,this._renderShell()}setCode(e,a=!0){this.code={html:e.html||"",css:e.css||"",js:e.js||""},this.updateEditorContent(),a&&this.runPreview()}getCode(){return{...this.code}}_renderShell(){this.container.className="sandbox-container",this.container.innerHTML=`
      <!-- Barra Superior de Pestañas -->
      <div class="editor-tab-bar">
        <div class="editor-tabs-group">
          <button class="code-tab-btn active" data-tab="html">
            <span class="tab-dot html"></span>
            <span>index.html</span>
          </button>
          <button class="code-tab-btn" data-tab="css">
            <span class="tab-dot css"></span>
            <span>style.css</span>
          </button>
          <button class="code-tab-btn" data-tab="js">
            <span class="tab-dot js"></span>
            <span>script.js</span>
          </button>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button id="sandbox-run-btn" class="btn-fauna btn-primary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
            <span>▶ Ejecutar</span>
          </button>
        </div>
      </div>

      <!-- Split Layout (Editor arriba / Vista Previa abajo) -->
      <div class="sandbox-split-layout">
        <!-- Editor de Código -->
        <div class="editor-code-pane">
          <textarea id="sandbox-textarea" class="editor-textarea" spellcheck="false" autocomplete="off"></textarea>
        </div>

        <!-- Panel de Vista Previa -->
        <div class="preview-pane">
          <div class="preview-bar">
            <span>VISTA PREVIA EN VIVO (LIVE PREVIEW)</span>
            <span id="preview-status-pill" style="color: #10b981;">● Activo</span>
          </div>
          <iframe id="sandbox-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals allow-same-origin"></iframe>
          <div id="sandbox-console" class="sandbox-console-dock">
            <div style="color: var(--text-muted); font-size: 0.7rem; font-weight: 700; margin-bottom: 0.2rem;">
              CONSOLA DE SALIDA
            </div>
            <div id="console-logs-list"></div>
          </div>
        </div>
      </div>
    `,this.container.querySelectorAll(".code-tab-btn").forEach(o=>{o.addEventListener("click",()=>{const t=o.getAttribute("data-tab");this.switchTab(t)})});const e=this.container.querySelector("#sandbox-textarea");e.addEventListener("input",o=>{this.code[this.activeTab]=o.target.value,clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.runPreview()},600)}),e.addEventListener("keydown",o=>{if(o.key==="Tab"){o.preventDefault();const t=e.selectionStart,i=e.selectionEnd;e.value=e.value.substring(0,t)+"  "+e.value.substring(i),e.selectionStart=e.selectionEnd=t+2,this.code[this.activeTab]=e.value}}),this.container.querySelector("#sandbox-run-btn").addEventListener("click",()=>{this.runPreview()})}switchTab(e){const a=this.container.querySelector("#sandbox-textarea");this.code[this.activeTab]=a.value,this.activeTab=e,this.container.querySelectorAll(".code-tab-btn").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-tab")===e)}),this.updateEditorContent()}updateEditorContent(){const e=this.container.querySelector("#sandbox-textarea");e.value=this.code[this.activeTab]||""}runPreview(){const e=this.container.querySelector("#sandbox-iframe"),a=this.container.querySelector("#console-logs-list");a.innerHTML="";const t=`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          ${this.code.css}
        </style>
        
      <script>
        (function() {
          const oldLog = console.log;
          console.log = function(...args) {
            oldLog.apply(console, args);
            window.parent.postMessage({ type: 'DEVFAUNA_LOG', text: args.join(' ') }, '*');
          };
          window.onerror = function(msg, url, line) {
            window.parent.postMessage({ type: 'DEVFAUNA_LOG', text: '❌ Error: ' + msg + ' (Línea ' + line + ')' }, '*');
          };
        })();
      <\/script>
    
      </head>
      <body>
        ${this.code.html}
        <script>
          try {
            ${this.code.js}
          } catch(err) {
            console.log('❌ ' + err.message);
          }
        <\/script>
      </body>
      </html>
    `;e.srcdoc=t}}const g=[{title:"Centrado Perfecto en 1 Línea (CSS)",category:"CSS",code:`display: grid;
place-items: center;`},{title:"Modal Nativo Accesible (HTML5)",category:"HTML",code:`<dialog id="myModal">
  <p>Contenido del modal</p>
  <form method="dialog"><button>Cerrar</button></form>
</dialog>
<button onclick="document.getElementById('myModal').showModal()">Abrir</button>`},{title:"Galería Responsiva sin Media Queries (CSS)",category:"CSS",code:`display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 1.5rem;`},{title:"Debounce Nativo en 3 Líneas (JS)",category:"JS",code:`function debounce(fn, ms = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}`},{title:"Copiar al Portapapeles (JS)",category:"JS",code:`async function copyText(text) {
  await navigator.clipboard.writeText(text);
  console.log("¡Copiado con éxito!");
}`}];function f(){const s=document.getElementById("snippets-modal-overlay");s&&s.remove();const e=document.createElement("div");e.id="snippets-modal-overlay",e.className="modal-overlay",e.innerHTML=`
    <div class="modal-card">
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.3rem;">📜</span>
          <h3 style="margin: 0; color: #ffffff; font-size: 1.1rem;">Cheat Sheet: Snippets de Élite</h3>
        </div>
        <button id="close-modal-btn" class="btn-fauna btn-ghost" style="padding: 0.3rem 0.6rem;">✕</button>
      </div>

      <div class="modal-body">
        ${g.map((a,o)=>`
          <div style="background: var(--bg-app); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.9rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-weight: 700; color: #ffffff; font-size: 0.85rem;">${a.title}</span>
              <span style="font-size: 0.68rem; font-weight: 800; padding: 0.15rem 0.4rem; border-radius: 4px; background: rgba(255,255,255,0.08); color: var(--text-secondary);">
                ${a.category}
              </span>
            </div>
            <pre style="margin: 0; background: #06080e; padding: 0.65rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.78rem; color: #38bdf8; overflow-x: auto;"><code>${a.code}</code></pre>
          </div>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#close-modal-btn").addEventListener("click",()=>{e.remove()}),e.addEventListener("click",a=>{a.target===e&&e.remove()})}class h{constructor(){this.currentGuardian="html",this.currentLessonIndex=0,this.sandbox=null,this.init()}get lessonsMap(){return{html:l,css:p,js:m}}get currentLessons(){return this.lessonsMap[this.currentGuardian]||l}get activeLesson(){return this.currentLessons[this.currentLessonIndex]||this.currentLessons[0]}init(){const e=document.getElementById("app");if(!e)return;e.innerHTML=`
      <!-- 1. Header Animalista de Élite -->
      <header class="app-header">
        <div class="brand-group">
          <div class="brand-icon-box">🐾</div>
          <div>
            <div class="brand-title">DevFauna Academy</div>
            <div style="font-size: 0.68rem; color: var(--text-muted);">Trinidad Web: HTML5 • CSS3 • JavaScript</div>
          </div>
        </div>

        <!-- Selector de los 3 Guardianes -->
        <nav class="guardians-nav">
          <button class="guardian-tab-btn active guardian-html" data-guardian="html">
            <span>🦉</span>
            <span>Archie (HTML5)</span>
          </button>
          <button class="guardian-tab-btn guardian-css" data-guardian="css">
            <span>🦎</span>
            <span>Chroma (CSS3)</span>
          </button>
          <button class="guardian-tab-btn guardian-js" data-guardian="js">
            <span>🦊</span>
            <span>Kitsune (JS)</span>
          </button>
        </nav>

        <div class="header-right-actions">
          <button id="header-snippets-btn" class="btn-fauna btn-ghost" title="Ver Snippets Rápidos">
            <span>📜 Cheat Sheet</span>
          </button>
        </div>
      </header>

      <!-- 2. Main Workspace (Split 2 Columnas) -->
      <main class="main-workspace">
        <!-- Panel Izquierdo: Lista de Retos y Teoría -->
        <aside class="lesson-sidebar" id="lesson-sidebar-container"></aside>

        <!-- Panel Derecho: Live Code Sandbox -->
        <section class="sandbox-viewport" id="sandbox-viewport-container"></section>
      </main>
    `;const a=document.getElementById("sandbox-viewport-container");this.sandbox=new b(a),this.renderSidebar(),this.loadActiveLesson(),document.querySelectorAll(".guardian-tab-btn").forEach(o=>{o.addEventListener("click",()=>{const t=o.getAttribute("data-guardian");this.switchGuardian(t)})}),document.getElementById("header-snippets-btn").addEventListener("click",()=>{f()}),window.addEventListener("message",o=>{if(o.data&&o.data.type==="DEVFAUNA_LOG"){const t=document.getElementById("console-logs-list");if(t){const i=document.createElement("div");i.className="console-entry",i.textContent=`> ${o.data.text}`,t.appendChild(i)}}})}switchGuardian(e){this.currentGuardian=e,this.currentLessonIndex=0,document.querySelectorAll(".guardian-tab-btn").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-guardian")===e)}),this.renderSidebar(),this.loadActiveLesson()}loadActiveLesson(){const e=this.activeLesson;e&&this.sandbox&&this.sandbox.setCode(e.initialCode,!0)}renderSidebar(){const e=document.getElementById("lesson-sidebar-container");if(!e)return;const a=this.activeLesson,o=this.currentLessons,t=this.currentGuardian==="html"?"var(--guardian-html)":this.currentGuardian==="css"?"var(--guardian-css)":"var(--guardian-js)";e.style.setProperty("--current-guardian-color",t),e.innerHTML=`
      <!-- Selector de Lecciones de este Guardián -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">
          RETOS DEL GUARDIÁN (${o.length})
        </span>
        <div class="lessons-list-group">
          ${o.map((n,d)=>`
            <div class="lesson-pill-item ${d===this.currentLessonIndex?"active":""}" data-index="${d}">
              <span>${n.title}</span>
              <span style="font-size: 0.68rem; color: var(--text-muted);">${n.level}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Tarjeta del Reto Activo -->
      <div class="challenge-card">
        <div class="challenge-header">
          <span class="challenge-badge" style="background: rgba(255,255,255,0.06); color: ${t}; border: 1px solid var(--border-subtle);">
            ${a.badge}
          </span>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">Nivel ${a.level}</span>
        </div>

        <div class="challenge-title">${a.title}</div>
        <p class="challenge-desc">${a.description}</p>

        <div class="objectives-box">
          <div class="objectives-title">Objetivos Pedagógicos</div>
          ${a.objectives.map(n=>`
            <div class="objective-item">
              <span style="color: ${t};">🐾</span>
              <span>${n}</span>
            </div>
          `).join("")}
        </div>

        <div style="background: rgba(255,255,255,0.02); border-left: 3px solid ${t}; padding: 0.75rem; border-radius: 4px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
          <strong>💡 Principio Clave:</strong> ${a.theory}
        </div>

        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
          <button id="reset-lesson-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ↺ Resetear Código
          </button>
          <button id="load-solution-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ✨ Ver Solución
          </button>
        </div>
      </div>
    `,e.querySelectorAll(".lesson-pill-item").forEach(n=>{n.addEventListener("click",()=>{const d=parseInt(n.getAttribute("data-index"),10);this.currentLessonIndex=d,this.renderSidebar(),this.loadActiveLesson()})});const i=e.querySelector("#reset-lesson-btn");i&&i.addEventListener("click",()=>{this.loadActiveLesson()});const r=e.querySelector("#load-solution-btn");r&&r.addEventListener("click",()=>{a.solutionCode?this.sandbox.setCode({html:a.solutionCode.html||a.initialCode.html,css:a.solutionCode.css||a.initialCode.css,js:a.solutionCode.js||a.initialCode.js},!0):alert("¡El código inicial ya contiene la estructura base para resolver este reto!")})}}let c=!1;function u(){c||(c=!0,new h)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();
