const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

console.log("navToggle", navToggle);

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

const navLink = document.querySelector('.nav_links');

console.log('navLink', navLink);

navLink.addEventListener('click', function(){
    links.classList.remove("show_nav");
})