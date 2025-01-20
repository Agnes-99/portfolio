// Smooth Scroll Functionality for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get section ID
      const targetSection = document.getElementById(targetId); // Get the section element
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Offset for fixed navbar
        behavior: 'smooth', // Smooth scroll
      });
    });
  });
  
  // Modal for Project Details
  const openModal = (projectId) => {
    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Here you can dynamically load the project details into the modal (this is an example)
    switch (projectId) {
      case 1:
        modalContent.querySelector('h2').innerText = 'Pagine Bookstore';
        modalContent.querySelector('p').innerText = 'Pagine is an online bookstore project built using React, Node.js, and MongoDB. It allows users to browse, purchase books, and manage their orders.';
        break;
      case 2:
        modalContent.querySelector('h2').innerText = 'Safestreets Crime Reporting App';
        modalContent.querySelector('p').innerText = 'The SafeStreets app helps communities report and track local crimes using a mobile-friendly platform built with Java and Firebase for backend services.';
        break;
      case 3:
        modalContent.querySelector('h2').innerText = 'Banking App';
        modalContent.querySelector('p').innerText = 'A banking application built with JavaFX that allows users to manage accounts, transfer money, and check balances.';
        break;
      case 4:
        modalContent.querySelector('h2').innerText = 'Social Media Dashboard';
        modalContent.querySelector('p').innerText = 'A dashboard that aggregates social media metrics for platforms like Twitter, Facebook, and Instagram.';
        break;
      case 5:
        modalContent.querySelector('h2').innerText = 'Transformer-Based Chatbot';
        modalContent.querySelector('p').innerText = 'A chatbot built using GPT-3 and Transformer models for natural language processing.';
        break;
      default:
        modalContent.querySelector('h2').innerText = 'Project Title';
        modalContent.querySelector('p').innerText = 'Detailed project description will be available here...';
    }
    
    modal.style.display = 'flex'; 
  };
  
  // Close Modal
  const closeModal = () => {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none'; // Hide the modal
  };
  
  // Close modal when clicking outside the modal content
  window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('projectModal')) {
      closeModal();
    }
  });
  
  // Handling form submission in the Contact Section
  const contactForm = document.querySelector('#contact form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on form submission
    
    // Form validation (simple example)
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields!');
    } else {
      alert(`Thank you for your message, ${name}! I will get back to you shortly.`);
      contactForm.reset(); // Reset form after submission
    }
  });
  
  // Activate the AOS library (animations on scroll)
  AOS.init({
    duration: 1000, // Animation duration in ms
    once: true, // Trigger animation only once
    offset: 100, // Start animation when element is 100px from viewport
  });
  