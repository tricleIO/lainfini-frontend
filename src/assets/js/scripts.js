'use strict';
window.jQuery = window.$ = require('jquery');
require('babel-polyfill');
require('slick-carousel');

$(document).ready(function(){
	$('body').addClass("preload");
	$('.visual--slide').slick();
    $('.visual--fade').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear'
	});

});
