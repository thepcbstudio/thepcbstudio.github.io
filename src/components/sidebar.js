import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const {
    placeholderImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cropped-thePCBstudio.png" }) {
        childImageSharp {
          fluid(maxWidth: 248, maxHeight: 248, cropFocus: NORTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={fluid} />
}

export default () => {
  const {
    site: {
      siteMetadata: { shortTitle, description, name, email, linkedIn },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shortTitle
          description
          name
          email
          linkedIn
        }
      }
    }
  `)

  return (
    <div id="sidebar" className="sidebar">
      <header id="masthead" className="site-header" role="banner">
        <div className="site-branding">
          <Link to="/" className="custom-logo-link">
            <div className="custom-logo">
              <Logo />
            </div>
          </Link>
          <p className="site-title">
            <Link to="/">{shortTitle}</Link>
          </p>
          <p className="site-description">{description}</p>
          <button className="secondary-toggle">Menu and widgets</button>
        </div>
      </header>

      <div id="secondary" className="secondary">
        <nav id="site-navigation" className="main-navigation" role="navigation">
          <div className="menu-menu-container">
            <ul id="menu-menu" className="nav-menu">
              <li
                id="menu-item-35"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"
              >
                <Link to="/contact-us/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          id="social-navigation"
          className="social-navigation"
          role="navigation"
        >
          <div className="menu-social-container">
            <ul id="menu-social" className="menu">
              <li
                id="menu-item-36"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"
              >
                <a href={linkedIn}>
                  <span className="screen-reader-text">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="widget-area" className="widget-area" role="complementary">
          <aside
            id="widget_contact_info-3"
            className="widget widget_contact_info"
          >
            <div itemScope itemType="//schema.org/LocalBusiness">
              <div
                className="confit-address"
                itemScope
                itemType="//schema.org/PostalAddress"
                itemProp="address"
              >
                {name}
              </div>
              <div className="confit-email">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
