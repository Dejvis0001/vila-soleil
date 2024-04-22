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
//Rooms
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel for room and gallery carousels
  initializeCarousel(".room1-carousel");

  // Function to initialize Owl Carousel
  function initializeCarousel(selector) {
    var owl = $(selector);

    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Get the next and prev buttons
    var nextButton = owl.parent().find(".owl-next");
    var prevButton = owl.parent().find(".owl-prev");

    // Attach click event handlers
    nextButton.on("click", function () {
      owl.trigger("next.owl.carousel");
    });

    prevButton.on("click", function () {
      owl.trigger("prev.owl.carousel");
    });

    // Handle carousel loop
    owl.on("translated.owl.carousel", function (event) {
      var items = event.item.count; // Total number of items in the carousel
      var currentItem = event.item.index; // Index of the current item
      if (currentItem === items - 1) {
        // If the last item is reached, go back to the first item
        setTimeout(function () {
          owl.trigger("to.owl.carousel", [0, 500]);
        }, 6000); // Delay to match autoplayTimeout
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel for room and gallery carousels
  initializeCarousel(".room2-carousel");

  // Function to initialize Owl Carousel
  function initializeCarousel(selector) {
    var owl = $(selector);

    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Get the next and prev buttons
    var nextButton = owl.parent().find(".owl-next");
    var prevButton = owl.parent().find(".owl-prev");

    // Attach click event handlers
    nextButton.on("click", function () {
      owl.trigger("next.owl.carousel");
    });

    prevButton.on("click", function () {
      owl.trigger("prev.owl.carousel");
    });

    // Handle carousel loop
    owl.on("translated.owl.carousel", function (event) {
      var items = event.item.count; // Total number of items in the carousel
      var currentItem = event.item.index; // Index of the current item
      if (currentItem === items - 1) {
        // If the last item is reached, go back to the first item
        setTimeout(function () {
          owl.trigger("to.owl.carousel", [0, 500]);
        }, 6000); // Delay to match autoplayTimeout
      }
    });
  }
});