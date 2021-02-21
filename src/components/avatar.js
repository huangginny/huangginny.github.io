
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Box from '@material-ui/core/Box';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Avatar = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-picture-face-hidden.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>;
  }
  return (
    <Box 
      border={2}
      borderColor='secondary.main'
      borderRadius="50%"
      width={250}
      height={250}
      style={{overflow: 'hidden', borderStyle: 'dotted', ...props.style}}
    >
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="My Avatar"
      />
    </Box>
  );
}

export default Avatar;
