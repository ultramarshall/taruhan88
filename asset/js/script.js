$(document).ready(function () {
    $("#nav-button").on("click", function () {
        $('#navigation:checkbox').change(function () {
            // this will contain a reference to the checkbox   
            if (this.checked) {
                $('nav').css('height', '240px');
            } else {
                $('nav').css('height', '0px');
            }
        });

    });
    $(window).resize(function () {
        if ($(this).width() > 980) {
            $('nav').css('height', '30px');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 100) {
                    $('nav').css({
                        'top': '0px',
                        'position': 'fixed',
                    });
                } else {
                    $('nav').css({
                        'z-index': '0',
                        'position': 'relative',
                    });
                    $('.logo').css('z-index', '1');
                }
            });

        } else {
            $('nav').css('height', '0px');
        }
    });


});
