import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact-us.css"

export default () => {
  const {
    site: {
      siteMetadata: { shortTitle, name, email },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shortTitle
          name
          email
        }
      }
    }
  `)

  const emailSubject = `Hey, ${name}! Someone has reached out to you on ${shortTitle} website.`

  return (
    <Layout>
      <SEO title="Contact Us" />

      <header className="entry-header">
        <h1 className="entry-title">Contact Us</h1>
      </header>

      <div className="entry-content">
        <h3>Want to talk? So do we.</h3>
        <p>
          Fill out the form below and we will reach out as soon as possible.
        </p>
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action={`https://formspree.io/${email}`}
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="John Doe"
              required
            />

            <label for="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="john.doe@example.com"
              required
            />

            <label for="message">Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Tell us what is your story."
              required
            ></textarea>

            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value={emailSubject}
            />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  )
}
