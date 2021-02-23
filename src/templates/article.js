import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Disclaimer from "../components/Disclaimer";
import Paginator from "../components/Paginator";

const useStyles = makeStyles({
	subtitle: { color: 'grey' },
	icon: {
		verticalAlign: 'text-bottom',
		fontSize: '1rem',
	}
});

export default function Article({ data, pageContext }) {
	const classes = useStyles();

	const post = data.markdownRemark;
	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<div>
				<h1>{post.frontmatter.title}</h1>
				<p className={classes.subtitle}>
					<TodayIcon className={classes.icon} />&nbsp;
					{post.frontmatter.date.toLowerCase()}
					&nbsp;&nbsp;&nbsp;&nbsp;<QueryBuilderIcon className={classes.icon} />&nbsp;
					{post.timeToRead <= 1 ? '1 min read' : `${post.timeToRead} mins read`}
				</p>
			<div dangerouslySetInnerHTML={{ __html: post.html }} /></div>
			<Paginator
				prev={ pageContext.prev }
				next={ pageContext.next } 
				pt={3}
				pb={4}
			/>
			<Disclaimer py={3} />
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;