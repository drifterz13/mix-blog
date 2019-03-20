import React, { useState } from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Portal from "./Portal"
import DarkBackground from "./DarkBackground"
import SideNav from "./SideNav"
import Footer from "./Footer"

const Wrapper = styled("div")`
  position: relative;
  overflow-x: hidden;
  overflow-y: ${props => (props.isShowSideNav ? `hidden` : `auto`)};
  height: ${props => (props.isShowSideNav ? `100vh` : `100%`)};
`

const MainContainer = styled("div")`
  margin: ${rhythm(1)} auto;
  max-width: 1080px;
  height: 100%;
  min-height: 100vh;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => {
  const [isShowSideNav, toggle] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Portal>
            <Wrapper isShowSideNav={isShowSideNav}>
              <DarkBackground
                onClickOutside={toggle}
                isShowSideNav={isShowSideNav}
              />
              <SideNav onToggle={toggle} isShowSideNav={isShowSideNav} />
              <Header
                siteTitle={data.site.siteMetadata.title}
                isShowSideNav={isShowSideNav}
                onToggle={toggle}
              />
              <MainContainer>
                <main>{children}</main>
              </MainContainer>
              <Footer />
            </Wrapper>
          </Portal>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
