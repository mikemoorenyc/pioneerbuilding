function linkMover(id) {
  var navOff = $('header').height();
  var scrollTo = $('section[data-section-anchor="'+id+'"]').offset().top;
  $('html').addClass('__menu-scrolling');
  stateSender(id);
  

  //SEND TO GOOGLE ANALYTICS
  ga('send', 'pageview', id);
  $('html, body').stop().animate({scrollTop:(scrollTo-navOff)}, ts, function(){
    setTimeout(function(){
      $('html').removeClass('__menu-scrolling');

    },500);
    setTimeout(function(){
      $('header').removeClass('headroom--unpinned');
    },50);
    $('header').removeClass('headroom--unpinned');


  });
}
