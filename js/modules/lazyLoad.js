function lazyLoad() {
  $('img.lazy-load').each(function(){
    var img = $(this);

    function picker() {

      if(windoww > globals.dt) {
        $(img).attr('src', $(img).data('dt'));
      } else {
        $(img).attr('src', $(img).data('mob'));
      }
    }
    picker();
    $(window).resize(function(){
      picker();
    });
  });
}
