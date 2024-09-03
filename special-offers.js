// special-offers.js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the carousel
  var myCarousel = document.querySelector("#offersCarousel");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Interval between slides in milliseconds
    pause: "hover", // Pause on hover
  });

  // Example of a simple dynamic update: Updating carousel items
  // You can add your logic here if needed, like fetching offers from an API or local storage
  updateCarouselItems();

  // Function to update carousel items dynamically
  function updateCarouselItems() {
    const offers = [
      {
        image: "images/offer1.jpg",
        title: "Luxury Suite Discount",
        text: "Book a luxury suite and get 20% off your stay with complimentary breakfast and spa access.",
        link: "#",
      },
      {
        image: "images/offer2.jpg",
        title: "Weekend Getaway Special",
        text: "Enjoy a romantic weekend getaway with a special package that includes a dinner for two.",
        link: "#",
      },
      {
        image: "images/offer3.jpg",
        title: "Spa and Relaxation Package",
        text: "Relax and rejuvenate with our special spa and relaxation package at 30% off.",
        link: "#",
      },
      // Add more offers as needed
    ];

    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.innerHTML = ""; // Clear existing items

    offers.forEach((offer, index) => {
      const itemClass = index === 0 ? "carousel-item active" : "carousel-item";
      const offerHtml = `
          <div class="${itemClass}">
            <div class="row">
              <div class="col-md-4">
                <div class="offer-card">
                  <img src="${offer.image}" class="card-img-top" alt="${offer.title}">
                  <div class="card-body">
                    <h5 class="card-title">${offer.title}</h5>
                    <p class="card-text">${offer.text}</p>
                    <a href="${offer.link}" class="btn btn-primary">Explore Offer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      carouselInner.innerHTML += offerHtml;
    });
  }

  // Optional: Add event listeners or other interactive functionality here
});
