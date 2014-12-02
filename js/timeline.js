/*$(document).ready(function() {
		$('.timelineNav').scrollToFixed();
});*/

$(document).ready(function(){
	$('.slider1').bxSlider({
		slideWidth: 200,
		minSlides: 2,
		maxSlides: 3,
		slideMargin: 5,
		pager: false
	});
});

$(document).ready(function(){
	var navpos = $('.timelineNav').offset();
	console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
        $('.timelineNav').addClass('fixed');
       }
       else {
         $('.timelineNav').removeClass('fixed');
       }
    });
});