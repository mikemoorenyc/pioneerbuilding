function scrollState() {
  if($("html").hasClass('__menu-scrolling') == true) {
    return false;
  }
}

$(window).scroll(function(){
  scrollState();
});
