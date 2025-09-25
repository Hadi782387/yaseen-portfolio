document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.createElement('button');
  const feedbackModal = document.getElementById('feedback-modal');
  const feedbackForm = document.getElementById('feedback-form');
  
  // Initialize back to top button
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  document.body.appendChild(backToTopBtn);

  // Mobile Menu Toggle
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navbar.classList.toggle('active');
    menuToggle.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';
  });

  // Close mobile menu when clicking links
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Back to Top Button
  window.addEventListener('scroll', function() {
    backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Feedback Modal
  document.getElementById('open-feedback').addEventListener('click', () => {
    feedbackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  document.getElementById('close-modal').addEventListener('click', () => {
    feedbackModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  feedbackModal.addEventListener('click', (e) => {
    if (e.target === feedbackModal) {
      feedbackModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Form Submission
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Form processing logic
    alert('Thank you for your feedback!');
    feedbackModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    this.reset();
  });

  // Scroll Animations using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
});

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check if dark mode is enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    html.setAttribute('data-theme', 'dark');
    darkModeToggle.textContent = '☀️';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('darkMode', null);
        darkModeToggle.textContent = '🌙';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️';
    }
});
