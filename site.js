$(function(){

	$.mobile.ajaxEnabled = false;
	$.mobile.loading().hide();
	$('.section').hide();

	/* --- HEADER --- */
	$("#head button").each(function() {
		$(this).click(function() {
			// Change button color
			$('#head button').css("color", "snow");
			$('#head button').css("text-shadow", "0 0 2px midnightblue");
			$(this).css("color", "midnightblue");
			$(this).css("text-shadow", "0 0 2px snow");

			// Find section
			$('.section').hide();
			var name = $(this).attr('name');
			var sectionId = "#" + name;

			// Show and scroll to section
    		$(sectionId).show();
    		$('html, body').animate({
        		scrollTop: $(sectionId).offset().top
			});
		});
	});

	/* --- CONTENT --- */
	ko.applyBindings({'timeline': TIMELINE}, document.getElementById('tlSection'));
	ko.applyBindings({'links': SNS_LINKS}, document.getElementById('contactSection'));

  	$('[data-toggle="tooltip"]').tooltip();
});
