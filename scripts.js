const slidesImages = [
    'images/project1.jpg',
    'images/project2.jpg',
    'images/project3.jpg',
];

let currentSlideIndex = 0;
let slideshowTimer = null;

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const projectItem = document.querySelector('.project-item img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const closeButton = document.querySelector('.close');
const rightLightboxButton = lightbox.querySelector('span.arrow.right');
const leftLightboxButton = lightbox.querySelector('span.arrow.left');

// Zavření lightboxu
closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
    restartSlideshow();
});

// Navigace v lightboxu
leftLightboxButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slidesImages.length) % slidesImages.length;
    lightboxImg.src = slidesImages[currentSlideIndex];
    restartSlideshow();
});

rightLightboxButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slidesImages.length;
    lightboxImg.src = slidesImages[currentSlideIndex];
    restartSlideshow();
});

// Navigace na hlavní stránce
prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slidesImages.length) % slidesImages.length;
    updateSlides(currentSlideIndex);
    restartSlideshow();
});

nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slidesImages.length;
    updateSlides(currentSlideIndex);
    restartSlideshow();
});

// Kliknutí na projekt
projectItem.addEventListener('click', () => {
    currentSlideIndex = 0; // Nebo nastavte na odpovídající index
    lightboxImg.src = slidesImages[currentSlideIndex];
    lightbox.classList.add('active');
    stopSlideshow();
});

// Funkce pro aktualizaci snímků
function updateSlides(slideIndex) {
    projectItem.src = slidesImages[slideIndex];
}

// Spuštění slideshow
function startSlideshow() {
    slideshowTimer = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slidesImages.length;
        updateSlides(currentSlideIndex);
    }, 3000);
}

// Restartování slideshow
function restartSlideshow() {
    clearInterval(slideshowTimer);
    startSlideshow();
}

// Zastavení slideshow
function stopSlideshow() {
    clearInterval(slideshowTimer);
}

// Zavření lightboxu klávesou ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        restartSlideshow();
    }
});

// Inicializace slideshow
startSlideshow();

// Intersection Observer pro animace
const items = document.querySelectorAll('.experience-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

items.forEach((item) => observer.observe(item));



















