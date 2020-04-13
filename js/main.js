$(document).ready(function(){
	$(".navbar-default .navbar-nav>li>a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	var theText=$(".typer").data("text"),
			theTextLength=theText.length,
			n=0,
			theTyper=setInterval(function(){
				$(".typer").each(function(){
					$(this).html($(this).html()+theText[n]);
				});
				n=n+1;
				if (n>=theTextLength) {
					clearInterval(theTyper);
				}
			},100);
	$(".about .content p span.more").click(function(){
		$(this).hide();
		$(".about .content p.toggle").fadeIn(400);
	});
	$(".about .content p span.less").click(function(){
		$(this).hide();
		$(".about .content p.toggle").fadeOut(400);
		$(".about .content p span.more").fadeIn(500);
	});
	$(".navbar-default .navbar-nav>li>a").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$("#"+$(this).data('scroll')).offset().top
		},1000);
	})
	$('.carousel').carousel();
	$(".scroll-to-top").click(function(event){
		event.preventDefault();
		$("html, body").animate({
			scrollTop:0
		},1000);
	});
	$(window).scroll(function(){
	// scroll to top button
		var scrollToTop=$(".scroll-to-top");
		if ($(window).scrollTop() >= 400) {
			if (scrollToTop.is(":hidden")) {
				scrollToTop.fadeIn(400);
			}
		
		}
		else{
			scrollToTop.fadeOut(400);	
		}
	});
	// 	$(".block").each(function(){
	// 		if ($(window).scrollTop()>50){
	// 			console.log("good");
	// 		}
	// 		// 	if ($(window).scrollTop() > $(this).offset().top) {
	// 		// 		var blockId=$(this).attr("id");
	// 		// 		$(".navbar-default .navbar-nav>li>a").removeClass("active");
	// 		// 		$('.navbar-default .navbar-nav>li>a[data-scroll="'+blockId+'"]').addClass("active");
	// 		// 	}
	// 	 });

});	
// loading 
$(window).on("load",function(){
	$("body").css("overflow","auto");
	$(".overlay").fadeOut(1000);
});	