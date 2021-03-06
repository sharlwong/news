var main = function(){

	var goOut = function(){
		$('.timeline').animate({left:"0px"},400);
		$('.search').removeClass('searchIn').addClass('searchOut');
		$('.toggleButton').removeClass('panelIn').addClass('panelOut')
		$('.showAll').removeClass('showAllIn').addClass('showAllOut')
		$('.fa-angle-right').removeClass('arrowAppear').addClass('arrowDisappear')
		$('.fa-angle-left').removeClass('arrowDisappear').addClass('arrowAppear')
		$('.history').addClass('expandHistory')
	}

	$('.toggleButton').click(function(){
		if ($('.toggleButton').hasClass('panelIn')){
			$('.timeline').animate({left:"0px"},400);
			$('.search').removeClass('searchIn').addClass('searchOut');
			$('.toggleButton').removeClass('panelIn').addClass('panelOut')
			$('.showAll').removeClass('showAllIn').addClass('showAllOut')
			$('.history').removeClass('active-history')
			$('.expandHistory').addClass('active-history')
			$('.arrow-right').addClass('appear')
			$('.history').addClass('expandHistory')
		}
		else{
			$('.timeline').animate({left:"-625px"},400);
			$('.search').removeClass('searchOut').addClass('searchIn');
			$('.toggleButton').removeClass('panelOut').addClass('panelIn')
			$('.showAll').removeClass('showAllOut').addClass('showAllIn')
			$('.expandHistory').removeClass('active-history')
			$('.history').addClass('active-history')
			$('.arrow-right').removeClass('appear')
			$('.history').removeClass('expandHistory')
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
			$('.item').addClass('hideSth')	
			$('.businessNews').removeClass('hideSth')
			$('.business').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('lifestyle')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.lifestyleNews').removeClass('hideSth')
			$('.lifestyle').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('technology')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.technologyNews').removeClass('hideSth')
			$('.technology').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('politics')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.politicNews').removeClass('hideSth')
			$('.politics').addClass('selectClick')
			lastClick.removeClass('selectClick')
			$('.politics').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('entertainment')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.item').addClass('hideSth')				
			$('.entertainmentNews').removeClass('hideSth')
			$('.entertainment').addClass('selectClick')
			lastClick.removeClass('selectClick')	
		}
		else if(thisClick.hasClass('sport')){
			$('.topicSlider').addClass('hideSth')
			$('.topicLine').addClass('hideSth')
			$('.item').addClass('hideSth')
			$('.sportNews').removeClass('hideSth')
			$('.sport').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('MH17')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.MH17News').removeClass('hideSth')
			$('.MH17').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('yew')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.yewNews').removeClass('hideSth')
			$('.yew').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('obama')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.obamaNews').removeClass('hideSth')
			$('.obama').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('jinping')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.jinpingNews').removeClass('hideSth')
			$('.jinping').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('loong')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.loongNews').removeClass('hideSth')
			$('.loong').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('japan')){
			$('.trendingSlider').addClass('hideSth')
			$('.trendingLine').addClass('hideSth')
			$('.item').addClass('hideSth')
			$('.japanNews').removeClass('hideSth')
			$('.japan').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('singapore')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.singaporeNews').removeClass('hideSth')
			$('.singapore').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('pacific')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.pacificNews').removeClass('hideSth')
			$('.pacific').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('africa')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.africaNews').removeClass('hideSth')
			$('.africa').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('america')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.americaNews').removeClass('hideSth')
			$('.america').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('europe')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.europeNews').removeClass('hideSth')
			$('.europe').addClass('selectClick')
			lastClick.removeClass('selectClick')			
		}
		else if(thisClick.hasClass('east')){
			$('.locationSlider').addClass('hideSth')
			$('.locationLine').addClass('hideSth')
			$('.item').addClass('hideSth')	
			$('.eastNews').removeClass('hideSth')
			$('.east').addClass('selectClick')
			lastClick.removeClass('selectClick')
		}
		else if(thisClick.hasClass('show')){
			$('.slider').removeClass('hideSth')
			$('.line').removeClass('hideSth')
			$('.item').removeClass('hideSth')
		}
	})

	$('.locations').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.locations')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.locationsSelection')
		var currentTodayNews = $('.active-news')
		var nextTodayNews = $('.locationNews')
		var currentTodayNewsBox = $('.active-box')
		var nextTodayNewsBox = $('.locationBox')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-news')
		nextTodayNews.addClass('active-news')
		currentTodayNewsBox.removeClass('active-box')
		nextTodayNewsBox.addClass('active-box')

		var lastClick = $('.selectClick')
		lastClick.removeClass('selectClick')
		$('.show').addClass('selectClick')

		$('.slider').removeClass('hideSth')
		$('.item').removeClass('hideSth')
	})

	$('.topic').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.topic')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.topicSelection')
		var currentTodayNews = $('.active-news')
		var nextTodayNews = $('.topicNews')
		var currentTodayNewsBox = $('.active-box')
		var nextTodayNewsBox = $('.topicBox')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-news')
		nextTodayNews.addClass('active-news')
		currentTodayNewsBox.removeClass('active-box')
		nextTodayNewsBox.addClass('active-box')

		var lastClick = $('.selectClick')
		lastClick.removeClass('selectClick')
		$('.show').addClass('selectClick')

		$('.slider').removeClass('hideSth')
		$('.item').removeClass('hideSth')

	})

	$('.trending').click(function(){
		var currentGeneral = $('.active-general')
		var nextGeneral = $('.trending')
		var currentSelection = $('.active-selection')
		var nextSelection = $('.trendingSelection')
		var currentTodayNews = $('.active-news')
		var nextTodayNews = $('.trendingNews')
		var currentTodayNewsBox = $('.active-box')
		var nextTodayNewsBox = $('.trendingBox')
		currentGeneral.removeClass('active-general')
		nextGeneral.addClass('active-general')
		currentSelection.removeClass('active-selection')
		nextSelection.addClass('active-selection')
		currentTodayNews.removeClass('active-news')
		nextTodayNews.addClass('active-news')
		currentTodayNewsBox.removeClass('active-box')
		nextTodayNewsBox.addClass('active-box')

		var lastClick = $('.selectClick')
		lastClick.removeClass('selectClick')
		$('.show').addClass('selectClick')

		$('.slider').removeClass('hideSth')
		$('.item').removeClass('hideSth')

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

	$('.arrow-left').click(function(){
		var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if( nextSlide.length === 0){
        currentSlide.removeClass('active-slide');           
	        $('.slideA1').first().addClass('active-slide');
	        $('.slideA2').first().addClass('active-slide');
	        $('.slideA3').first().addClass('active-slide');
	        $('.slideA4').first().addClass('active-slide');
	        $('.slideA5').first().addClass('active-slide');
	        $('.slideB1').first().addClass('active-slide');
	        $('.slideB2').first().addClass('active-slide');
	        $('.slideC1').first().addClass('active-slide');
	        $('.slideC2').first().addClass('active-slide');	        
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
	        $('.slideA1').last().addClass('active-slide');
	        $('.slideA2').last().addClass('active-slide');
	        $('.slideA3').last().addClass('active-slide');
	        $('.slideA4').last().addClass('active-slide');
	        $('.slideA5').last().addClass('active-slide');
	        $('.slideB1').last().addClass('active-slide');
	        $('.slideB2').last().addClass('active-slide');
	        $('.slideC1').last().addClass('active-slide');
	        $('.slideC2').last().addClass('active-slide');	 
        }
        else{
        currentSlide.removeClass('active-slide');
        prevSlide.addClass('active-slide');
        }
	})

}

$(document).ready(main)


