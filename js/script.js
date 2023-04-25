// Sick caroussel
$(document).ready(function(){
    $('.image-logo').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
      
    });

    $('.carousel-center').slick({
      centerMode: true,
      centerPadding: '50px',
      slidesToShow: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
          
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '1px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
          
        }
      ]
    });
  });


// Materialaz

$(document).ready(function(){
  $('.collapsible').collapsible();
});