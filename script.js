document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorBox = document.getElementById("form-error");

    if (!name || !email || !message) {
        errorBox.textContent = "Please fill out all fields correctly.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorBox.textContent = "Please enter a valid email address.";
        return;
    }

    errorBox.textContent = "";
    alert("Thank you for your message, we'll get back to you soon!");
    this.reset();
});