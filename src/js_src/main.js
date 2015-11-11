$(document).ready(function() {



    $(".fancyimg").fancybox();
    $(".fancyblock").fancybox();
    $(".tabser").easytabs({
        animationSpeed: 'fast',
        // убираем сохранение хэша в адр строке(прыгает в хроме)
        updateHash: false
    });


    // validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator
    // валидация формы записи к врачу
    var v_doc = $("#purchase_todoctor").validate({
        errorClass: "invalid",
        validClass: "success",
        onkeyup: false,
        onfocusout: false,
        // errorLabelContainer: ".fieldset_wrapper",
        // wrapper: "span",

        submitHandler: function() {
            // alert("Submitted, thanks!");
            // form.submit();
            alert("Submitted!");

        }
    });
    // validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator



    // tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase
    // фу для отключения табов
    function disable_easytabs(tabs, indexes) {
        var lis = tabs.children('ul').children();
        var index = 0;
        lis.each(function() {
            var li = $(this);
            var a = li.children('a');
            var disabled = $.inArray(index, indexes) != -1;
            if (disabled) {
                li.addClass('disabled');
            } else {
                li.removeClass('disabled');
            }
            index++;
        });
    }
    //////////////////////////////////
    // фу отключения указанных в ней табов
    function on_disable_b_and_c_clicked() {
        var tabs = $("#tab-container");
        disable_easytabs(tabs, [0, 4]);
        return false;
    }
    // вызов фу отключения указанных табов
    $("#sdfkljhf8888").click(function() {
        on_disable_b_and_c_clicked();
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

            //если вкладка не активная и ошибок в валидаторе - нет то:
            // if (!tab.hasClass('active') && on_disable_b_and_c_clicked()) {

            //если ошибок в валидаторе - нет то:
            if (v_doc.form()) {
                //  открываем вкладки
                // return confirm("Открыть вкладку?");
                console.log("ok");
                return true;
            } else {
                console.log("NOT_ok");
                $(".active").next(function() {
                    // body...
                    $("li").each(function(i, elem) {
                        //  if ($(this).hasClass("stop")) {
                        //      alert("Остановлено на " + i + "-м пункте списка.");
                        //      return false;
                        //  } else {
                        //      alert(i + ': ' + $(elem).text());
                        //  }
                        $(this).css("border", "3px solid red");
                    });
                });
                return false;
            }
            // else if (tab.parent().hasClass('disabled')) {
            //     console.log("NOT_ok")
            //     return false;
            //
            // }
        });
    // console.log(tab)
    // tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase





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


    // waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints


    // подсветка текущего элемента
    var nav_wayp = $(".wayp_links li");
    $('.tracked_block').waypoint({
        handler: function() {
            var hash = this.element.id;
            nav_wayp.removeClass("active");
            $.each(nav_wayp, function() {
                if ($(this).children("a").attr("href").slice(1) == hash) {
                    $(this).addClass("active");
                }
            });
        },
        offset: '0'
    });

    // Плавный скролл по якорям
    $(".wayp_links a").click(function() {
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1500, {
            easing: 'easeOutBack'
        });
        return false;
    });



    // фиксация списка годов при прокруткe
    $('.wayp_links').containedStickyScroll({
        duration: 0,
        queue: true,
        unstick: true,
        // easing:"easeOutBack"
        closeChar: ''
    });



    // waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints


    $(".year_content_container").each(function() {
        // console.log($(this).height());
        var Hh = $(this).height();
        $(this).children(".years_arrow_wr").children(".years_arrow").height(Hh);
        // body...
    });


    // var Hh = $(".img_history_wr").height();
        // $(".years_arrow").height(Hh);



    //
    // var h = document.getElementsByClassName("img_history_wr").offsetHeight;
    // document.getElementsByClassName("years_arrow").style.height = h + "px";




});
