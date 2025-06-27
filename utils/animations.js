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

// Initialize loader and hide it based on actual loading
function initLoader() {
  const loader = document.getElementById('loader');
  let loadStartTime = Date.now();
  let minimumLoadTime = 800; // Minimum time to show loader
  
  // Track resource loading
  let resourcesLoaded = 0;
  let totalResources = document.querySelectorAll('script, link[rel="stylesheet"], img').length;
  
  function checkLoadComplete() {
    const loadTime = Date.now() - loadStartTime;
    const timeLeft = Math.max(0, minimumLoadTime - loadTime);
    
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    }, timeLeft);
  }

  // Listen for all resources to load
  window.addEventListener('load', checkLoadComplete);
  
  // Fallback for slow connections
  setTimeout(checkLoadComplete, 3000);
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  // Delay scroll animations to ensure content is rendered
  setTimeout(initScrollAnimations, 100);
});