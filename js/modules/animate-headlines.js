function animateHead() {
  $('.animate-head').each(function(){
    var swaps = globals.swaps[parseInt($(this).data('count'))];
    var h1 = $(this).find('h1').first();
    var strong = $(h1).find('strong');
    $(strong).wrap('<span class="animate-wrap" />');
    $(h1).find('.animate-wrap').html('');
    $(swaps).each(function(index, e){
      $(h1).find('.animate-wrap').append('<strong class="is-hidden">'+e+'</span>');
    });
    $(h1).find('.animate-wrap strong').first().addClass('is-visible').removeClass('is-hidden');



    //headlineAnimator($(this));

  });
}

function headlineAnimator(headline) {
  var animationDelay = 2500;
  var clicks = 0;
  animateHeadline(headline);

  function animateHeadline($headlines) {
    var speed;
    if(clicks == 0) {
      speed = animationDelay/2;
    } else {
      speed = animationDelay;
    }
    clicks++;
    $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, speed);
      //other checks here ...
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }
}
