$(document).on('click', 'a.modal-gal',function(e){
  e.preventDefault();

  //console.log(imgURL);
  //console.log(caption);
  var galtype = $(this).data('galtype');
  var type = $(this).data('type');
  modalCreate(makeGal);
  function makeGal() {
    $('#modal').addClass('gal');
    $("#modal .main-content-area").append('<div class="gallery-container"></div>');
    var slides = $('.galleries[data-galtype="'+galtype+'"] .gal[data-type="'+type+'"]').html();
    //INJECT SLIDES
    $('#modal .gallery-container').append(slides);
    $('#modal .gallery-container .slide').width($('#modal').width());
    $(window).resize(function(){
      $('#modal .gallery-container .slide').width($('#modal').width());
    });
    $('#modal .gallery-container .slide:first-child img').one('load',function(){
      $('#modal .gallery-container').slick({
        nextArrow: '<button type="button" class="slick-next btn-class"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow487"></use></svg></button>',
        prevArrow: '<button type="button" class="slick-prev btn-class prev"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow487"></use></svg></button>'
      });
      $('#modal .main-content-area').addClass('__loaded');
    });
    $('#modal .main-content-area img').each(function(){
      var img = $(this);
      $(img).attr('src', $(img).data('src'));
    });

    $('html').addClass('__modal-opened');
    $('#modal').fadeIn(globals.ts);
  }
});
