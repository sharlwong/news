var main = function(){

	var goOut = function(){
		$('.timeline').animate({left:"0px"},200);
		$('.search').removeClass('searchIn').addClass('searchOut');
		$('.toggleButton').removeClass('panelIn').addClass('panelOut')
		$('.showAll').removeClass('showAllIn').addClass('showAllOut')
		$('.fa-angle-right').removeClass('arrowAppear').addClass('arrowDisappear')
		$('.fa-angle-left').removeClass('arrowDisappear').addClass('arrowAppear')
	}



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
		goOut()

		if(thisClick.hasClass('business')){
			$('.active-news').children().addClass('hideSth')
			$('.businessNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('lifestyle')){
			$('.active-news').children().addClass('hideSth')
			$('.lifestyleNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('technology')){
			$('.active-news').children().addClass('hideSth')
			$('.technologyNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('politics')){
			$('.active-news').children().addClass('hideSth')
			$('.politicNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('entertainment')){
			$('.active-news').children().addClass('hideSth')
			$('.entertainmentNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('sport')){
			$('.active-news').children().addClass('hideSth')
			$('.sportNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('MH17')){
			$('.active-news').children().addClass('hideSth')
			$('.MH17News').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('yew')){
			$('.active-news').children().addClass('hideSth')
			$('.yewNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('obama')){
			$('.active-news').children().addClass('hideSth')
			$('.obamaNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('jinping')){
			$('.active-news').children().addClass('hideSth')
			$('.jinpingNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('loong')){
			$('.active-news').children().addClass('hideSth')
			$('.loongNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('MH370')){
			$('.active-news').children().addClass('hideSth')
			$('.MH370News').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('singapore')){
			$('.active-news').children().addClass('hideSth')
			$('.singaporeNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('pacific')){
			$('.active-news').children().addClass('hideSth')
			$('.pacificNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('africa')){
			$('.active-news').children().addClass('hideSth')
			$('.africaNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('america')){
			$('.active-news').children().addClass('hideSth')
			$('.americaNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('europe')){
			$('.active-news').children().addClass('hideSth')
			$('.europeNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('east')){
			$('.active-news').children().addClass('hideSth')
			$('.eastNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('show')){
			$('.active-news').children().removeClass('hideSth')
		}

	})

	$('.locations').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.locations')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.locationsSelection')
		var currentTodayNews = $('.active-news')
		var nextTodayNews = $('.locationNews')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-news')
		nextTodayNews.addClass('active-news')
	})

	$('.topic').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.topic')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.topicSelection')
		var currentTodayNews = $('.active-news')
		var nextTodayNews = $('.topicNews')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-news')
		nextTodayNews.addClass('active-news')
	})

	$('.trending').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.trending')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.trendingSelection')
		var currentTodayNews = $('.active-news')
		var nextTodayNews = $('.trendingNews')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-news')
		nextTodayNews.addClass('active-news')
	})


	$('.topic').hover(function(){
		$(this).css('border-bottom','2px solid')},function(){$(this).css('border-bottom','0px')}
	)

	$('.locations').hover(function(){
		$(this).css('border-bottom','2px solid')},function(){$(this).css('border-bottom','0px')}
	)

	$('.trending').hover(function(){
		$(this).css('border-bottom','2px solid')},function(){$(this).css('border-bottom','0px')}
	)


}

$(document).ready(main)