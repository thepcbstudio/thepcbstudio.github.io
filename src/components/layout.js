import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "./layout.css"

import Head from "./head"
import Footer from "./footer"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <Head />

      <Helmet>
        <body className="home page-template-default page custom-background wp-custom-logo wp-embed-responsive" />
      </Helmet>

      <div id="page" className="hfeed site">
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        <Sidebar />

        <div id="content" className="site-content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main" role="main">
              <article className="page type-page status-publish hentry">
                {children}
              </article>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
