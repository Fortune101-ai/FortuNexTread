const menuBtn = document.getElementById("nav_menu_btn");
const navLinks = document.getElementById("nav_links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "fa fa-times" : "fa-solid fa-bars")
})

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars" )
})