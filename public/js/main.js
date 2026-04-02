// Hearth — minimal JS

// Scroll-triggered fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger items in lists
        const delay = entry.target.closest('ul, .sections-grid')
          ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 90
          : 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Mark active nav link
const path = window.location.pathname;
document.querySelectorAll('.site-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href !== '/' && path.startsWith(href)) {
    link.classList.add('active');
  }
});
