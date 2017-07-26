$('.show-filter').click(function() {
    $('.filter-box').show();
    $('.all-results').hide();
    $('.intro').hide();
    $('footer').hide();
    $('nav').hide();

});


$('.hide-filter').click(function() {
    $('.filter-box').hide();
    $('.all-results').show();
    $('.intro').show();
    $('footer').show();
    $('nav').show();

});


$('.viewMoreOffers').click(function() {
    $('.hidden-offer').slideToggle('slow');
    $(this).text( $(this).text() == 'show less' ? "show more" : "show less");

});


jQuery(document).ready(function() {
    jQuery('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


