(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  document.querySelectorAll('[data-current-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  const nav = document.querySelector('.site-nav');
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  let frame = null;
  const hero = document.querySelector('.hero');
  const heroDevice = document.querySelector('.hero-device');
  const universes = [...document.querySelectorAll('.tech-universe')];
  const dailyCard = document.querySelector('.watch-source--daily');
  const detailMedia = document.querySelector('.project-media');

  const update = () => {
    frame = null;
    const y = window.scrollY || 0;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    root.style.setProperty('--scroll-progress', `${clamp(y / max, 0, 1) * 100}%`);
    nav?.classList.toggle('is-scrolled', y > 24);

    if (reduced) return;
    const viewport = window.innerHeight || 1;
    if (hero && heroDevice) {
      const rect = hero.getBoundingClientRect();
      const p = clamp((viewport * .5 - (rect.top + rect.height * .5)) / viewport, -1, 1);
      heroDevice.style.setProperty('--hero-device-y', `${p * 13}px`);
      heroDevice.style.setProperty('--hero-image-y', `${p * 23}px`);
      heroDevice.style.setProperty('--hero-image-scale', `${1.035 + Math.abs(p) * .014}`);
    }
    universes.forEach(card => {
      const rect = card.getBoundingClientRect();
      const p = clamp((viewport * .52 - (rect.top + rect.height * .5)) / viewport, -1, 1);
      card.style.setProperty('--tech-shift', `${p * -12}px`);
    });
    [dailyCard, detailMedia].filter(Boolean).forEach(card => {
      const rect = card.getBoundingClientRect();
      const p = clamp((viewport * .5 - (rect.top + rect.height * .5)) / viewport, -1, 1);
      card.style.setProperty('--scroll-lift', `${p * -8}px`);
    });
  };

  const requestFrame = () => {
    if (frame === null) frame = window.requestAnimationFrame(update);
  };
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame, { passive: true });
  update();

  if (reduced || !finePointer) return;

  const tiltTargets = [...document.querySelectorAll('.project-card, .watch-topic, .case-panel')];
  tiltTargets.forEach(card => {
    card.classList.add('motion-card');
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      card.style.setProperty('--pointer-x', `${x * 100}%`);
      card.style.setProperty('--pointer-y', `${y * 100}%`);
      card.style.setProperty('--tilt-y', `${(x - .5) * 2.2}deg`);
      card.style.setProperty('--tilt-x', `${(.5 - y) * 1.8}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--tilt-x', '0deg');
    });
  });

  const heroShowcase = document.querySelector('.hero-showcase');
  if (heroDevice && heroShowcase) {
    heroShowcase.addEventListener('pointermove', event => {
      const rect = heroShowcase.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1);
      const y = clamp((event.clientY - rect.top) / rect.height * 2 - 1, -1, 1);
      heroDevice.style.setProperty('--hero-tilt-y', `${x * 1.2}deg`);
      heroDevice.style.setProperty('--hero-tilt-x', `${y * -1}deg`);
      heroDevice.style.setProperty('--hero-reflect-x', `${50 + x * 24}%`);
    });
    heroShowcase.addEventListener('pointerleave', () => {
      heroDevice.style.setProperty('--hero-tilt-y', '0deg');
      heroDevice.style.setProperty('--hero-tilt-x', '0deg');
      heroDevice.style.setProperty('--hero-reflect-x', '50%');
    });
  }

  document.querySelectorAll('.button, .project-card__link, .watch-external').forEach(button => {
    button.addEventListener('pointermove', event => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * .08;
      const y = (event.clientY - rect.top - rect.height / 2) * .12;
      button.style.setProperty('--magnet-x', `${x}px`);
      button.style.setProperty('--magnet-y', `${y}px`);
    });
    button.addEventListener('pointerleave', () => {
      button.style.setProperty('--magnet-x', '0px');
      button.style.setProperty('--magnet-y', '0px');
    });
  });
})();
