
$(document).ready(function () {

    /* Navigation scroll after header*/

    $('.section__about--js').waypoint(function (direction) {

        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '6rem'
        });

    /* Navigation-link scroll */

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    /* Animations on scroll */


    $('.wp-js--2').waypoint(function (direction) {
        $('.wp-js--2').addClass('animated fadeInLeft');
    }, {
            offset: '50%'
        });

    $('.wp-js--3').waypoint(function (direction) {
        $('.wp-js--3').addClass('animated fadeInRight');
    }, {
            offset: '50%'
        });

    $('.wp-js--4').waypoint(function (direction) {
        $('.wp-js--4').addClass('animated pulse');
    }, {
            offset: '50%'
        });

    $('.wp-js--1').waypoint(function (direction) {
        $('.wp-js--1').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });


    /* Mobile nav */

    $('.js--nav-icon').click(function (e) {
        e.preventDefault();
        
        const ikona = $('.header__list--js');
        const icon = $('.js--nav-icon i');

        ikona.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars')
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times')
        }



    });


});


