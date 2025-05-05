document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 8000; // 8s transitions

    // Function to show the next slide
    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Update current slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Initialize first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    // Start the slideshow
    if (slides.length > 1) {
        setInterval(nextSlide, slideInterval);
    }
}); 
