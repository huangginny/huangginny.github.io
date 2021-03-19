import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import tags from '../components/tags';

const options = {
  enableTooltip: false,
  fontSizes: [10, 70],
  padding: 1,
  rotations: 3,
  transitionDuration: 1000
};

const SkillRating = ({ label, value }) => (
	<Grid item xs={12} sm={6} lg={3}>
		<Box
			display='inline-block'
			width={160}
			mt='0.5rem'
			style={{ float: 'left' }}
		>
			{label}
		</Box>
		<Rating size='large' readOnly={true} precision={0.5} value={value} name={label} />
	</Grid>
);

const Skills = ({mt}) => (
	<Box mt={mt}>
		<Box height='400px'>
			<ReactWordcloud words={tags} options={options} />
		</Box>
		<Grid container spacing={2}>
			<SkillRating label='web development' value={5} />
			<SkillRating label='ios applications' value={4.5} />
			<SkillRating label='android applications' value={3.5} />
			<SkillRating label='python' value={5} />
		</Grid>
	</Box>
);

export default Skills;