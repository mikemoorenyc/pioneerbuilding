$(document).on('click', 'a.modal-map',function(e){
  e.preventDefault();
  var imgURL = $(this).attr('href');

  //console.log(imgURL);
  //console.log(caption);
  modalCreate(makeMap);
  function makeMap() {
  $('#modal').addClass('pan-zoom');

  $('#modal .main-content-area').append('<img data-src="'+imgURL+'" />');
  $('#modal .main-content-area').append('<div class="map-interactor" ></div>')
  $('#modal').fadeIn(globals.ts);
  $('html').addClass('__modal-opened');
  $('#modal .main-content-area img:first').one('load', function(){
    $('#modal .main-content-area').addClass("__loaded");
    $('#modal .loader-container').fadeOut(function(){
      $('#modal .loader-container').remove();
    });
    //MAKE THE PANZOOM
    if(retina == true) {
      var width = $(this).width();
      $(this).width(width / 2);
    }
    //INITIAL TRANSFORM
    var imgw = $(this).width();
    var imgh = $(this).height();
    var wdif = ((windoww-imgw)/2);
    var hdif = ((windowh-imgh)/2);
    var initTrans = 'translate('+wdif+'px,'+hdif+'px)';


/*
    $(this).panzoom({
      disableZoom: true

      ,startTransform: initTrans
    });
    */

    //MIKE'S CUSTOM DRAG FUNCTION
    var imgX = wdif,
        imgY = hdif,
        thresholdX = $('#modal').width()-imgw,
        thresholdY = $('#modal').height()-imgh,
        theImg = $(this);
    $(this).css({
      'transform' : initTrans,
      '-webkit-transform': initTrans,
      '-ms-transform': initTrans
    });
    if(!Modernizr.touchevents) {
      var dragState = false;
      $(document).on('mousedown','#modal .map-interactor',function(event){
        dragState = true;
        cursorX = event.clientX,
        cursorY = event.clientY;
      }).on('mouseup','#modal .map-interactor',function(){
        dragState = false;
      });
      //CURSOR VARIABLES
      var cursorX = 0;
      var cursorY = 0;
      $(document).on('mousemove','#modal .map-interactor',function(event){

        if(dragState === true) {
          positionFinder(event);

        }
        cursorX = event.clientX;
        cursorY = event.clientY;

      });
    } else {
      var dragState = false;
      //CURSOR VARIABLES
      var cursorX = 0;
      var cursorY = 0;

      $(document).on('vmousedown',"#modal .map-interactor", function(event){
        dragState = true;
        cursorX = event.clientX;
        cursorY = event.clientY;


      }).on('vmouseup',"#modal .map-interactor", function(){
        dragState = false;
        cursorX = 0;
        cursorY = 0;
      });
      $( document ).on ( "vmousemove", "#modal .map-interactor", function(event) {
        if(dragState === true) {
          positionFinder(event);

        }
        cursorX = event.clientX;
        cursorY = event.clientY;
      });
    }

    function positionFinder(event) {
      //console.log(event.pageX - cursorX);
      var xDif = event.clientX - cursorX,
          yDif = event.clientY - cursorY,
          newPosX = imgX + xDif,
          newPosY = imgY + yDif;
      if(newPosX <1 && newPosX >= thresholdX) {
        imgX = newPosX
      }
      if(newPosY <1 && newPosY >= thresholdY) {
        imgY = newPosY
      }
      var trans = 'translate('+imgX+'px,'+imgY+'px)';
      $(theImg).css({
        'transform' : trans,
        '-webkit-transform': trans,
        '-ms-transform': trans
      });
    //  $(theImg).panzoom("pan", imgX, imgY, { relative: false})

    }


  });
  $('#modal .main-content-area img:first').attr('src', $('#modal .main-content-area img:first').attr('data-src'));
}
});
