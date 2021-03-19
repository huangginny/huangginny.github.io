import React from "react";
import { graphql } from "gatsby";
import Hidden from '@material-ui/core/Hidden';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../sections/header";
import Experience from "../sections/experience";
import Skills from "../sections/skills";
import RecentPosts from "../sections/recentposts";
import Contact from "../sections/contact";
import Projects from "../sections/projects"

const IndexPage = ({data}) => (
	<Layout>
		<SEO title='home' />
		<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
		<Skills mt={3} />
		<Hidden smUp><Experience mt={2} /></Hidden>
		<Projects mt={3}/>
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
