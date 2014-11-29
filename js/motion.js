var main = function(){

	$('.toggleButton').click(function(){
		if ($('.toggleButton').hasClass('panelIn')){
			$('.timeline').animate({left:"0px"},200);
			$('.search').removeClass('searchIn').addClass('searchOut');
			$('.toggleButton').removeClass('panelIn').addClass('panelOut')
			$('.showAll').removeClass('showAllIn').addClass('showAllOut')
		}
		else{
			$('.timeline').animate({left:"-400px"},200);
			$('.search').removeClass('searchOut').addClass('searchIn');
			$('.toggleButton').removeClass('panelOut').addClass('panelIn')
			$('.showAll').removeClass('showAllOut').addClass('showAllIn')
		}

		if($('.fa-angle-right').hasClass('arrowAppear')){
			$('.fa-angle-right').removeClass('arrowAppear').addClass('arrowDisappear')
			$('.fa-angle-left').removeClass('arrowDisappear').addClass('arrowAppear')
		}
		else
		{
			$('.fa-angle-right').removeClass('arrowDisappear').addClass('arrowAppear')
			$('.fa-angle-left').removeClass('arrowAppear').addClass('arrowDisappear')
		}
	})



	$('.choice').click(function(){
		var thisClick = $(this)
		var lastClick = $('.selectClick')
		thisClick.addClass('selectClick')
		lastClick.removeClass('selectClick')
	})


	$('.topic').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.topic')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.topicSelection')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
	})

	$('.locations').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.locations')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.locationsSelection')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
	})

	$('.people').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.people')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.peopleSelection')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
	})


	$('.topic').hover(function(){
		$(this).css('border-bottom','2px solid')},function(){$(this).css('border-bottom','0px')}
	)

	$('.locations').hover(function(){
		$(this).css('border-bottom','2px solid')},function(){$(this).css('border-bottom','0px')}
	)

	$('.people').hover(function(){
		$(this).css('border-bottom','2px solid')},function(){$(this).css('border-bottom','0px')}
	)

}

$(document).ready(main)