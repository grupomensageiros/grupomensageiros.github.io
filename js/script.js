(function($) {
    "use strict";

    $(window).on("load", function() {

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -60
    });

    var header = $('.header'),
        pos = header.offset(),
        blockTop = $('.block-top');

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 500 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                blockTop.addClass('active');
            });
        } else if ($(this).scrollTop() <= pos.top + 500 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                blockTop.removeClass('active');
            });
        }
    });

    var mainHero = $(" .hero .main-slider .slides li");
    function mainHeroResize() {
        mainHero.css('height', $(window).height());
    }

    $(function() {
            mainHeroResize()
        }),
        $(window).resize(function() {
            mainHeroResize()
        });

    $('.main-slider').flexslider({
        animation: "fade",
        slideshow: true,
        directionNav: false,
        controlNav: true,
        pauseOnAction: false,
        animationSpeed: 1000
    });


    $('.review-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });

    var mobileBtn = $('.mobile-but');
    var nav = $('.main-nav ul.main-menu');
    var navHeight = nav.height();

    $(mobileBtn).on("click", function() {
        $(".toggle-mobile-but").toggleClass("active");
        nav.slideToggle();
        $('.main-nav li a').addClass('mobile');
        return false;


    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && nav.is(':hidden')) {
            nav.removeAttr('style');
            $('.main-nav li a').removeClass('mobile');
        }

    });

    $('.background-img').each(function () {
        if ($(this).is('img')) return;
        var path = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + path + '")').css('background-position', 'initial');
    });

    
    $('.btn').on('click', function() {
         var href = $(this).attr('href');
        window.location.href = href;
        return false;

    });


    $('.countdown').countdown($('.countdown').data('date')).on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="counter-bg mb-4 mb-lg-0"><span class="counter">%D</span> <span class="label">n</span></div> '
    + '<div class="counter-bg mb-4 mb-lg-0"><span class="counter">%H</span> <span class="label">ó</span></div> '
    + '<div class="counter-bg mb-4 mb-lg-0"><span class="counter">%M</span> <span class="label">p</span></div> '
    + '<div class="counter-bg"><span class="counter">%S</span> <span class="label">mp</span></div>'));
});

    $(".block-tabs li").on("click", function() {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $(".block-tabs li.active").removeClass("active");
            $(this).addClass("active");
            $(".block-tab li.active").removeClass("active");
            $(".block-tab li:nth-child(" + nthChild + ")").addClass("active");

        }
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    $('.popup-insta').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true,
            titleSrc: 'data-title'
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });


    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    
})(jQuery);