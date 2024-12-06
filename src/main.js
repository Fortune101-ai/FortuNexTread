
const menuBtn = document.getElementById("nav_menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

const toggleMenu = () => {
    if (!navLinks || !menuBtnIcon) return;

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa fa-times" : "fa-solid fa-bars");
};

const closeMenu = () => {
    if (!navLinks || !menuBtnIcon) return;

    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
};


const initMenuEvents = () => {
    if (menuBtn) {
        menuBtn.addEventListener("click", toggleMenu);
    }
    if (navLinks) {
        navLinks.addEventListener("click", closeMenu);
    }
};

const scrollRevealOptions = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    reset: false,
};

const revealElements = () => {
    ScrollReveal().reveal(".header_image img", {
        ...scrollRevealOptions, origin: "right"
    });

    ScrollReveal().reveal(".header_content h1", {
        ...scrollRevealOptions, delay: 500
    });

    ScrollReveal().reveal(".header_content p", {
        ...scrollRevealOptions, delay: 1000
    });

    ScrollReveal().reveal(".header_btns", {
        ...scrollRevealOptions, delay: 1500
    });

    ScrollReveal().reveal(".arrival_card", {
        ...scrollRevealOptions, interval: 500
    });

    ScrollReveal().reveal(".sale_image img", {
        ...scrollRevealOptions, origin: "left"
    });

    ScrollReveal().reveal(".sale_content h2", {
        ...scrollRevealOptions, delay: 500
    });

    ScrollReveal().reveal(".sale_content p", {
        ...scrollRevealOptions, delay: 1000
    });

    ScrollReveal().reveal(".sale_content h4", {
        ...scrollRevealOptions, delay: 1000
    });

    ScrollReveal().reveal(".sale_btn", {
        ...scrollRevealOptions, delay: 1500
    });

    ScrollReveal().reveal(".favourite_card", {
        ...scrollRevealOptions, interval: 500
    });
};

const initApp = () => {
    initMenuEvents();
    revealElements();
};

document.addEventListener("DOMContentLoaded", initApp);

