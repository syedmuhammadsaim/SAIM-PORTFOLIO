/**
 * SAIM - DEVELOPER PORTFOLIO
 * Main JavaScript Engine (Emerald Theme)
 * Author: Syed Muhammad Saim (Full Stack Developer & AI Developer)
 */

(function () {
  'use strict';

  // Configuration Constants
  const CONFIG = {
    roles: [
      'Full Stack Developer',
      'AI Developer',
      'Web Application Developer',
      'Software Developer'
    ],
    typingSpeed: 85,
    erasingSpeed: 45,
    delayBetweenRoles: 1800,
    scrollOffset: 90
  };

  /**
   * Initialize upon DOM Ready
   */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavbarScrollState();
    initTypewriterEffect();
    initSmoothScrollAndActiveNav();
    initMobileNavBehavior();
    initBackToTop();
    initDynamicYear();
  });

  /**
   * 1. Top Reading Scroll Progress Bar
   */
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /**
   * 2. Sticky Navbar Scrolled Shadow
   */
  function initNavbarScrollState() {
    const navbar = document.querySelector('.navbar-saim');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 3. Animated Typewriter Effect for Hero
   */
  function initTypewriterEffect() {
    const typedElement = document.getElementById('hero-typed-text');
    if (!typedElement) return;

    const roles = CONFIG.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typedElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? CONFIG.erasingSpeed : CONFIG.typingSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = CONFIG.delayBetweenRoles;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }

  /**
   * 4. Smooth Scrolling & Active Section Highlighting
   */
  function initSmoothScrollAndActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link-saim[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    // Active state on scroll using Intersection Observer or scroll spy
    const updateActiveNav = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  }

  /**
   * 5. Mobile Navigation Auto-close on link click
   */
  function initMobileNavBehavior() {
    const navCollapse = document.getElementById('portfolioNavbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link-saim, .navbar-nav .btn-saim-primary');
    
    if (!navCollapse) return;

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  /**
   * 6. Back to Top Button
   */
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
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
   * 7. Dynamic Copyright Year
   */
  function initDynamicYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

})();
