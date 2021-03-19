import React from 'react';
import {
	Box, Grid, Hidden,
	Card, CardActionArea, CardMedia, CardContent,
	Dialog, DialogTitle, DialogContent, Button, IconButton,
	useMediaQuery
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	fullheight: { height: '100%' },
	thumbnail: {
		height: '120px',
		backgroundRepeat: 'no-repeat',
    	backgroundPosition: 'center',
    	backgroundSize: 'contain'
	},
	cardTitle: { 
		textAlign: 'center', 
		fontFamily: 'Jazz LET, fantasy',
		marginTop: '0.725rem', 
	},
	cardDescription: { color: 'gray' },
	closeButton: {
		position: 'absolute',
    	right: theme.spacing(1),
    	top: theme.spacing(1),
    	color: theme.palette.grey[500],
	}
}));

const BottomButton = ({text, href, absolute}) => (
	<Box component='p' position={ absolute ? 'absolute' : 'inherit' } bottom={0}>
		<Button
			href={ href }
			variant='contained'
			color='secondary'
		>
			{ text }
		</Button>
	</Box>
);

const Dionysus = () => (
	<Grid container spacing={2}>
		<Grid item xs={12} md={6}>
			<p>
				Dionysus was an app developed and published in early 2020 using SwiftUI.
				It stems from my own need to rate a restaurant using a weighted average of FourSquare,
				Yelp and DianPing ratings to determine whether it worths my time.
			</p>
			<p> This app helps users check restaurant ratings from different platforms all in one piece,
				so you only need to open one app instead of three.
			</p>
			<p>
				Check this video for realtime usage of the app. You can also find more information on the app store.
				Source code of this app can be found <a href='https://github.com/huangginny/Dionysus'>here.</a>
			</p>
			<Hidden smDown>
				<BottomButton
					absolute
					text='Download on App Store'
					href='https://apps.apple.com/az/app/dionysus-ratings/id1497078272'
				/>
			</Hidden>
		</Grid>
		<Grid item xs={12} md={6}>
			<div style={{ 
				paddingTop: 'calc(100vh - 72px)',
				position:'relative'
			}}>
				<iframe
					title="dionysus-vimeo"
					src="https://player.vimeo.com/video/501471963"
					style={{ 
						position: 'absolute',
						top: 0,
						left: 0,
						width:'100%',
						height:'100%',
						maxHeight: '100vh',
						maxWidth: '100vw'
					}}
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
			<p>
				<a href="https://vimeo.com/501471963">dionysus-v1.1</a> from <a href="https://vimeo.com/user131457959">Ginny</a> on <a href="https://vimeo.com">Vimeo</a>.
			</p>
			<Hidden mdUp>
				<BottomButton
					text='Download on App Store'
					href='https://apps.apple.com/az/app/dionysus-ratings/id1497078272'
				/>
			</Hidden>
		</Grid>
	</Grid>
);

const Wireless = () => (
	<Box>
		<img src='/images/ww-screenshot.png' />
		<p>
			I teamed up with two other diehard Potterheads who I've known since teenage years on the former
			hoolee8.com, a Chinese Harry Potter community in the form of a BBS.
		</p>
		<p>
			While the other two will be in charge of the content and distribution, I designed the logo, implemented
			UI (coded a new WordPress theme from scratch and hated php ever since,) deployed it to a VPS, and made
			sure that users in China are able to access through the "Great Firewall" with little latency.
		</p>
		<p>
			We haven't officially started adding content and release it to the public yet <span role="img">🤫</span>
			but yeah, you get the gist.
		</p>
		<BottomButton
			text='Go to wizardingwireless.com'
			href='https://wizardingwireless.com'
		/>
	</Box>
);

const projs = [{
	name: 'Dionysus Ratings',
	imageFileName: 'dionysus-white-3x.png',
	description: 'god\'s eye view of what you can eat',
	content: <Dionysus />
},{
	name: 'Wizarding Wireless',
	imageFileName: 'logo-white-250x100.png',
	description: 'the future best chinese news feed on all things harry potter and wizarding world',
	content: <Wireless />
}];

const Project = ({ name, imageFileName, description, idx, activeCard, onOpen, onClose, content }) => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	return (<React.Fragment>
		<Card className={classes.fullheight}>
			<CardActionArea onClick={onOpen} className={classes.fullheight}>
				<CardMedia
					className={classes.thumbnail}
					image={`/images/${imageFileName}`}
        			title={ name }
				/>
				<CardContent>
					<h4 className={classes.cardTitle}>-&nbsp;&nbsp;{ name.toLowerCase() }&nbsp;&nbsp;-</h4>
					<div className={classes.cardDescription}>{ description.toLowerCase() }</div>
				</CardContent>
			</CardActionArea>
		</Card>
		<Dialog
			open={ activeCard === idx }
			onClose={ onClose }
			aria-labelledby={"proj-dialog-" + idx}
			fullScreen={fullScreen}
		>
			<DialogTitle id={"proj-dialog-" + idx}>
				{ name }
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        			<CloseIcon />
        		</IconButton>
			</DialogTitle>
			<DialogContent>{ content }</DialogContent>
		</Dialog>
	</React.Fragment>)
};

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeCard : -1 };
	}

	handleDialogClose() {
		this.setState({ activeCard: -1 });
	}

	handleDialogOpen(k) {
		this.setState({ activeCard: k });
	}

	render() {
		return (
			<Box mt={this.props.mt}>
				<h3>projects</h3>
				<Grid container spacing={2}>
					{ projs.map((proj, idx) => 
						<Grid item xs={12} sm={6} md={4} key={idx} >
							<Project 
								idx={idx}
								name={proj.name}
								imageFileName={proj.imageFileName}
								description={proj.description}
								content={proj.content}
								activeCard={this.state.activeCard}
								onOpen={() => this.handleDialogOpen(idx)} 
								onClose={this.handleDialogClose.bind(this)}
							/>
						</Grid>)
					}
				</Grid>
			</Box>
		);
	}
}

export default Projects;