import React from 'react';
import { Box, Grid, Hidden } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import tags from './tags';

const options = {
  enableTooltip: false,
  fontSizes: [10, 70],
  padding: 1,
  rotations: 3,
  transitionDuration: 0 // save the planet with less javascript animations!
};

const SkillRating = ({ label, value }) => (
	<Box pt={1} pl={2}>
		<Hidden xsDown><Box>{label}</Box></Hidden>
		<Hidden smUp>
			<Box
				display='inline-block'
				width={100}
				mt='0.5rem'
				style={{ float: 'left' }}
			>
				{label}
			</Box>
		</Hidden>
		<Rating size='large' readOnly={true} precision={0.5} value={value} name={label} />
	</Box>
);

const Skills = ({mt}) => (
	<Box mt={mt}>
		<h3>skills</h3>
		<Grid container direction='row-reverse' spacing={3} alignItems='flex-start'>
			<Grid item xs={12} sm={4}>
				<SkillRating label='javascript' value={5} />
				<SkillRating label='python' value={5} />
				<SkillRating label='swift' value={4.5} />
				<SkillRating label='objective-c' value={4} />
				<SkillRating label='golang' value={3.5} />
			</Grid>
			<Grid item xs={12} sm={8}>
				<ReactWordcloud words={tags} options={options} />
			</Grid>
		</Grid>
	</Box>
);

export default Skills;