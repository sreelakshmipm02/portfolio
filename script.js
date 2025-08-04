document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const errorDiv = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    let messages = [];

    // Validate name
    if (name.value.trim() === "") {
      messages.push("Name is required.");
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      messages.push("Enter a valid email address.");
    }

    // Validate subject
    if (subject.value.trim() === "") {
      messages.push("Subject is required.");
    }

    // Validate message length
    if (message.value.trim().length < 10) {
      messages.push("Message should be at least 10 characters long.");
    }

    // Show errors or submit
    if (messages.length > 0) {
      e.preventDefault();
      errorDiv.innerHTML = `<div class="alert alert-danger">${messages.join("<br>")}</div>`;
    } else {
      errorDiv.innerHTML = ""; // Clear previous errors
    }
  });
});
