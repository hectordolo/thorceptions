$(window).scroll(function(){
	
	if ($(this).scrollTop() >= $( window ).height()){
		$("nav").removeClass("navbar");
		$("nav").addClass("navbar-transition");
	}else{
		$("nav").removeClass("navbar-transition");
		$("nav").addClass("navbar");
	}
})

console.log($('header').height());