import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import DarkBackground from "./DarkBackground"
import SideNav from "./SideNav"
import Footer from "./Footer"

import "./layout.css"

export default function Layout({ children }) {
  const [isShowSideNav, toggle] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-gray-100">
      <DarkBackground onClickOutside={toggle} isShowSideNav={isShowSideNav} />
      <SideNav onToggle={toggle} isShowSideNav={isShowSideNav} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        isShowSideNav={isShowSideNav}
        onToggle={toggle}
      />
      <main className="mx-auto my-8 h-full max-w-screen-md lg:max-w-screen-lg min-h-screen pt-0 pb-5 px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
