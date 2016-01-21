function sideBySide() {
  $('.side-by-side').each(function(){

    var block = $(this);
    if(windoww > globals.dt) {
      var newH = $(block).find('.left-side').height();
      if($(block).find('.right-side').height() > newH) {
        newH = $(block).find('.right-side').height();
      }
      $(block).find('>.inner').height(newH);
      var kids = $(block).find('.left-side, .right-side');
      $(kids).each(function(){
        var w = $(this).width();
        var h = $(this).height();
        //console.log(h);
        $(this).css({
          'margin-top': -(h/2)+'px',
          'margin-left': -(w/2)+'px'
        });
      });

    } else {
      $(block).find('>.inner').css('height', 'auto');
      $(block).find('.left-side, .right-side').removeAttr('style');
    }
  });
}
sideBySide();
$(window).resize(function(){
  sideBySide();
});
