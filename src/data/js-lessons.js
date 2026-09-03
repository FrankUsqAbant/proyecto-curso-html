/**
 * DevFauna Academy — Retos de JavaScript Moderno
 * Mentor: 🦊 Kitsune el Zorro Astuto (DOM, Reactividad & Asincronía)
 */

export const JS_LESSONS = [
  {
    id: 'js-dom-filtering',
    title: '1. Filtro Reactivo del DOM en Vivo',
    level: 'Fundamental',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Aprende a capturar eventos de teclado (input) y actualizar una lista en el DOM en tiempo real usando métodos funcionales como filter() y map().',
    theory: 'En lugar de reescribir todo el DOM con bucles antiguos, el estándar moderno consiste en mantener un arreglo de datos (Estado) y crear una función render() pura que proyecta el estado al DOM.',
    objectives: [
      'Escucha el evento input en la barra de búsqueda',
      'Filtra el arreglo de fauna con .toLowerCase().includes()',
      'Renderiza los elementos filtrados con .innerHTML y .map()'
    ],
    initialCode: {
      html: `<div class="search-container">
  <h2>🦊 Explorador de Fauna Silvestre</h2>
  <input type="text" id="searchInput" placeholder="Buscar animal por nombre o hábitat..." class="search-box">
  
  <div id="resultsGrid" class="cards-grid"></div>
</div>`,
      css: `body {
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
.animal-card p { font-size: 0.8rem; color: #9ca3af; margin: 0; }`,
      js: `const ANIMALS = [
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
});`
    }
  },

  {
    id: 'js-audio-synthesis',
    title: '2. Sintetizador de Audio con Web Audio API',
    level: 'Avanzado',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Genera efectos sonoros matemáticos en tiempo real usando osciladores y nodos de ganancia nativos del navegador sin cargar archivos MP3.',
    theory: 'La Web Audio API es un motor de audio profesional dentro de JavaScript. Con AudioContext, OscillatorNode y GainNode puedes crear sonidos de campanas, trinos de pájaros y sintetizadores analógicos puros.',
    objectives: [
      'Instancia new AudioContext()',
      'Crea un oscilador senoidal con createOscillator()',
      'Aplica una curva exponencial de decaimiento con exponentialRampToValueAtTime()'
    ],
    initialCode: {
      html: `<div class="synth-box">
  <h2>🦊 Sintetizador de la Selva</h2>
  <p>Toca las frecuencias de fauna con la Web Audio API:</p>
  <div class="keys-row">
    <button class="key-btn" data-freq="523.25">🦉 Búho (C5)</button>
    <button class="key-btn" data-freq="659.25">🦎 Camaleón (E5)</button>
    <button class="key-btn" data-freq="783.99">🦊 Zorro (G5)</button>
    <button class="key-btn" data-freq="1046.50">🦅 Halcón (C6)</button>
  </div>
</div>`,
      css: `body {
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
}`,
      js: `let audioCtx = null;

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
});`
    }
  }
];
