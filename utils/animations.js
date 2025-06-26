// Animation utilities for scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Add animation classes based on data attributes
        if (element.classList.contains('animate-on-scroll')) {
          element.classList.add('animate-fade-in-up');
          element.style.opacity = '1';
        }
        
        // Unobserve after animation triggers
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize loader and hide it after page load
function initLoader() {
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }, 1000);
    }
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  // Delay scroll animations to ensure content is rendered
  setTimeout(initScrollAnimations, 100);
});