/**
 * DevFauna Academy — Currículum Completo de CSS3 Moderno
 * Mentor: 🦎 Chroma el Camaleón Estilista (Adaptabilidad, Flexbox, Grid & Animaciones)
 */

export const CSS_CURRICULUM = [
  {
    id: 'css-box-model-sizing',
    title: '1. El Secreto del Box Model: Border-Box',
    level: 'Básico',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Evita que el padding y border rompan el ancho de tus cajas. Domina box-sizing: border-box.',
    theory: 'Por defecto (content-box), si un div tiene width: 100px y le agregas padding: 20px, medirá 140px. Con box-sizing: border-box, el padding se absorbe hacia adentro, manteniendo exactamente los 100px.',
    objectives: [
      'Aplica box-sizing: border-box a las cajas',
      'Configura un padding de 1.5rem',
      'Usa outline para un anillo de enfoque sin alterar el layout'
    ],
    hint: 'En .box usa box-sizing: border-box; padding: 1.5rem; outline: 2px solid #06b6d4;',
    initialCode: {
      html: `<h2>🦎 Prueba de Anatomía: Box Model</h2>
<div class="box-container">
  <div class="box box-content">Caja Clásica (Rompe el layout)</div>
  <div class="box box-border">Caja Perfecta (border-box)</div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
h2 { color: #06b6d4; }
.box-container {
  display: flex;
  gap: 1.5rem;
}
.box {
  width: 200px;
  height: 120px;
  background: #111827;
  border: 2px solid #374151;
  border-radius: 8px;
}
/* 🦎 Aplica aquí border-box en .box-border */
.box-border {
  box-sizing: content-box; /* Cambia esto */
  padding: 20px;
}`,
      js: `console.log("🦎 Chroma: 'border-box es la primera regla que debes declarar en todo proyecto moderno'");`
    },
    solutionCode: {
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
h2 { color: #06b6d4; }
.box-container {
  display: flex;
  gap: 1.5rem;
}
.box {
  width: 200px;
  height: 120px;
  background: #111827;
  border: 2px solid #374151;
  border-radius: 8px;
}
.box-border {
  box-sizing: border-box;
  padding: 1.5rem;
  outline: 2px solid #06b6d4;
}`
    },
    tests: [
      { desc: 'Aplica box-sizing: border-box', test: (c) => /box-sizing:\s*border-box/i.test(c.css) },
      { desc: 'Aplica padding en la caja', test: (c) => /padding:\s*[^;]+;/i.test(c.css) }
    ]
  },

  {
    id: 'css-flexbox-mastery',
    title: '2. Flexbox Maestro: Alineación y Espaciado con Gap',
    level: 'Básico',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Aprende a distribuir elementos en una sola dimensión usando display: flex, justify-content y gap.',
    theory: 'Flexbox revolucionó la web eliminando los floats. Con justify-content controlas el eje principal y con align-items el eje cruzado. Además, gap separa los hijos sin necesidad de calcular margins.',
    objectives: [
      'Aplica display: flex al contenedor',
      'Centra verticalmente los elementos con align-items: center',
      'Separa con justify-content: space-between y gap: 1rem'
    ],
    hint: 'En .nav-bar aplica display: flex; align-items: center; justify-content: space-between; gap: 1rem;',
    initialCode: {
      html: `<nav class="nav-bar">
  <div class="logo">🦎 FaunaHub</div>
  <ul class="nav-links">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Especies</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
  <button class="cta-btn">Unirse</button>
</nav>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
/* 🦎 Aplica aquí display: flex en .nav-bar */
.nav-bar {
  background: #111827;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #1f2937;
}
.logo { font-weight: 800; color: #06b6d4; font-size: 1.1rem; }
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
}
.nav-links a { color: #9ca3af; text-decoration: none; font-size: 0.9rem; }
.cta-btn {
  background: #06b6d4;
  color: #080b11;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
}`,
      js: `console.log("🦎 Chroma: 'Flexbox alinea elementos como un camaleón sobre una rama'");`
    },
    solutionCode: {
      css: `.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #111827;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #1f2937;
}`
    },
    tests: [
      { desc: 'Aplica display: flex en .nav-bar', test: (c) => /\.nav-bar[^{]*{[^}]*display:\s*flex/i.test(c.css) },
      { desc: 'Usa align-items: center', test: (c) => /align-items:\s*center/i.test(c.css) },
      { desc: 'Usa justify-content: space-between', test: (c) => /justify-content:\s*space-between/i.test(c.css) }
    ]
  },

  {
    id: 'css-grid-autofit',
    title: '3. CSS Grid Responsivo en 1 Línea con Auto-Fit',
    level: 'Intermedio',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Crea una galería responsiva que se reordena sola según el tamaño de la pantalla sin escribir @media queries.',
    theory: 'Con grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); el navegador calcula automáticamente cuántas columnas caben y las estira armónicamente.',
    objectives: [
      'Aplica display: grid al contenedor',
      'Usa repeat(auto-fit, minmax(180px, 1fr))',
      'Agrega un gap de 1.25rem'
    ],
    hint: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem;',
    initialCode: {
      html: `<div class="habitat-grid">
  <div class="card">🌲 Bosque</div>
  <div class="card">🦎 Selva</div>
  <div class="card">🏔️ Tundra</div>
  <div class="card">🌊 Océano</div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
/* 🦎 Aplica aquí CSS Grid */
.habitat-grid {
  background: #0b0f17;
}
.card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  font-weight: 700;
  color: #06b6d4;
}`,
      js: `console.log("🦎 Chroma: 'Cambia el tamaño de pantalla y mira cómo fluyen las columnas'");`
    },
    solutionCode: {
      css: `.habitat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
}`
    },
    tests: [
      { desc: 'Aplica display: grid', test: (c) => /display:\s*grid/i.test(c.css) },
      { desc: 'Usa repeat(auto-fit, minmax(...))', test: (c) => /repeat\(\s*auto-fit\s*,\s*minmax/i.test(c.css) },
      { desc: 'Usa gap entre elementos', test: (c) => /gap:\s*[^;]+;/i.test(c.css) }
    ]
  },

  {
    id: 'css-sticky-positioning',
    title: '4. Posicionamiento Sticky para Cabeceras Adhesivas',
    level: 'Intermedio',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Haz que una barra de navegación se quede pegada al techo al hacer scroll usando position: sticky.',
    theory: 'Un elemento con position: sticky actúa como relativo hasta que alcanza el umbral de scroll indicado (ej. top: 0), momento en el cual se fija en la pantalla sin salirse de su contenedor padre.',
    objectives: [
      'Aplica position: sticky a la cabecera',
      'Define top: 0 para que se fije en el borde superior',
      'Usa z-index para asegurar que flote sobre el contenido'
    ],
    hint: 'En .sticky-header aplica position: sticky; top: 0; z-index: 10;',
    initialCode: {
      html: `<div class="scroll-area">
  <div class="sticky-header">📌 Barra Adhesiva (Sticky)</div>
  <div class="content-block">Contenido 1</div>
  <div class="content-block">Contenido 2</div>
  <div class="content-block">Contenido 3</div>
  <div class="content-block">Contenido 4</div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 1.5rem;
}
.scroll-area {
  height: 250px;
  overflow-y: auto;
  border: 1px solid #334155;
  border-radius: 8px;
  background: #0e1420;
}
/* 🦎 Aplica aquí position: sticky */
.sticky-header {
  background: #06b6d4;
  color: #080b11;
  padding: 0.85rem;
  font-weight: 800;
}
.content-block {
  padding: 2.5rem;
  border-bottom: 1px solid #1e293b;
  color: #94a3b8;
}`,
      js: `console.log("🦎 Chroma: 'Haz scroll dentro de la caja para ver el efecto sticky'");`
    },
    solutionCode: {
      css: `.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #06b6d4;
  color: #080b11;
  padding: 0.85rem;
  font-weight: 800;
}`
    },
    tests: [
      { desc: 'Usa position: sticky', test: (c) => /position:\s*sticky/i.test(c.css) },
      { desc: 'Define top: 0', test: (c) => /top:\s*0/i.test(c.css) },
      { desc: 'Usa z-index para apilamiento', test: (c) => /z-index:\s*\d+/i.test(c.css) }
    ]
  },

  {
    id: 'css-variables-theming',
    title: '5. Custom Properties y Cambio de Temas con Variables',
    level: 'Intermedio',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Declara variables CSS (:root) para colores primarios y reutilízalas en cascada.',
    theory: 'Las Custom Properties se declaran con --nombre-variable y se consumen con var(--nombre-variable). Al cambiar la variable en el selector :root o en una clase, todo el sitio cambia instantáneamente.',
    objectives: [
      'Declara --fauna-accent: #06b6d4 en :root',
      'Consume la variable en .theme-card usando var(--fauna-accent)',
      'Aplica calc() en el padding o margin'
    ],
    hint: ':root { --fauna-accent: #06b6d4; } y luego border-color: var(--fauna-accent);',
    initialCode: {
      html: `<div class="theme-card">
  <h2>🦎 Sistema de Variables Dinámicas</h2>
  <p>El camaleón adapta su color instantáneamente.</p>
  <button class="theme-btn">Botón con Variable</button>
