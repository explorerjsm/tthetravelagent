// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Popup for Booking Confirmation
  const bookingPopup = document.getElementById('booking-popup');
  
  function openPopup() {
    bookingPopup.style.display = 'flex';
  }
  
  function closePopup() {
    bookingPopup.style.display = 'none';
  }
  
  // Attach openPopup to all "Book Now" buttons
  document.querySelectorAll('.package-card button').forEach(button => {
    button.addEventListener('click', openPopup);
  });
  
  // Close popup when clicking outside the content
  window.addEventListener('click', (e) => {
    if (e.target === bookingPopup) {
      closePopup();
    }
  });
  
  // Lazy Loading for Gallery Images
const galleryImages = document.querySelectorAll('.gallery-grid img');

const lazyLoad = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Load the image
      img.removeAttribute('data-src'); // Remove data-src after loading
      observer.unobserve(img); // Stop observing once loaded
    }
  });
};

const observer = new IntersectionObserver(lazyLoad, {
  rootMargin: '0px',
  threshold: 0.1
});

galleryImages.forEach(img => {
  if (img.dataset.src) {
    observer.observe(img); // Start observing only if data-src exists
  }
});
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode is enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️ Light Mode';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update button text and save preference in localStorage
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    darkModeToggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'disabled');
  }
});
  
  // Form Validation for Contact Section
  document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault(); // Prevent form submission
      alert('Please fill out all fields.');
    } else if (!email.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
  // Fade-in animation on scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll); // Trigger on page load
// Typing animation for hero text
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');

const typeText = (element, text, speed = 40) => {
  let index = 0;
  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  };
  element.textContent = ''; // Clear text before typing
  type();
};

typeText(heroTitle, 'Discover the Golden City of Jaisalmer');
typeText(heroSubtitle, 'Experience the charm of the desert, stunning forts, and vibrant culture.');

// Hamburger menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('.navbar').appendChild(menuToggle);

const nav = document.querySelector('.navbar nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Hide menu toggle on larger screens
const handleResize = () => {
  if (window.innerWidth > 758) {
    nav.classList.remove('active'); // Ensure nav is visible on larger screens
  }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize); // Check on page load


// Heading effects
const headingText = "To The Travel Agent";
const headingElement = document.getElementById('animated-heading');

// Clear the heading content before starting the animation
headingElement.textContent = '';

let index = 0;
const typeHeading = () => {
  if (index < headingText.length) {
    headingElement.textContent += headingText.charAt(index);
    index++;
    setTimeout(typeHeading, 100); // Adjust typing speed (100ms per character)
  }
};

// Start the typing animation only once
typeHeading();