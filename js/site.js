//GLOBALS
globals.ts = 500,
globals.tab = 401,
globals.dt = 1000;
windoww = $(window).width();
windowh = $(window).height();

  function isHighDensity(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
  }


  function isRetina(){
      return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  }

  if(isRetina() == true || isHighDensity() == true) {
    retina = true;
    $('html').addClass('_retina-display');
  } else {
    retina = false;
  }

  //OPEN MODAL TOUCH EVENT THING

  $(document).on('touchmove', function(e) {

        if($('html').hasClass('__modal-opened') == true) {
          e.preventDefault();
          e.stopPropagation();
        //  console.log('adsfasfd');
        }
  });

globals.swaps = [
  [
    'brooklyn',
    'flatbush'
  ],
  [
    'Setting',
    'Design'
  ],
  [
    'Central',
    'Simple',
    "Accessible"
  ],
  [
    'Flatbush',
    'Design'
  ]
];

$('.extra-main .list li').addClass('fade-kid');



orientationClass();
$(window).resize(function(){
  windoww = $(window).width();
  windowh = $(window).height();
  orientationClass();
});

function siteInit() {

  //LOAD IN SVG
  $.ajax({
    method: 'GET',
    url: globals.siteDir+'/assets/svgs.svg',
    dataType: 'html'
  })
  .done(function(data){


    $('body').prepend('<div class="hide">'+data+'</div>');
  });

  //CHECK IF CSS IS LOADED
  var thechecker = setInterval(function(){
    var ztest = $('#css-checker').css('height');

    if(ztest == '1px') {
      cssLoaded = true;
      clearInterval(thechecker);

      sideBySide();
      setTimeout(function(){
        sideBySide();
        animateHead();
      },500)
    //
      setTimeout(function(){
        linkMover(globals.initialURL);
        $(window).scroll(function(){
          scrollMagic();
        });
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

  //MOBILE MENU TOGGLE
  $('header a.menu-toggle').click(function(e){
    e.preventDefault();
    $('html').toggleClass("__mobile-menu-opened");
  })






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
