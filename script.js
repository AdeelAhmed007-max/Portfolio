// Initialize EmailJS with your user ID (if needed)

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Validate form inputs
    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_lgozalj", "__ejs-test-mail-service__", {
        from_name: name,      // Matches {{from_name}} in your EmailJS template
        from_email: email,    // Matches {{from_email}} in your EmailJS template
        message: message,     // Matches {{message}} in your EmailJS template
    }).then(() => {
        alert("Message sent successfully!");
    }).catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
    });
});
