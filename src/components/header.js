import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Avatar from './avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = makeStyles((theme) => ({ 
	name: { 
		[theme.breakpoints.up('lg')]: {
			'& > h1': { fontSize: '60px', paddingLeft: '1rem'  }
		},
		'& > *': { display: 'inline' }
	}
}));
const Highlight = ({children}) => <Box component='span' color={deepOrange[500]}>{children}</Box>;

const Header = ({ siteTitle }) => {
	const classes = useStyles();
	return <Box><Grid container direction='row' spacing={2} justify='space-between'>
		<Grid item xs={12} md container direction='column' alignItems='flex-start'>
			<div className={classes.name}>
				<h3>introducing... </h3>
				<h1 className={classes.name}><Highlight>ginny h</Highlight>uang</h1>
			</div>
			<p><h4 style={{display: 'inline-block'}}>aka <Highlight>ginster</Highlight></h4> -- 
				thanks to one of my favorite coworkers, cat, for giving me this nickname <span role='img' aria-label='cat'>🐱</span>
			</p>
			<br/>
			<p>born and raised in shenzhen, china. currently lives in <Highlight>washington, dc.</Highlight></p>
			<p>web and mobile developer. code detective and problem solver.</p>
			<p>handy with <Highlight>html5 and javascript,</Highlight> plays around with xcode sometimes.&nbsp;
			future goals include becoming a better ui designer and amateur game maker.</p>
		</Grid>
		<Grid item xs={12} md='auto'><Avatar style={{ margin: '0 auto' }} /></Grid>
	</Grid></Box>
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
