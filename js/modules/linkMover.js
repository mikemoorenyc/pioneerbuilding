function linkMover(id,noPush) {
  var navOff = parseFloat($('#main-container').css('padding-top'));
  var scrollTo = $('section[data-section-anchor="'+id+'"]').offset().top;
  $('html').addClass('__menu-scrolling');
  stateSender(id,noPush);


  //SEND TO GOOGLE ANALYTICS
  ga('send', 'pageview', id);
  $('html, body').stop().animate({scrollTop:(scrollTo-navOff)}, globals.ts, function(){
    setTimeout(function(){
      $('html').removeClass('__menu-scrolling');

    },500);



  });
}
