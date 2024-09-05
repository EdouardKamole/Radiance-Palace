document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to sections on the page
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Hero section button click event
  document
    .querySelector(".hero-section .btn")
    .addEventListener("click", function () {
      alert("Explore our offerings!");
    });
});
