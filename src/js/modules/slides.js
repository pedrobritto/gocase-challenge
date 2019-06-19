import { Swiper, Navigation, Pagination } from "swiper/dist/js/swiper.esm.js";

Swiper.use([Navigation, Pagination]);

export default () => {
    // Instâncias do Swiper aqui...

    new Swiper(".swiper-related-products", {
        breakpointsInverse: true,
        slidesPerView: 2,
        navigation: {
            nextEl: ".swiper-nav-next",
            prevEl: ".swiper-nav-prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 4,
            },
            800: {
                slidesPerView: 5,
            },
            900: {
                slidesPerView: 6,
            },
        },
    });
};
