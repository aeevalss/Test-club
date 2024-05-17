const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

const swiper2 = new Swiper('.swiper2', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   // slidesPerView: 3,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },
   autoHeight: true,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 4000,
   },

   breakpoints: {
      // when window width is >= 320px
      480: {
         slidesPerView: 1,
         spaceBetween: 0
      },
      760: {
         slidesPerView: 2,
         spaceBetween: 0
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: -50
      }
   }
});