$(document).ready(function(){
    $('.clients__carousel').slick({
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png"></button>',
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
});

$(document).ready(function(){
  $('.projects__carousel').slick({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev slick-prev-2"><img src="./icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next slick-next-2"><img src="./icons/right.png"></button>',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
});