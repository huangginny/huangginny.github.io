import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, Hidden, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import Highlight from '../components/highlight';

const useStylesExperience = makeStyles((theme) => ({
	education: {
		marginLeft: 0,
		'& > li': { 
			margin: 0,
			padding: '0 0 3px',
			[theme.breakpoints.up('sm')]: { lineHeight: '0.8rem' },
		},
		'& div': { minWidth: '35px' },
		[theme.breakpoints.up('sm')]: { fontSize: '0.7rem' }
	}
}));

const Entry = ({ isSchool, title, name, time, place }) => {
	const Icon = isSchool ? SchoolIcon : BusinessIcon;
	return <ListItem disableGutters >
		<ListItemIcon><Icon fontSize='small' /></ListItemIcon>
		<ListItemText disableTypography >{ title }, <Highlight><i>{ name }</i></Highlight> - { time }</ListItemText>
	</ListItem>;
};

const Experience = ({mt}) => {
	const classes = useStylesExperience();
	return <Box mt={mt}>
		<Hidden smUp><h3>experience</h3></Hidden>
		<List disablePadding className={classes.education} >
			<Entry
				name='us news and world report'
				title='senior software developer'
				time='since 2020'
				place='washington, dc'
			/>
			<Entry
				name='freewheel'
				title='software engineer'
				time='2015~2020'
			/>
			<Entry
				isSchool
				name='university of southern california'
				title='master of science in computer science'
				time='2019'
			/>
			<Entry
				isSchool
				name='washington and lee university'
				title='bachelor of science in computer science & maths'
				time='2014'
			/>
		</List>
	</Box>;
};

export default Experience;