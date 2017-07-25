$(document).ready(function(){
    $('.gallery-slider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        slideWidth: 350,
        auto: true,
        controls: true,
        pager: false,
        slideMargin: 30,
        onSliderLoad: function(){
            $(".gallery-slider").css("visibility", "visible");
        }
    });
});

function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } } }
window.onload = init;

