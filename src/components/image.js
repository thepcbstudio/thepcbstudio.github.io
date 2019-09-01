import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
export default props => {
  const { allImageSharp } = useStaticQuery(graphql`
    query ImageComponentFuild {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Img
      className={props.className}
      fluid={
        allImageSharp.edges.find(
          element => element.node.fluid.src.split("/").pop() === props.imageName
        ).node.fluid
      }
    />
  )
}
