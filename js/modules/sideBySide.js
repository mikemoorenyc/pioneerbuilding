function sideBySide() {
  $('.side-by-side').each(function(){

    var block = $(this);
    if(windoww > globals.dt) {
      var newH = $(block).find('.left-side').height();
      if($(block).find('.right-side').height() > newH) {
        newH = $(block).find('.right-side').height();
      }
      $(block).find('>.inner').height(newH);

    } else {
      $(block).find('>.inner').css('height', 'auto');
    }
  });
}
sideBySide();
$(window).resize(function(){
  sideBySide();
});
