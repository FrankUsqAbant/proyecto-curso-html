(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const l=[{id:"html-semantic-layout",title:"1. Layout Semántico y Jerarquía Sagrada",level:"Básico",guardian:"html",badge:"🦉 Archie",description:'Elimina el vicio de la "Divitis" y reemplaza elementos <div> genéricos por la arquitectura semántica pura de HTML5.',theory:"Los motores de búsqueda (SEO) y las tecnologías de asistencia para personas ciegas (lectores de pantalla) navegan por hitos semánticos: <header>, <nav>, <main>, <article>, <aside> y <footer>.",objectives:["Encapsula el logo y título dentro de un <header>","Envuelve los enlaces de navegación dentro de una etiqueta <nav>","Usa <main> para el contenido principal y <article> para la tarjeta"],hint:'Reemplaza <div class="site-header"> por <header class="site-header"> y lo mismo con <nav>, <main> y <article>.',initialCode:{html:`<!-- 🦉 Reto de Archie: Convierte estos divs genéricos en HTML semántico puro -->
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
}`,js:`console.log("🦉 Archie: 'Reemplaza los divs por elementos semánticos y haz clic en Validar'");`},solutionCode:{html:`<header class="site-header">
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
</footer>`},tests:[{desc:"Contiene una etiqueta <header>",test:e=>/<header[\s>]/i.test(e.html)},{desc:"Contiene una etiqueta <nav>",test:e=>/<nav[\s>]/i.test(e.html)},{desc:"Contiene una etiqueta <main>",test:e=>/<main[\s>]/i.test(e.html)},{desc:"Contiene una etiqueta <article>",test:e=>/<article[\s>]/i.test(e.html)}]},{id:"html-text-elements",title:"2. Textos Técnicos y Listas de Definición",level:"Básico",guardian:"html",badge:"🦉 Archie",description:"Estructura glosarios de términos y datos técnicos usando las etiquetas especializadas <dl>, <dt>, <dd>, <mark> y <time>.",theory:"Una lista de definiciones <dl> vincula un término <dt> con su descripción <dd>. Son perfectas para especificaciones de productos, metadatos y glosarios científicos.",objectives:["Crea una lista de definición con <dl>","Define al menos dos términos con <dt> y descripciones con <dd>","Resalta un dato clave con <mark> y una fecha con <time>"],hint:"Usa <dl><dt>Nombre</dt><dd>Descripción con <mark>resaltado</mark></dd></dl>",initialCode:{html:`<h2>📖 Glosario de Fauna Nocturna</h2>

<!-- 🦉 Reto de Archie: Convierte estos párrafos en una lista de definición <dl> -->
<p><b>Ecolocación:</b> Capacidad de orientarse emitiendo sonidos de alta frecuencia.</p>
<p><b>Visión Escotópica:</b> Visión adaptada a condiciones de baja luminosidad.</p>

<p>Último avistamiento registrado: 02 de Septiembre de 2026.</p>`,css:`body {
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
time { color: #10b981; font-weight: 600; }`,js:`console.log("🦉 Archie: 'Usa <dl>, <dt>, <dd>, <mark> y <time>'");`},solutionCode:{html:`<h2>📖 Glosario de Fauna Nocturna</h2>

<dl>
  <dt>Ecolocación</dt>
  <dd>Capacidad de orientarse emitiendo sonidos de <mark>alta frecuencia</mark>.</dd>

  <dt>Visión Escotópica</dt>
  <dd>Visión adaptada a condiciones de baja luminosidad.</dd>
</dl>

<p>Último avistamiento registrado: <time datetime="2026-09-02">02 de Septiembre de 2026</time>.</p>`},tests:[{desc:"Usa la lista de definición <dl>",test:e=>/<dl[\s>]/i.test(e.html)},{desc:"Usa términos <dt> y descripciones <dd>",test:e=>/<dt[\s>]/i.test(e.html)&&/<dd[\s>]/i.test(e.html)},{desc:"Usa texto resaltado con <mark>",test:e=>/<mark[\s>]/i.test(e.html)},{desc:"Usa fecha semántica con <time>",test:e=>/<time[\s>]/i.test(e.html)}]},{id:"html-responsive-picture",title:"3. Imágenes Responsivas de Élite con <picture>",level:"Intermedio",guardian:"html",badge:"🦉 Archie",description:"No sirvas imágenes pesadas de escritorio a un móvil. Usa <picture> y <source> para cambiar la imagen según el ancho de pantalla o formato WebP.",theory:'El elemento <picture> contiene uno o más elementos <source media="..."> y un elemento <img> de respaldo. El navegador evalúa las condiciones y descarga ÚNICAMENTE la imagen que necesita, ahorrando megabytes de ancho de banda.',objectives:["Envuelve la imagen dentro de un elemento <picture>",'Agrega un <source media="(max-width: 600px)" srcset="..."> para móviles',"Incluye una etiqueta <img> con atributo alt descriptivo como fallback"],hint:'Usa <picture><source media="(max-width: 600px)" srcset="url_movil"><img src="url_desktop" alt="..."></picture>',initialCode:{html:`<h2>📸 Avistamiento de Búho en Alta Definición</h2>

<!-- 🦉 Reto de Archie: Convierte este simple <img> en un <picture> responsivo -->
<div class="image-wrapper">
  <img src="https://images.unsplash.com/photo-1579273166657-ed2266fe3613?w=800" alt="Búho nival en reposo">
</div>`,css:`body {
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
}`,js:`console.log("🦉 Archie: 'Implementa <picture> y <source media="...">'");`},solutionCode:{html:`<h2>📸 Avistamiento de Búho en Alta Definición</h2>

<div class="image-wrapper">
  <picture>
    <source media="(max-width: 600px)" srcset="https://images.unsplash.com/photo-1579273166657-ed2266fe3613?w=400">
    <img src="https://images.unsplash.com/photo-1579273166657-ed2266fe3613?w=800" alt="Búho nival en reposo sobre un árbol nevado">
  </picture>
</div>`},tests:[{desc:"Usa el elemento contenedor <picture>",test:e=>/<picture[\s>]/i.test(e.html)},{desc:'Usa la etiqueta <source media="...">',test:e=>/<source[\s][^>]*media=/i.test(e.html)},{desc:"Mantiene una etiqueta <img> con atributo alt",test:e=>/<img[\s][^>]*alt=/i.test(e.html)}]},{id:"html-modern-forms",title:"4. Formularios con Validación Nativa y Datalist",level:"Intermedio",guardian:"html",badge:"🦉 Archie",description:"Aprende a autocompletar con <datalist> y a validar formatos con pattern regex nativo de HTML5.",theory:"El elemento <datalist> proporciona sugerencias de autocompletado en un <input> sin usar librerías de JavaScript, mientras que el atributo pattern aplica expresiones regulares directamente en el navegador.",objectives:['Agrega un <input list="habitats"> y conéctalo a un <datalist id="habitats">',"Crea al menos 3 opciones dentro de <datalist>",'Aplica validación con required y type="email"'],hint:'Asocia el input con list="miLista" y crea <datalist id="miLista"><option value="Bosque">...</datalist>',initialCode:{html:`<form id="specimenForm" class="fauna-form">
  <h2>📋 Ficha de Ingreso de Espécimen</h2>

  <label for="email">Correo del Biólogo:</label>
  <input type="email" id="email" required placeholder="biologo@fauna.org">

  <label for="habitat">Hábitat Observado:</label>
  <!-- 🦉 Reto de Archie: Conecta este input a un <datalist> con opciones -->
  <input type="text" id="habitat" placeholder="Selecciona o escribe un hábitat...">

  <button type="submit" class="submit-btn">Guardar Ficha</button>
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
}`,js:`document.getElementById('specimenForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('🦉 ¡Ficha registrada con éxito!');
});`},solutionCode:{html:`<form id="specimenForm" class="fauna-form">
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
</form>`},tests:[{desc:"El input tiene el atributo list",test:e=>/<input[^>]*list=/i.test(e.html)},{desc:"Contiene el elemento <datalist>",test:e=>/<datalist[\s>]/i.test(e.html)},{desc:'Contiene opciones <option value="..."> en el datalist',test:e=>/<option[^>]*value=/i.test(e.html)},{desc:"Tiene validación required en el correo",test:e=>/<input[^>]*required/i.test(e.html)}]},{id:"html-accessible-tables",title:"5. Tablas de Datos Accesibles con <caption> y Scope",level:"Intermedio",guardian:"html",badge:"🦉 Archie",description:'Estructura una tabla de datos accesible con encabezados semánticos scope="col" y un título descriptivo <caption>.',theory:'El atributo scope="col" y scope="row" en los <th> le indica a los lectores de pantalla exactamente a qué fila o columna pertenece cada dato, permitiendo una lectura accesible sin confusiones.',objectives:["Agrega un <caption> al inicio de la tabla","Divide la tabla con <thead> y <tbody>",'Aplica scope="col" a los encabezados <th>'],hint:'Usa <table><caption>Título</caption><thead><tr><th scope="col">...</th></tr></thead><tbody>...</tbody></table>',initialCode:{html:`<!-- 🦉 Reto de Archie: Convierte esta tabla simple en una tabla semántica y accesible -->
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
</table>`,css:`body {
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
}`,js:`console.log("🦉 Archie: 'Una tabla sin <caption> ni <thead> es invisible para la accesibilidad'");`},solutionCode:{html:`<table class="fauna-table">
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
</table>`},tests:[{desc:"Contiene un <caption> descriptivo",test:e=>/<caption[\s>]/i.test(e.html)},{desc:"Usa <thead> y <tbody>",test:e=>/<thead[\s>]/i.test(e.html)&&/<tbody[\s>]/i.test(e.html)},{desc:'Usa <th scope="col"> en los encabezados',test:e=>/<th[^>]*scope=["']col["']/i.test(e.html)}]},{id:"html-native-dialog-accordion",title:"6. Componentes Nativos: <dialog> y <details>",level:"Avanzado",guardian:"html",badge:"🦉 Archie",description:"Crea acordeones colapsables sin JavaScript usando <details> y <summary>, y modales con <dialog>.",theory:"HTML5 nativo te permite crear acordeones plegables con <details> y <summary> con animación y accesibilidad de teclado gratuita sin programar JavaScript.",objectives:["Crea un acordeón interactivo con <details> y <summary>",'Crea un modal accesible con <dialog id="infoModal">','Agrega un formulario con method="dialog" dentro del modal'],hint:"Usa <details><summary>Pregunta</summary><p>Respuesta</p></details>",initialCode:{html:`<h2>🐾 Base de Datos de Preguntas Frecuentes</h2>

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
</dialog>`,css:`body {
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
.fauna-dialog::backdrop { background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); }`,js:`console.log("🦉 Archie: '<details> y <summary> te ahorran decenas de líneas de JS'");`},solutionCode:{html:`<h2>🐾 Base de Datos de Preguntas Frecuentes</h2>

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
</dialog>`},tests:[{desc:"Usa la etiqueta <details>",test:e=>/<details[\s>]/i.test(e.html)},{desc:"Usa la etiqueta <summary>",test:e=>/<summary[\s>]/i.test(e.html)},{desc:"Contiene un modal <dialog>",test:e=>/<dialog[\s>]/i.test(e.html)}]},{id:"html-seo-a11y-metadata",title:"7. Accesibilidad ARIA y Metadatos SEO OpenGraph",level:"Avanzado",guardian:"html",badge:"🦉 Archie",description:"Garantiza que tu web brille en Twitter/WhatsApp con OpenGraph y sea navegable con teclado usando roles ARIA.",theory:'Las etiquetas <meta property="og:*"> controlan cómo se ve tu enlace al compartirlo en redes, y los atributos aria-label y aria-live comunican cambios dinámicos a usuarios invidentes.',objectives:['Agrega un botón accesible con aria-label="Cerrar notificación"','Define un área dinámica accesible con aria-live="polite"','Agrega una etiqueta <meta property="og:title" content="..."> en el <head>'],hint:'Usa <button aria-label="...">✕</button> y un contenedor con aria-live="polite"',initialCode:{html:`<div class="notification-banner">
  <!-- 🦉 Reto de Archie: Haz este botón accesible para lectores de pantalla con aria-label -->
  <button class="close-icon">✕</button>
  <p>🚨 Alerta de conservación: Nueva especie de búho avistada.</p>
</div>

<!-- Contenedor accesible para anuncios dinámicos -->
<div id="liveFeed" class="feed-box">
  <p>Monitoreando señales satelitales...</p>
</div>`,css:`body {
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
}`,js:`console.log("🦉 Archie: 'Un botón de solo icono sin aria-label es invisible para lectores de pantalla'");`},solutionCode:{html:`<div class="notification-banner">
  <button class="close-icon" aria-label="Cerrar notificación de alerta">✕</button>
  <p>🚨 Alerta de conservación: Nueva especie de búho avistada.</p>
</div>

<div id="liveFeed" class="feed-box" aria-live="polite">
  <p>Monitoreando señales satelitales...</p>
</div>`},tests:[{desc:"El botón contiene aria-label descriptivo",test:e=>/<button[^>]*aria-label=/i.test(e.html)},{desc:'El contenedor de anuncios usa aria-live="polite"',test:e=>/aria-live=["']polite["']/i.test(e.html)}]}],m=[{id:"css-box-model-sizing",title:"1. El Secreto del Box Model: Border-Box",level:"Básico",guardian:"css",badge:"🦎 Chroma",description:"Evita que el padding y border rompan el ancho de tus cajas. Domina box-sizing: border-box.",theory:"Por defecto (content-box), si un div tiene width: 100px y le agregas padding: 20px, medirá 140px. Con box-sizing: border-box, el padding se absorbe hacia adentro, manteniendo exactamente los 100px.",objectives:["Aplica box-sizing: border-box a las cajas","Configura un padding de 1.5rem","Usa outline para un anillo de enfoque sin alterar el layout"],hint:"En .box usa box-sizing: border-box; padding: 1.5rem; outline: 2px solid #06b6d4;",initialCode:{html:`<h2>🦎 Prueba de Anatomía: Box Model</h2>
<div class="box-container">
  <div class="box box-content">Caja Clásica (Rompe el layout)</div>
  <div class="box box-border">Caja Perfecta (border-box)</div>
</div>`,css:`body {
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
}`,js:`console.log("🦎 Chroma: 'border-box es la primera regla que debes declarar en todo proyecto moderno'");`},solutionCode:{css:`body {
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
}`},tests:[{desc:"Aplica box-sizing: border-box",test:e=>/box-sizing:\s*border-box/i.test(e.css)},{desc:"Aplica padding en la caja",test:e=>/padding:\s*[^;]+;/i.test(e.css)}]},{id:"css-flexbox-mastery",title:"2. Flexbox Maestro: Alineación y Espaciado con Gap",level:"Básico",guardian:"css",badge:"🦎 Chroma",description:"Aprende a distribuir elementos en una sola dimensión usando display: flex, justify-content y gap.",theory:"Flexbox revolucionó la web eliminando los floats. Con justify-content controlas el eje principal y con align-items el eje cruzado. Además, gap separa los hijos sin necesidad de calcular margins.",objectives:["Aplica display: flex al contenedor","Centra verticalmente los elementos con align-items: center","Separa con justify-content: space-between y gap: 1rem"],hint:"En .nav-bar aplica display: flex; align-items: center; justify-content: space-between; gap: 1rem;",initialCode:{html:`<nav class="nav-bar">
  <div class="logo">🦎 FaunaHub</div>
  <ul class="nav-links">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Especies</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
  <button class="cta-btn">Unirse</button>
</nav>`,css:`body {
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
}`,js:`console.log("🦎 Chroma: 'Flexbox alinea elementos como un camaleón sobre una rama'");`},solutionCode:{css:`.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #111827;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #1f2937;
}`},tests:[{desc:"Aplica display: flex en .nav-bar",test:e=>/\.nav-bar[^{]*{[^}]*display:\s*flex/i.test(e.css)},{desc:"Usa align-items: center",test:e=>/align-items:\s*center/i.test(e.css)},{desc:"Usa justify-content: space-between",test:e=>/justify-content:\s*space-between/i.test(e.css)}]},{id:"css-grid-autofit",title:"3. CSS Grid Responsivo en 1 Línea con Auto-Fit",level:"Intermedio",guardian:"css",badge:"🦎 Chroma",description:"Crea una galería responsiva que se reordena sola según el tamaño de la pantalla sin escribir @media queries.",theory:"Con grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); el navegador calcula automáticamente cuántas columnas caben y las estira armónicamente.",objectives:["Aplica display: grid al contenedor","Usa repeat(auto-fit, minmax(180px, 1fr))","Agrega un gap de 1.25rem"],hint:"display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem;",initialCode:{html:`<div class="habitat-grid">
  <div class="card">🌲 Bosque</div>
  <div class="card">🦎 Selva</div>
  <div class="card">🏔️ Tundra</div>
  <div class="card">🌊 Océano</div>
</div>`,css:`body {
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
}`,js:`console.log("🦎 Chroma: 'Cambia el tamaño de pantalla y mira cómo fluyen las columnas'");`},solutionCode:{css:`.habitat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
}`},tests:[{desc:"Aplica display: grid",test:e=>/display:\s*grid/i.test(e.css)},{desc:"Usa repeat(auto-fit, minmax(...))",test:e=>/repeat\(\s*auto-fit\s*,\s*minmax/i.test(e.css)},{desc:"Usa gap entre elementos",test:e=>/gap:\s*[^;]+;/i.test(e.css)}]},{id:"css-sticky-positioning",title:"4. Posicionamiento Sticky para Cabeceras Adhesivas",level:"Intermedio",guardian:"css",badge:"🦎 Chroma",description:"Haz que una barra de navegación se quede pegada al techo al hacer scroll usando position: sticky.",theory:"Un elemento con position: sticky actúa como relativo hasta que alcanza el umbral de scroll indicado (ej. top: 0), momento en el cual se fija en la pantalla sin salirse de su contenedor padre.",objectives:["Aplica position: sticky a la cabecera","Define top: 0 para que se fije en el borde superior","Usa z-index para asegurar que flote sobre el contenido"],hint:"En .sticky-header aplica position: sticky; top: 0; z-index: 10;",initialCode:{html:`<div class="scroll-area">
  <div class="sticky-header">📌 Barra Adhesiva (Sticky)</div>
  <div class="content-block">Contenido 1</div>
  <div class="content-block">Contenido 2</div>
  <div class="content-block">Contenido 3</div>
  <div class="content-block">Contenido 4</div>
</div>`,css:`body {
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
}`,js:`console.log("🦎 Chroma: 'Haz scroll dentro de la caja para ver el efecto sticky'");`},solutionCode:{css:`.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #06b6d4;
  color: #080b11;
  padding: 0.85rem;
  font-weight: 800;
}`},tests:[{desc:"Usa position: sticky",test:e=>/position:\s*sticky/i.test(e.css)},{desc:"Define top: 0",test:e=>/top:\s*0/i.test(e.css)},{desc:"Usa z-index para apilamiento",test:e=>/z-index:\s*\d+/i.test(e.css)}]},{id:"css-variables-theming",title:"5. Custom Properties y Cambio de Temas con Variables",level:"Intermedio",guardian:"css",badge:"🦎 Chroma",description:"Declara variables CSS (:root) para colores primarios y reutilízalas en cascada.",theory:"Las Custom Properties se declaran con --nombre-variable y se consumen con var(--nombre-variable). Al cambiar la variable en el selector :root o en una clase, todo el sitio cambia instantáneamente.",objectives:["Declara --fauna-accent: #06b6d4 en :root","Consume la variable en .theme-card usando var(--fauna-accent)","Aplica calc() en el padding o margin"],hint:":root { --fauna-accent: #06b6d4; } y luego border-color: var(--fauna-accent);",initialCode:{html:`<div class="theme-card">
  <h2>🦎 Sistema de Variables Dinámicas</h2>
  <p>El camaleón adapta su color instantáneamente.</p>
  <button class="theme-btn">Botón con Variable</button>
</div>`,css:`/* 🦎 Declara variables en :root */
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
}`,js:`console.log("🦎 Chroma: 'Con variables CSS cambiar de Dark a Light toma 3 líneas'");`},solutionCode:{css:`:root {
  --fauna-accent: #06b6d4;
  --fauna-bg: #111827;
}`},tests:[{desc:"Declara una variable con dos guiones (--)",test:e=>/--[a-zA-Z0-9_-]+:/i.test(e.css)},{desc:"Consume la variable con var(...)",test:e=>/var\(--[a-zA-Z0-9_-]+\)/i.test(e.css)}]},{id:"css-glassmorphism-blur",title:"6. Glassmorphism Puro con Backdrop-Filter",level:"Avanzado",guardian:"css",badge:"🦎 Chroma",description:"Crea superficies translúcidas ultra modernas con desenfoque de fondo y borde iluminado.",theory:"Backdrop-filter: blur(16px) aplica un filtro gaussiano al contenido que queda detrás del elemento, simulando un panel de vidrio ahumado.",objectives:["Aplica background: rgba(255, 255, 255, 0.08)","Aplica backdrop-filter: blur(16px)","Agrega un borde tenue de 1px con rgba(255, 255, 255, 0.2)"],hint:"background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.15);",initialCode:{html:`<div class="backdrop-scene">
  <div class="circle circle-cyan"></div>
  <div class="circle circle-green"></div>
  
  <div class="glass-panel">
    <h3>🦎 Efecto Vidrio Ahumado</h3>
    <p>Superficie translúcida con desenfoque óptico de alta gama.</p>
  </div>
</div>`,css:`body {
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
}`,js:`console.log("🦎 Chroma: 'Glassmorphism es el estándar visual de macOS y Windows 11'");`},solutionCode:{css:`.glass-panel {
  position: relative;
  z-index: 10;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
}`},tests:[{desc:"Usa backdrop-filter: blur(...)",test:e=>/backdrop-filter:\s*blur\(/i.test(e.css)},{desc:"Usa fondo semitransparente rgba()",test:e=>/background:\s*rgba\(/i.test(e.css)}]},{id:"css-transitions-bezier",title:"7. Transiciones Suaves y Curvas Bézier",level:"Avanzado",guardian:"css",badge:"🦎 Chroma",description:"Transforma clics bruscos en micro-interacciones sedosas usando transition y cubic-bezier.",theory:"La curva cubic-bezier(0.34, 1.56, 0.64, 1) simula elasticidad orgánica, ideal para botones y tarjetas que rebotan suavemente al pasar el mouse.",objectives:["Aplica transition: transform 0.3s cubic-bezier(...) en la tarjeta","Aplica transform: translateY(-8px) scale(1.02) en el hover","Agrega un box-shadow enriquecido en el estado hover"],hint:"transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); y en :hover usa transform: translateY(-8px);",initialCode:{html:`<div class="elastic-card">
  <h3>🦎 Piel Elástica del Camaleón</h3>
  <p>Pasa el cursor sobre esta tarjeta para sentir la física elástica.</p>
</div>`,css:`body {
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
p { font-size: 0.85rem; color: #94a3b8; }`,js:`console.log("🦎 Chroma: 'Las transiciones elásticas hacen que la UI se sienta viva'");`},solutionCode:{css:`.elastic-card {
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
}`},tests:[{desc:"Usa la propiedad transition con transform",test:e=>/transition:[^;]*transform/i.test(e.css)},{desc:"Usa una función de tiempo cubic-bezier",test:e=>/cubic-bezier/i.test(e.css)},{desc:"Aplica transform en el estado :hover",test:e=>/:hover[^{]*{[^}]*transform:/i.test(e.css)}]},{id:"css-keyframes-pulse",title:"8. Animaciones Continuas con @keyframes",level:"Avanzado",guardian:"css",badge:"🦎 Chroma",description:"Crea efectos continuos de radar o latido usando la regla @keyframes y animation: infinite.",theory:"A diferencia de las transiciones (que requieren una interacción como hover), @keyframes se ejecuta automáticamente de forma continua con infinitos bucles usando animation-iteration-count: infinite.",objectives:["Declara una animación con @keyframes pulseGlow","Configura fotogramas 0%, 50% y 100%","Aplica animation: pulseGlow 2s infinite ease-in-out en el badge"],hint:"@keyframes pulseGlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }",initialCode:{html:`<div class="sonar-box">
  <div class="radar-dot"></div>
  <p>Radar de Camaleón Activo</p>
</div>`,css:`body {
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
}`,js:`console.log("🦎 Chroma: 'Las animaciones con keyframes añaden señales de feedback en tiempo real'");`},solutionCode:{css:`@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 15px rgba(6, 182, 212, 0);
  }
}`},tests:[{desc:"Declara una regla @keyframes",test:e=>/@keyframes\s+[a-zA-Z0-9_-]+/i.test(e.css)},{desc:"Aplica animation con valor infinite",test:e=>/animation:[^;]*infinite/i.test(e.css)}]}],p=[{id:"js-modern-syntax-ternary",title:"1. Variables Modernas, Template Literals y Ternarios",level:"Básico",guardian:"js",badge:"🦊 Kitsune",description:"Abandona var y la concatenación antigua con signos +. Domina const, template literals y operadores ternarios.",theory:"Template literals con comillas invertidas (`...`) permiten interpolar variables con ${valor} y saltos de línea limpios. El operador ternario (condicion ? verdad : falso) simplifica condicionales en una línea.",objectives:["Declara variables con const o let (nunca var)","Usa un template literal con interpolación de variables ${...}","Aplica un operador ternario para calcular el estado"],hint:'const mensaje = `Animal: ${nombre} (${esNocturno ? "Nocturno" : "Diurno"})`;',initialCode:{html:'<div id="output" class="result-box"></div>',css:`body {
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
}`,js:`// 🦊 Reto de Kitsune: Refactoriza este código antiguo a ES2024
const nombre = "Zorro Fénnec";
const velocidadKmH = 40;
const esNocturno = true;

// Usa un template literal y un operador ternario
const salida = \`🦊 \${nombre} — Velocidad: \${velocidadKmH} km/h | Hábitat: \${esNocturno ? 'Nocturno' : 'Diurno'}\`;

document.getElementById('output').textContent = salida;
console.log(salida);`},solutionCode:{js:`const nombre = "Zorro Fénnec";
const velocidadKmH = 40;
const esNocturno = true;

const salida = \`🦊 \${nombre} — Velocidad: \${velocidadKmH} km/h | Hábitat: \${esNocturno ? 'Nocturno' : 'Diurno'}\`;
document.getElementById('output').textContent = salida;`},tests:[{desc:"Usa const o let (sin var)",test:e=>!/\bvar\s+/i.test(e.js)&&(/\bconst\s+/i.test(e.js)||/\blet\s+/i.test(e.js))},{desc:"Usa un template literal (`...${...}`)",test:e=>/`[^`]*\${[^}]+}[^`]*`/i.test(e.js)},{desc:"Usa un operador ternario (? :)",test:e=>/\?[^:]+:/i.test(e.js)}]},{id:"js-arrow-functions-destructuring",title:"2. Arrow Functions, Desestructuración y Spread",level:"Básico",guardian:"js",badge:"🦊 Kitsune",description:"Extrae propiedades directamente con { nombre, edad } y combina objetos con el operador spread (...).",theory:"La desestructuración te ahorra escribir objeto.propiedad 10 veces. El operador spread (...) clona objetos y arreglos de forma inmutable sin efectos secundarios.",objectives:["Declara una función flecha (arrow function)","Desestructura propiedades { especie, habitat } en los parámetros","Usa el operador spread (...) para clonar o agregar propiedades"],hint:"const formatFauna = ({ especie, habitat, ...resto }) => ({ ...resto, especie, habitat });",initialCode:{html:'<div id="cardOutput" class="result-box"></div>',css:`body {
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
}`,js:`// 🦊 Reto de Kitsune: Crea una arrow function con desestructuración y spread
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
console.log(presentarFauna(zorroData));`},solutionCode:{js:`const zorroData = {
  especie: 'Vulpes vulpes',
  comun: 'Zorro Rojo',
  habitat: 'Bosques y Praderas',
  sigilo: 95
};

const presentarFauna = ({ comun, habitat, ...detalles }) => {
  const clonado = { ...detalles, comun, habitat, activo: true };
  return \`🦊 \${comun} (\${habitat}) — Sigilo: \${clonado.sigilo}%\`;
};

document.getElementById('cardOutput').textContent = presentarFauna(zorroData);`},tests:[{desc:"Usa una Arrow Function (=>)",test:e=>/=>/i.test(e.js)},{desc:"Aplica desestructuración ({ ... })",test:e=>/\{\s*[a-zA-Z0-9_,\s]+\s*\}/i.test(e.js)},{desc:"Usa el operador spread (...)",test:e=>/\.\.\.[a-zA-Z0-9_]+/i.test(e.js)}]},{id:"js-dom-manipulation",title:"3. Manipulación Dinámica del DOM y createElement",level:"Intermedio",guardian:"js",badge:"🦊 Kitsune",description:"Crea elementos con document.createElement(), aplica clases con classList y conéctalos al árbol sin romper el rendimiento.",theory:"Modificar innerHTML en bucles destruye listeners y fuerza re-renderizados costosos. El enfoque seguro de ingeniería consiste en usar createElement(), classList.add() y append().",objectives:['Crea un elemento con document.createElement("div")',"Agrega clases usando elemento.classList.add(...)","Inserta el nodo en el DOM con append() o appendChild()"],hint:'const item = document.createElement("div"); item.classList.add("fauna-item"); contenedor.append(item);',initialCode:{html:`<h2>🦊 Manada del Zorro: Generador Dinámico</h2>
<button id="addBtn" class="btn">🐾 Añadir Miembro a la Manada</button>
<div id="packList" class="pack-container"></div>`,css:`body {
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
}`,js:`let counter = 1;
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
});`},solutionCode:{js:`let counter = 1;
const btn = document.getElementById('addBtn');
const container = document.getElementById('packList');

btn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.classList.add('fauna-card');
  card.innerHTML = \`<span>🦊 Zorro Explorador #\${counter}</span><span style="color: #10b981;">● Activo</span>\`;
  container.append(card);
  counter++;
});`},tests:[{desc:"Usa document.createElement(...)",test:e=>/document\.createElement\(/i.test(e.js)},{desc:"Usa classList.add(...)",test:e=>/classList\.add\(/i.test(e.js)},{desc:"Inserta con append() o appendChild()",test:e=>/\.(append|appendChild)\(/i.test(e.js)}]},{id:"js-event-delegation",title:"4. Delegación de Eventos de Alto Rendimiento",level:"Intermedio",guardian:"js",badge:"🦊 Kitsune",description:"En vez de agregar 100 listeners a 100 botones, agrega UN solo listener al contenedor padre usando e.target.closest().",theory:"La delegación de eventos aprovecha la propagación natural de eventos (Event Bubbling). Un solo listener en el padre escucha todos los clics de sus hijos actuales y futuros, ahorrando memoria y previniendo fugas.",objectives:['Agrega addEventListener("click") al contenedor padre','Usa e.target.closest(".tag-btn") para identificar el botón clickeado',"Lee el atributo data-id usando dataset"],hint:'padre.addEventListener("click", (e) => { const btn = e.target.closest(".tag-btn"); if (!btn) return; console.log(btn.dataset.id); });',initialCode:{html:`<h2>🦊 Filtro por Delegación de Eventos</h2>
<p>Haz clic en cualquier categoría:</p>
<div id="tagsParent" class="tags-row">
  <button class="tag-btn" data-category="carnivoro">🥩 Carnívoro</button>
  <button class="tag-btn" data-category="herbivoro">🌿 Herbívoro</button>
  <button class="tag-btn" data-category="omnivoro">🍎 Omnívoro</button>
</div>
<div id="statusText" style="margin-top: 1rem; color: #f59e0b;"></div>`,css:`body {
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
.tag-btn:hover { border-color: #f59e0b; }`,js:`const parent = document.getElementById('tagsParent');
const status = document.getElementById('statusText');

// 🦊 UN solo listener delegado en el padre
parent.addEventListener('click', (e) => {
  const btn = e.target.closest('.tag-btn');
  if (!btn) return;

  const category = btn.dataset.category;
  status.textContent = \`Filtro activo: \${category.toUpperCase()}\`;
  console.log(\`Delegación capturó: \${category}\`);
});`},solutionCode:{js:`const parent = document.getElementById('tagsParent');
const status = document.getElementById('statusText');

parent.addEventListener('click', (e) => {
  const btn = e.target.closest('.tag-btn');
  if (!btn) return;

  const category = btn.dataset.category;
  status.textContent = \`Filtro activo: \${category.toUpperCase()}\`;
});`},tests:[{desc:"Escucha el evento click en el padre",test:e=>/addEventListener\(\s*['"]click['"]/i.test(e.js)},{desc:"Usa closest(...) para ubicar el target",test:e=>/closest\(/i.test(e.js)},{desc:"Lee datos con dataset",test:e=>/dataset\./i.test(e.js)}]},{id:"js-array-functional-methods",title:"5. Arreglos Funcionales: Map, Filter y Reduce",level:"Intermedio",guardian:"js",badge:"🦊 Kitsune",description:"Transforma y procesa colecciones de datos como un ninja de JavaScript sin un solo bucle for tradicional.",theory:"filter() descarta elementos según una condición booleana, map() transforma cada elemento en un formato nuevo, y reduce() sintetiza toda la colección en un único valor acumulado.",objectives:["Filtra animales en peligro con .filter()","Calcula la población total sumando con .reduce()","Genera una lista formateada con .map()"],hint:"const total = lista.reduce((acc, curr) => acc + curr.poblacion, 0);",initialCode:{html:`<h2>🦊 Censo Funcional de Fauna</h2>
<div id="statsBox" class="stats-card"></div>`,css:`body {
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
}`,js:`const FAUNA = [
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
console.log("Población amenazada calculada:", totalPoblacionAmenazada);`},solutionCode:{js:`const FAUNA = [
  { nombre: 'Lince Ibérico', poblacion: 1660, enPeligro: true },
  { nombre: 'Zorro Rojo', poblacion: 150000, enPeligro: false },
  { nombre: 'Lobo Ibérico', poblacion: 2500, enPeligro: true },
  { nombre: 'Oso Pardo', poblacion: 370, enPeligro: true }
];

const amenazados = FAUNA.filter(f => f.enPeligro);
const totalPoblacionAmenazada = amenazados.reduce((sum, f) => sum + f.poblacion, 0);`},tests:[{desc:"Usa el método .filter(...)",test:e=>/\.filter\(/i.test(e.js)},{desc:"Usa el método .reduce(...)",test:e=>/\.reduce\(/i.test(e.js)},{desc:"Usa el método .map(...)",test:e=>/\.map\(/i.test(e.js)}]},{id:"js-async-await-fetch",title:"6. Asincronía Moderna: Async/Await y Manejo de Errores",level:"Avanzado",guardian:"js",badge:"🦊 Kitsune",description:"Consume datos asíncronos con async/await y captura fallos de conexión con bloques try/catch/finally.",theory:"async/await permite escribir código asíncrono que se lee como si fuera secuencial. Siempre debe protegerse con try/catch para evitar que la aplicación crashee si se pierde la conexión.",objectives:["Declara una función con la palabra clave async","Usa await con fetch() para solicitar datos","Envuelve la llamada en un bloque try/catch"],hint:"async function cargarDatos() { try { const res = await fetch(...); const data = await res.json(); } catch(e) {} }",initialCode:{html:`<h2>🦊 Monitoreo Satelital Asíncrono</h2>
<button id="fetchBtn" class="btn">📡 Conectar con Satélite</button>
<div id="satelliteLog" style="margin-top: 1rem; color: #38bdf8; font-family: monospace;"></div>`,css:`body {
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
}`,js:`const log = document.getElementById('satelliteLog');
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

btn.addEventListener('click', consultarSatelite);`},solutionCode:{js:`async function consultarSatelite() {
  try {
    const respuesta = await new Promise((resolve) => {
      setTimeout(() => resolve({ estado: 'OK', faunaRastreada: 42, senal: '99%' }), 800);
    });
    log.innerHTML = \`✅ Telemetría recibida: \${respuesta.faunaRastreada} ejemplares activos.\`;
  } catch (error) {
    log.textContent = "❌ Error: " + error.message;
  }
}`},tests:[{desc:"Declara una función con async",test:e=>/\basync\s+function|\basync\s*\(/i.test(e.js)},{desc:"Usa la palabra clave await",test:e=>/\bawait\s+/i.test(e.js)},{desc:"Protege con try / catch",test:e=>/\btry\s*\{[^}]*\}\s*catch/i.test(e.js)}]},{id:"js-localstorage-debounce",title:"7. Persistencia con LocalStorage y Debounce",level:"Avanzado",guardian:"js",badge:"🦊 Kitsune",description:"Guarda notas en el navegador con localStorage y usa debounce para evitar escribir al disco en cada pulsación.",theory:"Debounce pospone la ejecución de una función costosa hasta que el usuario deje de teclear durante un tiempo determinado (ej. 400ms), ahorrando recursos de CPU y disco.",objectives:["Implementa una función debounce(fn, ms)","Guarda datos con localStorage.setItem()","Recupera datos con localStorage.getItem()"],hint:'clearTimeout(timer); timer = setTimeout(..., ms); y localStorage.setItem("nota", valor);',initialCode:{html:`<h2>🦊 Cuaderno de Campo con Autoguardado</h2>
<textarea id="fieldNotes" placeholder="Escribe aquí tus observaciones biológicas..." class="notes-area"></textarea>
<div id="saveStatus" style="font-size: 0.75rem; color: #10b981; margin-top: 0.5rem;"></div>`,css:`body {
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
.notes-area:focus { border-color: #f59e0b; outline: none; }`,js:`const textarea = document.getElementById('fieldNotes');
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
});`},solutionCode:{js:`function debounce(fn, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
localStorage.setItem('fauna_notes_demo', texto);
const guardado = localStorage.getItem('fauna_notes_demo');`},tests:[{desc:"Usa localStorage.setItem(...)",test:e=>/localStorage\.setItem\(/i.test(e.js)},{desc:"Usa localStorage.getItem(...)",test:e=>/localStorage\.getItem\(/i.test(e.js)},{desc:"Implementa lógica de debounce con setTimeout",test:e=>/setTimeout/i.test(e.js)}]},{id:"js-web-audio-api",title:"8. Generación de Sonido con Web Audio API",level:"Avanzado",guardian:"js",badge:"🦊 Kitsune",description:"Crea un generador de notas sonoras usando osciladores matemáticos nativos de JavaScript.",theory:"El AudioContext es el lienzo sonoro del navegador. Creas un OscillatorNode, lo conectas a un GainNode (volumen) y luego al destino (altavoces) sin requerir archivos MP3 externos.",objectives:["Instancia new AudioContext()","Crea un oscilador con createOscillator()","Conecta el nodo a audioCtx.destination y llama a start() y stop()"],hint:"const ctx = new AudioContext(); const osc = ctx.createOscillator(); osc.connect(ctx.destination); osc.start();",initialCode:{html:`<h2>🦊 Canto Nocturno: Web Audio API</h2>
<button id="playToneBtn" class="btn">🎵 Emitir Tono Senoidal (440 Hz)</button>`,css:`body {
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
}`,js:`let audioCtx = null;

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
});`},solutionCode:{js:`const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();
osc.connect(gain);
gain.connect(audioCtx.destination);
osc.start();
osc.stop();`},tests:[{desc:"Instancia un AudioContext",test:e=>/new\s*\(?\s*(window\.)?AudioContext/i.test(e.js)},{desc:"Crea un oscilador con createOscillator()",test:e=>/createOscillator\(/i.test(e.js)},{desc:"Inicia el sonido con start()",test:e=>/\.start\(/i.test(e.js)}]}];class h{static evaluate(t,a=[]){if(!a||a.length===0)return{passed:!0,score:100,results:[{desc:"Reto de práctica libre",passed:!0}]};const s=a.map(r=>{try{const d=r.test(t);return{desc:r.desc,passed:!!d}}catch(d){return{desc:r.desc,passed:!1,error:d.message}}}),o=s.filter(r=>r.passed).length,i=Math.round(o/s.length*100);return{passed:o===s.length,score:i,results:s,passedCount:o,totalCount:s.length}}}class v{constructor(t){this.container=t,this.activeTab="html",this.code={html:"",css:"",js:""},this.debounceTimer=null,this._renderShell()}setCode(t,a=!0){this.code={html:t.html||"",css:t.css||"",js:t.js||""},this.updateEditorContent(),a&&this.runPreview()}getCode(){return{...this.code}}_renderShell(){this.container.className="sandbox-container",this.container.innerHTML=`
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
    `,this.container.querySelectorAll(".code-tab-btn").forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-tab");this.switchTab(o)})});const t=this.container.querySelector("#sandbox-textarea");t.addEventListener("input",s=>{this.code[this.activeTab]=s.target.value,clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.runPreview()},600)}),t.addEventListener("keydown",s=>{if(s.key==="Tab"){s.preventDefault();const o=t.selectionStart,i=t.selectionEnd;t.value=t.value.substring(0,o)+"  "+t.value.substring(i),t.selectionStart=t.selectionEnd=o+2,this.code[this.activeTab]=t.value}}),this.container.querySelector("#sandbox-run-btn").addEventListener("click",()=>{this.runPreview()})}switchTab(t){const a=this.container.querySelector("#sandbox-textarea");this.code[this.activeTab]=a.value,this.activeTab=t,this.container.querySelectorAll(".code-tab-btn").forEach(s=>{s.classList.toggle("active",s.getAttribute("data-tab")===t)}),this.updateEditorContent()}updateEditorContent(){const t=this.container.querySelector("#sandbox-textarea");t.value=this.code[this.activeTab]||""}runPreview(){const t=this.container.querySelector("#sandbox-iframe"),a=this.container.querySelector("#console-logs-list");a.innerHTML="";const o=`
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
    `;t.srcdoc=o}}const y=[{title:"Centrado Perfecto en 1 Línea (CSS)",category:"CSS",code:`display: grid;
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
}`}];function x(){const e=document.getElementById("snippets-modal-overlay");e&&e.remove();const t=document.createElement("div");t.id="snippets-modal-overlay",t.className="modal-overlay",t.innerHTML=`
    <div class="modal-card">
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.3rem;">📜</span>
          <h3 style="margin: 0; color: #ffffff; font-size: 1.1rem;">Cheat Sheet: Snippets de Élite</h3>
        </div>
        <button id="close-modal-btn" class="btn-fauna btn-ghost" style="padding: 0.3rem 0.6rem;">✕</button>
      </div>

      <div class="modal-body">
        ${y.map((a,s)=>`
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
  `,document.body.appendChild(t),t.querySelector("#close-modal-btn").addEventListener("click",()=>{t.remove()}),t.addEventListener("click",a=>{a.target===t&&t.remove()})}class C{constructor(){this.currentGuardian="html",this.currentLessonIndex=0,this.sandbox=null,this.completedLessons=new Set(JSON.parse(localStorage.getItem("devfauna_completed")||"[]")),this.showHint=!1,this.lastTestResult=null,this.init()}get lessonsMap(){return{html:l,css:m,js:p}}get currentLessons(){return this.lessonsMap[this.currentGuardian]||l}get activeLesson(){return this.currentLessons[this.currentLessonIndex]||this.currentLessons[0]}get totalLessonsCount(){return l.length+m.length+p.length}init(){const t=document.getElementById("app");if(!t)return;t.innerHTML=`
      <!-- 1. Header Animalista de Élite -->
      <header class="app-header">
        <div class="brand-group">
          <div class="brand-icon-box">🐾</div>
          <div>
            <div class="brand-title">DevFauna Academy</div>
            <div style="font-size: 0.68rem; color: var(--text-muted);">
              Dominio Web: HTML5 • CSS3 • JavaScript ES2024
            </div>
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
          <div id="mastery-counter-badge" class="brand-tag" style="background: rgba(16, 185, 129, 0.1); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
            🏆 <span id="completed-count-text">${this.completedLessons.size}</span> / ${this.totalLessonsCount} Retos
          </div>
          <button id="header-snippets-btn" class="btn-fauna btn-ghost" title="Ver Snippets Rápidos">
            <span>📜 Cheat Sheet</span>
          </button>
        </div>
      </header>

      <!-- 2. Main Workspace (Split 2 Columnas) -->
      <main class="main-workspace">
        <!-- Panel Izquierdo: Lista de Retos, Teoría y Test Runner -->
        <aside class="lesson-sidebar" id="lesson-sidebar-container"></aside>

        <!-- Panel Derecho: Live Code Sandbox -->
        <section class="sandbox-viewport" id="sandbox-viewport-container"></section>
      </main>
    `;const a=document.getElementById("sandbox-viewport-container");this.sandbox=new v(a),this.renderSidebar(),this.loadActiveLesson(),document.querySelectorAll(".guardian-tab-btn").forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-guardian");this.switchGuardian(o)})}),document.getElementById("header-snippets-btn").addEventListener("click",()=>{x()}),window.addEventListener("message",s=>{if(s.data&&s.data.type==="DEVFAUNA_LOG"){const o=document.getElementById("console-logs-list");if(o){const i=document.createElement("div");i.className="console-entry",i.textContent=`> ${s.data.text}`,o.appendChild(i)}}})}switchGuardian(t){this.currentGuardian=t,this.currentLessonIndex=0,this.showHint=!1,this.lastTestResult=null,document.querySelectorAll(".guardian-tab-btn").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-guardian")===t)}),this.renderSidebar(),this.loadActiveLesson()}loadActiveLesson(){const t=this.activeLesson;t&&this.sandbox&&this.sandbox.setCode(t.initialCode,!0)}runCodeValidation(){const t=this.activeLesson;if(!t||!this.sandbox)return;const a=this.sandbox.getCode(),s=h.evaluate(a,t.tests);this.lastTestResult=s,s.passed&&(this.completedLessons.add(t.id),localStorage.setItem("devfauna_completed",JSON.stringify([...this.completedLessons])),this.updateMasteryCounter()),this.renderSidebar()}updateMasteryCounter(){const t=document.getElementById("completed-count-text");t&&(t.textContent=this.completedLessons.size)}renderSidebar(){const t=document.getElementById("lesson-sidebar-container");if(!t)return;const a=this.activeLesson,s=this.currentLessons,o=this.currentGuardian==="html"?"var(--guardian-html)":this.currentGuardian==="css"?"var(--guardian-css)":"var(--guardian-js)";t.style.setProperty("--current-guardian-color",o),this.completedLessons.has(a.id),t.innerHTML=`
      <!-- Selector de Lecciones de este Guardián -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">
            RETOS DISPONIBLES (${s.length})
          </span>
          <span style="font-size: 0.7rem; color: ${o}; font-weight: 700;">
            ${s.filter(n=>this.completedLessons.has(n.id)).length} de ${s.length} listos
          </span>
        </div>

        <div class="lessons-list-group">
          ${s.map((n,c)=>{const f=this.completedLessons.has(n.id);return`
              <div class="lesson-pill-item ${c===this.currentLessonIndex?"active":""}" data-index="${c}">
                <div style="display: flex; align-items: center; gap: 0.4rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  <span>${f?"✅":"🐾"}</span>
                  <span>${n.title}</span>
                </div>
                <span style="font-size: 0.68rem; color: var(--text-muted);">${n.level}</span>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Tarjeta del Reto Activo -->
      <div class="challenge-card">
        <div class="challenge-header">
          <span class="challenge-badge" style="background: rgba(255,255,255,0.06); color: ${o}; border: 1px solid var(--border-subtle);">
            ${a.badge}
          </span>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">Nivel ${a.level}</span>
        </div>

        <div class="challenge-title">${a.title}</div>
        <p class="challenge-desc">${a.description}</p>

        <!-- Objetivos Pedagógicos -->
        <div class="objectives-box">
          <div class="objectives-title">Objetivos del Ejercicio</div>
          ${a.objectives.map(n=>`
            <div class="objective-item">
              <span style="color: ${o};">🐾</span>
              <span>${n}</span>
            </div>
          `).join("")}
        </div>

        <div style="background: rgba(255,255,255,0.02); border-left: 3px solid ${o}; padding: 0.75rem; border-radius: 4px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
          <strong>💡 Fundamento:</strong> ${a.theory}
        </div>

        <!-- Feedback del Test Runner si existe -->
        ${this.lastTestResult?`
          <div class="test-feedback-box ${this.lastTestResult.passed?"success":"warning"}">
            <div style="font-weight: 800; display: flex; align-items: center; gap: 0.4rem;">
              <span>${this.lastTestResult.passed?"🎉 ¡RETO SUPERADO AL 100%!":"⚠️ CASI LISTO: Revisa estos objetivos"}</span>
            </div>
            ${this.lastTestResult.results.map(n=>`
              <div class="test-item-row">
                <span class="test-badge-icon">${n.passed?"✅":"❌"}</span>
                <span>${n.desc}</span>
              </div>
            `).join("")}
          </div>
        `:""}

        <!-- Pista si está activa -->
        ${this.showHint?`
          <div class="hint-box">
            <strong>💡 Pista de ${a.badge}:</strong> ${a.hint||"Revisa la teoría y los objetivos arriba."}
          </div>
        `:""}

        <!-- Botón Principal del Test Runner -->
        <button id="validate-code-btn" class="btn-fauna btn-primary" style="width: 100%; font-size: 0.85rem; padding: 0.65rem;">
          <span>🧪 Validar Mi Código (Test Runner)</span>
        </button>

        <div style="display: flex; gap: 0.4rem;">
          <button id="hint-toggle-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            💡 ${this.showHint?"Ocultar Pista":"Pista"}
          </button>
          <button id="reset-lesson-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ↺ Reiniciar
          </button>
          <button id="load-solution-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ✨ Solución
          </button>
        </div>
      </div>
    `,t.querySelectorAll(".lesson-pill-item").forEach(n=>{n.addEventListener("click",()=>{const c=parseInt(n.getAttribute("data-index"),10);this.currentLessonIndex=c,this.showHint=!1,this.lastTestResult=null,this.renderSidebar(),this.loadActiveLesson()})});const i=t.querySelector("#validate-code-btn");i&&i.addEventListener("click",()=>{this.runCodeValidation()});const r=t.querySelector("#hint-toggle-btn");r&&r.addEventListener("click",()=>{this.showHint=!this.showHint,this.renderSidebar()});const d=t.querySelector("#reset-lesson-btn");d&&d.addEventListener("click",()=>{this.lastTestResult=null,this.loadActiveLesson(),this.renderSidebar()});const u=t.querySelector("#load-solution-btn");u&&u.addEventListener("click",()=>{a.solutionCode&&this.sandbox.setCode({html:a.solutionCode.html||a.initialCode.html,css:a.solutionCode.css||a.initialCode.css,js:a.solutionCode.js||a.initialCode.js},!0)})}}let b=!1;function g(){b||(b=!0,new C)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();
