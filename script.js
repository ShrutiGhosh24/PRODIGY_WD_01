document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    // You can add code here to handle the newsletter subscription (e.g., send data to a server)
});

// Add JavaScript functionality for the carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
});

function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}
