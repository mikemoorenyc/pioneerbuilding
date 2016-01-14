$(document).on('click','header a', function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  if(anchor != globals.currentPostion) {
    linkMover(anchor);
  };
});
