//Moving Animation
const elements = document.querySelectorAll(".fadeinleft");
const elements1 = document.querySelectorAll(".fade-in");
const elements2 = document.querySelectorAll(".fadeinright");
const elements3 = document.querySelectorAll(".fadeindown");
const elements4 = document.querySelectorAll(".fadeinup");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-left");
    }
  });
};
const callbacks1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
const callbacks2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-right");
    }
  });
};
const callbacks3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-down");
    }
  });
};
const callbacks4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-up");
    }
  });
};
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
let observer4 = new IntersectionObserver(callbacks4, options);
elements.forEach((elements) => {
  observer.observe(elements);
});
elements1.forEach((elements1) => {
  observer1.observe(elements1);
});
elements2.forEach((elements2) => {
  observer2.observe(elements2);
});
elements3.forEach((elements3) => {
  observer3.observe(elements3);
});
elements4.forEach((elements4) => {
  observer4.observe(elements4);
});
//Index-Home
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000, // Set autoplay delay to 6 seconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Get the next and prev buttons
  var nextButton = document.querySelector(".swiper-button-next");
  var prevButton = document.querySelector(".swiper-button-prev");

  // Attach click event handlers
  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });

  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  initializeSwiperCarousel(".room1-carousel");

  // Function to initialize Swiper Carousel
  function initializeSwiperCarousel(selector) {
      var swiper = new Swiper(selector, {
          loop: true,
          autoplay: {
              delay: 6000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  initializeSwiperCarousel(".room2-carousel");

  // Function to initialize Swiper Carousel
  function initializeSwiperCarousel(selector) {
      var swiper = new Swiper(selector, {
          loop: true,
          autoplay: {
              delay: 6000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      });
  }
});