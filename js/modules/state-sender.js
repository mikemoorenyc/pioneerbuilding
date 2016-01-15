function stateSender(id,noPush) {
  if(history.pushState && noPush != true) {
    window.history.pushState(id,id,id);
  }
  //NAV ACTIVE
  $('nav a').removeClass('active');
  $('nav a[href="'+id+'"]').addClass('active');

  //CURRENT POSITION
  globals.currentPosition = id;

  ga('send', 'pageview', id);
  //var gaSend = rootPath+id;
  //console.log(gaSend);

}

//GO BACK
window.addEventListener('popstate', function(e) {
//e.preventDefault();

  linkMover(e.state,true);
});
