//Toggle Menu

const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  navUl.classList.toggle("show");
});


const navItems = document.querySelectorAll("nav ul li a");

navItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    
    event.preventDefault();

    setTimeout(() => {
      navUl.classList.remove("show");
    }, 200);

    const targetId = item.getAttribute("href").substring(1); 
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});


//My Services - Swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,

  breakpoints: {
    
    680: {
      slidesPerView: 2,
      slidesPerGroup: 2,
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

//FOOTER

let year = new Date().getFullYear();

let footerDescElement = document.querySelector(".footer-desc");

if (footerDescElement) {
  footerDescElement.textContent = "Copyright @" + year + " | All rights reserved.";
}