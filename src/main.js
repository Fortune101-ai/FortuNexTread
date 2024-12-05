const menuBtn = document.getElementById("nav_menu_btn");
const navLinks = document.getElementById("nav_links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "fa fa-times" : "fa-solid fa-bars")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars")
})

const scrollRevealOptions = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

scrollRevealOptions().reveal(".header_image img", {
    ...scrollRevealOptions, origin: "right"
})

scrollRevealOptions().reveal(".header_content h1",{
    ...scrollRevealOptions,delay:500
})
scrollRevealOptions().reveal(".header_content p",{
    ...scrollRevealOptions,delay:1000
})
scrollRevealOptions().reveal(".header_btns",{
    ...scrollRevealOptions,delay:1500
})

