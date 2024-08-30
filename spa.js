document.addEventListener("DOMContentLoaded", () => {
  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial-item");
  let currentIndex = 0;

  setInterval(() => {
    testimonials[currentIndex].classList.toggle("active");
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.toggle("active");
  }, 3000);

  // Gallery Lightbox
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      showLightbox(imgSrc);
    });
  });

  function showLightbox(imgSrc) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgSrc}" alt="Spa Image">
                <span class="close-lightbox">&times;</span>
            </div>
        `;
    document.body.appendChild(lightbox);

    lightbox.querySelector(".close-lightbox").addEventListener("click", () => {
      lightbox.remove();
    });
  }
});
