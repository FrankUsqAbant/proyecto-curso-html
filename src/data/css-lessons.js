/**
 * DevFauna Academy — Retos de CSS3 Moderno
 * Mentor: 🦎 Chroma el Camaleón Estilista (Adaptabilidad, Flexbox & Grid)
 */

export const CSS_LESSONS = [
  {
    id: 'css-grid-autofit',
    title: '1. Grid Responsivo sin Media Queries',
    level: 'Fundamental',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Aprende la fórmula matemática mágica de CSS Grid: repeat(auto-fit, minmax(...)) para crear galerías responsivas sin escribir un solo @media query.',
    theory: 'Con grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); el navegador calcula automáticamente cuántas columnas caben según el ancho de pantalla y las estira de forma fluida.',
    objectives: [
      'Aplica display: grid al contenedor de tarjetas',
      'Usa repeat(auto-fit, minmax(180px, 1fr)) para las columnas',
      'Agrega un gap moderno de 1rem'
    ],
    initialCode: {
      html: `<!-- 🦎 Reto de Chroma: Crea una galería de hábitats responsiva -->
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
</div>`,
      css: `body {
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
p { font-size: 0.85rem; color: #9ca3af; line-height: 1.4; margin: 0; }`,
      js: `console.log("🦎 Chroma dice: 'Cambia el tamaño de la ventana y observa cómo las columnas se adaptan solas'");`
    }
  },

  {
    id: 'css-glassmorphism',
    title: '2. Glassmorphism & Efectos de Vidrio Esmerilado',
    level: 'Intermedio',
    guardian: 'css',
    badge: '🦎 Chroma',
    description: 'Domina la técnica de vidrio esmerilado usando background semitransparente, bordes tenues y backdrop-filter: blur().',
    theory: 'El secreto del Glassmorphism consiste en superponer una superficie translúcida (rgba) sobre un fondo colorido con backdrop-filter: blur(12px) y un borde de 1px con brillo tenue.',
    objectives: [
      'Aplica background: rgba(255, 255, 255, 0.08)',
      'Aplica backdrop-filter: blur(16px)',
      'Agrega un borde sutil con box-shadow suave'
    ],
    initialCode: {
      html: `<div class="scene-container">
  <div class="floating-orb orb-1"></div>
  <div class="floating-orb orb-2"></div>
  
  <div class="glass-card">
    <h2>🦎 Camaleón Pantera</h2>
    <span class="badge">Furcifer pardalis</span>
    <p>Capaz de cambiar el color de su piel en menos de 20 milisegundos gracias a nanocristales de guanina.</p>
    <button class="action-btn">Explorar Fisiología</button>
  </div>
</div>`,
      css: `body {
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
}`,
      js: `console.log("🦎 Chroma: 'Mueve el mouse para admirar el efecto óptico'");`
    }
  }
];
