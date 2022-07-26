const navSlide = () => {
  const doc = document;
  const menuOpen = doc.querySelector(".nav__menu-bar");
  const menuClose = doc.querySelector(".close");
  const overlay = doc.querySelector(".overlay");

  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
};

navSlide();

// slider
const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");
const dotItems = document.querySelectorAll(".slider-dot-item");

const sliderItemWidth = sliderItems[0].offsetWidth;
const slidersLength = sliderItems.length;

let positionX = 0;
let index = 0;
nextBtn.addEventListener("click", () => {
  handleChangeSlide(1);
});

prevBtn.addEventListener("click", () => {
  handleChangeSlide(-1);
});

[...dotItems].forEach((item) => {
  item.addEventListener("click", (el) => {
    [...dotItems].forEach((e) => e.classList.remove("active"));
    el.target.classList.add("active");
    const slideIndex = parseInt(el.target.dataset.index);
    index = slideIndex;
    positionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translate(${positionX}px)`;
  });
});

function handleChangeSlide(direction) {
  if (direction === 1) {
    if (index >= slidersLength - 1) {
      index = slidersLength - 1;
      return;
    }
    positionX = positionX - sliderItemWidth;
    // console.log("handleChangeSlide ~ positionX", positionX);
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index++;
  } else if (direction === -1) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX = positionX + sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index--;
  }
  [...dotItems].forEach((e) => e.classList.remove("active"));
  dotItems[index].classList.add("active");
}

// category mobile
$(".category__list-mobile-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoPlay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".category__list-mobile-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoPlay: true,
  autoplayTimeout: 2000,
  smartSpeed: 400,
  autoplayhoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// job list
$(".job__list-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoPlay: true,
  autoplayTimeout: 2000,
  smartSpeed: 400,
  autoplayhoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".job__list-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoPlay: true,
  autoplayTimeout: 2000,
  smartSpeed: 400,
  autoplayhoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});
