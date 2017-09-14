jQuery('.show-filter').click(function() {
    jQuery('.filter-box').show();
    jQuery('.all-results').hide();
    jQuery('.intro').hide();
    jQuery('footer').hide();
    jQuery('nav').hide();

});


jQuery('.hide-filter').click(function() {
    jQuery('.filter-box').hide();
    jQuery('.all-results').show();
    jQuery('.intro').show();
    jQuery('footer').show();
    jQuery('nav').show();

});


jQuery('.viewMoreOffers').click(function() {
    jQuery('.hidden-offer').slideToggle('slow');
    jQuery(this).text( jQuery(this).text() == 'show less' ? "show more" : "show less");

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


