/* Timeline */
var TIMELINE = [
{
	'time': '2016.11',
	'event': '<i>Fantastic Beasts and Where to Find Them</i> is on in theaters',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2016.9',
	'event': 'Relocated to Beijing, China',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2016.7',
	'event': 'Took a selfie with Daniel Radcliffe!',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2015.5',
	'event': 'Starts my first fulltime job at FreeWheel in the Big Apple, at the heart of Manhattan',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2014.9',
	'event': 'Starts internship at Center For Open Science in Charlottesville, VA',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2014.5',
	'event': 'Graduates from Washington and Lee University',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2013.5 - 2013.8',
	'event': 'Works on Android Automated UI Testing in AmLogic, Inc in '
	+ 'Santa Clara, CA',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2013.4',
	'event': 'Goes to Cuba with Christy Cui',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2012.6 - 2012.8',
	'event': 'Researches on properties of fibonacci numbers as an'
	+ ' R.E.Lee Scholar, with Professor Dresden and my classmate Cathy',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2011.10',
	'event': 'Starts work study at Phonathon',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2011.10',
	'event': 'Writes my first computer program in Python',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2011.7',
	'event': 'Movie <i>Harry Potter and the Deathly Hallows - Part 2</i> '
	+ 'is released, marking the end of the Potter era',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2011.4',
	'event': 'Starts my first solo trip in Washington D.C',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2010.8',
	'event': 'Leaves for United States, and enrolls in Washington and Lee University in Lexington, VA',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2010.6',
	'event': 'Graduates from Shenzhen Foreign Languages School',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2009.3',
	'event': 'Gets 102 on my first TOEFL',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2008.3',
	'event': 'Co-directs my first short film, <i>Illusion</i>, which '
	+ 'turns out to be a disaster',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2007.7',
	'event': 'The book <i>Harry Potter and the Deathly Hallows</i> is published',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2007.7',
	'event': 'Screws up my high school entrance exam',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2004.9',
	'event': 'Starts middle school in Shenzhen Foreign Languages School',
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '2004.6',
	'event': 'Graduates from elementary school',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '2004.6',
	'event': 'Passes the test that I have performed most outstandingly in my life',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '1999.?',
	'event': "Reads <i>Harry Potter and the Philosopher's Stone</i>",
	'milestone': true,
	'details': ko.observableArray([])
},
{
	'time': '1998.9',
	'event': 'Starts elementary school',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '1997.?',
	'event': 'Talks',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '1994.?',
	'event': 'Walks',
	'milestone': false,
	'details': ko.observableArray([])
},
{
	'time': '1992.7',
	'event': 'Born',
	'milestone': true,
	'details': ko.observableArray([])
}
];

/* Facts about me */
var FACTS = [
	"I am the biggest Harry Potter fan a lot of people have ever seen.",
	"My favorite music is usually from movie soundtracks, " + 
		"such as the opening theme of <i>The Imitation Game</i>",
	"My favorite city in the world is Hong Kong, and my favorite in the United States " + 
		"is Washington D.C.",
	"I indeed took my English name, \"Ginny\", from the Harry Potter series.",
	"I own a Nikon D700 and usually make pretty good use of it. Checkout my Flickr!",
	"I love solo-traveling. once solo-travelled to and couchsurfed Yucatan Peninsula in Mexico.",
	"I always want to have really long hair, but for some reasons they are still always at shoulder length.",
	"I started college thinking of majoring in Journalism, but quitted because I felt that it " + 
		"didn't fit me, and also because my English was not good enough.",
	"I passed my AP calculus before college, thinking happily that I would never have to " + 
		"take another Math class again. Two years later I became a Math major...",
	"I play piano. The hardest piece I have ever played is <i>Moonlight Sonata</i> by Beethoven. I presented this " +
		"piece in my graduation piano recital, in which I performed alongside my good friend Christy.",
	"Really love to use public transportation for some reason. My favorite is the underground.",
	"I'm not a sports person. I'm too clumsy...",
	"I'm pretty good at Origami. I do this a lot with my girl friends in elementary school.",
	"I love to buy different kinds of sunglasses.",
	"I love sending and receiving postcards.",
	"The first time I came to the States is in July 2005 with my best friend and a bunch of other " + 
		"middle school and high school students in Shenzhen. For one week, I was hosted by a family in " + 
		"Lockhaven, Pennsylvania. That was one of my best trips ever, and I am still missing the time and " + 
		"people I met when I was there.",
	"Extremely lazy. On weekends I can just lie on the bed all day.",
	"I enjoy working in the midnight. For some reason, that's my most efficient working time.",
	"I once drank Coco Cola very much (about half a liter a day.) I can even distinguish Coca Cola and Pepsi, " + 
		"Coke that's stored in a can and that's stored in a glass bottle. I quitted three months ago, after " +
		"realizing that it made my stomach hurt a lot.",
	"On Pottermore (official Harry Potter fansite ran by J.K Rowling) I was sorted into Slytherin.",
	"I have a habit of always re-watching the movies and TV series I've watched in my childhood. Recently I " + 
		"am enjoying <i>A Little Princess</i> directed by Alfonso Cuaron in 1995.",
	"When I talk, I talk a lot. I'm trying to get rid of the bad habit of interrupting others when they talk.",
	"I don't have a lot of friends. But most of my friends are really close to me.",
	"When I discover a song that I really love, I would be repeating it for like 20 times a day for a whole " + 
		"week... that is, until I never want to hear it in my life again. Same goes with dishes of restaurants " + 
		"I like.",
	"NA"
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
	'url': 'https://twitter.com/intent/tweet?screen_name=Orzzai',
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
