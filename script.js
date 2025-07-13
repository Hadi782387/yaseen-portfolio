document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  // Mobile Menu Toggle with transition
  menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
    menuToggle.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';

    // Transition effect for navbar
    navbar.style.transition = 'all 0.3s ease';
  });

  // Close navbar on link click (mobile)
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    });
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar a');

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === #${current}) {
        link.classList.add('active');
      }
    });
  });

  // Animate Sections on Scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        element.classList.add('animated');
      }
    });
  };
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Set transition delay to each section
  document.querySelectorAll('section').forEach((section, index) => {
    section.classList.add('animate');
    section.style.transition = 'all 0.6s ease-out';
    section.style.transitionDelay = ${index * 0.1}s;
  });

  // Back to Top Button with smooth transition
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.classList.add('back-to-top');
  backToTopButton.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
      backToTopButton.style.opacity = '1';
    } else {
      backToTopButton.style.opacity = '0';
      setTimeout(() => {
        if (backToTopButton.style.opacity === '0') {
          backToTopButton.style.display = 'none';
        }
      }, 300);
    }
  });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Feedback Modal Logic with Fade Effect
  const feedbackSection = document.querySelector('#feedback');
  const feedbackModal = document.getElementById('feedback-modal');
  const closeModal = document.querySelector('.close-modal');
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackCta = document.querySelector('.feedback-cta');

  feedbackSection.addEventListener('click', function (e) {
    if (e.target.closest('.feedback-cta') || e.target === feedbackSection) {
      feedbackModal.classList.add('active');
      feedbackModal.style.transition = 'all 0.3s ease';
      document.body.style.overflow = 'hidden';
    }
  });

  closeModal.addEventListener('click', function () {
    feedbackModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  feedbackModal.addEventListener('click', function (e) {
    if (e.target === feedbackModal) {
      feedbackModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Feedback:', { name, email, message });

    alert('Thank you for your feedback!');

    feedbackForm.reset();
    feedbackModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close modal with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && feedbackModal.classList.contains('active')) {
      feedbackModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
