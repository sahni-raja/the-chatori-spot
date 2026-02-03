const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;

// Function to update active slide
function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    // Update the position of the slides container
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Event Listeners for navigation
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
});

// Initialize the first slide
updateSlide(currentIndex);