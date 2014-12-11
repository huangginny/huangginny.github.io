$(function(){

	/* Social network */
	var SNS_LINKS = [
		{
			'name': 'Facebook',
			'url': 'https://www.facebook.com/orz.zai',
			'icon': '<i class="fa fa-facebook-square fa-2x"></i>'
		},
		{
			'name': 'Twitter',
			'url': 'https://twitter.com/intent/tweet?screen_name=Orz_zai',
			'icon': '<i class="fa fa-twitter fa-2x">'
		},
		{
			'name': 'LinkedIn',
			'url': 'http://www.linkedin.com/in/jh92710',
			'icon': '<i class="fa fa-linkedin-square fa-2x"></i>'
		},
		{
			'name': 'GitHub',
			'url': 'https://github.com/huangginny',
			'icon': '<i class="fa fa-github fa-2x"></i>'
		},
		{
			'name': 'Flickr',
			'url': 'http://www.flickr.com/photos/orz_zai/',
			'icon': '<i class="fa fa-flickr fa-2x"></i>'
		},
	];
	ko.applyBindings({'links': SNS_LINKS});

	/* WHOLE PAGE */
	$(".section").each(function() {
		var head = $(this).children('.sectionHead');
		var body = $(this).children('.sectionBody');
		var col = head.css("color");
		
		head.hover(function() {
			$(this).css("color","#FFCC00");
		},function() {
			$(this).css("color",col);
		});
		head.click(function(){
				head.animate({color:'white'}, 'fast');
				body.animate({height:'toggle'}, 'slow');
				head.animate({color: col}, 'fast');
		});
	});

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});

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
   		$("html, body").animate({scrollTop: 0}, 1000);
	});

});
