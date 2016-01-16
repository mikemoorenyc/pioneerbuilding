function linkMover(id,noPush) {
  if(id == globals.currentPosition || $('html').hasClass("__menu-scrolling") == true) {

    return false;
  }
  var navOff = $('#main-container .nav-spacer').height();
  if(id == globals.homeURL) {
    navOff = parseFloat($("#main-container").css('padding-top'));
  }
  var scrollTo = $('section[data-section-anchor="'+id+'"]').offset().top;
  $('html').addClass('__menu-scrolling');
  stateSender(id,noPush);


  //SEND TO GOOGLE ANALYTICS

  $('html, body').stop().animate({scrollTop:(scrollTo-navOff)}, globals.ts, function(){
    setTimeout(function(){
      $('html').removeClass('__menu-scrolling');

    },500);



  });
}
