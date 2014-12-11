$(function(){

	/* Timeline */
	var TIMELINE = [
		{
			'time': '2014.9',
			'event': 'Starts internship at Center For Open Science',
			'milestone': true,
			//'details': []
		},
		{
			'time': '2014.5',
			'event': 'Graduates from Washington and Lee University',
			'milestone': true
			//'details': []
		},
		{
			'time': '2013.5 - 2013.8',
			'event': 'Works on Android Automated UI Testing in AmLogic, Inc in '
				+ 'Santa Clara, CA',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2013.4',
			'event': 'Goes to Cuba with Christy Cui',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2012.6 - 2012.8',
			'event': 'Researches on properties of fibonacci numbers as an'
				+ ' R.E.Lee Scholar, with Professor Dresden and my classmate Cathy',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2011.10',
			'event': 'Starts work study at Phonathon',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2011.7',
			'event': 'Movie <i>Harry Potter and the Deathly Hallows - Part 2</i> '
				+ 'is published, marking the end of the Potter era',
			'milestone': true,
			//'details': []
		},
		{
			'time': '2011.4',
			'event': 'Starts my first solo trip in Washington D.C',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2010.9',
			'event': 'Enrolls in Washington and Lee University',
			'milestone': true,
			//'details': []
		},
		{
			'time': '2010.6',
			'event': 'Graduates from Shenzhen Foreign Languages School',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2009.3',
			'event': 'Passes my first TOEFL',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2008.3',
			'event': 'Co-direct my first short film, <i>Illusion</i>, which '
				+ 'turns out to be a disaster',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2007.7',
			'event': 'The book <i>Harry Potter and the Deathly Hallows</i> is published',
			'milestone': true,
			//'details': []
		},
		{
			'time': '2007.7',
			'event': 'Screws up my high school entrance exam',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2004.9',
			'event': 'Starts middle school in Shenzhen Foreign Languages School',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2004.6',
			'event': 'Graduates from elementary school',
			'milestone': false,
			//'details': []
		},
		{
			'time': '2004.6',
			'event': 'Passed my best test',
			'milestone': false,
			//'details': []
		},
		{
			'time': '1999.?',
			'event': "Reads <i>Harry Potter and the Philosopher's Stone</i>",
			'milestone': true,
			//'details': []
		},
		{
			'time': '1998.9',
			'event': 'Starts elementary school',
			'milestone': false,
			//'details': []
		},
		{
			'time': '1997.?',
			'event': 'Talks',
			'milestone': false,
			//'details': []
		},
		{
			'time': '1994.?',
			'event': 'Walks',
			'milestone': false,
			//'details': []
		},
		{
			'time': '1992.7',
			'event': 'Born',
			'milestone': true,
			//'details': []
		}
	];

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

	ko.applyBindings({'timeline': TIMELINE}, document.getElementById('tlSection'));
	ko.applyBindings({'links': SNS_LINKS}, document.getElementById('contactSection'));

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
