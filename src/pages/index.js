import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Experience from "../components/experience";
import Skills from "../components/skills";
import RecentPosts from "../components/recentposts";

const IndexPage = ({data}) => (
	<Layout>
		<SEO title='home' />
		<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
		<Experience />
		<Skills />
		<RecentPosts posts={data.allMarkdownRemark.edges} totalCount={ data.allMarkdownRemark.totalCount } />
	</Layout>
);

export const query = graphql`
	query {
		allMarkdownRemark(
			limit: 5,
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
					excerpt
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
export default IndexPage;
