// Reusable comparative mini-timeline widget for individual chapter
// pages. Each chapter page defines its own small dataset (see the
// inline script at the bottom of the chapter's HTML) and calls
// renderChapterTimeline() once the DOM is ready.
//
// data item shape: { year: Number, track: "bengal" | "global", title: String, text: String }

function renderChapterTimeline(gridId, controlsId, data) {
  const grid = document.getElementById(gridId);
  const controls = document.getElementById(controlsId);
  if (!grid || !Array.isArray(data)) return;

  let activeTrack = "all";

  function render() {
    grid.innerHTML = "";
    const sorted = [...data].sort((a, b) => a.year - b.year);
    sorted.forEach((item) => {
      if (activeTrack !== "all" && item.track !== activeTrack) return;
      const card = document.createElement("div");
      card.className = `ct-card track-${item.track}`;
      card.innerHTML = `
        <span class="ct-track-label">${item.track === "bengal" ? "In Bengal" : "Elsewhere in the World"}</span>
        <div class="ct-year">${item.year < 0 ? Math.abs(item.year) + " BCE" : item.year}</div>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      `;
      grid.appendChild(card);
    });
  }

  render();

  if (controls) {
    controls.querySelectorAll("button[data-track]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeTrack = btn.dataset.track;
        controls.querySelectorAll("button[data-track]").forEach((b) =>
          b.setAttribute("aria-pressed", String(b === btn))
        );
        render();
      });
    });
  }
}
