const mobileMenu = document.getElementById("mobile-menu");
const navbarLogo = document.getElementById("navbar__logo");
const navbarMenu = document.querySelector(".navbar__menu");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("active");
};

mobileMenu.addEventListener("click", toggleMobileMenu);

const highlightMenu = () => {
  const highlight = document.querySelector(".highlight");
  const homeMenu = document.getElementById("home-page");
  const aboutMenu = document.getElementById("about-page");
  const servicesMenu = document.getElementById("services-page");

  let scrollPosition = window.scrollY;
  const isMobileView = window.innerWidth < 960;

  if (!isMobileView && scrollPosition < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if (!isMobileView && scrollPosition < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  }

  if (!isMobileView && scrollPosition < 2345) {
    aboutMenu.classList.remove("highlight");
    servicesMenu.classList.add("highlight");
    return;
  }

  if ((highlight && isMobileView && scrollPosition < 600) || highlight) {
    highlight.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

const hideMobileMenu = () => {
  const activeMobileMenu = document.querySelector(".is-active");

  if (window.innerWidth <= 768 && activeMobileMenu) {
    mobileMenu.classList.toggle("is-active");
    navbarMenu.classList.remove("active");
  }
};

navbarMenu.addEventListener("click", hideMobileMenu);
navbarLogo.addEventListener("click", hideMobileMenu);
