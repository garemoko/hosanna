var lastScrollTop = 0,
SHORTSPLASHHEIGHT = 420,
tallSplashHeight = 700,
TABLETWIDTH=768;

$(function(){
	
	$( window ).resize(windowResizeHandler);
	windowResizeHandler();

	
	$('#scroll-notice').click(function(){
		if ($(window).scrollTop() < SHORTSPLASHHEIGHT){
			scrollToDetails();
		}
		else {
			scrollToPosition(0);
		}
	});
	$( window ).scroll(scrollHandler);
	
})

function windowResizeHandler(){
	var windowHeight = $(window).height();
	windowHeight = (windowHeight > 500 ? windowHeight : 500)
	
	$('#splash, #splash_content').css('height',  windowHeight - 50);
	tallSplashHeight = windowHeight - 75;
	
	
	$('#details').css('min-height',  windowHeight  - 150);
}

function scrollToDetails(){
	var scrolltop = tallSplashHeight //($(document).width() < TABLETWIDTH ? SHORTSPLASHHEIGHT : tallSplashHeight)
	scrollToPosition(scrolltop)
}

function scrollToPosition(y){
	$( window).unbind( "scroll" );
	$('body').animate({ scrollTop: y }, {duration: 500, complete: function () {
		setScrollButtonLabel(y);
		lastScrollTop = y;
		$( window ).scroll(function(){scrollHandler();});
   }});
}



function scrollHandler(){
	var newScrollTop = $(window).scrollTop();
	setScrollButtonLabel(newScrollTop);
	autoScroll(newScrollTop);
	lastScrollTop = newScrollTop;
}

function setScrollButtonLabel(newScrollTop){
	if (newScrollTop < SHORTSPLASHHEIGHT){
		$('#scroll-notice p .text').text('Scroll down ');
		$('#scroll-notice p .glyphicon').attr('class','glyphicon glyphicon-chevron-down');
	}
	else {			
		$('#scroll-notice p .text').text('Scroll up ');
		$('#scroll-notice p .glyphicon').attr('class','glyphicon glyphicon-chevron-up');
	}
}

function autoScroll(newScrollTop){
	if (lastScrollTop < SHORTSPLASHHEIGHT){
		if (newScrollTop > lastScrollTop){
			scrollToDetails();
		}
	}
	else {			
		if (newScrollTop < lastScrollTop){
			scrollToPosition(0);
		}
	}
}
