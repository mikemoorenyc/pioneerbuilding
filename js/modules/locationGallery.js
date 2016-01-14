$('#location-gallery li img.lazy-load').each(function(){
  var img = $(this);
  $(img).one('load',function(){

    $(img).parent().css('background-image', 'url('+$(img).attr('src')+')');
    $(img).closest('li').addClass("__loaded");
    $(img).remove();
  });
});
