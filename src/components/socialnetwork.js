import React from "react";
import { Box, IconButton } from '@material-ui/core';
import { Twitter, LinkedIn, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';

const myAccounts = [
	{ key: 'twitter', icon: <Twitter />, link: 'https://twitter.com/ginsterrific'},
	{ key: 'linkedin', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/jh92710/'},
	{ key: 'github', icon: <GitHub />, link: 'https://github.com/huangginny'}
];

const useStyles = makeStyles({
	alignCenter: { textAlign: 'center', paddingBottom: '0.7rem', color: 'darkgray' },
	account: { '&:hover': { color: lime[800] }}
});

const SocialNetwork = () => {
	const classes = useStyles();
	return <Box>
		<Box className={classes.alignCenter}>- - - - - - - - - - - - - - - - - - -</Box>
		{ myAccounts.map(({key, icon, link}) => (
			<IconButton 
				key={key}
				aria-label={key}
				className={classes.account}
				component='a'
				href={link}
				target='_blank'

			>{ icon }</IconButton>
		))}
	</Box>
};

export default SocialNetwork;