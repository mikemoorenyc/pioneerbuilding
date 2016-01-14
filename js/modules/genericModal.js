function modalCreate(callback) {
  //REMOVE MODAL
  $('#modal').remove();

  var modalHTML = $('#modalTemplate').html();
  $('body').append('<div id="modal">'+modalHTML+'</div>');
  callback();
}
$(document).on('click', '#modal .modal-close', function(e){
  e.preventDefault();
  $('#modal').fadeOut(globals.ts, function(){
    $('#modal').remove();
    $('html').removeClass('__modal-opened');
  });
});
