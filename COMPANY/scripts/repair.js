document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle via JavaScript

    // Get the user inputs
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const deviceType = document.getElementById('device-type').value;
    const service = document.getElementById('service').value;

    // WhatsApp number (set as a constant)
    const whatsappNumber = '0978871494';

    // Construct message to send via WhatsApp
    const message = `Booking Details:
    Name: ${name}
    Email: ${email}
    Device: ${deviceType}
    Service: ${service}
    `;

    // Create the WhatsApp URL with the message
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Show the WhatsApp link on the page
    document.getElementById('whatsapp-link').style.display = 'block';
    document.getElementById('whatsapp-button').href = whatsappLink;
});


// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Display WhatsApp link after booking
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("whatsapp-link").style.display = "block"; // Show the WhatsApp link
});