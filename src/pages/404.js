import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <header class="entry-header">
      <h1 class="entry-title">NOT FOUND</h1>
    </header>

    <div className="entry-content">
      The page you're looking for, doesn't exist.
    </div>
  </Layout>
)

export default NotFoundPage
