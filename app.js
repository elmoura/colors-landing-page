const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu ");

const toggleMobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", toggleMobileMenu);
