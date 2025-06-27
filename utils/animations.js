// Animation utilities for scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Add animation classes based on data attributes
        if (element.classList.contains("animate-on-scroll")) {
          element.classList.add("animate-fade-in-up");
          element.style.opacity = "1";
        }

        // Unobserve after animation triggers
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Inicializa o loader e o esconde após 4 minutos
function initLoader() {
  const loader = document.getElementById("loader");
  const loaderDuration = 240000; // 4 minutos em ms

  if (loader) {
    loader.style.display = "flex";
    loader.style.opacity = "1";
    loader.style.transition = "opacity 0.8s ease";
  }

  function hideLoader() {
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }
  }

  // Esconde o loader após 4 minutos
  setTimeout(hideLoader, loaderDuration);
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  // Delay scroll animations to ensure content is rendered
  setTimeout(initScrollAnimations, 100);
});
