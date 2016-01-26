
$('#building .gallery .slide:first-child img').one('load',function(){
  $(this).parent().addClass('current');
  $('#building .gallery').addClass('__activated');
  galleryUI();
/*
  $("#building .gallery").slick({
    nextArrow: '',
    prevArrow: '',
  //  autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: (globals.ts * 2)
  });
  */
});
function galleryUI() {
  dotState(0);
  if(Modernizr.touchevents) {
    $( "#building .gallery" ).on( "swiperight",function(){
      $('#building .gallery .slick-prev').click();
    } );
    $( "#building .gallery" ).on( "swipeleft",function(){
      $('#building .gallery .slick-next').click();
    } );
  }

  var current = 0;
  var end = $('#building .gallery .slide').length - 1 ;

  $('#building .gallery .button').click(function(e){
    var nextSlide;
    e.preventDefault();
    if($('#building .gallery').hasClass('__animating') == true) {
      return;
    }
    $('#building .gallery').addClass("__animating");
    var btn = $(this).data('dir');
    if(btn == 'next') {
      nextSlide = current+1;
      slideChanger(nextSlide);
    }
    if(btn == 'prev') {
      nextSlide = current - 1;
      slideChanger(nextSlide);
    }
    if(btn == 'prev' && current == 0) {
      nextSlide = end;
      slideChanger(nextSlide,btn);
    }
    if(btn == 'next' && current == end) {
      nextSlide = 0;
      slideChanger(nextSlide,btn);
    }
    /*
    if(btn == 'next') {
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('navOutNext');
      $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInNext');
    }
    if(btn == 'prev') {
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('navOutPrev');
      $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInPrev');
    }

    dotState(nextSlide);


    setTimeout(function(){
      current = nextSlide;
      $('#building .gallery .slide').removeClass('navOutNext').removeClass('navInNext').removeClass('navOutPrev').removeClass('navInPrev').removeClass("current");
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('current');
      $('#building .gallery').removeClass("__animating");

    },globals.ts*2);
    */
  });

  function slideChanger(nextSlide,btn) {
    if(nextSlide == current) {
      return false;
    }
    var dir = 'forward';
    if(nextSlide > current) {
      dir = 'forward';
    }
    if(nextSlide < current) {
      dir = 'backward';
    }
    //DEAL WITH LOOPING
    if(btn == 'next' && nextSlide == 0) {
      dir = 'forward';
    }
    if(btn == 'prev' && nextSlide == end ) {
      dir = 'backward';
    }

    //SWITCH IT
    if(dir == 'forward') {
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('navOutNext');
      $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInNext');
    }
    if(dir == 'backward') {
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('navOutPrev');
      $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInPrev');
    }

    dotState(nextSlide);


    setTimeout(function(){
      current = nextSlide;
      $('#building .gallery .slide').removeClass('navOutNext').removeClass('navInNext').removeClass('navOutPrev').removeClass('navInPrev').removeClass("current");
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('current');
      $('#building .gallery').removeClass("__animating");

    },globals.ts*2);

  }

  $('#building .gallery .dots li').click(function(e){
    e.preventDefault();
    if($('#building .gallery').hasClass('__animating') == true) {
      return;
    }
    var nextSlide = $(this).data('count');
    slideChanger(nextSlide);
  });


  function dotState(count) {
    $('#building .dots li').removeClass('current');
    $('#building .dots li[data-count="'+count+'"]').addClass('current');

  }
}



$('#building .gallery .slide img').load(function(){
  $(this).parent().css('background-image', 'url('+$(this).attr('src')+')');
});
