$(document).ready(function() {

    // fancybox
    // $(".fancybox").fancybox();

    // flexsliders
    $('.firsttype_slider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 316,
        itemMargin: 0,
        // minItems: 3,
        // maxItems: 3,
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
    });

    $('.gallerytype_slider').flexslider({
        animation: "slide",
        animationLoop: false,
        // itemWidth: 316,
        maxItems: 1,
        itemMargin: 0,
        controlsContainer: $(".custom-controls-container2"),
        customDirectionNav: $(".custom-navigation2 a")
    });
    $('.doctortype_slider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 298,
        itemMargin: 0,
        // minItems: 3,
        // maxItems: 3,
        controlsContainer: $(".custom-controls-container3"),
        customDirectionNav: $(".custom-navigation3 a")
    });

});
