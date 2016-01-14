$('#building .gallery .slide:first-child img').one('load',function(){
  $("#building .gallery").slick({
    nextArrow: '<button type="button" class="slick-next btn-class"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow487"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev btn-class prev"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow487"></use></svg></button>',
  //  autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  });
});
$("#building .gallery .slide").width(windoww);
$(window).resize(function(){
  $("#building .gallery .slide").width(windoww);
});
