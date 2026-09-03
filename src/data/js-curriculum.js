/**
 * DevFauna Academy — Currículum Completo de JavaScript Moderno (ES2024)
 * Mentor: 🦊 Kitsune el Zorro Astuto (Dinamismo, DOM, Async/Await & Web APIs)
 */

export const JS_CURRICULUM = [
  {
    id: 'js-modern-syntax-ternary',
    title: '1. Variables Modernas, Template Literals y Ternarios',
    level: 'Básico',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Abandona var y la concatenación antigua con signos +. Domina const, template literals y operadores ternarios.',
    theory: 'Template literals con comillas invertidas (\`...\`) permiten interpolar variables con \${valor} y saltos de línea limpios. El operador ternario (condicion ? verdad : falso) simplifica condicionales en una línea.',
    objectives: [
      'Declara variables con const o let (nunca var)',
      'Usa un template literal con interpolación de variables ${...}',
      'Aplica un operador ternario para calcular el estado'
    ],
    hint: 'const mensaje = `Animal: ${nombre} (${esNocturno ? "Nocturno" : "Diurno"})`;',
    initialCode: {
      html: `<div id="output" class="result-box"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.result-box {
  background: #111827;
  border: 1px solid #1f2937;
  border-left: 3px solid #f59e0b;
  border-radius: 8px;
  padding: 1.5rem;
  font-size: 1.1rem;
  color: #ffffff;
}`,
      js: `// 🦊 Reto de Kitsune: Refactoriza este código antiguo a ES2024
const nombre = "Zorro Fénnec";
const velocidadKmH = 40;
const esNocturno = true;

// Usa un template literal y un operador ternario
const salida = \`🦊 \${nombre} — Velocidad: \${velocidadKmH} km/h | Hábitat: \${esNocturno ? 'Nocturno' : 'Diurno'}\`;

document.getElementById('output').textContent = salida;
console.log(salida);`
    },
    solutionCode: {
      js: `const nombre = "Zorro Fénnec";
const velocidadKmH = 40;
const esNocturno = true;

const salida = \`🦊 \${nombre} — Velocidad: \${velocidadKmH} km/h | Hábitat: \${esNocturno ? 'Nocturno' : 'Diurno'}\`;
document.getElementById('output').textContent = salida;`
    },
    tests: [
      { desc: 'Usa const o let (sin var)', test: (c) => !/\bvar\s+/i.test(c.js) && (/\bconst\s+/i.test(c.js) || /\blet\s+/i.test(c.js)) },
      { desc: 'Usa un template literal (`...${...}`)', test: (c) => /`[^`]*\${[^}]+}[^`]*`/i.test(c.js) },
      { desc: 'Usa un operador ternario (? :)', test: (c) => /\?[^:]+:/i.test(c.js) }
    ]
  },

  {
    id: 'js-arrow-functions-destructuring',
    title: '2. Arrow Functions, Desestructuración y Spread',
    level: 'Básico',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Extrae propiedades directamente con { nombre, edad } y combina objetos con el operador spread (...).',
    theory: 'La desestructuración te ahorra escribir objeto.propiedad 10 veces. El operador spread (...) clona objetos y arreglos de forma inmutable sin efectos secundarios.',
    objectives: [
      'Declara una función flecha (arrow function)',
      'Desestructura propiedades { especie, habitat } en los parámetros',
      'Usa el operador spread (...) para clonar o agregar propiedades'
    ],
    hint: 'const formatFauna = ({ especie, habitat, ...resto }) => ({ ...resto, especie, habitat });',
    initialCode: {
      html: `<div id="cardOutput" class="result-box"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.result-box {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 8px;
  padding: 1.5rem;
  color: #f59e0b;
  font-family: monospace;
}`,
      js: `// 🦊 Reto de Kitsune: Crea una arrow function con desestructuración y spread
const zorroData = {
  especie: 'Vulpes vulpes',
  comun: 'Zorro Rojo',
  habitat: 'Bosques y Praderas',
  sigilo: 95
};

// Convierte a Arrow Function con desestructuración
const presentarFauna = ({ comun, habitat, ...detalles }) => {
  const clonado = { ...detalles, comun, habitat, activo: true };
  return \`🦊 \${comun} (\${habitat}) — Sigilo: \${clonado.sigilo}%\`;
};

document.getElementById('cardOutput').textContent = presentarFauna(zorroData);
console.log(presentarFauna(zorroData));`
    },
    solutionCode: {
      js: `const zorroData = {
  especie: 'Vulpes vulpes',
  comun: 'Zorro Rojo',
  habitat: 'Bosques y Praderas',
  sigilo: 95
};

const presentarFauna = ({ comun, habitat, ...detalles }) => {
  const clonado = { ...detalles, comun, habitat, activo: true };
  return \`🦊 \${comun} (\${habitat}) — Sigilo: \${clonado.sigilo}%\`;
};

document.getElementById('cardOutput').textContent = presentarFauna(zorroData);`
    },
    tests: [
      { desc: 'Usa una Arrow Function (=>)', test: (c) => /=>/i.test(c.js) },
      { desc: 'Aplica desestructuración ({ ... })', test: (c) => /\{\s*[a-zA-Z0-9_,\s]+\s*\}/i.test(c.js) },
      { desc: 'Usa el operador spread (...)', test: (c) => /\.\.\.[a-zA-Z0-9_]+/i.test(c.js) }
    ]
  },

  {
    id: 'js-dom-manipulation',
    title: '3. Manipulación Dinámica del DOM y createElement',
    level: 'Intermedio',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Crea elementos con document.createElement(), aplica clases con classList y conéctalos al árbol sin romper el rendimiento.',
    theory: 'Modificar innerHTML en bucles destruye listeners y fuerza re-renderizados costosos. El enfoque seguro de ingeniería consiste en usar createElement(), classList.add() y append().',
    objectives: [
      'Crea un elemento con document.createElement("div")',
      'Agrega clases usando elemento.classList.add(...)',
      'Inserta el nodo en el DOM con append() o appendChild()'
    ],
    hint: 'const item = document.createElement("div"); item.classList.add("fauna-item"); contenedor.append(item);',
    initialCode: {
      html: `<h2>🦊 Manada del Zorro: Generador Dinámico</h2>
<button id="addBtn" class="btn">🐾 Añadir Miembro a la Manada</button>
<div id="packList" class="pack-container"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
h2 { color: #f59e0b; margin-top: 0; }
.btn {
  background: #f59e0b;
  color: #080b11;
  font-weight: 700;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}
.pack-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.fauna-card {
  background: #111827;
  border: 1px solid #1f2937;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
}`,
      js: `let counter = 1;
const btn = document.getElementById('addBtn');
const container = document.getElementById('packList');

btn.addEventListener('click', () => {
  // 🦊 Crea el nodo con createElement y classList
  const card = document.createElement('div');
  card.classList.add('fauna-card');
  card.innerHTML = \`<span>🦊 Zorro Explorador #\${counter}</span><span style="color: #10b981;">● Activo</span>\`;
  container.append(card);
  counter++;
  console.log(\`Miembro #\${counter - 1} añadido al DOM\`);
});`
    },
    solutionCode: {
      js: `let counter = 1;
const btn = document.getElementById('addBtn');
const container = document.getElementById('packList');

btn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.classList.add('fauna-card');
  card.innerHTML = \`<span>🦊 Zorro Explorador #\${counter}</span><span style="color: #10b981;">● Activo</span>\`;
  container.append(card);
  counter++;
});`
    },
    tests: [
      { desc: 'Usa document.createElement(...)', test: (c) => /document\.createElement\(/i.test(c.js) },
      { desc: 'Usa classList.add(...)', test: (c) => /classList\.add\(/i.test(c.js) },
      { desc: 'Inserta con append() o appendChild()', test: (c) => /\.(append|appendChild)\(/i.test(c.js) }
    ]
  },

  {
    id: 'js-event-delegation',
    title: '4. Delegación de Eventos de Alto Rendimiento',
    level: 'Intermedio',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'En vez de agregar 100 listeners a 100 botones, agrega UN solo listener al contenedor padre usando e.target.closest().',
    theory: 'La delegación de eventos aprovecha la propagación natural de eventos (Event Bubbling). Un solo listener en el padre escucha todos los clics de sus hijos actuales y futuros, ahorrando memoria y previniendo fugas.',
    objectives: [
      'Agrega addEventListener("click") al contenedor padre',
      'Usa e.target.closest(".tag-btn") para identificar el botón clickeado',
      'Lee el atributo data-id usando dataset'
    ],
    hint: 'padre.addEventListener("click", (e) => { const btn = e.target.closest(".tag-btn"); if (!btn) return; console.log(btn.dataset.id); });',
    initialCode: {
      html: `<h2>🦊 Filtro por Delegación de Eventos</h2>
<p>Haz clic en cualquier categoría:</p>
<div id="tagsParent" class="tags-row">
  <button class="tag-btn" data-category="carnivoro">🥩 Carnívoro</button>
  <button class="tag-btn" data-category="herbivoro">🌿 Herbívoro</button>
  <button class="tag-btn" data-category="omnivoro">🍎 Omnívoro</button>
</div>
<div id="statusText" style="margin-top: 1rem; color: #f59e0b;"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.tags-row { display: flex; gap: 0.5rem; }
.tag-btn {
  background: #111827;
  border: 1px solid #374151;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.tag-btn:hover { border-color: #f59e0b; }`,
      js: `const parent = document.getElementById('tagsParent');
const status = document.getElementById('statusText');

// 🦊 UN solo listener delegado en el padre
parent.addEventListener('click', (e) => {
  const btn = e.target.closest('.tag-btn');
  if (!btn) return;

  const category = btn.dataset.category;
  status.textContent = \`Filtro activo: \${category.toUpperCase()}\`;
  console.log(\`Delegación capturó: \${category}\`);
});`
    },
    solutionCode: {
      js: `const parent = document.getElementById('tagsParent');
const status = document.getElementById('statusText');

parent.addEventListener('click', (e) => {
  const btn = e.target.closest('.tag-btn');
  if (!btn) return;

  const category = btn.dataset.category;
  status.textContent = \`Filtro activo: \${category.toUpperCase()}\`;
});`
    },
    tests: [
      { desc: 'Escucha el evento click en el padre', test: (c) => /addEventListener\(\s*['"]click['"]/i.test(c.js) },
      { desc: 'Usa closest(...) para ubicar el target', test: (c) => /closest\(/i.test(c.js) },
      { desc: 'Lee datos con dataset', test: (c) => /dataset\./i.test(c.js) }
    ]
  },

  {
    id: 'js-array-functional-methods',
    title: '5. Arreglos Funcionales: Map, Filter y Reduce',
    level: 'Intermedio',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Transforma y procesa colecciones de datos como un ninja de JavaScript sin un solo bucle for tradicional.',
    theory: 'filter() descarta elementos según una condición booleana, map() transforma cada elemento en un formato nuevo, y reduce() sintetiza toda la colección en un único valor acumulado.',
    objectives: [
      'Filtra animales en peligro con .filter()',
      'Calcula la población total sumando con .reduce()',
      'Genera una lista formateada con .map()'
    ],
    hint: 'const total = lista.reduce((acc, curr) => acc + curr.poblacion, 0);',
    initialCode: {
      html: `<h2>🦊 Censo Funcional de Fauna</h2>
<div id="statsBox" class="stats-card"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.stats-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 1.5rem;
  color: #e2e8f0;
  line-height: 1.6;
}`,
      js: `const FAUNA = [
  { nombre: 'Lince Ibérico', poblacion: 1660, enPeligro: true },
  { nombre: 'Zorro Rojo', poblacion: 150000, enPeligro: false },
  { nombre: 'Lobo Ibérico', poblacion: 2500, enPeligro: true },
  { nombre: 'Oso Pardo', poblacion: 370, enPeligro: true }
];

// 🦊 Reto de Kitsune: Procesa con filter y reduce
const amenazados = FAUNA.filter(f => f.enPeligro);
const totalPoblacionAmenazada = amenazados.reduce((sum, f) => sum + f.poblacion, 0);

document.getElementById('statsBox').innerHTML = \`
  <h3>Especies en Peligro: \${amenazados.length}</h3>
  <p>Población total protegida: <strong>\${totalPoblacionAmenazada.toLocaleString()}</strong> individuos.</p>
  <ul>\${amenazados.map(f => \`<li>\${f.nombre} (\${f.poblacion})</li>\`).join('')}</ul>
\`;
console.log("Población amenazada calculada:", totalPoblacionAmenazada);`
    },
    solutionCode: {
      js: `const FAUNA = [
  { nombre: 'Lince Ibérico', poblacion: 1660, enPeligro: true },
  { nombre: 'Zorro Rojo', poblacion: 150000, enPeligro: false },
  { nombre: 'Lobo Ibérico', poblacion: 2500, enPeligro: true },
  { nombre: 'Oso Pardo', poblacion: 370, enPeligro: true }
];

const amenazados = FAUNA.filter(f => f.enPeligro);
const totalPoblacionAmenazada = amenazados.reduce((sum, f) => sum + f.poblacion, 0);`
    },
    tests: [
      { desc: 'Usa el método .filter(...)', test: (c) => /\.filter\(/i.test(c.js) },
      { desc: 'Usa el método .reduce(...)', test: (c) => /\.reduce\(/i.test(c.js) },
      { desc: 'Usa el método .map(...)', test: (c) => /\.map\(/i.test(c.js) }
    ]
  },

  {
    id: 'js-async-await-fetch',
    title: '6. Asincronía Moderna: Async/Await y Manejo de Errores',
    level: 'Avanzado',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Consume datos asíncronos con async/await y captura fallos de conexión con bloques try/catch/finally.',
    theory: 'async/await permite escribir código asíncrono que se lee como si fuera secuencial. Siempre debe protegerse con try/catch para evitar que la aplicación crashee si se pierde la conexión.',
    objectives: [
      'Declara una función con la palabra clave async',
      'Usa await con fetch() para solicitar datos',
      'Envuelve la llamada en un bloque try/catch'
    ],
    hint: 'async function cargarDatos() { try { const res = await fetch(...); const data = await res.json(); } catch(e) {} }',
    initialCode: {
      html: `<h2>🦊 Monitoreo Satelital Asíncrono</h2>
<button id="fetchBtn" class="btn">📡 Conectar con Satélite</button>
<div id="satelliteLog" style="margin-top: 1rem; color: #38bdf8; font-family: monospace;"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.btn {
  background: #f59e0b;
  color: #080b11;
  font-weight: 700;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}`,
      js: `const log = document.getElementById('satelliteLog');
const btn = document.getElementById('fetchBtn');

// 🦊 Reto de Kitsune: Convierte esta función en async/await con try/catch
async function consultarSatelite() {
  log.textContent = "Conectando con la constelación satelital...";
  try {
    // Simulación de fetch asíncrono con Promise
    const respuesta = await new Promise((resolve) => {
      setTimeout(() => resolve({ estado: 'OK', faunaRastreada: 42, senal: '99%' }), 800);
    });

    log.innerHTML = \`✅ Telemetría recibida: \${respuesta.faunaRastreada} ejemplares activos. Señal: \${respuesta.senal}\`;
    console.log("Telemetría OK:", respuesta);
  } catch (error) {
    log.textContent = "❌ Error en enlace satelital: " + error.message;
  }
}

btn.addEventListener('click', consultarSatelite);`
    },
    solutionCode: {
      js: `async function consultarSatelite() {
  try {
    const respuesta = await new Promise((resolve) => {
      setTimeout(() => resolve({ estado: 'OK', faunaRastreada: 42, senal: '99%' }), 800);
    });
    log.innerHTML = \`✅ Telemetría recibida: \${respuesta.faunaRastreada} ejemplares activos.\`;
  } catch (error) {
    log.textContent = "❌ Error: " + error.message;
  }
}`
    },
    tests: [
      { desc: 'Declara una función con async', test: (c) => /\basync\s+function|\basync\s*\(/i.test(c.js) },
      { desc: 'Usa la palabra clave await', test: (c) => /\bawait\s+/i.test(c.js) },
      { desc: 'Protege con try / catch', test: (c) => /\btry\s*\{[^}]*\}\s*catch/i.test(c.js) }
    ]
  },

  {
    id: 'js-localstorage-debounce',
    title: '7. Persistencia con LocalStorage y Debounce',
    level: 'Avanzado',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Guarda notas en el navegador con localStorage y usa debounce para evitar escribir al disco en cada pulsación.',
    theory: 'Debounce pospone la ejecución de una función costosa hasta que el usuario deje de teclear durante un tiempo determinado (ej. 400ms), ahorrando recursos de CPU y disco.',
    objectives: [
      'Implementa una función debounce(fn, ms)',
      'Guarda datos con localStorage.setItem()',
      'Recupera datos con localStorage.getItem()'
    ],
    hint: 'clearTimeout(timer); timer = setTimeout(..., ms); y localStorage.setItem("nota", valor);',
    initialCode: {
      html: `<h2>🦊 Cuaderno de Campo con Autoguardado</h2>
<textarea id="fieldNotes" placeholder="Escribe aquí tus observaciones biológicas..." class="notes-area"></textarea>
<div id="saveStatus" style="font-size: 0.75rem; color: #10b981; margin-top: 0.5rem;"></div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.notes-area {
  width: 100%;
  height: 140px;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-family: inherit;
  box-sizing: border-box;
}
.notes-area:focus { border-color: #f59e0b; outline: none; }`,
      js: `const textarea = document.getElementById('fieldNotes');
const status = document.getElementById('saveStatus');

// Recuperar nota previa
const guardado = localStorage.getItem('fauna_notes_demo');
if (guardado) {
  textarea.value = guardado;
  status.textContent = "Nota recuperada de sesión anterior.";
}

// 🦊 Función debounce nativa
function debounce(fn, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const autoGuardar = debounce((texto) => {
  localStorage.setItem('fauna_notes_demo', texto);
  status.textContent = "✓ Guardado automático en localStorage (" + new Date().toLocaleTimeString() + ")";
  console.log("Nota persistida con éxito.");
}, 500);

textarea.addEventListener('input', (e) => {
  status.textContent = "Escribiendo...";
  autoGuardar(e.target.value);
});`
    },
    solutionCode: {
      js: `function debounce(fn, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
localStorage.setItem('fauna_notes_demo', texto);
const guardado = localStorage.getItem('fauna_notes_demo');`
    },
    tests: [
      { desc: 'Usa localStorage.setItem(...)', test: (c) => /localStorage\.setItem\(/i.test(c.js) },
      { desc: 'Usa localStorage.getItem(...)', test: (c) => /localStorage\.getItem\(/i.test(c.js) },
      { desc: 'Implementa lógica de debounce con setTimeout', test: (c) => /setTimeout/i.test(c.js) }
    ]
  },

  {
    id: 'js-web-audio-api',
    title: '8. Generación de Sonido con Web Audio API',
    level: 'Avanzado',
    guardian: 'js',
    badge: '🦊 Kitsune',
    description: 'Crea un generador de notas sonoras usando osciladores matemáticos nativos de JavaScript.',
    theory: 'El AudioContext es el lienzo sonoro del navegador. Creas un OscillatorNode, lo conectas a un GainNode (volumen) y luego al destino (altavoces) sin requerir archivos MP3 externos.',
    objectives: [
      'Instancia new AudioContext()',
      'Crea un oscilador con createOscillator()',
      'Conecta el nodo a audioCtx.destination y llama a start() y stop()'
    ],
    hint: 'const ctx = new AudioContext(); const osc = ctx.createOscillator(); osc.connect(ctx.destination); osc.start();',
    initialCode: {
      html: `<h2>🦊 Canto Nocturno: Web Audio API</h2>
<button id="playToneBtn" class="btn">🎵 Emitir Tono Senoidal (440 Hz)</button>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 3rem;
  text-align: center;
}
.btn {
  background: #f59e0b;
  color: #080b11;
  font-weight: 700;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}`,
      js: `let audioCtx = null;

function emitirCanto(freq = 440) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // 🦊 Crea el oscilador y el nodo de volumen
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const now = audioCtx.currentTime;

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.45);
  console.log("Tono reproducido a", freq, "Hz");
}

document.getElementById('playToneBtn').addEventListener('click', () => {
  emitirCanto(554.37); // C#5
});`
    },
    solutionCode: {
      js: `const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();
osc.connect(gain);
gain.connect(audioCtx.destination);
osc.start();
osc.stop();`
    },
    tests: [
      { desc: 'Instancia un AudioContext', test: (c) => /new\s*\(?\s*(window\.)?AudioContext/i.test(c.js) },
      { desc: 'Crea un oscilador con createOscillator()', test: (c) => /createOscillator\(/i.test(c.js) },
      { desc: 'Inicia el sonido con start()', test: (c) => /\.start\(/i.test(c.js) }
    ]
  }
];
