$(document).ready(function() {



    $(".fancyimg").fancybox();
    $(".fancyblock").fancybox();
    $(".tabser").easytabs({
        animationSpeed: 'fast',
        // убираем сохранение хэша в адр строке(прыгает в хроме)
        updateHash: false
    });






    // валидация формы записи к врачу
    var v_doc = $("#purchase_todoctor").validate({
        errorClass: "warning",
        onkeyup: false,
        onfocusout: false,
        submitHandler: function() {
            // alert("Submitted, thanks!");
            form.submit();
        }
    });







    // вкладки формы записи к врачу
    // ЗЫ: Форма сохраняет хэш урлов
    $(".fancyform_tabs")
        .easytabs({
            animationSpeed: 'fast'
                // убираем сохранение хэша в адр строке(прыгает в хроме)
                // updateHash: false
        })
        // проверка валидности форм во вкладках
        .bind('easytabs:before', function(e, tab) {
            // if (!tab.hasClass('active') && !tab.hasClass('collapsed')) {

            if (!tab.hasClass('active') && v_doc.form()) { //если вкладка не активная

                //  проверяем валидацию формы в первой вкладки
                // return confirm("Открыть вкладку?");
                console.log("ok")
                return true;

            }else {
                console.log("NOT_ok")
                return false;

            }
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
