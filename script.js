// ==========================================================================
// 1 Pro Agency — site interactions (no dependencies)
// ==========================================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Footer year — business established 2023
document.getElementById('year').textContent = '2023–' + new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('mobile-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add('in-view'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
}

// Animated stat counters (hero + trust bar)
const countEls = document.querySelectorAll('[data-count-to]');
function animateCount(el) {
  const target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
  const suffix = el.getAttribute('data-suffix') || '';
  if (prefersReducedMotion) {
    el.textContent = target + suffix;
    return;
  }
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
if (countEls.length) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  countEls.forEach(el => countObserver.observe(el));
}

// Header shadow, scroll-progress bar, back-to-top visibility — one
// scroll listener, throttled with requestAnimationFrame.
const header = document.querySelector('.site-header');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
let scrollTicking = false;

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (header) header.style.boxShadow = scrollTop > 10 ? '0 8px 30px rgba(0,0,0,0.25)' : 'none';
  if (scrollProgress) scrollProgress.style.width = progress + '%';
  if (backToTop) backToTop.classList.toggle('visible', scrollTop > 600);

  scrollTicking = false;
}
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(onScroll);
    scrollTicking = true;
  }
});
onScroll();

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

// Contact form — basic client-side handling
// NOTE: Replace the form's `action` URL in index.html with your own
// Formspree endpoint (free at formspree.io) for this to actually send email.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const actionUrl = contactForm.getAttribute('action') || '';
    if (actionUrl.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert('Contact form is not connected yet.\n\nSet up a free Formspree account at formspree.io, then replace YOUR_FORM_ID in index.html with your real form endpoint.\n\nIn the meantime, please reach out via WhatsApp or email above.');
    }
    // If a real Formspree endpoint is set, the form submits normally.
  });
}
