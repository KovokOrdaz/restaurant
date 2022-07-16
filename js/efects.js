$(document).ready(function () {
    // Efecto Menu
    $(".menu a").each(function (index, element) {
        $(this).css({ "top": "-200px" });
        $(this).animate({ top: "0px" }, 2000 + (index * 500));
    });
    // Efecto Header
    if ($(window).width() > 800) {
        $("header .text").css({ "opacity": "0", "marginTop": "0" });
        $("header .text").animate({ "opacity": "1", "marginTop": "-52px" }, 1500);
    }
    //Efecto Scroll Menu
    var about = $("#about").offset().top,
        menu = $("#dishs").offset().top,
        galery = $("#galery").offset().top,
        location = $("#location").offset().top;

    $("#btn-about").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: about - 200 }, 500);
    });
    $("#btn-menu").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: menu }, 500);
    });
    $("#btn-galery").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: galery - 50 }, 500);
    });
    $("#btn-location").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: location }, 500);
    });
});