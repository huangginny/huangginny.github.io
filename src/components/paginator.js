import React from 'react';
import { Link } from "gatsby";
import { Grid, Box } from '@material-ui/core';

const Paginator = ({ prev, next, pt, pb }) => (
	<Box pt={pt} pb={pb} >
		<Grid container justify='space-between'>
			<Grid item>{ !!prev && <Link to={prev.slug}>&lt; Prev: { prev.title } </Link> }</Grid>
			<Grid item>{ !!next && <Link to={next.slug}>Next: { next.title } &gt;</Link> }</Grid>
		</Grid>
	</Box>
);

export default Paginator;