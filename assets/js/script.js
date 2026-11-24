/**
 * SAIM - DEVELOPER PORTFOLIO
 * Main JavaScript Engine
 * Author: Syed Muhammad Saim (Full Stack Developer & AI Developer)
 */

(function () {
  'use strict';

  // Configuration & Constants
  const CONFIG = {
    roles: [
      'Full Stack Developer',
      'AI Developer',
      'Web Application Developer',
      'Software Developer'
    ],
    typingSpeed: 90,
    erasingSpeed: 50,
    delayBetweenRoles: 2000,
    scrollOffset: 80
  };

  /**
   * Initialize on DOM Content Loaded
   */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initBackToTop();
    initDynamicYear();
    initNavbarScrollState();
  });

  /**
   * 1. Top Reading Scroll Progress Bar
   */
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }, { passive: true });
  }

  /**
   * 2. Sticky Navbar Scrolled Style
   */
  function initNavbarScrollState() {
    const navbar = document.querySelector('.navbar-saim');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 3. Back to Top Button
   */
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * 4. Dynamic Copyright Year
   */
  function initDynamicYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

})();
