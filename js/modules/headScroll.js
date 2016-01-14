function headScroll() {
  var pad = $('#main-container').css('padding-top');
  pad = pad.replace('px','');
  pad = parseFloat(pad);
  var offset =  $(window).scrollTop();
  if(offset >= pad) {
    $('html').addClass('__below-header');
  } else {
    $('html').removeClass('__below-header');
  }
}
headScroll();
$(window).resize(function(){
  headScroll();
});
$(window).scroll(function(){
  headScroll();
})
