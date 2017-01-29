import 'imports?jQuery=jquery!slick-carousel/slick/slick.js';
$(document).ready(function () {

    $(".profil-gallery__slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        centerMode:true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(".arrivals__slider").slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        infinite: true,
        speed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    let $slideshow = $(".lookbook__slider").slick({
            arrows:true,
            lazyLoad: 'ondemand',
            autoplay:false,
            centerMode:true,
            centerPadding: '0',
            draggable:true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            infinite: true,
            speed: 800,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
    });

    $('.lookbook__wrapper__arrow.icon-arrow-l').click(function() {
        $slideshow.slick('slickPrev', parseInt($slideshow.slick('slickCurrentSlide'))-1);
    });
    $('.lookbook__wrapper__arrow.icon-arrow-r').click(function() {
        $slideshow.slick('slickNext', parseInt($slideshow.slick('slickCurrentSlide'))+1);
    });

    let $slideshowEshop = $(".product-list__slider").slick({
        dots:true,
        arrows:false,
        fade:true,
        cssEase:"ease",
        speed: 1200
    });

    $slideshowEshop.find(".slick-dots").prepend("<i class='icon icon-arrow-r'></i>");
    $slideshowEshop.find(".slick-dots .icon-arrow-r").click(function() {
        $(this).parents(".product-list__slider").slick('slickNext', parseInt($(this).parents(".product-list__slider").slick('slickCurrentSlide')));
    });



});
