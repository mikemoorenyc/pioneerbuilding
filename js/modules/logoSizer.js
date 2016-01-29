function logoSizer() {
  $('.bottom-logos li img').each(function(){
    var img = $(this);
    if(windoww > globals.dt) {
      $(img).css({
        'width': $(img).data('w')+'rem',
        'height': $(img).data('h')+'rem'
      });
    } else {
      $(img).css({
        'width': ($(img).data('w')*.75)+'rem',
        'height': ((img).data('h')*.75)+'rem'
      });
    }
  });
}
logoSizer();
$(window).resize(function(){
  logoSizer();
})
