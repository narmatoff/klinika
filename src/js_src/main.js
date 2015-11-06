$(document).ready(function() {

<<<<<<< HEAD
	// fancybox
	$(".fancybox").fancybox();
	
});
=======


    $(".fancyimg").fancybox();
    $(".tabser").easytabs({
        animationSpeed: 'fast',
        // убираем сохранение хэша в адр строке(прыгает в хроме)
        updateHash: false
    });

    // menu on henhelds
    $(".hamburger").click(function() {
        $(".topmenu").show('fast');
    });

    $(".menu_sloser").click(function() {
        $(".topmenu").hide('fast');
    });

    // избегаем скрытие topmenu в desktop версии после его скрытия в hendhelds
    function windowSize() {
        if ($(window).width() <= '620') {
            $('.topmenu').hide();
        } else {
            $('.topmenu').show();
        }
    }
    $(window).on('load resize', windowSize);



    // слайдер услуг
    $('.firsttype_slider>.slides').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // centerMode: true,
        variableWidth: true,
        autoplay: false,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // слайдер галереи
    $('.gallerytype_slider>.slides').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 775,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true

            }
        }]

    });


    // слайдер врачей
    $('.doctortype_slider>.slides').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // centerMode: true,
        variableWidth: true,
        autoplay: false,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // кастомная нумерация нумерованных списков
    $("article ol li").map(function(i, o) {
        var num = i + 1;
        $(o).prepend("<span class='numlist'>" + num + "</span>");
    });



});
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
