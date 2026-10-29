document.addEventListener("DOMContentLoaded", function () {
console.log("Tutoring marketplace loaded successfully.");

// Smooth scrolling for links to sections on the page
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
link.addEventListener("click", function (event) {
const targetId = this.getAttribute("href");
const target = document.querySelector(targetId);

  if (target) {
    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

});

// Subject card interaction
const subjectCards = document.querySelectorAll(".subject-card");

subjectCards.forEach(function (card) {
card.style.cursor = "pointer";

card.addEventListener("click", function () {
  const subject = card.querySelector("h3");

  if (subject) {
    alert(
      "You selected " +
      subject.textContent +
      ". Tutor listings will be available when we build the search feature."
    );
  }
});

});

// Become a tutor button
const tutorSection = document.querySelector("#become-tutor");

if (tutorSection) {
console.log("Tutor information section is ready.");
}
});
