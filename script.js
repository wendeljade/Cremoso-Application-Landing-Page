const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  navToggle.classList.toggle('active');
});

window.addEventListener('click', (event) => {
  if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
    mainNav.classList.remove('open');
  }
});

const links = document.querySelectorAll('.main-nav a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});
