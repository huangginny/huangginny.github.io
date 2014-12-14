$(function(){

	/* --- HEADER --- */
	$("#head button").each(function() {
		$(this).click(function() {
			var name = $(this).attr('name');
			var sectionId = "#" + name;
			$('html, body').animate({
        		scrollTop: $(sectionId).offset().top
    		});
    		$(sectionId).children('.sectionBody').show();
		});
	});

	/* --- CONTENT --- */
	ko.applyBindings({'timeline': TIMELINE}, document.getElementById('tlSection'));
	ko.applyBindings({'links': SNS_LINKS}, document.getElementById('contactSection'));

	$(".section").each(function() {
		var head = $(this).children('.sectionHead');
		var body = $(this).children('.sectionBody');
		var col = head.css("color");

		head.hover(function() {
			$(this).css("color", "#FFCC00");
		},function() {
			$(this).css("color", col);
		});

		head.click(function(){
			head.animate({color:'white'}, 'fast');
			body.animate({height:'toggle'}, 'slow');
			head.animate({color: col}, 'fast');
		});
	});

  	$('[data-toggle="tooltip"]').tooltip();

  	/* --- BOTTOM --- */
	/*
	 * From StackOverflow: http://stackoverflow.com/questions/14249998/jquery-back-to-top/#answer-14250025
	 */
	$(window).scroll(function() {
		if ($(this).scrollTop()) {
			$('.toTop').fadeIn();
		} else {
			$('.toTop').fadeOut();
		}
	});

	$(".toTop").click(function () {
   		//1 second of animation time
   		//html works for FFX but not Chrome
   		//body works for Chrome but not FFX
   		//This strange selector seems to work universally
   		$(".sectionBody").hide(1000);
   		$("html, body").animate({scrollTop: 0});
	});

});
