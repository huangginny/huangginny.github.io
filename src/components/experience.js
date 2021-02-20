import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Hidden } from '@material-ui/core';
import { 
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot
} from '@material-ui/lab';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStylesEntry = makeStyles((theme) => ({
	timelineOppositeContent: { flex: 0.2, paddingLeft: 0 },
	timelineDot: { borderColor: deepOrange[300] },
	timelinePaper: { zIndex: 1, opacity: 0.92 },
	title: { margin: '0.5rem 0' },
	description: { 
		margin: '0.3rem 0',
		fontSize: '0.7rem'
	}
}));
const useStylesExperience = makeStyles((theme) => ({
	wrapper: { position: 'relative' },
	timeline: { margin: 0 },
	backgroundImage: { 
		position: 'absolute',
		float: 'right',
		right: '60px',
		top: '300px',
		zIndex: -3
	}
}));

const Entry = ({ title, name, time, place, children }) => {
	const classes = useStylesEntry();
	return <TimelineItem>
		<TimelineOppositeContent className={classes.timelineOppositeContent}>
			<Box>{ time }</Box>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot variant="outlined" className={classes.timelineDot} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<Paper className={classes.timelinePaper}>
				<Box p={2}>
					<h4 className={classes.title}>{ title }</h4>
					<Box color={deepOrange[600]}>{ name }</Box>
					<Box><i>{ place }</i></Box>
					{ !!children ? <Box pt={1} className={classes.description}>{ children }</Box> : null }
				</Box>
			</Paper>
		</TimelineContent>
	</TimelineItem>;
};

const Experience = () => {
	const classes = useStylesExperience();
	return <Box mt={3} className={classes.wrapper} >
		<Grid container mt={3}>
			<Grid item xs={12} md={6}>
				<h3>work history</h3>
				<Timeline className={classes.timeline}>
					<Entry
						name='u.s news and world report'
						title='senior software developer'
						time='2020 - ?'
						place='washington, dc'
					> diligently driving the ad experience and audience measurement of <a href='usnews.com'>usnews.com</a> from start to finish </Entry>
					<Entry
						name='freewheel'
						title='software engineer'
						time='2015 - 2020'
						place='new york, ny'
					> proudly building sdks for web/ios/android to support video ad playback on as many platforms as possible </Entry>
					<Entry
						name='center for open science'
						title='infrastructure intern'
						time='2014 - 2015'
						place='charlottesville, va'
					> happily supporting the 
						&nbsp;<a href='https://www.cos.io/products/osf'>open science framework</a> 
						&nbsp;for academic researchers </Entry>
				</Timeline>
			</Grid>
			<Grid item xs={12} md={6}>
				<h3>education</h3>
				<Timeline className={classes.timeline}>
					<Entry
						title='master of science, computer science'
						name='university of southern california'
						time='2019'
						place='remote'
					/>
					<Entry
						title='bachelor of science, computer science & maths'
						name='washington and lee university'
						time='2014'
						place='lexington, va'
					/>
				</Timeline>
			</Grid>
		</Grid>
		<Hidden xsDown><img alt='washington and lee university' className={classes.backgroundImage} src='https://live.staticflickr.com/5004/5288138501_3e25904bd9.jpg' /></Hidden>
	</Box>;
};

export default Experience;