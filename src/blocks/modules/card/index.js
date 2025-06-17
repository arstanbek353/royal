import Swiper from "swiper";
import { Pagination, EffectFade } from "swiper/modules";
Swiper.use([EffectFade]);
console.log("started");
function card() {
    const sectionNodes = document.querySelectorAll(".card");
    sectionNodes.forEach(element => {
        const sliderNode = element.querySelector(".card__slider");
        const sliderPag = element.querySelector(".swiper-pagination");
        new Swiper(sliderNode, {
            slidesPerView: 1,
            loop: false,
            loopedSlides: 4,
            modules: [Pagination],
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: sliderPag,
                type: "bullets",
            }
        });
    });
}

card();