import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Hidden } from '@material-ui/core';
import Avatar from '../components/avatar';
import Highlight from '../components/highlight';
import Experience from './experience';

const useStyles = makeStyles((theme) => ({ 
	name: { 
		[theme.breakpoints.up('lg')]: {
			'& > h1': { fontSize: '60px' }
		},
		[theme.breakpoints.only('xs')]: {
			lineHeight: '2rem',
		},
		fontFamily: 'Jazz LET, fantasy',
		fontWeight: 'bold',
		'& > *': { display: 'inline' },
	},
	intro: { margin: 0 },
}));

const Header = ({ siteTitle }) => {
	const classes = useStyles();
	return <Box mt={3}><Grid container direction='row' spacing={2} justify='space-between'>
		<Grid item xs={12} sm container direction='column' alignItems='flex-start'>
			<div className={classes.name}>
				<h1 className={classes.name}><Highlight>ginny h</Highlight>uang&nbsp;</h1>
				<h2>,&nbsp;</h2>
				<Hidden smUp><br/></Hidden>
				<h2>aka <Highlight>ginster</Highlight></h2>
			</div>
			<p className={classes.intro}><br/>web and mobile developer. code detective and problem solver. lives in washington dc.</p>
			<p className={classes.intro}>nickname courtesy of one of my favorite coworkers, cat<span role='img' aria-label='cat'>🐱</span></p>
			<Hidden only='xs'><Experience mt={2} /></Hidden>
		</Grid>
		<Grid item xs={12} sm='auto'><Avatar style={{ margin: '0 auto' }} /></Grid>
	</Grid></Box>
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
