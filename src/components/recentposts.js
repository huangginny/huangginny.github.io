import React from "react";
import { Link } from "gatsby";
import { Box, Grid, Hidden } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	gridcontainer: { marginTop: '1.5rem' },
	postWrapper: {
		position: 'relative',
	},
	postContent: {
		width: 'calc(100% - 150px)',
		display: 'inline-block', 
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	postTitle: {
		fontWeight: 'bold',
		color: theme.palette.secondary.main,
		textDecoration: 'none',
		"&:hover": {
			color: '#827717'
		},
	},
	postDate: {
		color:'grey',
		display:'inline-block',
		width: '150px',
		textAlign: 'right',
		verticalAlign: 'top',
	},
	linkToPost: { paddingTop: '1rem' }
}));

const Post = ({ data, classes }) => (
	<Box className={classes.postWrapper}>
		<Box className={classes.postContent}>
			<Link to={ data.fields.slug } className={classes.postTitle}>{ data.frontmatter.title }</Link>
			<Hidden xsDown>&nbsp;·&nbsp;<span>{ data.excerpt }</span></Hidden>
		</Box>
		<span className={classes.postDate}>{ data.frontmatter.date }</span>
	</Box>
);

const RecentPosts = ({ mt, posts, totalCount }) => {
	const theme = useTheme()
	const classes = useStyles(theme);
	return <Box mt={mt}>
		<h3>recent posts</h3>
		<Grid container direction='column' className={classes.gridcontainer}>
		{ posts.map(
			({ node }) => <Grid item xs={12} key={node.id}><Post data={node} classes={classes} /></Grid>
		) }
		</Grid>
		<p className={classes.linkToPost}><Link to='/posts/'>see all { totalCount } posts here ></Link></p>
	</Box>;
};

export default RecentPosts;