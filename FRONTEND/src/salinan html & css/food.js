document.addEventListener('DOMContentLoaded', function () {
    function initializeCarousel(carouselId) {
        let carouselElement = document.querySelector(carouselId);
        if (window.matchMedia("(min-width: 768px)").matches) {
            let carousel = new bootstrap.Carousel(carouselElement, {
                interval: false,
                wrap: false,
            });

            let carouselWidth = carouselElement.querySelector(".carousel-inner").scrollWidth;
            let cardWidth = carouselElement.querySelector(".carousel-item").offsetWidth;
            let scrollPosition = 0;

            carouselElement.querySelector(".carousel-control-next").addEventListener("click", function () {
                if (scrollPosition < carouselWidth - cardWidth * 4) {
                    scrollPosition += cardWidth;
                    carouselElement.querySelector(".carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
                }
            });

            carouselElement.querySelector(".carousel-control-prev").addEventListener("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    carouselElement.querySelector(".carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
                }
            });
        } else {
            carouselElement.classList.add("slide");
        }
    }

    initializeCarousel("#carouselMakanan");
    initializeCarousel("#carouselMinuman");
});
