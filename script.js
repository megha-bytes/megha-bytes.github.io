// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---------- Cursor glow ----------
const cursorGlow = document.getElementById('cursorGlow');
let cursorActive = false;

window.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'touch') return;
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
  if (!cursorActive) {
    cursorGlow.classList.add('active');
    cursorActive = true;
  }
});

window.addEventListener('pointerleave', () => {
  cursorGlow.classList.remove('active');
  cursorActive = false;
});

// ---------- Typewriter effect ----------
const typewriterEl = document.getElementById('typewriter');
const fullText = typewriterEl.textContent;
typewriterEl.textContent = '';

let twIndex = 0;
function typeNext() {
  if (twIndex <= fullText.length) {
    typewriterEl.textContent = fullText.slice(0, twIndex);
    twIndex++;
    setTimeout(typeNext, 90);
  } else {
    typewriterEl.style.borderRight = '4px solid transparent';
    setTimeout(() => {
      typewriterEl.style.animation = 'blinkCursor 1s step-end infinite';
    }, 200);
  }
}
setTimeout(typeNext, 400);

// blinking cursor via injected keyframes (kept in JS to avoid unused CSS if user removes hero)
const styleTag = document.createElement('style');
styleTag.textContent = `
@keyframes blinkCursor {
  50% { border-right-color: var(--accent); }
}`;
document.head.appendChild(styleTag);

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ---------- Animated stat counters ----------
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => statObserver.observe(el));

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-count'), 10) || 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ---------- Tilt effect on project cards ----------
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ---------- Smooth active nav highlight (optional nicety) ----------
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      link.style.color = 'var(--text)';
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => sectionObserver.observe(sec));
