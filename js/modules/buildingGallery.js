
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
    }
    if(btn == 'prev') {
      nextSlide = current - 1;
    }
    if(btn == 'prev' && current == 0) {
      nextSlide = end;
    }
    if(btn == 'next' && current == end) {
      nextSlide = 0;
    }
    if(btn == 'next') {
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('navOutNext');
      $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInNext');
    }
    if(btn == 'prev') {
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('navOutPrev');
      $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInPrev');
    }


    setTimeout(function(){
      current = nextSlide;
      $('#building .gallery .slide').removeClass('navOutNext').removeClass('navInNext').removeClass('navOutPrev').removeClass('navInPrev').removeClass("current");
      $('#building .gallery .slide[data-count="'+current+'"]').addClass('current');
      $('#building .gallery').removeClass("__animating");
    },globals.ts*2);
  });
}

$('#building .gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('#building .gallery .slide').removeClass('navOutNext').removeClass('navInNext').removeClass('navOutPrev').removeClass('navInPrev');
  var dir ='';
  if(nextSlide > currentSlide ) {
    dir = 'forward'
  }
  if(nextSlide < currentSlide) {
    dir ='backward';
  }
  if(nextSlide == 0 && currentSlide == $('#building .gallery .slide').length - 1) {
    dir = 'forward';
  }

  if(nextSlide == $('#building .gallery .slide').length - 1 && currentSlide == 0) {
    dir = 'backward';
  }

  if(dir == 'forward') {
    $('#building .gallery .slide[data-count="'+currentSlide+'"]').addClass('navOutNext');
    $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInNext');
  }
  if(dir == 'backward') {
    $('#building .gallery .slide[data-count="'+currentSlide+'"]').addClass('navOutPrev');
    $('#building .gallery .slide[data-count="'+nextSlide+'"]').addClass('navInPrev');
  }

});

$('#building .gallery').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('#building .gallery .slide').removeClass('navOutNext').removeClass('navInNext').removeClass('navOutPrev').removeClass('navInPrev').removeClass("current");
  $('#building .gallery .slide[data-count="'+currentSlide+'"]').addClass('current');
  console.log(currentSlide);
});


$('#building .gallery .slide img').load(function(){
  $(this).parent().css('background-image', 'url('+$(this).attr('src')+')');
});
