function generalFader(p) {
  if($(p).hasClass('headline-trigger') == true) {

    headlineAnimator($(p).find('.animate-head').first());
  }
  var fadeKids = $(p).find('.fade-kid'),
      fadeCount = fadeKids.length,
      totalFaded = 0;
      $(fadeKids[totalFaded]).addClass("__activated");
      totalFaded++;
      var fadeIn = setInterval(function(){
        $(fadeKids[totalFaded]).addClass("__activated");
        totalFaded++;
        if(totalFaded == fadeCount) {
          clearInterval(fadeIn);

        }
      },globals.ts /2);



}
