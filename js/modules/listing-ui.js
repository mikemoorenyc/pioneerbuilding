if(!Modernizr.touchevents) {

  $(document).on('mouseenter', '.avail-list li', function(){
    $('.avail-list li, .dt-highlights div').removeClass("__activated");
    var fl = $(this).data('fl');
    $('.avail-list li[data-fl="'+fl+'"], .dt-highlights div[data-fl="'+fl+'"]').addClass("__activated")
  });
  $(document).on('mouseleave', '.avail-list li', function(){
    $('.avail-list li, .dt-highlights div').removeClass("__activated");

  });

}
