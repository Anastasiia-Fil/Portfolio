// script.js — Portfolio

// =============================
// Mobile nav toggle
// =============================
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('show');
});

// =============================
// Fade-in on scroll animations
// =============================
const animElements = document.querySelectorAll('[data-anim]');

function animateOnScroll() {
  const windowBottom = window.innerHeight + window.scrollY;
  animElements.forEach(el => {
    const elementTop = el.offsetTop + el.offsetHeight / 4;
    if(windowBottom > elementTop) {
      el.classList.add('anim-visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// =============================
// Simple hero image float animation
// =============================
const heroMockup = document.getElementById('heroMockup');
let direction = 1;

function floatHero() {
  const offset = 5;
  const y = parseFloat(heroMockup.dataset.y || 0);
  const newY = y + 0.1 * direction;
  if(newY > offset || newY < -offset) direction *= -1;
  heroMockup.style.transform = `translateY(${newY}px)`;
  heroMockup.dataset.y = newY;
  requestAnimationFrame(floatHero);
}

floatHero();

console.log('Portfolio JS loaded');

