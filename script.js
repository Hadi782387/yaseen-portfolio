document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
    menuToggle.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
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

  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // Form submission handling (for future implementation)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }

  // Back to top button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add animation classes to elements (you can add these classes in your HTML)
  document.querySelectorAll('section').forEach((section, index) => {
    section.classList.add('animate');
    section.style.transitionDelay = ${index * 0.1}s;
  });
});
// Feedback Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const feedbackSection = document.querySelector('#feedback');
  const feedbackModal = document.getElementById('feedback-modal');
  const closeModal = document.querySelector('.close-modal');
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackCta = document.querySelector('.feedback-cta');

  // Open modal when feedback section is clicked
  feedbackSection.addEventListener('click', function(e) {
    if (e.target.closest('.feedback-cta') || e.target === feedbackSection) {
      feedbackModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  });

  // Close modal
  closeModal.addEventListener('click', function() {
    feedbackModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close when clicking outside modal
  feedbackModal.addEventListener('click', function(e) {
    if (e.target === feedbackModal) {
      feedbackModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Form submission
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Feedback submitted:', { name, email, message });
    
    // Show thank you message
    alert('Thank you for your feedback! I really appreciate it.');
    
    // Reset form and close modal
    feedbackForm.reset();
    feedbackModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && feedbackModal.classList.contains('active')) {
      feedbackModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
