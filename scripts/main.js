document.addEventListener('DOMContentLoaded', function () {
    initBackToTop();
    initHeroSlideshow();
    centerFilmographyScroll();
});

function initBackToTop() {
    var backToTopButton = document.querySelector('.back-to-top');

    if (!backToTopButton) {
        return;
    }

    function updateBackToTopVisibility() {
        backToTopButton.classList.toggle('is-visible', window.scrollY > 200);
    }

    backToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility);
}

function initHeroSlideshow() {
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dot');
    var currentSlide = 0;

    if (slides.length === 0) {
        return;
    }

    function showSlide(index) {
        slides[currentSlide].classList.remove('is-active');

        if (dots[currentSlide]) {
            dots[currentSlide].classList.remove('is-active');
        }

        currentSlide = index;
        slides[currentSlide].classList.add('is-active');

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('is-active');
        }
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            showSlide(index);
        });
    });

    window.setInterval(function () {
        showSlide((currentSlide + 1) % slides.length);
    }, 5000);
}

function centerFilmographyScroll() {
    var filmographyScroll = document.querySelector('.filmography-scroll');

    if (!filmographyScroll) {
        return;
    }

    filmographyScroll.scrollLeft = (filmographyScroll.scrollWidth - filmographyScroll.clientWidth) / 2;
}
