const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

const navLinks = document.querySelectorAll('.main_nav > li');

navLinks.addEventListener('click', function(){
    links.classList.remove("show_nav");
})