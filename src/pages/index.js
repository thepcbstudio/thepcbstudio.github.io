import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thumbnail = () => {
  const {
    placeholderImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "givingLifetoPCB.png" }) {
        childImageSharp {
          fluid(maxWidth: 485, maxHeight: 152, cropFocus: NORTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
      fluid={fluid}
    />
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="post-thumbnail">
      <Thumbnail />
    </div>

    <div className="entry-content">
      <h3>Our Services</h3>
      <ul>
        <li>
          Expertise in PCB Layout Designing. We can make your ideas happen!
        </li>
        <li>16+ years of industry experience. So you will be in good hands.</li>
        <li>
          Collaboration with domestic &amp; offshore clients as well as contract
          manufacturers.
        </li>
        <li>
          Knowledge of advanced layout tools like PADS, Boardstation, Xpedition,
          Altium Designer, Allegro, Valor, and Eagle etc.
        </li>
        <li>Highest quality standards in the industry.</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
