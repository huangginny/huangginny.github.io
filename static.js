/* Timeline */
var TIMELINE = [
{
	'time': '2018.7',
	'event': '<i>National Geographic</i> published my photograph of Twelve Apostles, Australia',
	'milestone': false,
	'details': ko.observableArray([])
},{
	'time': '2017.11',
	'event': 'Back in New York as a Video Integration engineer, team mascot, and a party master',
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
	'event': 'Goes to Cuba with Christy Cui -- first time traveling abroad... with no money',
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
	'event': 'Starts work study at Phonathon in which I call alumni and parents for college Annual Fund',
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
	'event': 'The last Harry Potter book, <i>Deathly Hallows</i> is published',
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
	'time': '1999.?',
	'event': "Reads my first Harry Potter book, <i>Philosopher's Stone</i>",
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
	"Favorite music is usually from movie soundtracks.",
	"Current favorite cuisine is Japanese food.",
	"I indeed took my English name, \"Ginny\", from the Harry Potter series.",
	"A landscape photographer. I used to own a Nikon D700 and now a Sony A7Rii. Checkout my Flickr!",
	"A globe trotter. Been in all six continents except Antarctica in year 2017: Israel in Asia, " +
		"Turkey in Europe, the States in North America, Egypt in Africa, Australia in Oceania, " +
		"and Ecuador in South America in Christmas.",
	"I always want to have really long hair, but for some reasons they are still always at shoulder length.",
	"I started college thinking of majoring in Journalism, but quitted because I felt that it " + 
		"didn't fit me, and also because my English was not good enough.",
	"I passed my AP calculus before college, thinking happily that I would never have to " + 
		"take another Math class again. Two years later I became a Math major...",
	"I play piano. The hardest piece I have ever played is <i>Moonlight Sonata</i> by Beethoven. I presented this " +
		"piece in my graduation piano recital, in which I performed alongside my good friend Christy.",
	"Pompeii, Italy is currently on the top of my to-go list. Before Oct 2017 it was Jerusalem, Israel.",
	"Not a sports person because of my clumsiness, but I like hiking a lot.",
	"I'm pretty good at Origami. I do this a lot with my girl friends in elementary school.",
	"Although never officially diagnosed I believe I'm an Aspie -- I identify with 90% of the symptoms " +
		"mentioned by Tony Attwoods <i>A Complete Guide to Asperger's Syndrome</i>, including not talking until five",
	"Loves sending and receiving postcards.",
	"The first time I came to the States is in July 2005 with my best friend and a bunch of other " + 
		"middle school and high school students in Shenzhen. For one week, I was hosted by a family in " + 
		"Lockhaven, Pennsylvania. That was one of my best trips ever, and I am still missing the time and " + 
		"people I met when I was there.",
	"Extremely lazy. On weekends I can just lie on the bed all day.",
	"Enjoys working in the midnight. For some reason, that's my most efficient working time.",
	"I once drank Coco Cola very much (about half a liter a day.) I can even distinguish Coca Cola and Pepsi, " + 
		"Coke that's stored in a can and that's stored in a glass bottle. I quitted after " +
		"realizing that it made my stomach hurt a lot.",
	"On Pottermore (official Harry Potter fansite ran by J.K Rowling) I was sorted into Slytherin.",
	"I have a habit of always re-watching the movies and TV series I've watched in my childhood. Recently I " + 
		"am enjoying <i>A Little Princess</i> directed by Alfonso Cuaron in 1995.",
	"Always want to get a tattoo.",
	"Allergic to lobsters and avocadoes; hates really spicy food.",
	"When I discover a song that I really love, I would be repeating it for like 20 times a day for a whole " + 
		"week... that is, until I never want to hear it in my life again. Same goes with dishes of restaurants " + 
		"I like.",
	"Speakeasy lover in NYC. Always seen in Angel's Share, PDT and Bathtub Gin."
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
	'url': 'https://twitter.com/intent/tweet?screen_name=ginnyzr7',
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
