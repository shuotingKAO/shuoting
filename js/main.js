$(document).ready(function() {
	$(".move").click(function() {
		var smooth	= $(this).attr("href");
		$("body,html").animate({
			scrollTop : $(smooth).position().top-55 
		}, 1000);
	});
//content show up
	$(window).scroll(function(event) {
		var scrollValue = $(this).scrollTop()+55;
		if (scrollValue>=$("#page1").position().top){
			$(".aboutcontent").fadeIn(2000);
		}
		if (scrollValue>=$("#page2").position().top){
			$(".skillcontent").slideDown(2000);	
		}
		if (scrollValue>=$("#page3").position().top){
			$(".contactcontent").fadeIn(2000);
		}	
	});
});