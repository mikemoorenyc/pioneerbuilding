function stateSender(id) {
  if(history.pushState) {
    window.history.pushState(id,id,id);
  }
  //NAV ACTIVE
  var activator = id.replace(globals.homeURL,'');
  activator = activator.replace('/','');
  $('nav a').removeClass('active');
  $('nav a.'+activator).addClass('active');

  //CURRENT POSITION
  globals.currentPosition = id;

  //var gaSend = rootPath+id;
  //console.log(gaSend);

}

//GO BACK
window.addEventListener('popstate', function(e) {
  linkMover(e);
});
