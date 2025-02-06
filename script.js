// Array of image slide elements
const slides = document.querySelectorAll('.image-slide');
let currentIndex = 0;

// Function to show the next image
function showNextSlide() {
    // Remove active class from the current slide
    slides[currentIndex].classList.remove('active');

    // Move to the next image in the array
    currentIndex = (currentIndex + 1) % slides.length;

    // Add active class to the next image
    slides[currentIndex].classList.add('active');
}

// Initially show the first image
slides[currentIndex].classList.add('active');

// Set interval to switch slides every 3 seconds
setInterval(showNextSlide, 3000);
