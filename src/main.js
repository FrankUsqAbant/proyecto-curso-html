/**
 * DevFauna Academy — Orquestador Principal
 * Conexión completa de los 3 Guardianes, 23 Retos, Test Runner y Live Code Sandbox.
 */

import { HTML_CURRICULUM } from './data/html-curriculum.js';
import { CSS_CURRICULUM } from './data/css-curriculum.js';
import { JS_CURRICULUM } from './data/js-curriculum.js';
import { CodeEvaluator } from './data/code-evaluator.js';
import { CodeSandbox } from './editor/code-sandbox.js';
import { openSnippetsModal } from './ui/snippets-modal.js';

class AppController {
  constructor() {
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

  init() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
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
    `;

    // Inicializar el Sandbox
    const sandboxContainer = document.getElementById('sandbox-viewport-container');
    this.sandbox = new CodeSandbox(sandboxContainer);

    // Renderizar Sidebar
    this.renderSidebar();

    // Cargar código del reto activo en el sandbox
    this.loadActiveLesson();

    // Eventos de Guardianes
    document.querySelectorAll('.guardian-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const guardian = btn.getAttribute('data-guardian');
        this.switchGuardian(guardian);
      });
    });

    // Snippets modal
    document.getElementById('header-snippets-btn').addEventListener('click', () => {
      openSnippetsModal();
    });

    // Escuchar mensajes de console.log del Iframe
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
  }

  switchGuardian(guardian) {
    this.currentGuardian = guardian;
    this.currentLessonIndex = 0;
    this.showHint = false;
    this.lastTestResult = null;

    // Actualizar tabs
    document.querySelectorAll('.guardian-tab-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-guardian') === guardian);
    });

    this.renderSidebar();
    this.loadActiveLesson();
  }

  loadActiveLesson() {
    const lesson = this.activeLesson;
    if (lesson && this.sandbox) {
      this.sandbox.setCode(lesson.initialCode, true);
    }
  }

  runCodeValidation() {
    const lesson = this.activeLesson;
    if (!lesson || !this.sandbox) return;

    const userCode = this.sandbox.getCode();
    const result = CodeEvaluator.evaluate(userCode, lesson.tests);
    this.lastTestResult = result;

    if (result.passed) {
      this.completedLessons.add(lesson.id);
      localStorage.setItem('devfauna_completed', JSON.stringify([...this.completedLessons]));
      this.updateMasteryCounter();
    }

    this.renderSidebar();
  }

  updateMasteryCounter() {
    const counterText = document.getElementById('completed-count-text');
    if (counterText) {
      counterText.textContent = this.completedLessons.size;
    }
  }

  renderSidebar() {
    const sidebar = document.getElementById('lesson-sidebar-container');
    if (!sidebar) return;

    const lesson = this.activeLesson;
    const lessons = this.currentLessons;

    const guardianColor = this.currentGuardian === 'html' ? 'var(--guardian-html)' :
                          this.currentGuardian === 'css' ? 'var(--guardian-css)' : 'var(--guardian-js)';

    sidebar.style.setProperty('--current-guardian-color', guardianColor);

    const isCompleted = this.completedLessons.has(lesson.id);

    sidebar.innerHTML = `
      <!-- Selector de Lecciones de este Guardián -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">
            RETOS DISPONIBLES (${lessons.length})
          </span>
          <span style="font-size: 0.7rem; color: ${guardianColor}; font-weight: 700;">
            ${lessons.filter(l => this.completedLessons.has(l.id)).length} de ${lessons.length} listos
          </span>
        </div>

        <div class="lessons-list-group">
          ${lessons.map((l, idx) => {
            const done = this.completedLessons.has(l.id);
            return `
              <div class="lesson-pill-item ${idx === this.currentLessonIndex ? 'active' : ''}" data-index="${idx}">
                <div style="display: flex; align-items: center; gap: 0.4rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  <span>${done ? '✅' : '🐾'}</span>
                  <span>${l.title}</span>
                </div>
                <span style="font-size: 0.68rem; color: var(--text-muted);">${l.level}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Tarjeta del Reto Activo -->
      <div class="challenge-card">
        <div class="challenge-header">
          <span class="challenge-badge" style="background: rgba(255,255,255,0.06); color: ${guardianColor}; border: 1px solid var(--border-subtle);">
            ${lesson.badge}
          </span>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">Nivel ${lesson.level}</span>
        </div>

        <div class="challenge-title">${lesson.title}</div>
        <p class="challenge-desc">${lesson.description}</p>

        <!-- Objetivos Pedagógicos -->
        <div class="objectives-box">
          <div class="objectives-title">Objetivos del Ejercicio</div>
          ${lesson.objectives.map(obj => `
            <div class="objective-item">
              <span style="color: ${guardianColor};">🐾</span>
              <span>${obj}</span>
            </div>
          `).join('')}
        </div>

        <div style="background: rgba(255,255,255,0.02); border-left: 3px solid ${guardianColor}; padding: 0.75rem; border-radius: 4px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
          <strong>💡 Fundamento:</strong> ${lesson.theory}
        </div>

        <!-- Feedback del Test Runner si existe -->
        ${this.lastTestResult ? `
          <div class="test-feedback-box ${this.lastTestResult.passed ? 'success' : 'warning'}">
            <div style="font-weight: 800; display: flex; align-items: center; gap: 0.4rem;">
              <span>${this.lastTestResult.passed ? '🎉 ¡RETO SUPERADO AL 100%!' : '⚠️ CASI LISTO: Revisa estos objetivos'}</span>
            </div>
            ${this.lastTestResult.results.map(r => `
              <div class="test-item-row">
                <span class="test-badge-icon">${r.passed ? '✅' : '❌'}</span>
                <span>${r.desc}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Pista si está activa -->
        ${this.showHint ? `
          <div class="hint-box">
            <strong>💡 Pista de ${lesson.badge}:</strong> ${lesson.hint || 'Revisa la teoría y los objetivos arriba.'}
          </div>
        ` : ''}

        <!-- Botón Principal del Test Runner -->
        <button id="validate-code-btn" class="btn-fauna btn-primary" style="width: 100%; font-size: 0.85rem; padding: 0.65rem;">
          <span>🧪 Validar Mi Código (Test Runner)</span>
        </button>

        <div style="display: flex; gap: 0.4rem;">
          <button id="hint-toggle-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            💡 ${this.showHint ? 'Ocultar Pista' : 'Pista'}
          </button>
          <button id="reset-lesson-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ↺ Reiniciar
          </button>
          <button id="load-solution-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ✨ Solución
          </button>
        </div>
      </div>
    `;

    // Click en lección de la lista
    sidebar.querySelectorAll('.lesson-pill-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        this.currentLessonIndex = idx;
        this.showHint = false;
        this.lastTestResult = null;
        this.renderSidebar();
        this.loadActiveLesson();
      });
    });

    // Validar código con el Test Runner
    const valBtn = sidebar.querySelector('#validate-code-btn');
    if (valBtn) {
      valBtn.addEventListener('click', () => {
        this.runCodeValidation();
      });
    }

    // Toggle Pista
    const hintBtn = sidebar.querySelector('#hint-toggle-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        this.showHint = !this.showHint;
        this.renderSidebar();
      });
    }

    // Resetear código
    const resetBtn = sidebar.querySelector('#reset-lesson-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.lastTestResult = null;
        this.loadActiveLesson();
        this.renderSidebar();
      });
    }

    // Ver solución
    const solutionBtn = sidebar.querySelector('#load-solution-btn');
    if (solutionBtn) {
      solutionBtn.addEventListener('click', () => {
        if (lesson.solutionCode) {
          this.sandbox.setCode({
            html: lesson.solutionCode.html || lesson.initialCode.html,
            css: lesson.solutionCode.css || lesson.initialCode.css,
            js: lesson.solutionCode.js || lesson.initialCode.js
          }, true);
        }
      });
    }
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
