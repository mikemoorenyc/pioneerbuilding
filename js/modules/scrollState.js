function scrollState() {
  if($("html").hasClass('__menu-scrolling') == true) {
    return false;
  }
  var currentScroll = $(window).scrollTop();
  currentScroll = currentScroll + $('.nav-spacer').height();
  var above = [];
  $("section").each(function(){
    var s = $(this);
    var top = $(s).offset().top;
    if (top <= currentScroll) {
      $(this).addClass('__above');
    } else {
      $(this).removeClass('__above');
    }
  });
  var currentPos = $('section.__above').last().data('section-anchor');

  if($(window).scrollTop() + $(window).height() == $(document).height()) {
       currentPos = $('section').last().data('section-anchor');
   }

  if(currentPos != globals.currentPosition) {
    stateSender(currentPos);
  }

}
