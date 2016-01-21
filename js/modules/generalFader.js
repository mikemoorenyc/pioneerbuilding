function generalFader(p) {
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
