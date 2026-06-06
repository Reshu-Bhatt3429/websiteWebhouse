// mobile menu
const burger = document.getElementById('burger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.textContent = open ? 'CLOSE' : 'MENU';
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  burger.textContent = 'MENU';
}));

// scroll reveal
const revealEls = document.querySelectorAll('.row, .svc, blockquote, .about-h, .about-side, .sec-head');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// contact form -> mailto (values URI-encoded to avoid header/body injection)
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
