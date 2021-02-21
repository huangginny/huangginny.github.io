import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Disclaimer from "../components/Disclaimer";
import Paginator from "../components/Paginator";

export default function Article({ data, pageContext }) {
	const post = data.markdownRemark;
	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<div>
				<h1>{post.frontmatter.title}</h1>
				<p style={{color: 'grey'}}>{post.frontmatter.date.toLowerCase()}</p>
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
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;