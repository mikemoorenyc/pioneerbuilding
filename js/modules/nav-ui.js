$(document).on('click','header a', function(e){
  if($(this).hasClass("menu-toggle") == true) {
    return;
  }
  e.preventDefault();
  var anchor = $(this).attr('href');
  if(anchor != globals.currentPostion) {
    linkMover(anchor);
    $('html').removeClass('__mobile-menu-opened');
  };
});
$(document).on('click', '.map-nav-link', function(e){

  e.preventDefault();
  var newPos = $(this).attr('href');

  var navOff = $('#main-container .nav-spacer').height();
  var scrollTo = $(newPos).offset().top;
  $('html, body').stop().animate({scrollTop:(scrollTo-navOff)}, globals.ts);
});
