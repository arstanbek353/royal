import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// кнопка с фоном
const buttons = document.querySelectorAll(".fancy-btn");

buttons.forEach((button) => {
  const bg = button.querySelector(".fancy-bg");

  let hoverTween;

  button.addEventListener("mouseenter", () => {
    hoverTween = gsap.to(bg, {
      transform: "scale3d(1,1,1)",
      opacity: 1,
      duration: 0.4,
      ease: "power1.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    if (hoverTween) hoverTween.reverse();
  });
});

// пульсар

const pulserings = document.querySelectorAll(".pulse-ring");

pulserings.forEach((el) => {

  const rings = el.querySelectorAll("span");
  rings.forEach((ring, index) => {
    gsap.to(ring, {
      scale: 1.9,
      opacity: 0,
      duration: 2,
      ease: "none",
      delay: (index) * 0.5,
      repeat: -1
    });
  });
});

// анимация баннера

const halfScreenHeight = window.innerHeight / 2 - 40;

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    invalidateOnRefresh: true
  }
});

// Этап 1: .banner-title двигается и масштабируется до середины
timeline.to(".banner__caption", {
  y: -halfScreenHeight,
  scale: 0.05,
  ease: "none",
  duration: 0.5
});
timeline.to(".banner__caption", {
  opacity: 0,
  ease: "none",
  duration: 0.2
}, 0.45);
timeline.to(".header__logo", {
  opacity: 1,
  ease: "none",
  duration: 0.2
}, 0.45);

const randomText = document.querySelector(".banner__text");
const text = randomText.textContent;
randomText.textContent = "";

// Разбиваем текст на спаны
text.split("").forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  randomText.appendChild(span);
});

const letters = randomText.querySelectorAll("span");

// Добавляем анимацию по буквам с рандомной задержкой
gsap.set(letters, { opacity: 0, y: 10 });

timeline.to(letters, {
  opacity: 1,
  y: 0,
  stagger: {
    each: 0.03,
    from: "random"
  },
  ease: "power2.out",
  duration: 0.5,
}, 0.5);

const header = document.querySelector(".header");
timeline.to(header, {
  y: "-100%",
  duration: 0.2,
});


document.querySelectorAll(".parallax").forEach(line => {
  const speed = parseFloat(line.dataset.speed);

  gsap.fromTo(line,
    { y: `${-100 * speed}px` },
    {
      y: `${100 * speed}px`,
      ease: "none",
      scrollTrigger: {
        trigger: line,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );
});