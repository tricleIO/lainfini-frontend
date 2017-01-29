import ScrollReveal from 'scrollreveal';

function scrollreveal() {
    window.sr = ScrollReveal();
    window.sr.reveal('[data-reveal]',{
        duration: 1500,
        reset: false,
        viewOffset: { top: 164 }
    });

    window.sr.reveal(".designers__item",{
        duration: 1500,
    },250);


    window.sr.reveal(".product-list .product-list__item",{
        duration: 1000,
    });


    window.sr.reveal(".wsw *",{
        duration: 1500,
    });
}

$(document).ready(function () {
    scrollreveal();
});
