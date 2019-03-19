import React, { useState } from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Portal from "./Portal"
import DarkBackground from "./DarkBackground"
import SideNav from "./SideNav"

const Wrapper = styled("div")`
  position: relative;
  overflow-x: hidden;
  overflow-y: ${props => (props.isShowSideNav ? `hidden` : `auto`)};
  height: 100vh;
`

const MainContainer = styled("div")`
  margin: ${rhythm(1)} auto;
  max-width: 1080;
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
            </Wrapper>
          </Portal>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
