document.addEventListener("DOMContentLoaded", function () {
"use strict";

// Update the copyright year automatically.
const yearElement = document.getElementById("current-year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation menu.
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");

if (menuToggle && navigation) {
menuToggle.addEventListener("click", function () {
const isOpen = navigation.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

}

// Search the subject categories.
const searchForm = document.getElementById("subject-search");
const searchInput = document.getElementById("search-input");
const searchFeedback = document.getElementById("search-feedback");
const subjectCards = Array.from(
document.querySelectorAll(".subject-card")
);
const emptyState = document.getElementById("empty-state");

function filterSubjects(query) {
const normalizedQuery = query.trim().toLowerCase();
let visibleCount = 0;

subjectCards.forEach(function (card) {
  const subjectName = card.dataset.subject || "";
  const cardText = card.textContent || "";

  const matches =
    normalizedQuery === "" ||
    subjectName.toLowerCase().includes(normalizedQuery) ||
    cardText.toLowerCase().includes(normalizedQuery);

  card.hidden = !matches;

  if (matches) {
    visibleCount++;
  }
});

if (emptyState) {
  emptyState.hidden = visibleCount !== 0;
}

return visibleCount;

}

if (searchInput) {
searchInput.addEventListener("input", function () {
filterSubjects(searchInput.value);

  if (searchFeedback) {
    searchFeedback.textContent = "";
  }
});

}

if (searchForm && searchInput) {
searchForm.addEventListener("submit", function (event) {
event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    if (searchFeedback) {
      searchFeedback.textContent =
        "Please enter a subject or skill to search.";
    }

    searchInput.focus();
    return;
  }

  const matchCount = filterSubjects(query);

  if (searchFeedback) {
    searchFeedback.textContent =
      matchCount > 0
        ? matchCount + " matching subject category" +
          (matchCount === 1 ? "" : "ies") + " found."
        : "No matching categories found. Try English, Languages, Sciences, or another subject.";
  }

  const subjectsSection = document.getElementById("subjects");

  if (subjectsSection) {
    subjectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

}

// Clicking a category fills the search field and displays that category.
subjectCards.forEach(function (card) {
card.addEventListener("click", function () {
const subject = card.dataset.subject || "";

  if (searchInput) {
    searchInput.value = subject;
    filterSubjects(subject);
  }

  if (searchFeedback) {
    searchFeedback.textContent =
      "You selected " + subject +
      ". Individual tutor listings will be added when the marketplace backend is ready.";
  }

  const searchSection = document.getElementById("subject-search");

  if (searchSection) {
    searchSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

});

console.log("Tutor Pearl homepage loaded successfully.");
});
