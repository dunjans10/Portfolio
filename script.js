//Toggle Menu

const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  navUl.classList.toggle("show");
});

//My Services - Swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,

  breakpoints: {
    
    680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});

//CONTACT



//FOOTER

let year = new Date().getFullYear();

let footerDescElement = document.querySelector(".footer-desc");

if (footerDescElement) {
  footerDescElement.textContent = "Copyright @" + year + " | All rights reserved.";
}