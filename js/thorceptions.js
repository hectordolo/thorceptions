$(window).scroll(function(){
	
	if ($(this).scrollTop() >= $( 'body' ).height()){
		$('.navbar-default').addClass('on');
	}else{
		$('.navbar-default').removeClass('on');
	
	}
})

console.log($('header').height());