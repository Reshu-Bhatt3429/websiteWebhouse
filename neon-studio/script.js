// nav scroll state
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 40);
}, { passive: true });

// mobile menu
const burger = document.getElementById('burger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  links.classList.remove('open');
}));

// scroll reveal
const revealEls = document.querySelectorAll('.card, .svc, blockquote, .about-card, .sec-head, .stat');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => io.observe(el));

// contact form -> mailto (encoded to prevent header/body injection)
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
