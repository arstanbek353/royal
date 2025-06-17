import { gsap } from "gsap";
// язык 

const toggle = document.querySelector('.lang__title');
const menu = document.querySelector('.lang__list');
const dropdown = document.querySelector('.lang');

let isOpen = false;
let menuTween;

toggle.addEventListener('click', () => {
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  menuTween = gsap.to(menu, {
    height: "auto",
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
    onStart: () => {
      menu.style.pointerEvents = "auto";
    }
  });
  isOpen = true;
  document.addEventListener('click', handleOutsideClick);
}

function closeMenu() {
  gsap.to(menu, {
    height: 0,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      menu.style.pointerEvents = "none";
    }
  });
  isOpen = false;
  document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(e) {
  if (!dropdown.contains(e.target)) {
    closeMenu();
  }
}


// mode

const modeBtn = document.querySelector(".header__mode");
const modes = document.querySelectorAll("[data-theme]");

modeBtn.addEventListener("click", () => {
  modeBtn.classList.toggle("is-active");
  modes.forEach((el) => {
    const currentAttr = el.getAttribute("data-theme");
    if (currentAttr === "light") {
      el.setAttribute("data-theme", "dark");
    } else {
      el.setAttribute("data-theme", "light");
    }
  });
});

// burger 

const burger = document.querySelector(".header__burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
});