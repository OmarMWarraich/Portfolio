const navToggle = document.querySelector('.navbar_toggle');
const links = document.querySelector('.main_nav');
const navLink1 = document.querySelector('.nav_link1');
const navLink2 = document.querySelector('.nav_link2');
const navLink3 = document.querySelector('.nav_link3');
const navLink4 = document.querySelector('.nav_link4');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
let i = 0;
let TopScroll;
let LeftScroll;
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

const disable = () => {
  // To get the scroll position of current webpage
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  // if scroll happens, set it to the previous value
  window.onscroll = () => {
    window.scrollTo(LeftScroll, TopScroll);
  };
};

const enable = () => {
  window.onscroll = () => {};
};

navToggle.addEventListener('click', () => {
  links.classList.toggle('show_nav');
  bar1.classList.toggle('change1');
  bar2.classList.toggle('change2');
  bar3.classList.toggle('change3');
  i += 1;
  i % 2 === 0 ? enable() : disable();
});

navLink1.addEventListener('click', () => {
  links.classList.remove('show_nav');
  bar1.classList.remove('change1');
  bar2.classList.remove('change2');
  bar3.classList.remove('change3');
  enable();
});

navLink2.addEventListener('click', () => {
  links.classList.remove('show_nav');
  bar1.classList.remove('change1');
  bar2.classList.remove('change2');
  bar3.classList.remove('change3');
  enable();
});

navLink3.addEventListener('click', () => {
  links.classList.remove('show_nav');
  bar1.classList.remove('change1');
  bar2.classList.remove('change2');
  bar3.classList.remove('change3');
  enable();
});

navLink4.addEventListener('click', () => {
  links.classList.remove('show_nav');
  bar1.classList.remove('change1');
  bar2.classList.remove('change2');
  bar3.classList.remove('change3');
  enable();
});

// When the user clicks on the button, open the modal
btn.onclick = () => {
  modal.style.display = "block";
  disable();
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
  enable();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    enable();
  }
} 