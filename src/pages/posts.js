import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
	title: {
		fontWeight: 'bold',
		color: 'hsla(0, 0%, 0%, 0.9)',
		'&:hover': {
			borderBottom: `2px solid ${deepOrange[500]}`,
			boxShadow: 'none'
		}
	}
});
const Post = ({slug, title, frontmatter, date, excerpt}) => {
	const classes = useStyles();
	return <Box mt={4}>
		<h3><Link to={slug} className={classes.title}>{title}{" "}</Link></h3>
		<Box mt={0.8} mb={2.5} color='gray'>{ date }</Box>
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
			excerpt={ node.excerpt } 
		/>
	))}
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
