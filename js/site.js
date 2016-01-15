//GLOBALS
globals.ts = 500,
globals.tab = 401,
globals.dt = 1000;
windoww = $(window).width();
windowh = $(window).height();
orientationClass();
$(window).resize(function(){
  windoww = $(window).width();
  windowh = $(window).height();
  orientationClass();
});

function siteInit() {
  //CHECK IF CSS IS LOADED
  var thechecker = setInterval(function(){
    var ztest = $('#css-checker').css('height');

    if(ztest == '1px') {
      cssLoaded = true;
      clearInterval(thechecker);
      sideBySide();
      setTimeout(function(){
        linkMover(globals.initialURL);
        setTimeout(function(){

          $(window).scroll(function(){
            scrollState();
          });

        },globals.ts);
      },500)

      console.log('css loaded');
    }
  }, 10);

  //theHistory();








  //LOAD HERO
  $('#hero-image img').one('load',function(){
    $('#pre-loader').fadeOut(globals.ts, function(){

    });
    setTimeout(function(){
      $('html').removeClass("__site-loading").addClass("__site-loaded");
      $('#pre-loader').remove();
    },globals.ts);
  });



  pageLoader();
  lazyLoad();
  //MOVE TO CURRENT URL
  //linkMover(globals.initialURL);

console.log('scripts loaded');


}






function orientationClass() {
  if (windoww >= windowh) {
    $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
  } else {
    $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
  }
}



//DON'T TOUCH
siteScriptsLoaded = true;
