$(document).ready(function () {
    $(window).scroll(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();
            $("header .text").css({
                'transform': 'translate(0px,' + scroll * 0.7 + '%)'
            });
            $(".about article").css({
                'transform': 'translate(0px,-' + scroll * 0.35 + '%)'
            });
        }
        $(window).resize(function () {
            var windowWidth = $(window).width();
            if (windowWidth < 800) {
                $(".about article").css({
                    'transform': 'translate(0px,0px)'
                });
            }
        });
    });
});