document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Perform form validation
    if (name && email && subject && message) {
      // Simulate form submission (e.g., using AJAX)
      alert(
        "Thank you, " + name + "! Your message has been sent successfully."
      );
      form.reset(); // Reset the form after submission
    } else {
      alert("Please fill in all fields before submitting the form.");
    }
  });
});
