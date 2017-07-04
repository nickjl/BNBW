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

