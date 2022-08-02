window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    const social = document.getElementsByClassName("social")[0];
    header.classList.toggle("sticky",window.scrollY > 0);
   
})