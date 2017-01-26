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

});
