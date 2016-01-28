$('#virtual-tour .thumb img').load(function(){
  var parent = $(this).parent();
  $(parent).css('background-image', 'url('+$(this).attr('src')+')');
});
