//Toggle Menu

const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  navUl.classList.toggle("show");
});

