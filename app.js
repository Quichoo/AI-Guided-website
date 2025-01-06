document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect for the headline
    const headline = document.querySelector('.headline');
    headline.style.opacity = '1';
    headline.style.transform = 'translateX(0)';

    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();

     // Burger menu functionality
     const burger = document.querySelector('.burger');
     const navLinks = document.querySelector('.nav-links');
 
     burger.addEventListener('click', () => {
         navLinks.classList.toggle('nav-active');
     });
});