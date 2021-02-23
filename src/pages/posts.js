import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Divider } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Disclaimer from "../components/Disclaimer";

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: 'bold',
		color: 'hsla(0, 0%, 0%, 0.9)',
		'&:hover': {
			borderBottom: `2px solid ${theme.palette.secondary.main}`,
			boxShadow: 'none'
		}
	},
	icon: {
		verticalAlign: 'text-bottom',
		fontSize: '1rem',
	}
}));
const Post = ({slug, title, frontmatter, date, readTime, excerpt}) => {
	const theme = useTheme();
	const classes = useStyles(theme);
	return <Box mt={4}>
		<h3><Link to={slug} className={classes.title}>{title}{" "}</Link></h3>
		<Box mt={0.8} mb={2.5} color='gray'>
			<TodayIcon className={classes.icon} />&nbsp;
			{ date.toLowerCase() }
			&nbsp;&nbsp;&nbsp;&nbsp;<QueryBuilderIcon className={classes.icon} />&nbsp;
			{ readTime <= 1 ? '1 min read' : `${ readTime } mins read`}
		</Box>
		<p>{ excerpt }</p>
		<Link to={slug}>read more ></Link>
		<Box mt={3}><Divider /></Box>
	</Box>
};

const Posts = ({data}) => (
  <Layout>
    <SEO title="Posts" />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
	{ data.allMarkdownRemark.edges.map(({ node }) => (
		<Post 
			key={ node.id }
			slug={ node.fields.slug }
			title={ node.frontmatter.title }
			date={ node.frontmatter.date }
			readTime={ node.timeToRead }
			excerpt={ node.excerpt } 
		/>
	))}
	<Disclaimer py={3} />
  </Layout>
);

export const query = graphql`
	query {
		allMarkdownRemark(
			sort: {
				fields: [frontmatter___date]
				order: DESC
			}
		) {
			totalCount
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
					}
					fields {
						slug
					}
					excerpt(pruneLength: 300)
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;
export default Posts;
