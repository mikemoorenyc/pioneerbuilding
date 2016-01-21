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
