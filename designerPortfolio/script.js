// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Scroll-triggered fade-in
const fadeEls = document.querySelectorAll(
  '.bento-item, .about-grid, .service-row, .testimonial, .contact-split, .detail-block'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => observer.observe(el));

// Form handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const subject = encodeURIComponent('Creative inquiry: ' + (fd.get('type') || 'New project'));
  const body = encodeURIComponent(
    ['Name: ' + fd.get('name'), 'Email: ' + fd.get('email'),
     'Type: ' + fd.get('type'), '', 'Brief: ' + fd.get('brief')].join('\n')
  );
  window.location.href = 'mailto:hello@kreshnith.com?subject=' + subject + '&body=' + body;
});
