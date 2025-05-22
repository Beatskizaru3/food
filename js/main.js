$(".single-item").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});



let isSlickInit = false;

function initChefsSlider() {
  const $slider = $('.chefs__slider');

  if (window.innerWidth > 1100) {
    if (!isSlickInit) {
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // другие нужные тебе опции
      });
      isSlickInit = true;
    }
  } else {
    if (isSlickInit) {
      $slider.slick('unslick');
      isSlickInit = false;
    }
  }
}

$(document).ready(function () {
  initChefsSlider();
  $(window).on('resize', function () {
    initChefsSlider();
  });
});
