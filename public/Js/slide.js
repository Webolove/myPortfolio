var swiper = new Swiper(".tech_content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    freeMode: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});