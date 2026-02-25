/* ========================================
   PARTICLES CANVAS ANIMATION
   main.js — Portfolio JS
   ======================================== */

/******* PARTICLE SYSTEM *******/
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 80;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '0,245,255' : '138,43,226';
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = `rgb(${this.color})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgb(${this.color})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.save();
        ctx.globalAlpha = (1 - dist / 120) * 0.12;
        ctx.strokeStyle = '#00F5FF';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnections();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

resizeCanvas();
initParticles();
animateParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

/******* NAVBAR SCROLL STATE *******/
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
});

/******* HAMBURGER MENU *******/
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/******* ACTIVE NAV LINK ON SCROLL *******/
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[data-section="${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

/******* SCROLL REVEAL ANIMATION *******/
const revealEls = document.querySelectorAll('.reveal, .fade-up');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bars when skill panel becomes visible
      if (entry.target.closest('.skills-panel')) {
        triggerSkillBars(entry.target.closest('.skills-panel'));
      }
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/******* TRIGGER HERO ANIMATIONS *******/
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-up, .hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 80);
  });
  // Trigger active skill panel bars on load
  triggerSkillBars(document.querySelector('.skills-panel.active'));
  // Start typing animation
  startTyping();
});

/******* TYPING ANIMATION *******/
function startTyping() {
  const el = document.getElementById('heroTyping');
  if (!el) return;
  const phrases = [
    'Vision Systems.',
    'YOLO Detectors.',
    'Deep Learning Pipelines.',
    'Production AI.',
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let pauseTimer = null;

  function type() {
    const current = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        pauseTimer = setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    const speed = deleting ? 40 : 70;
    setTimeout(type, speed);
  }

  setTimeout(type, 900);
}

/******* SKILL BARS ANIMATION *******/
function triggerSkillBars(panel) {
  if (!panel) return;
  panel.querySelectorAll('.skill-fill').forEach(bar => {
    const targetWidth = bar.getAttribute('data-width') + '%';
    bar.style.width = targetWidth;
  });
}

/******* SKILLS TABS *******/
const skillsTabs = document.querySelectorAll('.skills-tab');
const skillsPanels = document.querySelectorAll('.skills-panel');

skillsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    skillsTabs.forEach(t => t.classList.remove('active'));
    skillsPanels.forEach(p => {
      p.classList.remove('active');
      // Reset bars
      p.querySelectorAll('.skill-fill').forEach(b => b.style.width = '0');
    });

    tab.classList.add('active');
    const activePanel = document.getElementById(`panel-${target}`);
    if (activePanel) {
      activePanel.classList.add('active');
      // Re-add reveal visible to panel items
      activePanel.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      setTimeout(() => triggerSkillBars(activePanel), 100);
    }
  });
});

/******* COUNTER ANIMATION *******/
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number[data-count]').forEach(el => {
        animateCounter(el);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const aboutCard = document.querySelector('.about-image-card');
if (aboutCard) counterObserver.observe(aboutCard);

/******* SKILL BARS SCROLL TRIGGER *******/
const skillsSectionEl = document.querySelector('.skills-section');
if (skillsSectionEl) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activePanel = document.querySelector('.skills-panel.active');
        if (activePanel) triggerSkillBars(activePanel);
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  skillsObserver.observe(skillsSectionEl);
}

/******* SMOOTH SCROLL FOR ANCHOR LINKS *******/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/******* CURSOR GLOW EFFECT *******/
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: left 0.15s ease, top 0.15s ease;
  will-change: transform;
`;
document.body.appendChild(cursorGlow);
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

/******* CARD HOVER TILT EFFECT *******/
document.querySelectorAll('.project-card, .contact-card, .publication-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -4;
    const rotY = ((x - cx) / cx) * 4;
    card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

console.log('%c JK Liwin Jose Portfolio', 'color: #00F5FF; font-size: 20px; font-weight: bold;');
console.log('%c Computer Vision & ML Engineer', 'color: #8A2BE2; font-size: 14px;');
