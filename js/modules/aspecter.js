//EM ASPECT RATIOER
function aspecter() {
  $('.aspecter').each(function(){
    var theObject = $(this),
        baseWidth = $(theObject).data('basewidth'),
        percenter = $(theObject).width() / baseWidth;
        //console.log($(theObject).width());
    //$(theObject).css('font-size', (1* percenter)+'px');
    $('html').css('font-size', (1* percenter)+'px');
  });
}
aspecter();
$(window).resize(function(){
  aspecter();
});
