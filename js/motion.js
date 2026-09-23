/**
 * ==========================================================================
 * Studio Chorok - Restrained Cinematic Motion Engine (Anime.js)
 * File: js/motion.js
 * Version: 1.2.0
 * Philosophy: Calibrated, Elegant, Subtle Stagger Transitions
 * ==========================================================================
 */

class MotionManager {
  constructor() {
    this.animatedSections = new Set();
  }

  /**
   * Initializes motion orchestrations.
   */
  init() {
    console.info('[MotionManager] Restrained Motion Engine Initialized (v1.2.0).');
  }

  /**
   * Smooth, gentle fade & subtle glide when section enters viewport.
   * @param {HTMLElement} sectionElement
   */
  animateSection(sectionElement) {
    if (!sectionElement || typeof anime === 'undefined') return;

    const sectionId = sectionElement.id;
    if (this.animatedSections.has(sectionId)) return;
    this.animatedSections.add(sectionId);

    const meta = sectionElement.querySelector('.editorial-meta');
    const title = sectionElement.querySelector('.editorial-title');
    const text = sectionElement.querySelector('.editorial-text');
    const frame = sectionElement.querySelector('.editorial-frame, .contact-editorial-box');

    const timeline = anime.timeline({
      easing: 'cubicBezier(0.16, 1, 0.3, 1)',
      duration: 1400
    });

    if (meta) {
      timeline.add({
        targets: meta,
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 900
      }, 0);
    }

    if (title) {
      timeline.add({
        targets: title,
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 1200
      }, '-=700');
    }

    if (text) {
      timeline.add({
        targets: text,
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 1100
      }, '-=900');
    }

    if (frame) {
      timeline.add({
        targets: frame,
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 1000
      }, '-=800');
    }
  }

  /**
   * Updates floating navigation dots and header links.
   * @param {number} activeIndex
   */
  updateActiveNavDot(activeIndex) {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, idx) => {
      if (idx === activeIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// Global Export
window.MotionManager = MotionManager;
