// Animation utilities for scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('animate-on-scroll')) {
          // Determine which animation to apply
          if (element.classList.contains('animate-fade-in-left')) {
            element.classList.add('animate-fade-in-left');
          } else if (element.classList.contains('animate-fade-in-right')) {
            element.classList.add('animate-fade-in-right');
          } else {
            element.classList.add('animate-fade-in-up');
          }
          
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

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});
