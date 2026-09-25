/**
 * ==========================================================================
 * Studio Chorok - Application Controller (Dynamic Atmosphere & Theme Coordinator)
 * File: js/main.js
 * Version: 1.5.1
 * Features:
 *   - Bright Luminous Atmosphere for Sections 1-4
 *   - Smooth Dynamic Transition to Deep Cosmic Void for Section 5 (Contact)
 *   - Interactive Mouse-Tracking Ambient Spotlight
 *   - Clipboard Direct Email Copy & Adaptive Header
 * ==========================================================================
 */

class AppController {
  constructor() {
    this.threeScene = null;
    this.motionManager = null;
    this.sections = [];

    // Interactive mouse tracking for ambient spotlight
    this.currentMouseX = window.innerWidth / 2;
    this.currentMouseY = window.innerHeight / 2;
    this.targetMouseX = this.currentMouseX;
    this.targetMouseY = this.currentMouseY;
    this.spotlightRafId = null;
  }

  /**
   * Main Bootstrapping
   */
  init() {
    // 1. Initialize Sub-systems
    this.threeScene = new ThreeScene();
    this.threeScene.init();

    this.motionManager = new MotionManager();
    this.motionManager.init();

    this.sections = Array.from(document.querySelectorAll('.art-section'));

    // 2. Setup Scroll & Observer
    this._setupScrollListener();
    this._setupIntersectionObserver();

    // 3. Setup Interactive Ambient Spotlight
    this._setupInteractiveSpotlight();

    // 4. Setup Direct Email Copy & Header
    this._setupMobileNav();
    this._setupDirectEmailCopy();
    this._setupHeaderEffects();

    console.info('[AppController] Studio Chorok App Bootstrapped with Ambient Spotlight (v1.5.1).');
  }

  /**
   * Scroll listener computing normalized progress, dynamic theme interpolation,
   * and updating 3D camera and background shaders.
   * @private
   */
  _setupScrollListener() {
    const navBar = document.querySelector('.floating-fill');
    const contactSection = document.getElementById('section-5');

    const updateScrollStates = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      // Calculate proximity to Section 5 (Contact)
      let themeFactor = 0.0;
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        // As contact section enters the viewport from bottom:
        // When contact top is at windowHeight, themeFactor = 0.
        // When contact top is at 30% of viewport, themeFactor = 1.
        const startThreshold = windowHeight * 0.95;
        const endThreshold = windowHeight * 0.25;
        const currentPos = contactRect.top;

        if (currentPos <= endThreshold) {
          themeFactor = 1.0;
        } else if (currentPos >= startThreshold) {
          themeFactor = 0.0;
        } else {
          themeFactor = (startThreshold - currentPos) / (startThreshold - endThreshold);
        }
      }

      // Update Three.js 3D Background Progress & Atmospheric Theme Factor
      if (this.threeScene) {
        this.threeScene.setScrollProgress(progress);
        this.threeScene.setThemeProgress(themeFactor);
      }

      // Update CSS Body Theme Class
      if (themeFactor >= 0.45) {
        document.body.classList.add('theme-contact-dark');
      } else {
        document.body.classList.remove('theme-contact-dark');
      }

      // Update right-side floating progress gauge
      if (navBar) {
        navBar.style.height = `${(progress * 100).toFixed(1)}%`;
      }
    };

    window.addEventListener('scroll', updateScrollStates, { passive: true });
    // Initial run on mount
    updateScrollStates();
  }

  /**
   * Smooth, Lerp-based Interactive Spotlight Mouse Tracking
   * @private
   */
  _setupInteractiveSpotlight() {
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
    }, { passive: true });

    const updateSpotlight = () => {
      // Lerp mouse coordinates for fluid cinematic illumination
      this.currentMouseX += (this.targetMouseX - this.currentMouseX) * 0.08;
      this.currentMouseY += (this.targetMouseY - this.currentMouseY) * 0.08;

      document.documentElement.style.setProperty('--mouse-x', `${this.currentMouseX.toFixed(1)}px`);
      document.documentElement.style.setProperty('--mouse-y', `${this.currentMouseY.toFixed(1)}px`);

      this.spotlightRafId = requestAnimationFrame(updateSpotlight);
    };

    this.spotlightRafId = requestAnimationFrame(updateSpotlight);
  }

  /**
   * Section Intersection Observer for triggering smooth transitions
   * @private
   */
  _setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      threshold: 0.35
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionEl = entry.target;
          const sectionIndex = this.sections.indexOf(sectionEl);

          if (this.motionManager) {
            this.motionManager.animateSection(sectionEl);
            if (sectionIndex !== -1) {
              this.motionManager.updateActiveNavDot(sectionIndex);
            }
          }
        }
      });
    }, observerOptions);

    this.sections.forEach(section => observer.observe(section));
  }

  /**
   * Header glassmorphism shadow on scroll
   * @private
   */
  _setupHeaderEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /**
   * Mobile hamburger drawer toggle
   * @private
   */
  _setupMobileNav() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .main-nav .header-cta');

    if (!toggleBtn || !mainNav) return;

    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  /**
   * Direct Email Copy button with clipboard API and toast notice
   * @private
   */
  _setupDirectEmailCopy() {
    const copyBtn = document.getElementById('btn-copy-email');
    const toast = document.getElementById('toast-notice');
    const emailTarget = 'studio.chorok@gmail.com';

    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailTarget).then(() => {
          this._showToast(toast);
        }).catch(() => {
          this._fallbackCopy(emailTarget);
          this._showToast(toast);
        });
      } else {
        this._fallbackCopy(emailTarget);
        this._showToast(toast);
      }
    });
  }

  /**
   * Fallback copy command using hidden textarea
   * @private
   */
  _fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.warn('Fallback copy failed', err);
    }
    document.body.removeChild(textarea);
  }

  /**
   * Shows toast notification with animated display
   * @private
   */
  _showToast(toast) {
    if (!toast) return;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

// Global bootstrap
document.addEventListener('DOMContentLoaded', () => {
  const app = new AppController();
  app.init();
});
