function scrollreveal() {
    if ($(window).width() > 1024 && !$("html.sr").length && $("[data-reveal]").length) {
        window.sr = ScrollReveal({ duration: 2000 });
        if (sr.isSupported()) {
            document.documentElement.classList.add('sr');
            $("section").each(function(){
                $(this).find("[data-reveal]").each(function(i){
                    sr.reveal($(this)[0], {
                        duration: 500,
                        easing: 'ease-in',
                        scale: 1,
                        distance: 0,
                        delay: 300*i,
                        viewFactor : 0.2,
                        reset: false
                    });
                });
            });
        }
    }
}

$(document).ready(function () {
    scrollreveal();
});
