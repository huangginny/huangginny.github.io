import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Experience from "../components/experience";
import Skills from "../components/skills";
import RecentPosts from "../components/recentposts";
import Contact from "../components/contact";

const IndexPage = ({data}) => (
	<Layout>
		<SEO title='home' />
		<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
		<Experience mt={3} />
		<Skills mt={3} />
		<RecentPosts mt={3} posts={data.allMarkdownRemark.edges} totalCount={ data.allMarkdownRemark.totalCount } />
		<Contact mt={5} />
	</Layout>
);

export const query = graphql`
	query {
		allMarkdownRemark(
			limit: 3,
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
