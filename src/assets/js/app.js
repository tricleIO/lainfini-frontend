'use strict';
window.jQuery = window.$ = require('jquery');
//external
require('babel-polyfill');
require('select2');

//local
require('./scripts/banner');
require('./scripts/layout');
require('./scripts/scroll');
require('./scripts/eshop-slider');

$('select').select2({
});
$.fn.select2.defaults.set("theme", "classic");
