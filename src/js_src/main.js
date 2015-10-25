$(document).ready(function() {

    // fancybox
    // $(".fancybox").fancybox();

    $('.firsttype_slider>.slides').slick({
        dots: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // centerMode: true,
        variableWidth: true,
        autoplay: false
    });

    $('.gallerytype_slider>.slides').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
    });



    $('.doctortype_slider>.slides').slick({
        dots: true,
        infinite: false,
        speed: 1800,
        slidesToShow: 3,
        slidesToScroll: 3,
        // centerMode: true,
        variableWidth: true,
        autoplay: false
    });

});
