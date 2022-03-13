const navSlide = () => {
  const burger = document.querySelector(".nav__menu-bar");
  const navMenu = document.querySelector(".nav__menu");
  burger.addEventListener("click", () => {
    //   toggle nav
    navMenu.classList.toggle("nav--active");
  });
  //
};

navSlide();
