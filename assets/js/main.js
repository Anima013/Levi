const promoBanner = document.querySelector('.sign-up-promo');
const promoClose = document.querySelector('.sign-up-promo .fa-xmark');

if (promoClose) {
    promoClose.addEventListener('click', () => {
        promoBanner.style.display = 'none';
    });
}

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}