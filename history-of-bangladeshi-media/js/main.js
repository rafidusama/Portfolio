// History of Bangladeshi Media. Homepage interactivity.

const CATEGORY_LABELS = {
  publication: "Publications",
  milestone: "Milestones",
  law: "Press Law"
};

// Horizontal, wrapping timeline grid. No scrollbar: cards flow
// left to right and wrap to new rows at the container's full width.
function buildTimeline() {
  const grid = document.getElementById("timeline-grid");
  const controls = document.getElementById("timeline-controls");
  if (!grid || typeof TIMELINE_DATA === "undefined") return;

  const activeCats = new Set(Object.keys(CATEGORY_LABELS));

  function render() {
    grid.innerHTML = "";
    const sorted = [...TIMELINE_DATA].sort((a, b) => a.year - b.year);

    sorted.forEach((item) => {
      if (!activeCats.has(item.category)) return;

      const card = document.createElement("article");
      card.className = `timeline-card cat-${item.category}`;

      const yearLabel = item.endYear ? `${item.year}–${item.endYear}` : String(item.year);

      card.innerHTML = `
        <span class="timeline-card__tag">${CATEGORY_LABELS[item.category] || item.category}</span>
        <div class="timeline-card__year">${yearLabel}</div>
        <h3>${item.title}</h3>
        <span class="card-bn bn">${item.bengali || ""}</span>
        <p>${item.text}</p>
      `;

      grid.appendChild(card);
    });

    if (grid.children.length === 0) {
      grid.innerHTML = `<p style="padding:1.5rem 0;color:var(--ink-soft);grid-column:1/-1;">No entries match the current filter.</p>`;
    }
  }

  render();

  controls.querySelectorAll("button[data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      if (cat === "all") {
        const allOn = activeCats.size === Object.keys(CATEGORY_LABELS).length;
        if (allOn) {
          activeCats.clear();
        } else {
          Object.keys(CATEGORY_LABELS).forEach((c) => activeCats.add(c));
        }
      } else {
        if (activeCats.has(cat)) {
          activeCats.delete(cat);
        } else {
          activeCats.add(cat);
        }
      }
      controls.querySelectorAll("button[data-cat]").forEach((b) => {
        if (b.dataset.cat === "all") {
          b.setAttribute("aria-pressed", String(activeCats.size === Object.keys(CATEGORY_LABELS).length));
        } else {
          b.setAttribute("aria-pressed", String(activeCats.has(b.dataset.cat)));
        }
      });
      render();
    });
  });
}

// Renders the 7 parts as a folded accordion: click a part to reveal
// its chapters, click again to fold it back up. Used both inside the
// hamburger nav drawer (compact) and on the homepage (full detail).
// rootPrefix is "" on the homepage and "../" on pages one level deep.
function buildPartsAccordion(containerId, rootPrefix, compact) {
  const container = document.getElementById(containerId);
  if (!container || typeof PARTS_DATA === "undefined") return;

  const accents = ["var(--red)", "var(--blue)", "var(--gold)", "var(--green)", "var(--purple)", "var(--red)", "var(--blue)"];

  PARTS_DATA.forEach((part, i) => {
    const item = document.createElement("div");
    item.className = compact ? "nav-part-item" : "part-accordion-item";

    const headerId = `${containerId}-header-${i}`;
    const panelId = `${containerId}-panel-${i}`;

    const header = document.createElement("button");
    header.type = "button";
    header.id = headerId;
    header.setAttribute("aria-expanded", "false");
    header.setAttribute("aria-controls", panelId);

    if (compact) {
      header.className = "nav-part-header";
      header.innerHTML = `
        <span><span class="npn">Part ${part.num}</span>${part.title}</span>
        <span class="chevron">&#8250;</span>
      `;
    } else {
      header.className = "part-accordion-header";
      header.style.setProperty("--accent", accents[i % accents.length]);
      header.innerHTML = `
        <span class="pah-left">
          <span class="pah-num">Part ${part.num}</span>
          <span class="pah-title">${part.title}</span>
          <span class="pah-years">${part.years}</span>
        </span>
        <span class="pah-right">
          <span class="pah-count">${part.chapters.length} chapters</span>
          <span class="pah-chevron">&#9660;</span>
        </span>
      `;
    }

    const panel = document.createElement("div");
    panel.className = compact ? "nav-part-panel" : "part-accordion-panel";
    panel.id = panelId;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", headerId);

    const list = document.createElement("div");
    list.className = compact ? "" : "part-chapter-grid";

    part.chapters.forEach((ch) => {
      if (ch.href) {
        const a = document.createElement("a");
        a.href = rootPrefix + ch.href;
        a.className = compact ? "" : "part-chapter-link";
        a.innerHTML = compact
          ? `Ch. ${ch.n}: ${ch.title}`
          : `<span class="part-chapter-num">${ch.n}</span> ${ch.title}`;
        list.appendChild(a);
      } else {
        const span = document.createElement("span");
        span.className = compact ? "nav-chapter-disabled" : "part-chapter-disabled";
        span.innerHTML = compact
          ? `Ch. ${ch.n}: ${ch.title}`
          : `<span class="part-chapter-num">${ch.n}</span> ${ch.title}`;
        list.appendChild(span);
      }
    });

    panel.appendChild(list);

    header.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("is-open");
      header.setAttribute("aria-expanded", String(isOpen));
    });

    item.appendChild(header);
    item.appendChild(panel);
    container.appendChild(item);
  });
}

// Hamburger nav drawer
function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("nav-close");
  const nav = document.getElementById("site-nav");
  const scrim = document.getElementById("nav-scrim");
  if (!toggle || !nav || !scrim) return;

  function openNav() {
    nav.classList.add("is-open");
    scrim.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    nav.classList.remove("is-open");
    scrim.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });
  close?.addEventListener("click", closeNav);
  scrim.addEventListener("click", closeNav);
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}

// Click-to-zoom lightbox for article images (figure-inline and figure-lead).
// Builds one reusable overlay and wires up any matching image on the page.
function initLightbox() {
  const images = document.querySelectorAll(".figure-inline img, .figure-lead img");
  if (!images.length) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.id = "site-lightbox";
  overlay.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close image">&times;</button>
    <img class="lightbox-img" src="" alt="" />
    <p class="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector(".lightbox-img");
  const captionEl = overlay.querySelector(".lightbox-caption");
  const closeBtn = overlay.querySelector(".lightbox-close");

  function openLightbox(src, alt, caption) {
    imgEl.src = src;
    imgEl.alt = alt || "";
    captionEl.textContent = caption || "";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    imgEl.src = "";
  }

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const figure = img.closest("figure");
      const captionText = figure ? figure.querySelector("figcaption") : null;
      openLightbox(img.currentSrc || img.src, img.alt, captionText ? captionText.textContent.trim() : "");
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeLightbox();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const rootPrefix = typeof window.SITE_ROOT_PREFIX === "string" ? window.SITE_ROOT_PREFIX : "";
  buildTimeline();
  buildPartsAccordion("nav-parts", rootPrefix, true);
  buildPartsAccordion("parts-accordion", rootPrefix, false);
  initNav();
  initLightbox();
});
