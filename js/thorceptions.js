$(window).scroll(function(){
	
	if ($(this).scrollTop() >= $( 'body' ).height()){
		$("nav").removeClass("navbar-fixed-top");
		$("nav").removeClass("navbar-transparent");
		$("nav").addClass("navbar-default");
		$("nav").addClass("navbar-fixed-top");
		
	}else{
		$("nav").removeClass("navbar-fixed-top");
		$("nav").removeClass("navbar-default");
		$("nav").addClass("navbar-transparent");
		$("nav").addClass("navbar-fixed-top");
	
	}
})

console.log($('header').height());