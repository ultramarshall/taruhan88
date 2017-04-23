$(document).ready(function () {
    $("#nav-button").on("click", function () {
        $('#navigation:checkbox').change(function () {
            // this will contain a reference to the checkbox   
            if (this.checked) {
                $('nav').css('height', '259px');
            } else {
                $('nav').css('height', '0px');
            }
        });

    });
    $(window).resize(function () {
        if ($(this).width() >= 1025) {
            $('nav').css({
                'height': '30px',
                'top': '0px',
                'position': 'relative'
            });
        } 
        if( $(this).width() <= 1024) {
            $('nav').css({
                'height': '0px',
                'top': '60px',
                'width': '100%',
                'position': 'absolute'
            });
        }
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('nav').css({
                'top': '0px',
                'position': 'fixed',
                'width': '1024px',
                'z-index': 2
            });
            $('aside').css({
                'position': 'fixed',
                'top': '30px',
            });
        } else {
            $('nav').css({
                'z-index': '0',
                'position': 'relative',
                'z-index': 2

            });
            $('.logo').css('z-index', '3');
            $('aside').css({
                'position': 'relative',
                'top': '0px',
            });
        }
    });

});
