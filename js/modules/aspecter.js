//EM ASPECT RATIOER
function aspecter() {
  $('.aspecter').each(function(){
    var theObject = $(this),
        baseWidth = $(theObject).data('basewidth');

        if(windoww < globals.dt) {
          baseWidth = 320;
        } else {
          baseWidth = 1200;
        }

        var percenter = $(theObject).width() / baseWidth;
        //console.log($(theObject).width());
    //$(theObject).css('font-size', (1* percenter)+'px');
    $('html').css('font-size', (1* percenter)+'px');
  });
}
aspecter();
$(window).resize(function(){
  aspecter();
});
