/**
 * DevFauna Academy — Retos de HTML5 Semántico
 * Mentor: 🦉 Archie el Búho Sabio (Arquitectura & Estructura Ósea)
 */

export const HTML_LESSONS = [
  {
    id: 'html-semantic-layout',
    title: '1. El Esqueleto Sagrado: Layout Semántico',
    level: 'Fundamental',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Reemplaza el infierno de <div> anidados (Divitis) por elementos semánticos que los motores de búsqueda y lectores de pantalla adoran.',
    theory: 'HTML5 introdujo etiquetas con significado real: <header>, <nav>, <main>, <article>, <aside> y <footer>. Usarlas mejora tu SEO en un 40% y hace que tu sitio sea accesible por ley.',
    objectives: [
      'Usa <header> para el título y el logo',
      'Usa <main> para el contenido principal único',
      'Estructura una tarjeta con <article> y un pie de página con <footer>'
    ],
    initialCode: {
      html: `<!-- 🦉 Reto de Archie: Convierte estos divs genéricos en HTML semántico puro -->
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
</div>`,
      css: `body {
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
}`,
      js: `console.log("🦉 Archie dice: 'Inspecciona los elementos semánticos en el preview'");`
    },
    solutionCode: {
      html: `<header class="site-header">
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
</footer>`
    }
  },

  {
    id: 'html-dialog-native',
    title: '2. Modales Nativos con <dialog>',
    level: 'Intermedio',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Olvida librerías de 50KB para abrir modales. HTML5 incluye la etiqueta nativa <dialog> con soporte de teclado (Esc) y fondo oscurecido.',
    theory: 'El elemento <dialog> se abre mediante JavaScript llamando a dialog.showModal(). Esto crea automáticamente un backdrop que bloquea el resto de la página y cierra con la tecla Escape sin escribir una sola línea de código extra.',
    objectives: [
      'Define un elemento <dialog id="faunaModal">',
      'Agrega un botón para abrir el modal con dialog.showModal()',
      'Agrega un formulario con method="dialog" para cerrarlo automáticamente'
    ],
    initialCode: {
      html: `<!-- 🦉 Reto de Archie: Crea un modal nativo con <dialog> -->
<button id="openBtn" class="btn">✨ Ver Pasaporte de Fauna</button>

<dialog id="faunaModal" class="fauna-dialog">
  <h2>🐾 Pasaporte DevFauna</h2>
  <p>Has desbloqueado el rango de "Explorador de HTML5 Semántico".</p>
  <form method="dialog">
    <button class="btn btn-close">Cerrar Pasaporte (o presiona Esc)</button>
  </form>
</dialog>`,
      css: `body {
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
}`,
      js: `const dialog = document.getElementById('faunaModal');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
  dialog.showModal(); // Método nativo de HTML5
  console.log("🦉 Modal abierto con soporte de tecla Escape nativo.");
});`
    }
  },

  {
    id: 'html-modern-forms',
    title: '3. Formularios con Validación Nativa',
    level: 'Avanzado',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Aprovecha las validaciones nativas de HTML5: required, pattern regex, minlength y tipos de input especializados sin dependencias.',
    theory: 'Atributos como type="email", required, pattern y minlength permiten que el navegador valide campos instantáneamente y aplique pseudoclases CSS como :valid e :invalid de forma automática.',
    objectives: [
      'Crea un input con type="email" y required',
      'Crea un input con pattern="[A-Z]{3}-[0-9]{3}" para un código de espécimen',
      'Estiliza estados válidos con :valid'
    ],
    initialCode: {
      html: `<form id="faunaForm" class="fauna-form">
  <h2>📋 Registro de Especie</h2>
  
  <label for="email">Correo del Investigador:</label>
  <input type="email" id="email" required placeholder="investigador@fauna.org">

  <label for="specimen">Código de Espécimen (3 Letras - 3 Números):</label>
  <input type="text" id="specimen" required pattern="[A-Za-z]{3}-[0-9]{3}" placeholder="OWL-007">

  <button type="submit" class="submit-btn">Registrar Especie</button>
</form>`,
      css: `body {
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
}`,
      js: `document.getElementById('faunaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('🦉 ¡Especie validada con éxito usando validación nativa de HTML5!');
});`
    }
  }
];
