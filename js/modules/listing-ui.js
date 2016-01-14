if(!Modernizr.touchevents) {

  $('.avail-list li').mouseenter(function(){
    $('.avail-list li, .dt-highlights div').removeClass("__activated");
    var fl = $(this).data('fl');
    $('.avail-list li[data-fl="'+fl+'"], .dt-highlights div[data-fl="'+fl+'"]').addClass("__activated")
  });
  $('.avail-list li').mouseleave(function(){
    $('.avail-list li, .dt-highlights div').removeClass("__activated");

  });

}
