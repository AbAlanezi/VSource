const nav = document.querySelector("nav");
const btnToggleNav = document.querySelector(".hamburger-menu");

btnToggleNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnToggleNav.classList.toggle("active");
});