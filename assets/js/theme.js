(() => {
  const root = document.documentElement;
  const button = document.querySelector('#themeToggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  // New key intentionally starts this redesigned version in light mode once,
  // while still remembering every choice made afterwards.
  const storageKey = 'portfolio-theme-v2';
  const savedTheme = window.localStorage.getItem(storageKey);
  const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';

  const updateTheme = theme => {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';

    if (themeColor) {
      themeColor.content = isDark ? '#050507' : '#f7f9ff';
    }

    if (!button) return;
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Activer le mode clair' : 'Activer le mode sombre');
    button.title = isDark ? 'Passer au mode clair' : 'Passer au mode sombre';
  };

  updateTheme(initialTheme);

  // Enable smooth theme transitions after the first paint to avoid a flash.
  window.requestAnimationFrame(() => root.classList.add('theme-ready'));

  if (button) {
    button.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(storageKey, nextTheme);
      updateTheme(nextTheme);
    });
  }

  // Subtle grid motion used by every major section, not only the homepage hero.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    let frame = null;

    const updateGrid = () => {
      frame = null;
      const y = window.scrollY || 0;
      // Keep these values continuous: modulo caused a visible jump whenever
      // the value wrapped back to zero after a long scroll.
      root.style.setProperty('--grid-scroll-y', `${y * 0.055}px`);
      root.style.setProperty('--grid-scroll-x', `${y * 0.018}px`);
    };

    const requestGridFrame = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateGrid);
    };

    window.addEventListener('scroll', requestGridFrame, { passive: true });
    window.addEventListener('resize', requestGridFrame, { passive: true });
    updateGrid();
  }

  const navToggle = document.querySelector('#navToggle');
  const navLinks = document.querySelector('#navLinks');
  if (navToggle && navLinks) {
    const closeNav = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    };

    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(open));
      navLinks.classList.toggle('is-open', open);
    });
    navLinks.addEventListener('click', event => {
      if (event.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeNav();
    });
  }
})();
