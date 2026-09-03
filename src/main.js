/**
 * DevFauna Academy — Orquestador Principal
 * Sistema de Vistas: Home Dashboard (Bienvenida & Pabellones) y Laboratorio Interactivo (Descongestionado).
 */

import { HTML_CURRICULUM } from './data/html-curriculum.js';
import { CSS_CURRICULUM } from './data/css-curriculum.js';
import { JS_CURRICULUM } from './data/js-curriculum.js';
import { CodeEvaluator } from './data/code-evaluator.js';
import { CodeSandbox } from './editor/code-sandbox.js';
import { openSnippetsModal } from './ui/snippets-modal.js';

class AppController {
  constructor() {
    this.currentView = 'home'; // 'home' | 'lab'
    this.currentGuardian = 'html'; // 'html' | 'css' | 'js'
    this.currentLessonIndex = 0;
    this.sandbox = null;
    this.completedLessons = new Set(JSON.parse(localStorage.getItem('devfauna_completed') || '[]'));
    this.showHint = false;
    this.lastTestResult = null;
    this.init();
  }

  get lessonsMap() {
    return {
      html: HTML_CURRICULUM,
      css: CSS_CURRICULUM,
      js: JS_CURRICULUM
    };
  }

  get currentLessons() {
    return this.lessonsMap[this.currentGuardian] || HTML_CURRICULUM;
  }

  get activeLesson() {
    return this.currentLessons[this.currentLessonIndex] || this.currentLessons[0];
  }

  get totalLessonsCount() {
    return HTML_CURRICULUM.length + CSS_CURRICULUM.length + JS_CURRICULUM.length;
  }

  get overallProgressPercent() {
    return Math.round((this.completedLessons.size / this.totalLessonsCount) * 100);
  }

