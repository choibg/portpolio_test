// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery;var d=e("ul",b);var f={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};this.go=function(g,h){var i=e(a.get(g)).clone().css(f).hide().appendTo(b);if(!c.noCross){var j=e(a.get(h)).clone().css(f).appendTo(b);j.fadeOut(c.duration,function(){j.remove()})}i.fadeIn(c.duration,function(){d.css({left:-g+"00%"});i.remove()});return g}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container4").wowSlider({effect:"fade",prev:"",next:"",duration:20*100,delay:30*100,width:1967,height:1090,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});