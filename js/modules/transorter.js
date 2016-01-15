function tranSorter() {
  var newLayout = '';
  var count = $('#map-key .t-list .item').length;

  function outerHTML (obj) {
  return jQuery('<div />').append(obj.eq(0).clone()).html();
  };
  if(windoww <= globals.dt) {
    if($('#map-key .t-list').hasClass('mobile-layout') == false) {
      $('#map-key .t-list').addClass('mobile-layout');
      for (i = 1; i <= count; i++) {
        newLayout += outerHTML($('#map-key .t-list .item[data-m="'+i+'"]'));
      }
      $('#map-key .t-list').html(newLayout);
    }
  } else {
    if($('#map-key .t-list').hasClass('mobile-layout') == true) {
      console.log('make layout');
      for (i = 1; i <= count; i++) {
        newLayout += outerHTML($('#map-key .t-list .item[data-d="'+i+'"]'));
      }
      $('#map-key .t-list').removeClass('mobile-layout');
      $('#map-key .t-list').html(newLayout);
    }
  }
}
tranSorter()
$(window).resize(function(){
  tranSorter();
});
