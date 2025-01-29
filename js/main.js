// Responsive Navigation Control
let icon = document.getElementsByClassName("icon")[0];
icon.addEventListener('click', responsive_control);

function responsive_control() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Initialize slideshow variables
let slideIndex = 0; // Change from 1 to 0 so it starts correctly
showSlides(); // Call auto-play function

// Next/Previous slide controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot navigation
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Auto-play slideshow function
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to first slide

    // Display current slide
    slides[slideIndex - 1].style.display = "block";

    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add active class to current dot
    dots[slideIndex - 1].className += " active";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
