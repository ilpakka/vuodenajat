document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 8000; // 8s transitions

    // Function to show the next slide
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');

    setInterval(nextSlide, slideInterval);
}); 