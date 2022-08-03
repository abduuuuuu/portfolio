// script to handle the sticky header
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
    nav_bar.classList.remove("nav-active");
    menu.classList.remove("bx-x");
})

const menu = document.querySelector(".menu i");
const nav_bar = document.getElementsByClassName("nav-bar")[0];
menu.addEventListener("click",function(){
    nav_bar.classList.toggle("nav-active");
    menu.classList.toggle("bx-x");
    menu.classList.toggle("menu-anime");
})

