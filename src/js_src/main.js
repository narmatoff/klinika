$(document).ready(function() {



    $(".fancyimg").fancybox();
    $(".fancyblock").fancybox();
    $(".tabser").easytabs({
        animationSpeed: 'fast',
        // убираем сохранение хэша в адр строке(прыгает в хроме)
        updateHash: false
    });



    // tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase

    $(function() {
        var tabs = $('.fancyform_tabs');
        tabs.easytabs({
                animationSpeed: 'fast',
                // animate: false,
                tabActiveClass: "selected-tab",
                panelActiveClass: "displayed",
                    // updateHash: "true"
                    // убираем сохранение хэша в адр строке(прыгает в хроме)
                    updateHash: false
            })
            .bind('easytabs:before', function(e, tab) {
                // if (!tab.hasClass('active') && !tab.hasClass('collapsed')) {

                //если вкладка не активная и ошибок в валидаторе - нет то:
                // if (!tab.hasClass('active') && on_disable_b_and_c_clicked()) {

                //если ошибок в валидаторе - нет то:
                if (v_doc.form()) {
                    //  открываем вкладки
                    // return confirm("Открыть вкладку?");
                    console.log("ok");


                    if ($("#fancyform_tab1 fieldset").children().hasClass('valid')) {
                        console.log("keyushki");
                        disable_custom_tabs([2,3,4,5]);
                    }
                    if ($("#fancyform_tab2 fieldset").children().hasClass('valid')) {
                        console.log("keyushki");
                        disable_custom_tabs([3,4,5]);
                    }
                    if ($("#fancyform_tab3 fieldset").children().hasClass('valid')) {
                        console.log("keyushki");
                        disable_custom_tabs([4,5]);
                    }
                    if ($("#fancyform_tab4 fieldset").children().hasClass('valid')) {
                        console.log("keyushki");
                        disable_custom_tabs([]);
                    }

                    return true;
                } else {
                    console.log("NOT_ok");
                    // $(".selected-tab").next(function() {
                    //     $("li").each(function(i, elem) {
                    //         $(this).css("border", "3px solid red");
                    //     });
                    // });

                    return false;
                }
                // else if (tab.parent().hasClass('disabled')) {
                //     console.log("NOT_ok")
                //     return false;
                //
                // }
            });
        tabs.bind("easytabs:before", function(e, clicked) {
            if (clicked.parent().hasClass('disabled')) {
                return false;
            }
        });
    });
    //////////////////////////////////

    // фу отключения указанных в ней табов
    function disable_custom_tabs(numsTabs) {
        var tabs = $("#tab-container");
        disable_easytabs(tabs, numsTabs);

        return false;
    }

    function enable_some_tabs() {
        var tabs = $('#tab-container');
        disable_easytabs(tabs, []);
    }

    function disable_easytabs(tabs, indexes) {
        var lis = tabs.children('ul').children();
        var index = 0;
        lis.each(function() {
            var li = $(this);
            var a = li.children('a');
            var disabled = $.inArray(index, indexes) != -1;
            if (disabled) {
                li.addClass('disabled');
                li.on("click", returnFalse);
            } else {
                li.removeClass('disabled');
                li.off('click', returnFalse);
            }
            index++;
        });
    }

    function returnFalse(e) {
        return false;
    }


    // вызов фу отключения/включения указанных табов
    $("#disableCustomsTabs").click(function() {
        disable_custom_tabs([1, 2]);
        console.log(tabChecker);
    });

    $("#enableCustomsTabs").click(function() {
        enable_some_tabs();
    });



    // console.log(tab)
    // tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase

// вперед назад по форме записи на прием
// вперед назад по форме записи на прием
// вперед назад по форме записи на прием
// вперед назад по форме записи на прием

$("#fancyform_tab1 .next-button").click(function(event) {
            $('a[href="#fancyform_tab2"]').trigger('click');
});

$("#fancyform_tab2 .next-button").click(function(event) {
            $('a[href="#fancyform_tab3"]').trigger('click');
});
$("#fancyform_tab2 .prev-button").click(function(event) {
            $('a[href="#fancyform_tab1"]').trigger('click');
});
$("#fancyform_tab3 .next-button").click(function(event) {
            $('a[href="#fancyform_tab4"]').trigger('click');
});
$("#fancyform_tab3 .prev-button").click(function(event) {
            $('a[href="#fancyform_tab2"]').trigger('click');
});
$("#fancyform_tab4 .next-button").click(function(event) {
            $('a[href="#fancyform_tab5"]').trigger('click');
});
$("#fancyform_tab4 .prev-button").click(function(event) {
            $('a[href="#fancyform_tab3"]').trigger('click');
});
$("#fancyform_tab5 .prev-button").click(function(event) {
            $('a[href="#fancyform_tab4"]').trigger('click');
});


// вперед назад по форме записи на прием
// вперед назад по форме записи на прием
// вперед назад по форме записи на прием
// вперед назад по форме записи на прием
// вперед назад по форме записи на прием


    // validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator

    // валидация формы записи к врачу
    var tabChecker;
    var v_doc = $("#purchase_todoctor").validate({
        errorClass: "warning",
        // onkeyup: true,
        // onfocusout: false,
        // errorLabelContainer: "fieldset",
        // wrapper: "span",
        invalidHandler: function(event, validator) {
            // 'this' refers to the form
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1 ? 'У вас 1 Ошибка.' : 'У вас ' + errors + ' ошибок.';
                console.log(message);
                //   $("div.error span").html(message);
                //   $("div.error").show();
            } else {
                //   $("div.error").hide();
                console.log("Все валидно!");

            }
        },
        submitHandler: function() {
            // alert("Submitted, thanks!");
            // form.submit();
            alert("Submitted!");

        }
    });
    // console.log(v_doc);
    // validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator// validator



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


    // фикс для высоты вертикальной стрелы в "истории"
    $(".year_content_container").each(function() {
        // console.log($(this).height());
        var Hh = $(this).height();
        $(this).children(".years_arrow_wr").children(".years_arrow").height(Hh);
    });



});
