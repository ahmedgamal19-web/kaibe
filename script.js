// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
  });
});

// Add to Cart Demo
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('✨ Added to your bag!');
  });
});

// Newsletter Form
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input.value) {
      alert(`🎉 Thanks for subscribing, ${input.value}!`);
      input.value = '';
    }
  });
});

// Contact Form Demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('📬 Your message has been sent! We will reply within 24 hours.');
    contactForm.reset();
  });
}

// Sticky Header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
  } else {
    header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.02)';
  }
});