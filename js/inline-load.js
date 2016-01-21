siteDir = '***REPLACEWITHTHEMEDIRECTORY***';

var timestamp = '***TIMESTAMP***';

cssExpand = siteDir+"/css/expanded.css?v="+timestamp;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-72181731-1', 'auto');

function loadCSS(e,t,n){"use strict";function o(){var t;for(var i=0;i<s.length;i++){if(s[i].href&&s[i].href.indexOf(e)>-1){t=true}}if(t){r.media=n||"all"}else{setTimeout(o)}}var r=window.document.createElement("link");var i=t||window.document.getElementById("inline-scripts");var s=window.document.styleSheets;r.rel="stylesheet";r.href=e;r.media="only x";i.parentNode.insertBefore(r,i);o();return r}


loadCSS(cssExpand);


//SET SCROLLBAR THING
function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);
  var styleString = '<style>html.__modal-opened body, html.__site-loading body{ margin-right: '+(widthNoScroll - widthWithScroll)+'px }html.__modal-opened header, html.__site-loading header{padding-right:'+(widthNoScroll - widthWithScroll)+'px;} </style>';
  //return widthNoScroll - widthWithScroll;
  var script = window.document.getElementById("inline-scripts");
  script.insertAdjacentHTML('afterend', styleString);
}
getScrollbarWidth();




function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                if (callback && typeof callback === "function") {
                    callback();
                }
            }
        };
    } else {
        script.onload = function () {
            if (callback && typeof callback === "function") {
                callback();
            }
        };
    }
    script.src = url;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
}
// How to use it
loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", function () {
    console.log('jquery loaded');
    setTimeout(function(){
     $('html, body').scrollTop(0);
    },500);

    loadScript(siteDir+"/js/main.js?v="+timestamp, function(){
      siteInit();
    });
});
