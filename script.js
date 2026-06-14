/* =========================================================
   KITORZ PORTFOLIO — SCRIPT
   Renders content from config.js, handles animations,
   custom cursor, and live YouTube data.
========================================================= */

/* ---------- ICONS (simple inline SVGs) ---------- */
const ICONS = {
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 0 1-6.6 3.1 8.38 8.38 0 0 1-5.4-1.9L3 21l2.9-4.1A8.38 8.38 0 0 1 3 11.5a8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 5.4 1.9 8.5 8.5 0 0 1 4.1 6.6z"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.249.07.07 0 0 0-.073-.035A19.74 19.74 0 0 0 3.677 4.37a.06.06 0 0 0-.03.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.054 19.9 19.9 0 0 0 5.993 3.03.07.07 0 0 0 .078-.026 14.1 14.1 0 0 0 1.226-1.994.07.07 0 0 0-.041-.103 13.1 13.1 0 0 1-1.872-.892.07.07 0 0 1-.007-.116c.126-.094.252-.192.372-.291a.07.07 0 0 1 .073-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.12.099.245.198.372.292a.07.07 0 0 1-.006.116 12.3 12.3 0 0 1-1.873.892.07.07 0 0 0-.04.104c.36.698.772 1.363 1.225 1.993a.07.07 0 0 0 .078.027 19.84 19.84 0 0 0 6.002-3.03.07.07 0 0 0 .03-.054c.5-5.177-.838-9.673-3.549-13.66a.06.06 0 0 0-.029-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.99 2.99 0 0 0-2.105-2.115C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.393.571A2.99 2.99 0 0 0 .502 6.186 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.105 2.115C4.495 20.5 12 20.5 12 20.5s7.505 0 9.393-.571a2.99 2.99 0 0 0 2.105-2.115A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  ban: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

/* ---------- CUSTOM CURSOR ---------- */
function initCursor() {
  // Skip on touch devices — they don't have a mouse cursor anyway
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.documentElement.classList.add('custom-cursor-active');

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .card, .video-frame-wrap, .btn')) {
      ring.classList.add('active');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .card, .video-frame-wrap, .btn')) {
      ring.classList.remove('active');
    }
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ---------- ACTIVE NAV LINK ---------- */
function initActiveNav() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;
  const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`.nav-links a[href="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => observer.observe(s));
}

/* ---------- VIDEO SHOWCASE ---------- */
function renderVideos() {
  const container = document.getElementById('video-grid');
  if (!container) return;
  SITE.showcaseVideos.forEach(id => {
    const wrap = document.createElement('div');
    wrap.className = 'video-frame-wrap';
    wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" title="Showcase video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    container.appendChild(wrap);
  });
}

/* ---------- COLLABS ---------- */
async function renderCollabs() {
  const container = document.getElementById('collab-grid');
  if (!container) return;

  for (const creator of SITE.collabs) {
    const card = document.createElement('div');
    card.className = 'card collab-card';
    card.innerHTML = `
      <img class="collab-pfp" src="${creator.fallbackPfp}" alt="${creator.displayName} profile picture">
      <div class="collab-name">${creator.displayName}</div>
      <div class="collab-subs"><span class="live-dot"></span><span class="sub-count">${creator.fallbackSubs} subscribers</span></div>
    `;
    container.appendChild(card);

    if (SITE.youtubeApiKey) {
      try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${creator.handle}&key=${SITE.youtubeApiKey}`);
        const data = await res.json();
        const item = data.items && data.items[0];
        if (item) {
          const subs = Number(item.statistics.subscriberCount).toLocaleString();
          card.querySelector('.sub-count').textContent = `${subs} subscribers`;
          card.querySelector('.collab-pfp').src = item.snippet.thumbnails.high.url;
        }
      } catch (err) {
        console.warn('YouTube API error for', creator.handle, err);
      }
    }
  }
}

/* ---------- WHAT I DO ---------- */
function renderWhatIDo() {
  const editingList = document.getElementById('editing-style-list');
  const getList = document.getElementById('what-you-get-list');
  if (!editingList && !getList) return;

  const editingStyle = [
    { icon: ICONS.camera, text: 'Gameplay edits' },
    { icon: ICONS.phone, text: 'Shorts & fast-paced content' },
    { icon: ICONS.bolt, text: 'Smooth transitions & clean pacing' },
    { icon: ICONS.music, text: 'Audio synced perfectly to edits' }
  ];
  const whatYouGet = [
    { icon: ICONS.chat, text: 'Good communication' },
    { icon: ICONS.palette, text: 'High-quality edits with effort in every video' },
    { icon: ICONS.bolt, text: 'Fast delivery within 24 hours' },
    { icon: ICONS.music, text: 'Synced audio & satisfying transitions' }
  ];

  const build = (arr) => arr.map(i => `<li><span class="feature-icon">${i.icon}</span>${i.text}</li>`).join('');
  if (editingList) editingList.innerHTML = build(editingStyle);
  if (getList) getList.innerHTML = build(whatYouGet);
}

/* ---------- PRICING ---------- */
function renderPricing(targetId, dataKey) {
  const container = document.getElementById(targetId);
  if (!container) return;
  SITE[dataKey].forEach(plan => {
    const card = document.createElement('div');
    card.className = 'card price-card';
    card.innerHTML = `
      <h3>${plan.title}</h3>
      <div class="price">${plan.price}</div>
      <div class="unit">${plan.unit}</div>
      <ul>${plan.features.map(f => `<li>${ICONS.check}${f}</li>`).join('')}</ul>
    `;
    container.appendChild(card);
  });
}

/* ---------- REVIEWS ---------- */
function renderReviews() {
  const container = document.getElementById('review-grid');
  if (!container) return;
  SITE.reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card review-card';
    card.innerHTML = `
      <div class="stars">★★★★★</div>
      <p>"${r.text}"</p>
      <div class="reviewer">— ${r.name}</div>
    `;
    container.appendChild(card);
  });
}

/* ---------- RULES ---------- */
function renderRules() {
  const container = document.getElementById('rules-list');
  if (!container) return;
  SITE.rules.forEach(rule => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="rule-icon rule-${rule.icon}">${ICONS[rule.icon]}</span><span>${rule.text}</span>`;
    container.appendChild(li);
  });
}

/* ---------- CONTACT ---------- */
function renderContact() {
  const container = document.getElementById('contact-grid');
  if (!container) return;
  container.innerHTML = `
    <div class="card contact-card">
      <span class="feature-icon">${ICONS.discord}</span>
      <div><div class="label">Discord</div><div class="value">${SITE.contact.discord}</div></div>
    </div>
    <div class="card contact-card">
      <span class="feature-icon">${ICONS.mail}</span>
      <div><div class="label">Email</div><div class="value"><a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a></div></div>
    </div>
  `;
}

/* ---------- NAME INJECTION ---------- */
function injectName() {
  document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = SITE.name);
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  injectName();
  initCursor();
  renderVideos();
  renderCollabs();
  renderWhatIDo();
  renderPricing('editing-pricing-grid', 'editingPricing');
  renderPricing('dev-pricing-grid', 'devPricing');
  renderReviews();
  renderRules();
  renderContact();
  initReveal();
  initActiveNav();
});
