import React from "react"
import { Link } from "gatsby"
import Image from "./image"

export default () => {
  return (
    <div id="sidebar" className="sidebar">
      <header id="masthead" className="site-header" role="banner">
        <div className="site-branding">
          <Link to="/" className="custom-logo-link">
            <Image
              imageName="cropped-thePCBstudio.png"
              className="custom-logo"
            />
          </Link>
          <p className="site-title">
            <Link to="/">ThePCBStudio</Link>
          </p>
          <p className="site-description">Giving Life to PCB</p>
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
                <a href="https://www.linkedin.com/in/dolly-mitra/">
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
                Dolly Mitra
              </div>
              <div className="confit-email">
                <a href="mailto:dolly.mitra@thepcbstudio.com">
                  dolly.mitra@thepcbstudio.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
