/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
 const path = require(`path`);
 const { createFilePath } = require(`gatsby-source-filesystem`);

 exports.onCreateNode = ({ node, getNode, actions }) => {
 	const { createNodeField } = actions;
 	if (node.internal.type === `MarkdownRemark`) {
 		const slug = createFilePath({ node, getNode });
 		createNodeField({
 			node,
 			name: `slug`,
 			value: slug,
 		});
 	}
 };

exports.createPages = async ({ graphql, actions }) => {
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark(sort: {
				fields: [frontmatter___date]
				order: DESC
			}) {
				edges {
					node {
						fields {
							slug
						}
					}
					previous {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					next {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
  	`);
	result.data.allMarkdownRemark.edges.forEach(({ node, previous, next }) => {
  		createPage({
	  		path: node.fields.slug,
	  		component: path.resolve(`./src/templates/article.js`),
	  		context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
				prev: !!previous ? { slug: previous.fields.slug, title: previous.frontmatter.title } : null,
				next: !!next ? { slug: next.fields.slug, title: next.frontmatter.title } : null
			},
		});
	});
};