$(document).ready(function () {
  $(".slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
   autoplay: true,
    loop: true,
    Infinity: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: {
      default: false,
    },
  });


  $(function () {
    $.scrollUp({
      scrollText: "Top",
      animation: "fade",
    });
  });



  $('#nav').slicknav({
  })
});
