/**
 * DevFauna Academy — Live Code Sandbox
 * Editor multitab (HTML, CSS, JS) con renderizado en Iframe aislado y consola de salida en vivo.
 */

export class CodeSandbox {
  constructor(container) {
    this.container = container;
    this.activeTab = 'html'; // 'html' | 'css' | 'js'
    this.code = { html: '', css: '', js: '' };
    this.debounceTimer = null;
    this._renderShell();
  }

  setCode(newCode, autoRun = true) {
    this.code = {
      html: newCode.html || '',
      css: newCode.css || '',
      js: newCode.js || ''
    };
    this.updateEditorContent();
    if (autoRun) {
      this.runPreview();
    }
  }

  getCode() {
    return { ...this.code };
  }

  _renderShell() {
    this.container.className = 'sandbox-container';
    this.container.innerHTML = `
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
    `;

    // Listeners de Tabs
    this.container.querySelectorAll('.code-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Textarea Input
    const textarea = this.container.querySelector('#sandbox-textarea');
    textarea.addEventListener('input', (e) => {
      this.code[this.activeTab] = e.target.value;
      // Auto-preview debounced
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.runPreview();
      }, 600);
    });

    // Soporte para tecla Tab en el textarea
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        this.code[this.activeTab] = textarea.value;
      }
    });

    // Botón Ejecutar
    const runBtn = this.container.querySelector('#sandbox-run-btn');
    runBtn.addEventListener('click', () => {
      this.runPreview();
    });
  }

  switchTab(tabName) {
    // Guardar código actual
    const textarea = this.container.querySelector('#sandbox-textarea');
    this.code[this.activeTab] = textarea.value;

    this.activeTab = tabName;
    this.container.querySelectorAll('.code-tab-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tab') === tabName);
    });

    this.updateEditorContent();
  }

  updateEditorContent() {
    const textarea = this.container.querySelector('#sandbox-textarea');
    textarea.value = this.code[this.activeTab] || '';
  }

  runPreview() {
    const iframe = this.container.querySelector('#sandbox-iframe');
    const logsList = this.container.querySelector('#console-logs-list');
    logsList.innerHTML = '';

    // Interceptor de console.log dentro del iframe
    const consoleInterceptor = `
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
    `;

    const fullSrc = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          ${this.code.css}
        </style>
        ${consoleInterceptor}
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
    `;

    iframe.srcdoc = fullSrc;
  }
}
