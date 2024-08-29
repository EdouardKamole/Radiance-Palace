// JavaScript for Filtering Images
function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");

  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Set the active state for the selected filter button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`[onclick="filterImages('${category}')"]`)
    .classList.add("active");
}

// JavaScript for Lightbox Effect
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.onclick = function () {
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
    document.getElementById("caption").innerText = this.alt;
  };
});

function closeLightbox() {
  lightbox.style.display = "none";
}
