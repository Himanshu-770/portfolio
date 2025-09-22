document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('header nav');
  const progressBars = document.querySelectorAll('progress[data-value]');
  const toolCircles = document.querySelectorAll('.tool-circle .progress');

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Animate progress bars on scroll
  function animateProgress() {
    progressBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const value = bar.getAttribute('data-value');
        bar.value = value;
      }
    });
  }

  // Animate tool circles on scroll
  function animateToolCircles() {
    toolCircles.forEach((circle) => {
      const parent = circle.parentElement.parentElement;
      const rect = parent.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const percentage = circle.getAttribute('data-percentage');
        const offset = 314 - (314 * percentage) / 100;
        circle.style.strokeDashoffset = offset;
      }
    });
  }

  // Initial and scroll-based animations
  window.addEventListener('scroll', () => {
    animateProgress();
    animateToolCircles();
  });

  // Also run on page load in case elements are already in view
  animateProgress();
  animateToolCircles();
});