</div>`,
      css: `/* 🦎 Declara variables en :root */
:root {
  --fauna-accent: #06b6d4;
  --fauna-bg: #111827;
}

body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 2rem;
}
.theme-card {
  background: var(--fauna-bg);
  border: 2px solid var(--fauna-accent);
  border-radius: 12px;
  padding: calc(1rem + 8px);
  max-width: 380px;
}
h2 { color: var(--fauna-accent); margin-top: 0; }
.theme-btn {
  background: var(--fauna-accent);
  color: #080b11;
  font-weight: 700;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}`,
      js: `console.log("🦎 Chroma: 'Con variables CSS cambiar de Dark a Light toma 3 líneas'");`
    },
    solutionCode: {
      css: `:root {
  --fauna-accent: #06b6d4;
  --fauna-bg: #111827;
}`
    },
    tests: [
      { desc: 'Declara una variable con dos guiones (--)', test: (c) => /--[a-zA-Z0-9_-]+:/i.test(c.css) },
      { desc: 'Consume la variable con var(...)', test: (c) => /var\(--[a-zA-Z0-9_-]+\)/i.test(c.css) }
    ]
  },

  {
    id: 'css-glassmorphism-blur',
    title: '6. Glassmorphism Puro con Backdrop-Filter',
    level: 'Avanzado',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Crea superficies translúcidas ultra modernas con desenfoque de fondo y borde iluminado.',
    theory: 'Backdrop-filter: blur(16px) aplica un filtro gaussiano al contenido que queda detrás del elemento, simulando un panel de vidrio ahumado.',
    objectives: [
      'Aplica background: rgba(255, 255, 255, 0.08)',
      'Aplica backdrop-filter: blur(16px)',
      'Agrega un borde tenue de 1px con rgba(255, 255, 255, 0.2)'
    ],
    hint: 'background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.15);',
    initialCode: {
      html: `<div class="backdrop-scene">
  <div class="circle circle-cyan"></div>
  <div class="circle circle-green"></div>
  
  <div class="glass-panel">
    <h3>🦎 Efecto Vidrio Ahumado</h3>
    <p>Superficie translúcida con desenfoque óptico de alta gama.</p>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #ffffff;
  padding: 2rem;
}
.backdrop-scene {
  position: relative;
  width: 360px;
  height: 260px;
  margin: 0 auto;
}
.circle {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  filter: blur(35px);
}
.circle-cyan { background: #06b6d4; top: 10px; left: 20px; }
.circle-green { background: #10b981; bottom: 10px; right: 20px; }

/* 🦎 Aplica Glassmorphism en .glass-panel */
.glass-panel {
  position: relative;
  z-index: 10;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
}`,
      js: `console.log("🦎 Chroma: 'Glassmorphism es el estándar visual de macOS y Windows 11'");`
    },
    solutionCode: {
      css: `.glass-panel {
  position: relative;
  z-index: 10;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
}`
    },
    tests: [
      { desc: 'Usa backdrop-filter: blur(...)', test: (c) => /backdrop-filter:\s*blur\(/i.test(c.css) },
      { desc: 'Usa fondo semitransparente rgba()', test: (c) => /background:\s*rgba\(/i.test(c.css) }
    ]
  },

  {
    id: 'css-transitions-bezier',
    title: '7. Transiciones Suaves y Curvas Bézier',
    level: 'Avanzado',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Transforma clics bruscos en micro-interacciones sedosas usando transition y cubic-bezier.',
    theory: 'La curva cubic-bezier(0.34, 1.56, 0.64, 1) simula elasticidad orgánica, ideal para botones y tarjetas que rebotan suavemente al pasar el mouse.',
    objectives: [
      'Aplica transition: transform 0.3s cubic-bezier(...) en la tarjeta',
      'Aplica transform: translateY(-8px) scale(1.02) en el hover',
      'Agrega un box-shadow enriquecido en el estado hover'
    ],
    hint: 'transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); y en :hover usa transform: translateY(-8px);',
    initialCode: {
      html: `<div class="elastic-card">
  <h3>🦎 Piel Elástica del Camaleón</h3>
  <p>Pasa el cursor sobre esta tarjeta para sentir la física elástica.</p>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 3rem;
  display: flex;
  justify-content: center;
}
/* 🦎 Configura la transición con cubic-bezier */
.elastic-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 2rem;
  width: 280px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.elastic-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: #06b6d4;
  box-shadow: 0 15px 30px rgba(6, 182, 212, 0.25);
}
h3 { color: #06b6d4; margin-top: 0; }
p { font-size: 0.85rem; color: #94a3b8; }`,
      js: `console.log("🦎 Chroma: 'Las transiciones elásticas hacen que la UI se sienta viva'");`
    },
    solutionCode: {
      css: `.elastic-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 12px;
  padding: 2rem;
  width: 280px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.elastic-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: #06b6d4;
}`
    },
    tests: [
      { desc: 'Usa la propiedad transition con transform', test: (c) => /transition:[^;]*transform/i.test(c.css) },
      { desc: 'Usa una función de tiempo cubic-bezier', test: (c) => /cubic-bezier/i.test(c.css) },
      { desc: 'Aplica transform en el estado :hover', test: (c) => /:hover[^{]*{[^}]*transform:/i.test(c.css) }
    ]
  },

  {
    id: 'css-keyframes-pulse',
    title: '8. Animaciones Continuas con @keyframes',
    level: 'Avanzado',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Crea efectos continuos de radar o latido usando la regla @keyframes y animation: infinite.',
    theory: 'A diferencia de las transiciones (que requieren una interacción como hover), @keyframes se ejecuta automáticamente de forma continua con infinitos bucles usando animation-iteration-count: infinite.',
    objectives: [
      'Declara una animación con @keyframes pulseGlow',
      'Configura fotogramas 0%, 50% y 100%',
      'Aplica animation: pulseGlow 2s infinite ease-in-out en el badge'
    ],
    hint: '@keyframes pulseGlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }',
    initialCode: {
      html: `<div class="sonar-box">
  <div class="radar-dot"></div>
  <p>Radar de Camaleón Activo</p>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #080b11;
  color: #f8fafc;
  padding: 3rem;
  text-align: center;
}
.sonar-box {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.radar-dot {
  width: 24px;
  height: 24px;
  background: #06b6d4;
  border-radius: 50%;
  animation: pulseGlow 2s infinite ease-in-out;
}

/* 🦎 Declara aquí @keyframes pulseGlow */
@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 15px rgba(6, 182, 212, 0);
  }
}`,
      js: `console.log("🦎 Chroma: 'Las animaciones con keyframes añaden señales de feedback en tiempo real'");`
    },
    solutionCode: {
      css: `@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 15px rgba(6, 182, 212, 0);
  }
}`
    },
    tests: [
      { desc: 'Declara una regla @keyframes', test: (c) => /@keyframes\s+[a-zA-Z0-9_-]+/i.test(c.css) },
      { desc: 'Aplica animation con valor infinite', test: (c) => /animation:[^;]*infinite/i.test(c.css) }
    ]
  }
];
