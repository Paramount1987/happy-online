$(document).ready(function () {
    const mySwiper = new Swiper ('.js-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            }
        }
    });
});
