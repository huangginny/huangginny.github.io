import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import {
	AppBar, Toolbar, CssBaseline, Divider, Drawer, Hidden, 
	IconButton, List, ListItem, ListItemText, Box 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import lime from '@material-ui/core/colors/lime';
import "./layout.css";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: { // Grid container
		display: 'flex',
	},
	drawer: {
		fontSize: '1.1rem',
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		backgroundColor: deepOrange[400]
	},
	logoContainer: {
		width: 'calc( 100% - 50px )',
		'& > div': {
			marginLeft: 'calc(( 100% + 50px ) / 2 - 66px )'
		}
	},
	menuButton: {
		marginRight: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	toolbarTitle: {
		fontSize: '1rem',
		color: deepOrange[200],
		textAlign: 'center',
		paddingTop: '20px'
	},
	drawerPaper: {
		width: drawerWidth,
	},
	link: {
		textAlign: 'center',
		'&:hover': {
			boxShadow: 'none',
			color: lime[900]
		}
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		width: `calc(100% - ${drawerWidth}px)`,
		maxWidth: '960px',
		margin: '0 auto',
	},
	footer: {
		fontSize: '0.8rem',
		textAlign: 'center',
		bottom: '1rem',
	    position: 'absolute',
	    width: '100%',
	}
}));

const LinkListItem = ({text, link, className}) => (
	<ListItem button component={Link} to={link} className={className}>
		<ListItemText primary={text} disableTypography={true} />
	</ListItem>
);

function Layout({ children, window }) {
	const classes = useStyles();

	const faviconImg = useStaticQuery(graphql`
	    query {
			placeholderImage: file(relativePath: { eq: "favicon-32x32.png" }) {
				childImageSharp {
					fixed(width: 32, height: 32) {
						...GatsbyImageSharpFixed
					}
				}
	 		}
	    }
	`);

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<p className={classes.toolbarTitle}><code> ginnyhuang@tech:~$ ls -l </code></p>
			</div>
			<Divider />
			<List>
				<LinkListItem text='home' link='/' className={classes.link} />
				<LinkListItem text='posts' link='/posts/' className={classes.link} />
			</List>
			<footer className={classes.footer}>
				© ginny huang {new Date().getFullYear()}, built with
				{` `}
				<a href="https://www.gatsbyjs.com">gatsby</a>
			</footer>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Hidden smUp>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<div className={classes.logoContainer}>
							<Box width={32}>
								<Img
									fixed={faviconImg.placeholderImage.childImageSharp.fixed}
									alt="favicon"
								/>
							</Box>
						</div>
					</Toolbar>
				</AppBar>
			</Hidden>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor="left"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<Hidden smUp><Box height={60}/></Hidden>
				{ children }
			</main>
		</div>
	);
}

Layout.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Layout;
