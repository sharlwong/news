



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
			$('.history').removeClass('active-history')
			$('.expandHistory').addClass('active-history')
		}
		else{
			$('.timeline').animate({left:"-625px"},200);
			$('.search').removeClass('searchOut').addClass('searchIn');
			$('.toggleButton').removeClass('panelOut').addClass('panelIn')
			$('.showAll').removeClass('showAllOut').addClass('showAllIn')
			$('.expandHistory').removeClass('active-history')
			$('.history').addClass('active-history')
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
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.businessNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('lifestyle')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.lifestyleNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('technology')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.technologyNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('politics')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.politicNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('entertainment')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.entertainmentNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('sport')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.sportNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('MH17')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.MH17News').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('yew')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.yewNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('obama')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.obamaNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('jinping')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.jinpingNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('loong')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.loongNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('MH370')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.MH370News').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('singapore')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.singaporeNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('pacific')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.pacificNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('africa')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.africaNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('america')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.americaNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('europe')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.europeNews').removeClass('hideSth')			
		}
		else if(thisClick.hasClass('east')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.eastNews').removeClass('hideSth')
		}
		else if(thisClick.hasClass('show')){
			$('.slider').removeClass('hideSth')
			$('.line').removeClass('hideSth')
		}

	})

	$('.locations').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.locations')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.locationsSelection')
		var currentTodayNews = $('.active-box')
		var nextTodayNews = $('.locationBox')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-box')
		nextTodayNews.addClass('active-box')

		var lastClick = $('.selectClick')
		lastClick.removeClass('selectClick')
		$('.show').addClass('selectClick')


	})

	$('.topic').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.topic')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.topicSelection')
		var currentTodayNews = $('.active-box')
		var nextTodayNews = $('.topicBox')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-box')
		nextTodayNews.addClass('active-box')

		var lastClick = $('.selectClick')
		lastClick.removeClass('selectClick')
		$('.show').addClass('selectClick')

	})

	$('.trending').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.trending')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.trendingSelection')
		var currentTodayNews = $('.active-box')
		var nextTodayNews = $('.trendingBox')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-box')
		nextTodayNews.addClass('active-box')

		var lastClick = $('.selectClick')
		lastClick.removeClass('selectClick')
		$('.show').addClass('selectClick')

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

	$('.hot').click(function(){
		$('.hot').removeClass('dark').addClass('notDark')
		$('.cold').removeClass('notDark').addClass('dark')
		$(this).removeClass('notDark').addClass('dark')
		$(this).next().removeClass('dark').addClass('notDark')
	})


	$('.arrow-left').click(function(){
		var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if( nextSlide.length === 0){
        currentSlide.removeClass('active-slide');           
        $('.slide1').first().addClass('active-slide');
         $('.slide2').first().addClass('active-slide');
        }
        else{
        currentSlide.removeClass('active-slide');
        nextSlide.addClass('active-slide');
        }		
	})

	$('.arrow-right').click(function(){
		var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        if( prevSlide.length === 0){
        currentSlide.removeClass('active-slide');           
        $('.slide1').last().addClass('active-slide');
         $('.slide2').first().addClass('active-slide');
        }
        else{
        currentSlide.removeClass('active-slide');
        prevSlide.addClass('active-slide');
        }
	})

}

$(document).ready(main)


