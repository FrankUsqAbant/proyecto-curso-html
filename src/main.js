/**
 * DevFauna Academy — Orquestador Principal
 */

import { HTML_LESSONS } from './data/html-lessons.js';
import { CSS_LESSONS } from './data/css-lessons.js';
import { JS_LESSONS } from './data/js-lessons.js';
import { CodeSandbox } from './editor/code-sandbox.js';
import { openSnippetsModal } from './ui/snippets-modal.js';

class AppController {
  constructor() {
    this.currentGuardian = 'html'; // 'html' | 'css' | 'js'
    this.currentLessonIndex = 0;
    this.sandbox = null;
    this.init();
  }

  get lessonsMap() {
    return {
      html: HTML_LESSONS,
      css: CSS_LESSONS,
      js: JS_LESSONS
    };
  }

  get currentLessons() {
    return this.lessonsMap[this.currentGuardian] || HTML_LESSONS;
  }

  get activeLesson() {
    return this.currentLessons[this.currentLessonIndex] || this.currentLessons[0];
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
            <div style="font-size: 0.68rem; color: var(--text-muted);">Trinidad Web: HTML5 • CSS3 • JavaScript</div>
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
          <button id="header-snippets-btn" class="btn-fauna btn-ghost" title="Ver Snippets Rápidos">
            <span>📜 Cheat Sheet</span>
          </button>
        </div>
      </header>

      <!-- 2. Main Workspace (Split 2 Columnas) -->
      <main class="main-workspace">
        <!-- Panel Izquierdo: Lista de Retos y Teoría -->
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

  renderSidebar() {
    const sidebar = document.getElementById('lesson-sidebar-container');
    if (!sidebar) return;

    const lesson = this.activeLesson;
    const lessons = this.currentLessons;

    const guardianColor = this.currentGuardian === 'html' ? 'var(--guardian-html)' :
                          this.currentGuardian === 'css' ? 'var(--guardian-css)' : 'var(--guardian-js)';

    sidebar.style.setProperty('--current-guardian-color', guardianColor);

    sidebar.innerHTML = `
      <!-- Selector de Lecciones de este Guardián -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">
          RETOS DEL GUARDIÁN (${lessons.length})
        </span>
        <div class="lessons-list-group">
          ${lessons.map((l, idx) => `
            <div class="lesson-pill-item ${idx === this.currentLessonIndex ? 'active' : ''}" data-index="${idx}">
              <span>${l.title}</span>
              <span style="font-size: 0.68rem; color: var(--text-muted);">${l.level}</span>
            </div>
          `).join('')}
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

        <div class="objectives-box">
          <div class="objectives-title">Objetivos Pedagógicos</div>
          ${lesson.objectives.map(obj => `
            <div class="objective-item">
              <span style="color: ${guardianColor};">🐾</span>
              <span>${obj}</span>
            </div>
          `).join('')}
        </div>

        <div style="background: rgba(255,255,255,0.02); border-left: 3px solid ${guardianColor}; padding: 0.75rem; border-radius: 4px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
          <strong>💡 Principio Clave:</strong> ${lesson.theory}
        </div>

        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
          <button id="reset-lesson-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ↺ Resetear Código
          </button>
          <button id="load-solution-btn" class="btn-fauna btn-ghost" style="flex: 1; font-size: 0.75rem;">
            ✨ Ver Solución
          </button>
        </div>
      </div>
    `;

    // Click en lección de la lista
    sidebar.querySelectorAll('.lesson-pill-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        this.currentLessonIndex = idx;
        this.renderSidebar();
        this.loadActiveLesson();
      });
    });

    // Resetear código
    const resetBtn = sidebar.querySelector('#reset-lesson-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.loadActiveLesson();
      });
    }

    // Ver solución si existe
    const solutionBtn = sidebar.querySelector('#load-solution-btn');
    if (solutionBtn) {
      solutionBtn.addEventListener('click', () => {
        if (lesson.solutionCode) {
          this.sandbox.setCode({
            html: lesson.solutionCode.html || lesson.initialCode.html,
            css: lesson.solutionCode.css || lesson.initialCode.css,
            js: lesson.solutionCode.js || lesson.initialCode.js
          }, true);
        } else {
          alert('¡El código inicial ya contiene la estructura base para resolver este reto!');
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
