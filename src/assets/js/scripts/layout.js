$(document).ready(function(){
    $('body').addClass("preload");


    $('#nav-lines').on('click',function () {
       $(this).toggleClass("active");
    });



    fn_layout_main();
});

function fn_layout_main() {
    var $body = $("body");

    setTimeout(function(){
        $body.removeClass("preload").addClass("loaded");
        setTimeout(function () {
            $body.removeClass("loaded");
        }, 500);
        //fn_scrollreveal();
    },200);

}