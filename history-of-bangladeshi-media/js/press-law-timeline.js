// Reusable press-law timeline widget.
//
// This file is meant to be extended by later chapters. PRESS_LAW_DATA is the
// shared master list of press-law milestones logged across the whole site;
// individual chapters render their own slice of it (or the full list, once
// enough entries exist) by calling renderPressLawTimeline(). The eventual
// goal, referenced in this site's outline, is a full sitewide press-law
// timeline assembled from every entry logged in earlier chapters, running
// from Wellesley's 1799 Act through to the Digital Security Act of 2018.
//
// data item shape:
//   { year: Number, label: String (e.g. "1799"), title: String,
//     jurisdiction: String, summary: String, detail: String }

var PRESS_LAW_DATA = [
  {
    year: 1799,
    label: "1799",
    title: "The Censorship of the Press Act",
    jurisdiction: "Bengal, under Lord Wellesley",
    summary: "Bengal's first purpose-built press law. Required every newspaper to name its printer, editor, and proprietor in each issue, and required all material to pass pre-publication review before printing.",
    detail: "Promulgated by Governor-General Richard Wellesley, driven substantially by wartime anxiety about French intelligence gathering during the Napoleonic Wars. The Act introduced prior restraint, a government censor reviewing content before publication, to Bengal for the first time, and made deportation the penalty for noncompliance. It marked a sharp break from the ad hoc civil litigation, postal bans, and patronage that had governed press control up to that point."
  },
  {
    year: 1807,
    label: "1807",
    title: "Extension to Books, Magazines, and Pamphlets",
    jurisdiction: "Bengal, under Wellesley's successors",
    summary: "Broadened the 1799 Act's scope beyond newspapers to cover the full range of printed material circulating in Bengal.",
    detail: "Extended the original Act's licensing and review requirements to books, magazines, and pamphlets, not just periodical newspapers. The extension arrived seven years into the Serampore Mission Press's translation program, illustrating a recurring pattern in this history: a law justified by one narrow anxiety gradually expanding to cover categories of print its drafters may not have originally intended."
  }
];

function renderPressLawTimeline(containerId, data) {
  var container = document.getElementById(containerId);
  var items = Array.isArray(data) ? data : PRESS_LAW_DATA;
  if (!container || !items.length) return;

  var sorted = items.slice().sort(function (a, b) { return a.year - b.year; });

  container.innerHTML = "";
  sorted.forEach(function (item, i) {
    var row = document.createElement("div");
    row.className = "plaw-item";
    row.innerHTML =
      '<button type="button" class="plaw-toggle" aria-expanded="false">' +
        '<span class="plaw-year">' + item.label + '</span>' +
        '<span class="plaw-heading">' +
          '<span class="plaw-title">' + item.title + '</span>' +
          '<span class="plaw-jurisdiction">' + item.jurisdiction + '</span>' +
        '</span>' +
        '<span class="plaw-caret">+</span>' +
      '</button>' +
      '<div class="plaw-body">' +
        '<p class="plaw-summary">' + item.summary + '</p>' +
        '<p class="plaw-detail">' + item.detail + '</p>' +
      '</div>';
    container.appendChild(row);

    var toggle = row.querySelector(".plaw-toggle");
    var body = row.querySelector(".plaw-body");
    toggle.addEventListener("click", function () {
      var isOpen = row.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.querySelector(".plaw-caret").textContent = isOpen ? "−" : "+";
    });

    if (i === 0) {
      row.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.querySelector(".plaw-caret").textContent = "−";
    }
  });
}
