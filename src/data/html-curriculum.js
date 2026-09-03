/**
 * DevFauna Academy — Currículum Completo de HTML5 Semántico
 * Mentor: 🦉 Archie el Búho Sabio (Arquitectura, Estructura & Accesibilidad)
 */

export const HTML_CURRICULUM = [
  {
    id: 'html-semantic-layout',
    title: '1. Layout Semántico y Jerarquía Sagrada',
    level: 'Básico',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Elimina el vicio de la "Divitis" y reemplaza elementos <div> genéricos por la arquitectura semántica pura de HTML5.',
    theory: 'Los motores de búsqueda (SEO) y las tecnologías de asistencia para personas ciegas (lectores de pantalla) navegan por hitos semánticos: <header>, <nav>, <main>, <article>, <aside> y <footer>.',
    objectives: [
      'Encapsula el logo y título dentro de un <header>',
      'Envuelve los enlaces de navegación dentro de una etiqueta <nav>',
      'Usa <main> para el contenido principal y <article> para la tarjeta'
    ],
    hint: 'Reemplaza <div class="site-header"> por <header class="site-header"> y lo mismo con <nav>, <main> y <article>.',
    initialCode: {
      html: `<!-- 🦉 Reto de Archie: Convierte estos divs genéricos en HTML semántico puro -->
<div class="site-header">
  <h1>Santuario DevFauna</h1>
  <div class="main-nav">
    <a href="#aves">Aves</a>
    <a href="#reptiles">Reptiles</a>
    <a href="#mamiferos">Mamíferos</a>
  </div>
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
nav a, .main-nav a {
  color: #38bdf8;
  margin-right: 1rem;
  text-decoration: none;
  font-weight: 600;
}
article, .card {
  background: #131b2e;
  border: 1px solid #10b981;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
h1 { color: #10b981; margin: 0 0 0.5rem 0; }
h2 { color: #38bdf8; margin-top: 0; }
p { color: #94a3b8; line-height: 1.5; }
footer, .site-footer {
  font-size: 0.8rem;
  color: #64748b;
  border-top: 1px solid #1e293b;
  padding-top: 1rem;
}`,
      js: `console.log("🦉 Archie: 'Reemplaza los divs por elementos semánticos y haz clic en Validar'");`
    },
    solutionCode: {
      html: `<header class="site-header">
  <h1>Santuario DevFauna</h1>
  <nav class="main-nav">
    <a href="#aves">Aves</a>
    <a href="#reptiles">Reptiles</a>
    <a href="#mamiferos">Mamíferos</a>
  </nav>
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
    },
    tests: [
      { desc: 'Contiene una etiqueta <header>', test: (c) => /<header[\s>]/i.test(c.html) },
      { desc: 'Contiene una etiqueta <nav>', test: (c) => /<nav[\s>]/i.test(c.html) },
      { desc: 'Contiene una etiqueta <main>', test: (c) => /<main[\s>]/i.test(c.html) },
      { desc: 'Contiene una etiqueta <article>', test: (c) => /<article[\s>]/i.test(c.html) }
    ]
  },

  {
    id: 'html-text-elements',
    title: '2. Textos Técnicos y Listas de Definición',
    level: 'Básico',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Estructura glosarios de términos y datos técnicos usando las etiquetas especializadas <dl>, <dt>, <dd>, <mark> y <time>.',
    theory: 'Una lista de definiciones <dl> vincula un término <dt> con su descripción <dd>. Son perfectas para especificaciones de productos, metadatos y glosarios científicos.',
    objectives: [
      'Crea una lista de definición con <dl>',
      'Define al menos dos términos con <dt> y descripciones con <dd>',
      'Resalta un dato clave con <mark> y una fecha con <time>'
    ],
    hint: 'Usa <dl><dt>Nombre</dt><dd>Descripción con <mark>resaltado</mark></dd></dl>',
    initialCode: {
      html: `<h2>📖 Glosario de Fauna Nocturna</h2>

<!-- 🦉 Reto de Archie: Convierte estos párrafos en una lista de definición <dl> -->
<p><b>Ecolocación:</b> Capacidad de orientarse emitiendo sonidos de alta frecuencia.</p>
<p><b>Visión Escotópica:</b> Visión adaptada a condiciones de baja luminosidad.</p>

<p>Último avistamiento registrado: 02 de Septiembre de 2026.</p>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
}
h2 { color: #10b981; }
dl { background: #131b2e; padding: 1.25rem; border-radius: 8px; border-left: 3px solid #10b981; }
dt { font-weight: 700; color: #38bdf8; margin-top: 0.5rem; }
dd { color: #94a3b8; margin-left: 0; margin-bottom: 0.5rem; }
mark { background: rgba(245, 158, 11, 0.3); color: #f59e0b; padding: 0.1rem 0.4rem; border-radius: 4px; }
time { color: #10b981; font-weight: 600; }`,
      js: `console.log("🦉 Archie: 'Usa <dl>, <dt>, <dd>, <mark> y <time>'");`
    },
    solutionCode: {
      html: `<h2>📖 Glosario de Fauna Nocturna</h2>

<dl>
  <dt>Ecolocación</dt>
  <dd>Capacidad de orientarse emitiendo sonidos de <mark>alta frecuencia</mark>.</dd>

  <dt>Visión Escotópica</dt>
  <dd>Visión adaptada a condiciones de baja luminosidad.</dd>
</dl>

<p>Último avistamiento registrado: <time datetime="2026-09-02">02 de Septiembre de 2026</time>.</p>`
    },
    tests: [
      { desc: 'Usa la lista de definición <dl>', test: (c) => /<dl[\s>]/i.test(c.html) },
      { desc: 'Usa términos <dt> y descripciones <dd>', test: (c) => /<dt[\s>]/i.test(c.html) && /<dd[\s>]/i.test(c.html) },
      { desc: 'Usa texto resaltado con <mark>', test: (c) => /<mark[\s>]/i.test(c.html) },
      { desc: 'Usa fecha semántica con <time>', test: (c) => /<time[\s>]/i.test(c.html) }
    ]
  },

  {
    id: 'html-responsive-picture',
    title: '3. Imágenes Responsivas de Élite con <picture>',
    level: 'Intermedio',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'No sirvas imágenes pesadas de escritorio a un móvil. Usa <picture> y <source> para cambiar la imagen según el ancho de pantalla o formato WebP.',
    theory: 'El elemento <picture> contiene uno o más elementos <source media="..."> y un elemento <img> de respaldo. El navegador evalúa las condiciones y descarga ÚNICAMENTE la imagen que necesita, ahorrando megabytes de ancho de banda.',
    objectives: [
      'Envuelve la imagen dentro de un elemento <picture>',
      'Agrega un <source media="(max-width: 600px)" srcset="..."> para móviles',
      'Incluye una etiqueta <img> con atributo alt descriptivo como fallback'
    ],
    hint: 'Usa <picture><source media="(max-width: 600px)" srcset="url_movil"><img src="url_desktop" alt="..."></picture>',
    initialCode: {
      html: `<h2>📸 Avistamiento de Búho en Alta Definición</h2>

<!-- 🦉 Reto de Archie: Convierte este simple <img> en un <picture> responsivo -->
<div class="image-wrapper">
  <img src="https://images.unsplash.com/photo-1579273166657-ed2266fe3613?w=800" alt="Búho nival en reposo">
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
  text-align: center;
}
h2 { color: #10b981; }
.image-wrapper img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid #334155;
}`,
      js: `console.log("🦉 Archie: 'Implementa <picture> y <source media=\"...\">'");`
    },
    solutionCode: {
      html: `<h2>📸 Avistamiento de Búho en Alta Definición</h2>

<div class="image-wrapper">
  <picture>
    <source media="(max-width: 600px)" srcset="https://images.unsplash.com/photo-1579273166657-ed2266fe3613?w=400">
    <img src="https://images.unsplash.com/photo-1579273166657-ed2266fe3613?w=800" alt="Búho nival en reposo sobre un árbol nevado">
  </picture>
</div>`
    },
    tests: [
      { desc: 'Usa el elemento contenedor <picture>', test: (c) => /<picture[\s>]/i.test(c.html) },
      { desc: 'Usa la etiqueta <source media="...">', test: (c) => /<source[\s][^>]*media=/i.test(c.html) },
      { desc: 'Mantiene una etiqueta <img> con atributo alt', test: (c) => /<img[\s][^>]*alt=/i.test(c.html) }
    ]
  },

  {
    id: 'html-modern-forms',
    title: '4. Formularios con Validación Nativa y Datalist',
    level: 'Intermedio',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Aprende a autocompletar con <datalist> y a validar formatos con pattern regex nativo de HTML5.',
    theory: 'El elemento <datalist> proporciona sugerencias de autocompletado en un <input> sin usar librerías de JavaScript, mientras que el atributo pattern aplica expresiones regulares directamente en el navegador.',
    objectives: [
      'Agrega un <input list="habitats"> y conéctalo a un <datalist id="habitats">',
      'Crea al menos 3 opciones dentro de <datalist>',
      'Aplica validación con required y type="email"'
    ],
    hint: 'Asocia el input con list="miLista" y crea <datalist id="miLista"><option value="Bosque">...</datalist>',
    initialCode: {
      html: `<form id="specimenForm" class="fauna-form">
  <h2>📋 Ficha de Ingreso de Espécimen</h2>

  <label for="email">Correo del Biólogo:</label>
  <input type="email" id="email" required placeholder="biologo@fauna.org">

  <label for="habitat">Hábitat Observado:</label>
  <!-- 🦉 Reto de Archie: Conecta este input a un <datalist> con opciones -->
  <input type="text" id="habitat" placeholder="Selecciona o escribe un hábitat...">

  <button type="submit" class="submit-btn">Guardar Ficha</button>
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
h2 { color: #10b981; font-size: 1.2rem; margin: 0 0 0.5rem 0; }
label { font-size: 0.85rem; color: #94a3b8; }
input {
  background: #0b0f17;
  border: 1px solid #334155;
  color: #ffffff;
  padding: 0.6rem;
  border-radius: 6px;
  font-size: 0.9rem;
}
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
      js: `document.getElementById('specimenForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('🦉 ¡Ficha registrada con éxito!');
});`
    },
    solutionCode: {
      html: `<form id="specimenForm" class="fauna-form">
  <h2>📋 Ficha de Ingreso de Espécimen</h2>

  <label for="email">Correo del Biólogo:</label>
  <input type="email" id="email" required placeholder="biologo@fauna.org">

  <label for="habitat">Hábitat Observado:</label>
  <input type="text" id="habitat" list="habitatsList" placeholder="Selecciona o escribe un hábitat...">
  
  <datalist id="habitatsList">
    <option value="Bosque Boreal">
    <option value="Selva Tropical">
    <option value="Tundra Ártica">
    <option value="Humedal Costero">
  </datalist>

  <button type="submit" class="submit-btn">Guardar Ficha</button>
</form>`
    },
    tests: [
      { desc: 'El input tiene el atributo list', test: (c) => /<input[^>]*list=/i.test(c.html) },
      { desc: 'Contiene el elemento <datalist>', test: (c) => /<datalist[\s>]/i.test(c.html) },
      { desc: 'Contiene opciones <option value="..."> en el datalist', test: (c) => /<option[^>]*value=/i.test(c.html) },
      { desc: 'Tiene validación required en el correo', test: (c) => /<input[^>]*required/i.test(c.html) }
    ]
  },

  {
    id: 'html-accessible-tables',
    title: '5. Tablas de Datos Accesibles con <caption> y Scope',
    level: 'Intermedio',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Estructura una tabla de datos accesible con encabezados semánticos scope="col" y un título descriptivo <caption>.',
    theory: 'El atributo scope="col" y scope="row" en los <th> le indica a los lectores de pantalla exactamente a qué fila o columna pertenece cada dato, permitiendo una lectura accesible sin confusiones.',
    objectives: [
      'Agrega un <caption> al inicio de la tabla',
      'Divide la tabla con <thead> y <tbody>',
      'Aplica scope="col" a los encabezados <th>'
    ],
    hint: 'Usa <table><caption>Título</caption><thead><tr><th scope="col">...</th></tr></thead><tbody>...</tbody></table>',
    initialCode: {
      html: `<!-- 🦉 Reto de Archie: Convierte esta tabla simple en una tabla semántica y accesible -->
<table class="fauna-table">
  <tr>
    <td>Especie</td>
    <td>Población</td>
    <td>Estado</td>
  </tr>
  <tr>
    <td>Búho Nival</td>
    <td>14,000</td>
    <td>Vulnerable</td>
  </tr>
  <tr>
    <td>Lince Ibérico</td>
    <td>1,660</td>
    <td>En Recuperación</td>
  </tr>
</table>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
}
.fauna-table {
  width: 100%;
  border-collapse: collapse;
  background: #131b2e;
  border-radius: 8px;
  overflow: hidden;
}
caption {
  font-size: 1.1rem;
  font-weight: 700;
  color: #10b981;
  text-align: left;
  margin-bottom: 0.75rem;
}
th, td {
  padding: 0.85rem 1rem;
  text-align: left;
  border-bottom: 1px solid #1e293b;
}
th {
  background: #1e293b;
  color: #38bdf8;
  font-weight: 700;
}`,
      js: `console.log("🦉 Archie: 'Una tabla sin <caption> ni <thead> es invisible para la accesibilidad'");`
    },
    solutionCode: {
      html: `<table class="fauna-table">
  <caption>Censo de Especies Protegidas 2026</caption>
  <thead>
    <tr>
      <th scope="col">Especie</th>
      <th scope="col">Población</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Búho Nival</td>
      <td>14,000</td>
      <td>Vulnerable</td>
    </tr>
    <tr>
      <td>Lince Ibérico</td>
      <td>1,660</td>
      <td>En Recuperación</td>
    </tr>
  </tbody>
</table>`
    },
    tests: [
      { desc: 'Contiene un <caption> descriptivo', test: (c) => /<caption[\s>]/i.test(c.html) },
      { desc: 'Usa <thead> y <tbody>', test: (c) => /<thead[\s>]/i.test(c.html) && /<tbody[\s>]/i.test(c.html) },
      { desc: 'Usa <th scope="col"> en los encabezados', test: (c) => /<th[^>]*scope=["']col["']/i.test(c.html) }
    ]
  },

  {
    id: 'html-native-dialog-accordion',
    title: '6. Componentes Nativos: <dialog> y <details>',
    level: 'Avanzado',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Crea acordeones colapsables sin JavaScript usando <details> y <summary>, y modales con <dialog>.',
    theory: 'HTML5 nativo te permite crear acordeones plegables con <details> y <summary> con animación y accesibilidad de teclado gratuita sin programar JavaScript.',
    objectives: [
      'Crea un acordeón interactivo con <details> y <summary>',
      'Crea un modal accesible con <dialog id="infoModal">',
      'Agrega un formulario con method="dialog" dentro del modal'
    ],
    hint: 'Usa <details><summary>Pregunta</summary><p>Respuesta</p></details>',
    initialCode: {
      html: `<h2>🐾 Base de Datos de Preguntas Frecuentes</h2>

<!-- 🦉 Reto de Archie: Crea un acordeón nativo con <details> y <summary> -->
<div class="faq-card">
  <h3>¿Cómo migran los búhos boreales?</h3>
  <p>Los búhos boreales son aves nómadas. Se desplazan cientos de kilómetros cuando escasea su presa principal, el campañol.</p>
</div>

<!-- Modal Nativo -->
<button onclick="document.getElementById('modal').showModal()" class="btn">Abrir Credencial</button>

<dialog id="modal" class="fauna-dialog">
  <h3>🦉 Credencial de Guardián</h3>
  <p>Has dominado los componentes nativos de HTML5.</p>
  <form method="dialog">
    <button class="btn">Cerrar</button>
  </form>
</dialog>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
}
h2 { color: #10b981; }
details {
  background: #131b2e;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
summary {
  font-weight: 700;
  color: #38bdf8;
  outline: none;
}
details[open] summary { margin-bottom: 0.5rem; color: #10b981; }
.btn {
  background: #10b981;
  color: #020617;
  font-weight: 700;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}
.fauna-dialog {
  background: #131b2e;
  border: 2px solid #10b981;
  border-radius: 12px;
  color: #ffffff;
  padding: 1.5rem;
}
.fauna-dialog::backdrop { background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); }`,
      js: `console.log("🦉 Archie: '<details> y <summary> te ahorran decenas de líneas de JS'");`
    },
    solutionCode: {
      html: `<h2>🐾 Base de Datos de Preguntas Frecuentes</h2>

<details class="faq-card">
  <summary>¿Cómo migran los búhos boreales?</summary>
  <p>Los búhos boreales son aves nómadas. Se desplazan cientos de kilómetros cuando escasea su presa principal, el campañol.</p>
</details>

<button onclick="document.getElementById('modal').showModal()" class="btn">Abrir Credencial</button>

<dialog id="modal" class="fauna-dialog">
  <h3>🦉 Credencial de Guardián</h3>
  <p>Has dominado los componentes nativos de HTML5.</p>
  <form method="dialog">
    <button class="btn">Cerrar</button>
  </form>
</dialog>`
    },
    tests: [
      { desc: 'Usa la etiqueta <details>', test: (c) => /<details[\s>]/i.test(c.html) },
      { desc: 'Usa la etiqueta <summary>', test: (c) => /<summary[\s>]/i.test(c.html) },
      { desc: 'Contiene un modal <dialog>', test: (c) => /<dialog[\s>]/i.test(c.html) }
    ]
  },

  {
    id: 'html-seo-a11y-metadata',
    title: '7. Accesibilidad ARIA y Metadatos SEO OpenGraph',
    level: 'Avanzado',
    guardian: 'html',
    badge: '🦉 Archie',
    description: 'Garantiza que tu web brille en Twitter/WhatsApp con OpenGraph y sea navegable con teclado usando roles ARIA.',
    theory: 'Las etiquetas <meta property="og:*"> controlan cómo se ve tu enlace al compartirlo en redes, y los atributos aria-label y aria-live comunican cambios dinámicos a usuarios invidentes.',
    objectives: [
      'Agrega un botón accesible con aria-label="Cerrar notificación"',
      'Define un área dinámica accesible con aria-live="polite"',
      'Agrega una etiqueta <meta property="og:title" content="..."> en el <head>'
    ],
    hint: 'Usa <button aria-label="...">✕</button> y un contenedor con aria-live="polite"',
    initialCode: {
      html: `<div class="notification-banner">
  <!-- 🦉 Reto de Archie: Haz este botón accesible para lectores de pantalla con aria-label -->
  <button class="close-icon">✕</button>
  <p>🚨 Alerta de conservación: Nueva especie de búho avistada.</p>
</div>

<!-- Contenedor accesible para anuncios dinámicos -->
<div id="liveFeed" class="feed-box">
  <p>Monitoreando señales satelitales...</p>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0b0f17;
  color: #f8fafc;
  padding: 2rem;
}
.notification-banner {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid #10b981;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.close-icon {
  background: transparent;
  border: none;
  color: #10b981;
  font-size: 1.2rem;
  cursor: pointer;
}
.feed-box {
  margin-top: 1.5rem;
  background: #131b2e;
  padding: 1rem;
  border-radius: 8px;
  font-family: monospace;
  color: #38bdf8;
}`,
      js: `console.log("🦉 Archie: 'Un botón de solo icono sin aria-label es invisible para lectores de pantalla'");`
    },
    solutionCode: {
      html: `<div class="notification-banner">
  <button class="close-icon" aria-label="Cerrar notificación de alerta">✕</button>
  <p>🚨 Alerta de conservación: Nueva especie de búho avistada.</p>
</div>

<div id="liveFeed" class="feed-box" aria-live="polite">
  <p>Monitoreando señales satelitales...</p>
</div>`
    },
    tests: [
      { desc: 'El botón contiene aria-label descriptivo', test: (c) => /<button[^>]*aria-label=/i.test(c.html) },
      { desc: 'El contenedor de anuncios usa aria-live="polite"', test: (c) => /aria-live=["']polite["']/i.test(c.html) }
    ]
  }
];
