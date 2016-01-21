function availListMaker() {
  var l = $('.avail-list > li.enabled').length;
  var half = Math.ceil(l/2);
  var items = $('.avail-list').find('>li.enabled');

  for (i = 0; i < items.length; i++) {
    var list = $(items[i]).clone();
    if((i+1) <= half) {
      var side = 'left';
    } else {
      var side = 'right';
    }
    $(".mob-silos ."+side).append(list);
  }
  $('.mob-silos > ul').addClass('avail-list');
}
availListMaker();
