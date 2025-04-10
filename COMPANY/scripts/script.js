// Dark Mode Toggle function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save theme preference in localStorage
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
}

// Apply saved theme preference
window.addEventListener("load", function () {
    const savedTheme = localStorage.getItem("theme");
    document.body.classList.toggle("dark-mode", savedTheme === "dark");

    // Check if dark mode toggle button exists before adding an event listener
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

    // Start slideshow
    showSlides();
});

// Slideshow Functionality
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    if (slides.length === 0) return; // Ensure slides exist

    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual Slide Change
function changeSlide(n) {
    if (slides.length === 0) return; // Ensure slides exist

    slideIndex = (slideIndex + n + slides.length) % slides.length; // Ensure circular navigation

    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}
