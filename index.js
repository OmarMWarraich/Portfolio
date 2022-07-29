const links = document.querySelector('.main_nav');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
let i = 0;
let TopScroll;
let LeftScroll;
const modal = document.getElementById('myModal');

/* eslint-disable no-unused-vars */
const disable = () => {
  // To get the scroll position of current webpage
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  // if scroll happens, set it to the previous value
  window.onscroll = () => {
    window.scrollTo(LeftScroll, TopScroll);
  };
};

/* eslint-disable no-unused-vars */
const enable = () => {
  window.onscroll = () => {};
};

const popObjects = {
  pop: {
    title: document.querySelector('.hero1 h1').innerText,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: document.querySelector('.img img').src,
    tech: document.querySelector('#ul ul li').innerHTML,
    live: 'https://OmarMwarraich.github.io/Portfolio',
    source: 'https://github.com/OmarMWarraich/Portfolio',
  },
};

/* eslint-disable no-unused-vars */
const fillpop = () => {
  modal.style.display = 'block';
  disable();
  Object.entries(popObjects).forEach(([key, value]) => {
    document.querySelector('#hero1 h1').innerText = value.title;
    document.querySelector('#p').innerHTML = value.description;
    document.querySelector('#img img').src = value.image;
    document.querySelector('#img img').style.width = '100%';
    document.querySelector('#img img').style.height = '100%';
  });
};

/* eslint-disable no-unused-vars */
const live = () => {
  /* eslint-disable no-unused-vars */
  window.location.href = popObjects.pop.live;
};

/* eslint-disable no-unused-vars */
const project = () => {
  /* eslint-disable no-unused-vars */
  window.location.href = popObjects.pop.source;
};

/* eslint-disable no-unused-vars */
const toggle = () => {
  links.classList.toggle('show_nav');
  bar1.classList.toggle('change1');
  bar2.classList.toggle('change2');
  bar3.classList.toggle('change3');
  i += 1;
  /* eslint-disable no-unused-expressions */
  (i % 2 === 0) ? enable() : disable();
};

/* eslint-disable no-unused-vars */
const navlink = () => {
  links.classList.remove('show_nav');
  bar1.classList.remove('change1');
  bar2.classList.remove('change2');
  bar3.classList.remove('change3');
  enable();
};

/* eslint-disable no-unused-vars */
// When the user clicks on <span> (x), close the modal
const spanbtn = () => {
  modal.style.display = 'none';
  enable();
};

/* eslint-disable no-unused-vars */
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    enable();
  }
};
