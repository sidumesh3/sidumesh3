let currentSlide = 0; // Start with the first image

const slides = document.querySelectorAll('.slide');

// Function to change the image
function changeSlide() {
    // Remove the active class from the current slide
    slides[currentSlide].classList.remove('active');
    
    // Increment the slide index (loop back to 0 when reaching the end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add the active class to the next slide
    slides[currentSlide].classList.add('active');
}

// Initialize the first image as active
slides[currentSlide].classList.add('active');

// Change the slide every time the user clicks on the screen
document.body.addEventListener('click', changeSlide);
