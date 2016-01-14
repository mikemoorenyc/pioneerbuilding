$(document).on('click', 'a.modal-single',function(e){
  e.preventDefault();
  var imgURL = $(this).attr('href');
  var caption = $(this).find('.caption').html();
  //console.log(imgURL);
  //console.log(caption);
  modalCreate(makeSingle);
  function makeSingle() {
    $('#modal').addClass('single');
    $('#modal .main-content-area').append('<img data-src="'+imgURL+'" />');
    if(caption != undefined) {
      $('#modal .main-content-area').append('<div class="caption">'+caption+'</div>')
    }
    $('#modal .main-content-area img').one('load',function(){
      $('#modal .main-content-area').addClass("__loaded");
    });
    $('#modal .main-content-area img').attr('src', $('#modal .main-content-area img').data('src'));
    $('html').addClass('__modal-opened');
    $('#modal').fadeIn(globals.ts);
  }
});
