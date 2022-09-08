const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: {
    nextEl: ".next-arrow ",
    prevEl: ".prev-arrow ",
  },
  freeMode: true,
  loop: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});
const swipers = new Swiper('.fSwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  navigation: {
    nextEl: ".next-arr ",
    prevEl: ".prev-arr ",
  }, autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
const sw = new Swiper(".mSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoHeight: true,
  // autoplay: {
  //   delay: 5000,
  // },

});