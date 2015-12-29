$(document).ready(function() {



    $(".fancyimg").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade'
    });
    $(".fancyblock").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade'
    });

    $(".fancyblock").click(function(event) {
        $('.ui-datepicker-today').trigger('click');
        /* Act on the event */
    });
    $(".tabser").easytabs({
        animationSpeed: 'fast',
        // animate:false ,
        // убираем сохранение хэша в адр строке(прыгает в хроме)
        updateHash: false
    });



    // tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase// tabs purchase
    disable_custom_tabs([4]);

    $(function() {
        var tabs = $('.fancyform_tabs');
        tabs.easytabs({
                animationSpeed: 'fast',

                animate: false,
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
                    // if (true) {
                    //  открываем вкладки
                    // return confirm("Открыть вкладку?");

                    // console.log("TabClick-done");

                    // if ($("#fancyform_tab1 fieldset").children().hasClass('valid')) {
                    //     console.log("fancyform_tab1 - ОК");
                    //     disable_custom_tabs([2, 3, 4]);
                    // }
                    // if ($("#fancyform_tab2 fieldset").children().hasClass('valid')) {
                    //     console.log("fancyform_tab2 - ОК");
                    //     disable_custom_tabs([3, 4]);
                    // }
                    // if ($("#fancyform_tab3 fieldset").children().hasClass('valid')) {
                    //     console.log("fancyform_tab3 - ОК");
                    //     disable_custom_tabs([4]);
                    //     // enable_some_tabs();
                    // }
                    if ($("#fancyform_tab4 fieldset").children().children().hasClass('valid')) {
                        console.log("fancyform_tab4 - validation - ОК");
                        disable_custom_tabs([4]);
                        enable_some_tabs();

                    } else {
                        console.log("fancyform_tab4 - is_not_valid");

                    }
                    // if ($("#fancyform_tab5 fieldset").children().hasClass('valid')) {
                    //     console.log("fancyform_tab4 - ОК");
                    //     // disable_custom_tabs([]);
                    //     // enable_some_tabs();
                    //
                    // }

                    return true;
                } else {
                    console.log("Validator - NOT_ok");
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
        rules: {
            // simple rule, converted to {required:true}
            name: "required",
            // compound rule
            email: {
                required: true,
                email: true
            }
        },
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
    // $(".hamburger").click(function() {
    //     $(".topmenu").show('fast');
    // });
    // $(".menu_sloser").click(function() {
    //     $(".topmenu").hide('fast');
    // });


    var slideout = new Slideout({
        'panel': document.getElementById('slideoutPanel'),
        'menu': document.getElementById('slideoutMenu'),
        'padding': 256,
        'tolerance': 70,
        'side': 'right',
        'touch': 'false'
    });

    $('.hamburger').click(function() {
        slideout.toggle();
    });

    // $('.menu_sloser').click(function() {
    //     slideout.close();
    // });




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
    $('.firsttype_slider_wrapper > .firsttype_slider>.slides').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        variableWidth: true,
        autoplay: false,
        swipe: false,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
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
        speed: 1500,
        // fade: true,
        cssEase: 'ease',
        centerMode: true,
        centerPadding: '145px',
        slidesToShow: 1,
        swipe: false,
        responsive: [{
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                fade: true,

                dots: false,
                centerMode: false,
                centerPadding: '0',
            }
        }, {
            breakpoint: 775,
            settings: {
                slidesToShow: 1,
                fade: true,

                slidesToScroll: 1,
                infinite: true,
                // dots: false
                dots: false

            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,

                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,

                dots: false

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
        swipe: false,
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
    // body...

    if ($('ul').is('.wayp_links')) {


        $('.wayp_links').containedStickyScroll({
            duration: 0,
            queue: true,
            unstick: true,
            // easing:"easeOutBack"
            closeChar: ''
        });
    } else {
        console.log('.wayp_links element not loaded');
    }



    $(".customradiobtns").mCustomScrollbar();

    // waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints// waypoints


    // фикс для высоты вертикальной стрелы в "истории"
    $(".year_content_container").each(function() {
        // console.log($(this).height());
        var Hh = $(this).height();
        $(this).children(".years_arrow_wr").children(".years_arrow").height(Hh);
    });


    // $(".customradiobtns").mCustomScrollbar();
    // $( "#datepicker" ).datepicker();


    $('.datepicker').datepicker({
        onSelect: function(date) {
            // alert(date);
            $('#fancyform_tab3 input[type="date"]').attr('value', date);
        },
        selectWeek: false,
        inline: true,
        regional: 'ru',
        // startDate: 'today',
        hideIfNoPrevNext: true,
        dateFormat: 'yy-mm-dd',
        currentDate: new Date(),
        firstDay: 1
    });


    // Спойлеры в FAQ
    // Скрываем все спойлеры
    $('.spoiler-body').hide();
    // по клику отключаем класс folded, включаем unfolded, затем для следующего
    // элемента после блока .spoiler-head (т.е. .spoiler-body) показываем текст спойлера
    $('.spoiler-head').click(function() {
        $(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle();
    });


    // спойлер для article
    $('.spoiler').after('<a href="javascript://" class="firstbutton expander">подробности</a>');

    $(".expander").click(function() {
        var expanderPar = $(this).siblings('.spoiler');
        var spoiler = expanderPar.is(".expanded");

        if (spoiler) {
            // console.log("true!!!!");
            expanderPar.transition({
                'max-height': '5.3em',
                overflow: 'hidden'
            }, 1500, 'ease', function() {
                expanderPar.removeClass("expanded");
                $(this).siblings('.expander').text('подробности');

            });
        } else {
            // console.log("false!!!!");

            expanderPar.transition({
                'max-height': expanderPar.get(0).scrollHeight,
                overflow: ''
            }, 1500, 'ease', function() {
                expanderPar.addClass("expanded");
                $(this).siblings('.expander').text('спрятать');
            });
        }
    });

    $('body').stellar();


    $("html").niceScroll({
        zindex:9,
        cursorborderradius:0,
        cursorwidth:10
    });





});
