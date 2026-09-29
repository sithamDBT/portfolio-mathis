(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const esc = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const renderTags = (items = [], limit = items.length) =>
    items.slice(0, limit).map(item => `<span class="tag">${esc(item)}</span>`).join('');

  const currentYear = () => new Date().getFullYear();

  function formatEducationPeriod(item) {
    const dynamic = item.dynamicPeriod;
    if (!dynamic || dynamic.kind !== 'academic-level') return item.period || '';

    const now = new Date();
    const academicStartYear = now.getMonth() + 1 >= dynamic.rolloverMonth
      ? now.getFullYear()
      : now.getFullYear() - 1;
    const level = Math.min(dynamic.maxLevel, dynamic.startLevel + Math.max(0, academicStartYear - dynamic.startYear));
    const ordinal = level === 1 ? '1re' : `${level}e`;
    return `Depuis ${dynamic.startYear} · ${ordinal} année`;
  }

  const logoSources = {
    PHP: 'php.svg',
    Symfony: 'symfony.svg',
    Python: 'python.svg',
    Java: 'java.svg',
    JavaScript: 'javascript.svg',
    React: 'react.svg',
    HTML: 'html5.svg',
    CSS: 'css3.svg',
    'C#': 'csharp.svg',
    Unity: 'unity.svg',
    WinDev: 'windev.png',
    SQL: 'sql.svg',
    MySQL: 'mysql.svg',
    Oracle: 'oracle.svg',
    Firebase: 'firebase.svg',
    phpMyAdmin: 'phpmyadmin.svg',
    JSON: 'json.svg',
    Git: 'git.svg',
    GitLab: 'gitlab.svg',
    GitHub: 'github.svg',
    Docker: 'docker.svg',
    Podman: 'podman.svg',
    Trello: 'trello.svg',
    Figma: 'figma.svg',
    macOS: 'apple.svg',
    Linux: 'linux.svg',
    Windows: 'windows.svg'
  };

  function renderLogo(item, index) {
    const sources = item === 'C# / Unity'
      ? [{label: 'C#', src: logoSources['C#']}, {label: 'Unity', src: logoSources.Unity}]
      : [{label: item, src: logoSources[item]}];
    return `
      <span class="tech-logo tech-logo--${index + 1}" tabindex="0" aria-label="${esc(item)}">
        <span class="tech-logo__marks">
          ${sources.map(source => `<img src="assets/logos/${esc(source.src)}" alt="${esc(source.label)}" loading="lazy">`).join('')}
        </span>
        <span class="tech-logo__name">${esc(item)}</span>
      </span>
    `;
  }

  function renderScene(scene) {
    if (scene === 'development') {
      return `
        <div class="scene-window scene-window--development" aria-hidden="true">
          <div class="scene-window__bar"><span></span><span></span><span></span><small>workspace / app</small></div>
          <div class="scene-window__body">
            <img src="assets/illustration/stylelogo.png" alt="" loading="lazy">
            <div class="scene-code"><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <div class="scene-window__footer"><span>build</span><strong>ready to ship</strong></div>
        </div>
      `;
    }
    if (scene === 'data') {
      return `
        <div class="scene-window scene-window--data" aria-hidden="true">
          <div class="scene-window__bar"><span></span><span></span><span></span><small>query / relations</small></div>
          <div class="data-scene">
            <div class="data-table"><b>users</b><span>id&nbsp;&nbsp;&nbsp;name&nbsp;&nbsp;&nbsp;role</span><span>01&nbsp;&nbsp;&nbsp;Mathis&nbsp;&nbsp;&nbsp;dev</span><span>02&nbsp;&nbsp;&nbsp;team&nbsp;&nbsp;&nbsp;admin</span></div>
            <div class="data-node data-node--one">users</div>
            <div class="data-node data-node--two">projects</div>
            <div class="data-node data-node--three">activities</div>
            <div class="data-link data-link--one"></div><div class="data-link data-link--two"></div>
          </div>
          <div class="scene-window__footer"><span>schema</span><strong>clear relations</strong></div>
        </div>
      `;
    }
    if (scene === 'devops') {
      return `
        <div class="scene-window scene-window--devops" aria-hidden="true">
          <div class="scene-window__bar"><span></span><span></span><span></span><small>delivery / flow</small></div>
          <div class="workflow-scene">
            <div class="workflow-node workflow-node--active"><small>01</small><strong>commit</strong><span>code</span></div>
            <div class="workflow-arrow">→</div>
            <div class="workflow-node"><small>02</small><strong>build</strong><span>container</span></div>
            <div class="workflow-arrow">→</div>
            <div class="workflow-node"><small>03</small><strong>deploy</strong><span>service</span></div>
          </div>
          <div class="scene-window__footer"><span>pipeline</span><strong>small steps, clear feedback</strong></div>
        </div>
      `;
    }
    return `
      <div class="scene-window scene-window--environment" aria-hidden="true">
        <div class="scene-window__bar"><span></span><span></span><span></span><small>three places to build</small></div>
        <div class="environment-scene">
          <div class="environment-window environment-window--back"><span>linux</span><i></i><i></i></div>
          <div class="environment-window environment-window--middle"><span>windows</span><i></i><i></i><i></i></div>
          <div class="environment-window environment-window--front"><span>macOS</span><i></i><i></i></div>
        </div>
        <div class="scene-window__footer"><span>environments</span><strong>adapt, test, deliver</strong></div>
      </div>
    `;
  }

  function renderTech() {
    const root = document.querySelector('#techStack');
    if (!root) return;
    root.innerHTML = data.technologies.map((group, index) => `
      <article class="tech-universe tech-universe--${['development', 'data', 'devops', 'environment'][index]} reveal reveal-delay-${Math.min(index + 1, 3)}">
        <div class="tech-universe__copy">
          <span class="tech-universe__number">0${index + 1}</span>
          <div>
            <p class="tech-universe__eyebrow">${esc(group.label)}</p>
            <h3>${esc(group.label === 'Outils & DevOps' ? 'Du code au déploiement.' : group.label === 'Environnements' ? 'Là où les projets prennent vie.' : group.label === 'Données' ? 'Rendre l’information lisible.' : 'Construire, tester, recommencer.')}</h3>
            <p class="tech-universe__intro">${esc(group.intro)}</p>
          </div>
        </div>
        <div class="tech-logo-board" aria-label="Technologies de ${esc(group.label)}">
          ${group.items.map(renderLogo).join('')}
        </div>
      </article>
    `).join('');
  }

  function renderTimeline() {
    const root = document.querySelector('#timeline');
    if (!root) return;
    root.innerHTML = data.education.map((item, index) => `
      <article class="timeline-card timeline-card--${index + 1} reveal reveal-delay-${Math.min(index + 1, 3)}">
        <div class="timeline-media">
          <img src="${esc(item.image)}" alt="${esc(item.imageAlt)}" loading="lazy">
          <span class="timeline-step">0${index + 1}</span>
        </div>
        <div class="timeline-content">
          <div class="timeline-period">${esc(formatEducationPeriod(item))}</div>
          <h3>${esc(item.title)}</h3>
          <div class="timeline-place">${esc(item.place)}</div>
          <p class="timeline-desc">${esc(item.description)}</p>
          <div class="tags">${renderTags(item.tags)}</div>
        </div>
      </article>
    `).join('');
  }

  

  function renderProjectVisual(project) {
    const image = project.cardImage || project.heroImage;
    if (image) {
      return `
        <div class="project-card__window">
          <div class="project-card__chrome" aria-hidden="true"><span></span><span></span><span></span><small>${esc(project.category)}</small></div>
          <div class="project-card__screen"><img src="${esc(image)}" alt="Aperçu du projet ${esc(project.title)}" loading="lazy"></div>
        </div>`;
    }
    const style = esc(project.coverStyle || 'symfony');
    return `<div class="cover cover--${style}" aria-hidden="true"><span class="cover-label">${esc(project.title)}</span></div>`;
  }

  function renderProjects() {
    const root = document.querySelector('#projectsGrid');
    if (!root) return;

    root.innerHTML = data.projects.map((project, index) => {
      const detailUrl = `project.html?id=${encodeURIComponent(project.id)}`;
      const cardClass = `project-card reveal${project.featured ? ' project-card--featured' : ''}`;
      const visual = project.hasDetail === false
        ? `<div class="project-card__visual" aria-label="Aperçu de ${esc(project.title)}">${renderProjectVisual(project)}</div>`
        : `<a class="project-card__visual" href="${detailUrl}" aria-label="Découvrir ${esc(project.title)}">${renderProjectVisual(project)}</a>`;
      const detailLink = project.hasDetail === false
        ? `<span class="project-card__status">Aperçu</span>`
        : `<a class="project-card__link" href="${detailUrl}" aria-label="Voir le projet ${esc(project.title)}"><span>Voir le projet</span><span aria-hidden="true">↗</span></a>`;

      return `
        <article class="${cardClass}" data-category="${esc(project.category)}">
          ${visual}
          <div class="project-card__body">
            <div class="project-card__meta"><span>${String(index + 1).padStart(2, '0')}</span><span>${esc(project.category)}</span><span>${esc(project.type)}</span></div>
            <h3>${esc(project.title)}</h3>
            <p>${esc(project.summary)}</p>
            <div class="project-card__footer">
              <div class="project-card__tech">${project.tech.slice(0, 4).map(item => `<span>${esc(item)}</span>`).join('')}</div>
              ${detailLink}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderExperiences() {
    const root = document.querySelector('#experienceList');
    if (!root) return;

    root.innerHTML = data.experiences.map((experience, index) => {
      const mediaClass = `experience-step__media${experience.mediaType === 'logo' ? ' experience-step__media--logo' : ''}`;
      const content = `
        <div class="${mediaClass}">
          <img src="${esc(experience.cover)}" alt="${esc(experience.coverAlt)}" loading="lazy">
          <span class="experience-step__index">0${index + 1}</span>
        </div>
        <div class="experience-step__content">
          <div class="experience-step__period">${esc(experience.period)}</div>
          <h3>${esc(experience.company)}</h3>
          <div class="experience-step__location">${esc(experience.location)}</div>
          <p>${esc(experience.mission)}</p>
          <div class="tags">${renderTags(experience.tech, 5)}</div>
          ${experience.projectId ? '<span class="experience-step__cta">Voir le projet ↗</span>' : ''}
        </div>
      `;
      const className = `experience-step experience-step--${index + 1} reveal reveal-delay-${Math.min(index + 1, 3)}${experience.projectId ? '' : ' experience-step--static'}`;
      return experience.projectId
        ? `<a class="${className}" href="project.html?id=${encodeURIComponent(experience.projectId)}">${content}</a>`
        : `<article class="${className}">${content}</article>`;
    }).join('');
  }

  function setupContactForm() {
    const form = document.querySelector('#contactForm');
    const button = document.querySelector('#contactSubmit');
    const status = document.querySelector('#contactStatus');
    const toast = document.querySelector('#contactToast');
    if (!form || !button) return;

    const buttonLabel = button.querySelector('span');
    const defaultLabel = buttonLabel ? buttonLabel.textContent : 'Envoyer le message';
    let toastTimer = null;

    const showToast = (message, type = 'success') => {
      if (!toast) return;
      toast.textContent = message;
      toast.dataset.type = type;
      toast.classList.add('show');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3200);
    };

    const setLoading = loading => {
      button.disabled = loading;
      button.classList.toggle('is-loading', loading);
      if (buttonLabel) buttonLabel.textContent = loading ? 'Envoi en cours…' : defaultLabel;
    };

    try {
      if (window.emailjs) window.emailjs.init('QrVCBEqHdTnQjqBas');
    } catch (error) {
      console.warn('EmailJS init:', error);
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      if (!window.emailjs) {
        if (status) status.textContent = 'Le service de contact est momentanément indisponible.';
        showToast('Impossible de charger le service de contact.', 'error');
        return;
      }

      setLoading(true);
      if (status) status.textContent = '';

      try {
        await window.emailjs.sendForm('default_service', 'template_jfb22ih', form);
        form.reset();
        if (status) status.textContent = 'Message envoyé. Merci !';
        showToast('Message envoyé ✓', 'success');
      } catch (error) {
        console.error('EmailJS send:', error);
        if (status) status.textContent = 'Une erreur est survenue. Réessaie dans un instant.';
        showToast('Erreur lors de l’envoi. Réessaie.', 'error');
      } finally {
        setLoading(false);
      }
    });
  }

  function setupFilters() {
    const buttons = [...document.querySelectorAll('.filter-button')];
    const cards = [...document.querySelectorAll('.project-card')];
    const grid = document.querySelector('#projectsGrid');
    if (!buttons.length || !grid) return;

    let empty = null;
    const showEmpty = () => {
      if (!empty) {
        empty = document.createElement('div');
        empty.className = 'projects-empty';
        empty.textContent = 'Aucun projet personnel n’est présenté pour le moment.';
        grid.appendChild(empty);
      }
      empty.hidden = false;
    };

    const hideEmpty = () => { if (empty) empty.hidden = true; };

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.toggle('is-active', b === button);
          b.setAttribute('aria-pressed', b === button ? 'true' : 'false');
        });
        const filter = button.dataset.filter;
        let visibleCount = 0;
        cards.forEach(card => {
          const visible = filter === 'Tous' || card.dataset.category === filter;
          card.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        if (visibleCount === 0) showEmpty(); else hideEmpty();
      });
    });
  }

  function setupNav() {
    const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const sections = navAnchors
      .map(anchor => document.querySelector(anchor.getAttribute('href')))
      .filter(Boolean);
    if (!navAnchors.length || !sections.length) return;

    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navAnchors.forEach(anchor => {
        const active = anchor.getAttribute('href') === `#${visible.target.id}`;
        if (active) anchor.setAttribute('aria-current', 'true');
        else anchor.removeAttribute('aria-current');
      });
    }, {rootMargin: '-35% 0px -55% 0px', threshold: [0, .2, .5]});

    sections.forEach(section => observer.observe(section));
  }

  function setupReveal() {
    const items = [...document.querySelectorAll('.reveal')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px -8% 0px', threshold: .12});
    items.forEach(item => observer.observe(item));
  }

  function setupDailyDevVideo() {
    const video = document.querySelector('#dailyDevVideo');
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) video.play().catch(() => {});
      else video.pause();
    }, {threshold: 0.5});

    observer.observe(video);
  }


  renderTech();
  renderTimeline();
  renderProjects();
  renderExperiences();
  setupContactForm();
  setupFilters();
  setupNav();
  setupReveal();
  setupDailyDevVideo();

  document.querySelectorAll('[data-current-year]').forEach(node => { node.textContent = currentYear(); });
})();
