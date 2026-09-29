(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const esc = (value = '') => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  const tags = (items = []) => items.map(item => `<span class="tag">${esc(item)}</span>`).join('');
  const list = (items = []) => `<ul class="case-list">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;

  const detailProjects = data.projects.filter(item => item.hasDetail !== false);
  if (!detailProjects.length) return;

  const requestedId = new URLSearchParams(location.search).get('id');
  const project = detailProjects.find(item => item.id === requestedId) || detailProjects[0];
  const currentIndex = detailProjects.findIndex(item => item.id === project.id);
  const nextProject = detailProjects[(currentIndex + 1) % detailProjects.length];
  const projectNumber = String(currentIndex + 1).padStart(2, '0');

  document.title = `${project.title} — Mathis Dobinet`;

  const hero = document.querySelector('#projectHero');
  hero.innerHTML = `
    <div class="detail-breadcrumb"><a href="index.html#projets">Projets</a><span>→</span><span>${esc(project.title)}</span></div>
    <div class="detail-meta"><span>${projectNumber}</span><span>${esc(project.category)}</span><span>${esc(project.type)}</span></div>
    <h1>${esc(project.title)}</h1>
    <p class="detail-deck">${esc(project.intro)}</p>
    <div class="tags detail-tech">${tags(project.tech)}</div>
  `;

  const mediaItems = [];
  const seenMedia = new Set();
  const addMedia = (src, alt, fit = 'contain', label = 'Aperçu') => {
    if (!src || seenMedia.has(src)) return;
    seenMedia.add(src);
    mediaItems.push({ src, alt, fit: fit === 'cover' ? 'cover' : 'contain', label });
  };

  addMedia(
    project.heroImage || project.cardImage,
    `Aperçu principal du projet ${project.title}`,
    project.heroFit || 'contain',
    'Vue principale'
  );
  (project.gallery || []).forEach((image, index) => addMedia(
    image?.src,
    image?.alt || `Capture ${index + 1} du projet ${project.title}`,
    image?.fit || 'contain',
    `Capture ${index + 1}`
  ));

  const cover = document.querySelector('#projectCover');
  if (mediaItems.length) {
    cover.className = 'project-media';
    cover.innerHTML = `
      <div class="project-media__chrome" aria-hidden="true">
        <span></span><span></span><span></span>
        <strong id="projectMediaLabel">${esc(mediaItems[0].label)}</strong>
      </div>
      <div class="project-media__stage" data-fit="${esc(mediaItems[0].fit)}">
        <button class="project-media__open" type="button" aria-label="Ouvrir l’image en grand">
          <img class="project-media__image" src="${esc(mediaItems[0].src)}" alt="${esc(mediaItems[0].alt)}">
        </button>
        ${mediaItems.length > 1 ? `
          <button class="project-media__nav project-media__nav--prev" type="button" aria-label="Image précédente">←</button>
          <button class="project-media__nav project-media__nav--next" type="button" aria-label="Image suivante">→</button>
          <div class="project-media__counter" aria-live="polite"><span>1</span> / ${mediaItems.length}</div>
        ` : ''}
      </div>
      ${mediaItems.length > 1 ? `
        <div class="project-media__thumbs" role="tablist" aria-label="Captures du projet">
          ${mediaItems.map((item, index) => `
            <button class="project-media__thumb${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-index="${index}" title="${esc(item.label)}">
              <img src="${esc(item.src)}" alt="" loading="lazy">
            </button>
          `).join('')}
        </div>
      ` : ''}
    `;

    let activeIndex = 0;
    const stage = cover.querySelector('.project-media__stage');
    const mainImage = cover.querySelector('.project-media__image');
    const label = cover.querySelector('#projectMediaLabel');
    const counter = cover.querySelector('.project-media__counter span');
    const thumbs = [...cover.querySelectorAll('.project-media__thumb')];

    const setMedia = (index, focusThumb = false) => {
      activeIndex = (index + mediaItems.length) % mediaItems.length;
      const item = mediaItems[activeIndex];
      mainImage.classList.add('is-changing');
      window.setTimeout(() => {
        mainImage.src = item.src;
        mainImage.alt = item.alt;
        stage.dataset.fit = item.fit;
        mainImage.classList.remove('is-changing');
      }, 110);
      if (label) label.textContent = item.label;
      if (counter) counter.textContent = String(activeIndex + 1);
      thumbs.forEach((thumb, thumbIndex) => {
        const selected = thumbIndex === activeIndex;
        thumb.classList.toggle('is-active', selected);
        thumb.setAttribute('aria-selected', String(selected));
        if (selected) thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      if (focusThumb && thumbs[activeIndex]) thumbs[activeIndex].focus({ preventScroll: true });
    };

    cover.querySelector('.project-media__nav--prev')?.addEventListener('click', () => setMedia(activeIndex - 1));
    cover.querySelector('.project-media__nav--next')?.addEventListener('click', () => setMedia(activeIndex + 1));
    thumbs.forEach(thumb => thumb.addEventListener('click', () => setMedia(Number(thumb.dataset.index))));

    const lightbox = document.createElement('dialog');
    lightbox.className = 'project-lightbox';
    lightbox.innerHTML = `
      <div class="project-lightbox__inner">
        <button class="project-lightbox__close" type="button" aria-label="Fermer">×</button>
        <img class="project-lightbox__image" alt="">
        ${mediaItems.length > 1 ? `
          <button class="project-lightbox__nav project-lightbox__nav--prev" type="button" aria-label="Image précédente">←</button>
          <button class="project-lightbox__nav project-lightbox__nav--next" type="button" aria-label="Image suivante">→</button>
        ` : ''}
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.project-lightbox__image');
    const syncLightbox = () => {
      const item = mediaItems[activeIndex];
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightboxImage.dataset.fit = item.fit;
    };
    cover.querySelector('.project-media__open')?.addEventListener('click', () => {
      syncLightbox();
      lightbox.showModal?.();
    });
    lightbox.querySelector('.project-lightbox__close')?.addEventListener('click', () => lightbox.close());
    lightbox.querySelector('.project-lightbox__nav--prev')?.addEventListener('click', () => { setMedia(activeIndex - 1); syncLightbox(); });
    lightbox.querySelector('.project-lightbox__nav--next')?.addEventListener('click', () => { setMedia(activeIndex + 1); syncLightbox(); });
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { setMedia(activeIndex - 1); syncLightbox(); }
      if (event.key === 'ArrowRight') { setMedia(activeIndex + 1); syncLightbox(); }
    });
  } else {
    cover.className = 'project-media project-media--generated';
    cover.innerHTML = `<div class="cover cover--${esc(project.coverStyle || 'symfony')}" aria-hidden="true"><span class="cover-label">${esc(project.title)}</span></div>`;
  }

  const reportButton = project.report
    ? `<a class="button button--secondary" href="${esc(project.report)}" target="_blank" rel="noopener">Consulter le rapport ↗</a>`
    : '';

  const body = document.querySelector('#projectBody');
  body.innerHTML = `
    <div class="case-intro">
      <div class="case-intro__heading reveal">
        <span>Étude de cas</span>
        <h2>Du besoin au résultat.</h2>
      </div>
      <div class="case-summary-grid">
        <article class="case-panel reveal"><small>01</small><h3>Contexte</h3><p>${esc(project.context)}</p></article>
        <article class="case-panel reveal reveal-delay-1"><small>02</small><h3>Problème</h3><p>${esc(project.problem)}</p></article>
        <article class="case-panel reveal reveal-delay-2"><small>03</small><h3>Ma contribution</h3><p>${esc(project.contribution)}</p></article>
      </div>
    </div>

    <div class="case-detail-grid">
      <article class="case-panel case-panel--wide reveal">
        <small>04</small><h3>Fonctionnalités principales</h3>${list(project.features)}
      </article>
      <article class="case-panel reveal reveal-delay-1">
        <small>05</small><h3>Défis rencontrés</h3>${list(project.challenges)}
      </article>
      <article class="case-panel reveal">
        <small>06</small><h3>Ce que j’ai appris</h3>${list(project.learnings)}
      </article>
      <article class="case-panel reveal reveal-delay-1">
        <small>07</small><h3>Technologies</h3><div class="tags case-panel__tags">${tags(project.tech)}</div>
        <details class="competency-panel">
          <summary>Compétences associées</summary>
          <div class="competency-content"><div class="tags">${tags(project.competencies || [])}</div></div>
        </details>
      </article>
    </div>

    <div class="detail-actions reveal">
      ${reportButton}
      <a class="button button--ghost" href="index.html#projets">Retour aux projets</a>
    </div>

    <a class="next-project reveal" href="project.html?id=${encodeURIComponent(nextProject.id)}">
      <div><small>Projet suivant</small><h3>${esc(nextProject.title)}</h3></div>
      <div class="experience-arrow" aria-hidden="true">→</div>
    </a>
  `;

  // project.js creates new reveal elements after main.js is absent on this page.
  const reveals = [...document.querySelectorAll('.reveal')];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(item => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }), { rootMargin: '0px 0px -8% 0px', threshold: .1 });
    reveals.forEach(item => observer.observe(item));
  }
})();
