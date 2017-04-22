$(document).ready(function () {
    $("#nav-button").on("click", function () {
        $('#navigation:checkbox').change(function () {
            // this will contain a reference to the checkbox   
            if (this.checked) {
                $('nav').css('height', '250px');
            } else {
                $('nav').css('height', '0px');
            }
        });

    });
    $(window).resize(function () {
        if ($(this).width() > 980) {
            $('nav').css('height', '30px');
            $('nav').css('top', '0px');
            $('nav').css('position', 'relative');
        } 
        if( $(this).width() < 980) {
            $('nav').css('height', '0px');
            $('nav').css('top', '60px');
            $('nav').css('position', 'fixed');
        }
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('nav').css({
                'top': '0px',
                'position': 'fixed',
                'z-index': 2
            });
            
        } else {
            $('nav').css({
                'z-index': '0',
                'position': 'relative',

            });
            $('.logo').css('z-index', '1');
        }
    });

});