  init() {
    const app = document.getElementById('app');
    if (!app) return;

    // Escuchar mensajes de console.log emitidos por el iframe del sandbox
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'DEVFAUNA_LOG') {
        const logsList = document.getElementById('console-logs-list');
        if (logsList) {
          const entry = document.createElement('div');
          entry.className = 'console-entry';
          entry.textContent = `> ${event.data.text}`;
          logsList.appendChild(entry);
        }
      }
    });

    this.render();
  }

  render() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      <!-- 1. Header Global -->
      <header class="app-header">
        <div class="brand-group" id="global-home-trigger">
          <div class="brand-icon-box">🐾</div>
          <div>
            <div class="brand-title">DevFauna Academy</div>
            <div class="brand-subtitle">Trinidad Web: HTML5 • CSS3 • JavaScript ES2024</div>
          </div>
        </div>

        <div class="header-right-actions">
          <div class="brand-tag" style="background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
            🏆 <span id="header-completed-count">${this.completedLessons.size}</span> / ${this.totalLessonsCount} Retos
          </div>
          <button id="header-snippets-btn" class="btn-fauna btn-ghost" title="Ver Snippets de Producción">
            <span>📜 Cheat Sheet</span>
          </button>
        </div>
      </header>

      <!-- 2. Contenedor Dinámico de Vistas -->
      <main id="views-viewport" style="flex: 1; display: flex; flex-direction: column; overflow: hidden;"></main>
    `;

    // Evento al hacer clic en el logo (vuelve al Home)
    document.getElementById('global-home-trigger').addEventListener('click', () => {
      this.switchView('home');
    });

    // Snippets modal
    document.getElementById('header-snippets-btn').addEventListener('click', () => {
      openSnippetsModal();
    });

    this.renderCurrentView();
  }

  switchView(viewName, guardian = null, lessonIndex = 0) {
    this.currentView = viewName;
    if (guardian) {
      this.currentGuardian = guardian;
      this.currentLessonIndex = lessonIndex;
    }
    this.showHint = false;
    this.lastTestResult = null;
    this.renderCurrentView();
  }

  renderCurrentView() {
    const viewport = document.getElementById('views-viewport');
    if (!viewport) return;

    if (this.currentView === 'home') {
      this.renderHomeView(viewport);
    } else {
      this.renderLabView(viewport);
    }
  }

  /* =================================================================
   * A. VISTA DE INICIO (HOME DASHBOARD)
   * ================================================================= */
  renderHomeView(container) {
    const htmlDone = HTML_CURRICULUM.filter(l => this.completedLessons.has(l.id)).length;
    const cssDone = CSS_CURRICULUM.filter(l => this.completedLessons.has(l.id)).length;
    const jsDone = JS_CURRICULUM.filter(l => this.completedLessons.has(l.id)).length;

    container.innerHTML = `
      <div class="view-home-container">
        <div class="home-content-wrapper">
          <!-- Hero Section -->
          <section class="home-hero-section">
            <div class="hero-pill-badge">
              <span>🌿 Santuario de Práctica en Tiempo Real</span>
            </div>
            <h1 class="hero-main-title">
              Domina la Trinidad del Desarrollo Web con <span class="hero-gradient-text">DevFauna</span>
            </h1>
            <p class="hero-lead-text">
              Aprende practicando con 23 retos interactivos, editor en vivo y un validador de código inteligente. 
              Elige un guardián y comienza tu entrenamiento.
            </p>
          </section>

          <!-- Barra Global de Progreso -->
          <div class="global-progress-bar-card">
            <div class="progress-info-group">
              <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">
                TU PROGRESO GLOBAL
              </div>
              <div style="font-size: 1.4rem; font-weight: 800; color: #ffffff;">
                ${this.completedLessons.size} de ${this.totalLessonsCount} Retos Dominados (${this.overallProgressPercent}%)
              </div>
            </div>
            <div class="progress-track-wrapper">
              <div class="progress-fill-indicator" style="width: ${this.overallProgressPercent}%;"></div>
            </div>
          </div>

          <!-- Pabellones de los Tres Guardianes -->
          <div class="guardians-grid-pavilions">
            <!-- 1. Archie el Búho (HTML5) -->
            <div class="pavilion-card html">
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="pavilion-header">
                  <div class="pavilion-avatar">🦉</div>
                  <div>
                    <div class="pavilion-title">Archie el Búho</div>
                    <div class="pavilion-domain" style="color: var(--guardian-html);">HTML5 Semántico</div>
                  </div>
                </div>
                <p class="pavilion-desc">
                  Arquitectura web pura, accesibilidad (a11y), validación nativa de formularios y eliminación de la "divitis".
                </p>
                <div class="pavilion-topics-list">
                  <div class="pavilion-topic-item"><span>🏛️</span><span>Layout Semántico & Jerarquía</span></div>
                  <div class="pavilion-topic-item"><span>📋</span><span>Formularios & Validación Nativa</span></div>
                  <div class="pavilion-topic-item"><span>🪟</span><span>Modales Nativos con &lt;dialog&gt;</span></div>
                  <div class="pavilion-topic-item"><span>♿</span><span>Accesibilidad ARIA & SEO</span></div>
                </div>
              </div>

              <div class="pavilion-footer">
                <span class="pavilion-stat">${htmlDone} / ${HTML_CURRICULUM.length} Completados</span>
                <button class="btn-fauna btn-primary enter-pavilion-btn" data-guardian="html" style="background: var(--guardian-html); color: #020617;">
                  Entrar al Lab →
                </button>
              </div>
            </div>

            <!-- 2. Chroma el Camaleón (CSS3) -->
            <div class="pavilion-card css">
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="pavilion-header">
                  <div class="pavilion-avatar">🦎</div>
                  <div>
                    <div class="pavilion-title">Chroma el Camaleón</div>
                    <div class="pavilion-domain" style="color: var(--guardian-css);">CSS3 Moderno</div>
                  </div>
                </div>
                <p class="pavilion-desc">
                  Diseño adaptativo, Flexbox maestro, CSS Grid en 1 línea, Glassmorphism, variables dinámicas y keyframes.
                </p>
                <div class="pavilion-topics-list">
                  <div class="pavilion-topic-item"><span>📐</span><span>Box Model & Border-Box</span></div>
                  <div class="pavilion-topic-item"><span>⚡</span><span>Flexbox con Gap & Alineación</span></div>
                  <div class="pavilion-topic-item"><span>🔲</span><span>CSS Grid Responsivo Auto-fit</span></div>
                  <div class="pavilion-topic-item"><span>✨</span><span>Glassmorphism & Animaciones</span></div>
                </div>
              </div>

              <div class="pavilion-footer">
                <span class="pavilion-stat">${cssDone} / ${CSS_CURRICULUM.length} Completados</span>
                <button class="btn-fauna btn-primary enter-pavilion-btn" data-guardian="css" style="background: var(--guardian-css); color: #020617;">
                  Entrar al Lab →
                </button>
              </div>
            </div>

            <!-- 3. Kitsune el Zorro (JS) -->
            <div class="pavilion-card js">
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="pavilion-header">
                  <div class="pavilion-avatar">🦊</div>
                  <div>
                    <div class="pavilion-title">Kitsune el Zorro</div>
                    <div class="pavilion-domain" style="color: var(--guardian-js);">JavaScript ES2024</div>
                  </div>
                </div>
                <p class="pavilion-desc">
                  Manipulación reactiva del DOM, delegación de eventos, asincronía con Async/Await y Web Audio API.
                </p>
                <div class="pavilion-topics-list">
                  <div class="pavilion-topic-item"><span>🎯</span><span>DOM Dinámico & createElement</span></div>
                  <div class="pavilion-topic-item"><span>⚡</span><span>Delegación de Eventos Óptima</span></div>
                  <div class="pavilion-topic-item"><span>🔄</span><span>Map, Filter, Reduce Funcional</span></div>
                  <div class="pavilion-topic-item"><span>📡</span><span>Async/Await & Web Audio API</span></div>
                </div>
              </div>

              <div class="pavilion-footer">
                <span class="pavilion-stat">${jsDone} / ${JS_CURRICULUM.length} Completados</span>
                <button class="btn-fauna btn-primary enter-pavilion-btn" data-guardian="js" style="background: var(--guardian-js); color: #020617;">
                  Entrar al Lab →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Eventos de botones "Entrar al Lab"
    container.querySelectorAll('.enter-pavilion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const guardian = btn.getAttribute('data-guardian');
        this.switchView('lab', guardian, 0);
      });
    });
  }

  /* =================================================================
   * B. VISTA DE LABORATORIO (WORKSPACE DESCONGESTIONADO)
   * ================================================================= */
  renderLabView(container) {
    const lesson = this.activeLesson;
    const lessons = this.currentLessons;

    const guardianColor = this.currentGuardian === 'html' ? 'var(--guardian-html)' :
                          this.currentGuardian === 'css' ? 'var(--guardian-css)' : 'var(--guardian-js)';

    container.innerHTML = `
      <div class="view-lab-container">
        <!-- Sub-Barra de Navegación del Laboratorio -->
        <div class="lab-toolbar">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button id="lab-back-to-home-btn" class="lab-back-btn">
              <span>← Volver al Inicio</span>
            </button>

            <!-- Selector de Guardianes en el Lab -->
            <div class="guardians-nav" style="padding: 0.2rem 0.3rem;">
              <button class="guardian-tab-btn ${this.currentGuardian === 'html' ? 'active guardian-html' : ''}" data-guardian="html">
                <span>🦉 Archie (HTML5)</span>
              </button>
              <button class="guardian-tab-btn ${this.currentGuardian === 'css' ? 'active guardian-css' : ''}" data-guardian="css">
                <span>🦎 Chroma (CSS3)</span>
              </button>
              <button class="guardian-tab-btn ${this.currentGuardian === 'js' ? 'active guardian-js' : ''}" data-guardian="js">
                <span>🦊 Kitsune (JS)</span>
              </button>
            </div>
          </div>

          <!-- Selector Desplegable de Retos (Limpio y Espacioso) -->
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">RETO ACTUAL:</span>
            <select id="lab-challenge-selector" class="challenge-dropdown-select">
              ${lessons.map((l, idx) => {
                const done = this.completedLessons.has(l.id);
                return `
                  <option value="${idx}" ${idx === this.currentLessonIndex ? 'selected' : ''}>
                    ${done ? '✅ ' : '🐾 '}${l.title} (${l.level})
                  </option>
                `;
              }).join('')}
            </select>
          </div>
        </div>

        <!-- Split de 2 Columnas Descongestionado -->
        <div class="lab-workspace-split">
          <!-- Columna Izquierda: Ficha del Reto Amplia -->
          <div class="lab-challenge-panel" id="lab-challenge-panel-content"></div>

          <!-- Columna Derecha: Live Code Sandbox -->
          <div class="lab-sandbox-panel" id="lab-sandbox-container"></div>
        </div>
      </div>
    `;

    // Botón volver al inicio
    container.querySelector('#lab-back-to-home-btn').addEventListener('click', () => {
      this.switchView('home');
    });

    // Selector de guardianes en el toolbar
    container.querySelectorAll('.guardian-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const guardian = btn.getAttribute('data-guardian');
        this.switchGuardianInLab(guardian);
      });
    });

    // Selector dropdown de retos
    const selectElem = container.querySelector('#lab-challenge-selector');
    selectElem.addEventListener('change', (e) => {
      this.currentLessonIndex = parseInt(e.target.value, 10);
      this.showHint = false;
      this.lastTestResult = null;
      this.renderChallengeDetail();
      this.loadActiveLesson();
    });

    // Inicializar el Sandbox en el panel derecho
    const sandboxMount = container.querySelector('#lab-sandbox-container');
    this.sandbox = new CodeSandbox(sandboxMount);

    // Renderizar detalles del reto y cargar código
    this.renderChallengeDetail();
    this.loadActiveLesson();
  }

  switchGuardianInLab(guardian) {
    this.currentGuardian = guardian;
    this.currentLessonIndex = 0;
    this.showHint = false;
    this.lastTestResult = null;
    this.renderLabView(document.getElementById('views-viewport'));
  }

  renderChallengeDetail() {
    const panel = document.getElementById('lab-challenge-panel-content');
    if (!panel) return;

    const lesson = this.activeLesson;
    const guardianColor = this.currentGuardian === 'html' ? 'var(--guardian-html)' :
                          this.currentGuardian === 'css' ? 'var(--guardian-css)' : 'var(--guardian-js)';

    panel.style.setProperty('--current-guardian-color', guardianColor);

    panel.innerHTML = `
      <div class="challenge-detail-box">
        <!-- Metadatos superiores separados con aire -->
        <div class="challenge-top-meta">
          <span class="meta-badge" style="background: rgba(255,255,255,0.06); color: ${guardianColor}; border: 1px solid var(--border-subtle);">
            ${lesson.badge}
          </span>
          <span class="meta-badge level">
            Nivel ${lesson.level}
          </span>
          ${this.completedLessons.has(lesson.id) ? `
            <span class="meta-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
              ✓ Superado
            </span>
          ` : ''}
        </div>

        <!-- Título y Descripción con excelente legibilidad -->
        <h2 class="challenge-main-heading">${lesson.title}</h2>
        <p class="challenge-main-description">${lesson.description}</p>

        <!-- Objetivos Pedagógicos Espaciosos -->
        <div class="objectives-card">
          <div class="objectives-heading">Objetivos de la Práctica</div>
          ${lesson.objectives.map(obj => `
            <div class="objective-item-row">
              <span class="objective-icon" style="color: ${guardianColor};">🐾</span>
              <span>${obj}</span>
            </div>
          `).join('')}
        </div>

        <!-- Principio Teórico -->
        <div class="theory-card">
          <strong style="color: #ffffff;">💡 Fundamento Teórico:</strong> ${lesson.theory}
        </div>

        <!-- Feedback del Test Runner si fue ejecutado -->
        ${this.lastTestResult ? `
          <div class="test-feedback-card ${this.lastTestResult.passed ? 'success' : 'warning'}">
            <div style="font-weight: 800; font-size: 0.95rem;">
              ${this.lastTestResult.passed ? '🎉 ¡EXCELENTE! Reto Superado al 100%' : '⚠️ PENDIENTE: Revisa estos puntos'}
            </div>
            ${this.lastTestResult.results.map(r => `
              <div class="test-row">
                <span>${r.passed ? '✅' : '❌'}</span>
                <span>${r.desc}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Pista desplegable -->
        ${this.showHint ? `
          <div class="hint-container">
            <strong style="color: #ffffff;">💡 Pista de ${lesson.badge}:</strong> ${lesson.hint || 'Revisa la teoría y los objetivos arriba.'}
          </div>
        ` : ''}

        <!-- Botón Principal del Test Runner -->
        <button id="lab-validate-btn" class="btn-fauna btn-primary" style="width: 100%; font-size: 0.9rem; padding: 0.75rem;">
          <span>🧪 Validar Mi Código (Test Runner)</span>
        </button>

        <!-- Acciones Secundarias Espaciosas -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.6rem;">
          <button id="lab-hint-btn" class="btn-fauna btn-ghost">
            💡 ${this.showHint ? 'Ocultar Pista' : 'Pista'}
          </button>
          <button id="lab-reset-btn" class="btn-fauna btn-ghost">
            ↺ Reiniciar
          </button>
          <button id="lab-solution-btn" class="btn-fauna btn-ghost">
            ✨ Solución
          </button>
        </div>
      </div>
    `;

    // Validar código
    panel.querySelector('#lab-validate-btn').addEventListener('click', () => {
      this.runValidation();
    });

    // Toggle pista
    panel.querySelector('#lab-hint-btn').addEventListener('click', () => {
      this.showHint = !this.showHint;
      this.renderChallengeDetail();
    });

    // Resetear código
    panel.querySelector('#lab-reset-btn').addEventListener('click', () => {
      this.lastTestResult = null;
      this.loadActiveLesson();
      this.renderChallengeDetail();
    });

    // Cargar solución
    panel.querySelector('#lab-solution-btn').addEventListener('click', () => {
      if (lesson.solutionCode) {
        this.sandbox.setCode({
          html: lesson.solutionCode.html || lesson.initialCode.html,
          css: lesson.solutionCode.css || lesson.initialCode.css,
          js: lesson.solutionCode.js || lesson.initialCode.js
        }, true);
      }
    });
  }

  loadActiveLesson() {
    const lesson = this.activeLesson;
    if (lesson && this.sandbox) {
      this.sandbox.setCode(lesson.initialCode, true);
    }
  }

  runValidation() {
    const lesson = this.activeLesson;
    if (!lesson || !this.sandbox) return;

    const userCode = this.sandbox.getCode();
    const result = CodeEvaluator.evaluate(userCode, lesson.tests);
    this.lastTestResult = result;

    if (result.passed) {
      this.completedLessons.add(lesson.id);
      localStorage.setItem('devfauna_completed', JSON.stringify([...this.completedLessons]));
      
      // Actualizar contador del header
      const headerCount = document.getElementById('header-completed-count');
      if (headerCount) {
        headerCount.textContent = this.completedLessons.size;
      }
    }

    this.renderChallengeDetail();
  }
}

// Inicialización segura
let _initialized = false;
function safeInit() {
  if (_initialized) return;
  _initialized = true;
  new AppController();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}
