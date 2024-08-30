// Smooth Scroll
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Reveal Animation on Scroll
$(window).scroll(function () {
  $(".team-card").each(function () {
    var position = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scrollTop + windowHeight - 100 > position) {
      $(this).addClass("reveal");
    }
  });
});
