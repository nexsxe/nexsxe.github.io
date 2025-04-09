const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    arrows: true,
    autoplay: true,
    spaceBetween: 61,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });