import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="site-info">
          {`Proudly powered by `}
          <a href="https://www.gatsbyjs.org/" className="imprint">
            Gatsby
          </a>
          {` and `}
          <a href="https://pages.github.com/" className="imprint">
            Github Pages
          </a>
        </div>
      </footer>

      <script type="text/javascript">
        {`
          /* <![CDATA[ */
            var WPGroHo = { "my_hash": "" };
          /* ]]> */
        `}
      </script>

      <script
        type="text/javascript"
        src={`${data.site.siteMetadata.siteUrl}/js/skip-link-focus-fix.js?ver=20141010`}
      ></script>

      <script type="text/javascript">
        {`
          /* <![CDATA[ */
            var screenReaderText = { "expand": "<span class='screen-reader-text'>expand child menu</span>", "collapse": "<span class='screen-reader-text'>collapse child menu</span>" };
          /* ]]> */
        `}
      </script>

      <script
        type="text/javascript"
        src={`${data.site.siteMetadata.siteUrl}/js/functions.js?ver=20150330`}
      ></script>

      <script
        type="text/javascript"
        src={`${data.site.siteMetadata.siteUrl}/js/wp-embed.min.js?ver=5.2.2`}
      ></script>
    </>
  )
}
