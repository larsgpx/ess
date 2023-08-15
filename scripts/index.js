import '../styles/index.scss';
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html, body').animate({
    //                 scrollTop: (target.offset().top - 72)
    //             }, 1000, "easeInOutExpo");
    //             return false;
    //         }
    //     }
    // });
    $('.carousel').carousel({
        interval: 4000
    })


    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // change color depending of background color carousel
    $('#carouselExampleIndicators').on('slid.bs.carousel', function() {
        if ($('.carousel-indicators li.blue-dot').hasClass('active')) {
            console.log('blue');
            $('.carousel-indicators li').css('background-color', '#ff5922');
            var fff_next = $('.our-next .carousel-control-next-icon').css('background-image');
            var blue_next = fff_next.replace('fff', 'ff5922');
            var fff_prev = $('.our-prev .carousel-control-prev-icon').css('background-image');
            var blue_prev = fff_prev.replace('fff', 'ff5922');
            $('.our-next .carousel-control-next-icon').css('background-image', blue_next);
            $('.our-prev .carousel-control-prev-icon').css('background-image', blue_prev);
        } else {
            console.log('no');
            var fff_next = $('.our-next .carousel-control-next-icon').css('background-image');
            var blue_next = fff_next.replace('ff5922', 'fff');
            var fff_prev = $('.our-prev .carousel-control-prev-icon').css('background-image');
            var blue_prev = fff_prev.replace('ff5922', 'fff');
            $('.our-next .carousel-control-next-icon').css('background-image', blue_next);
            $('.our-prev .carousel-control-prev-icon').css('background-image', blue_prev);
            $('.carousel-indicators li').css('background-color', '#fff');
        }
    });
    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict