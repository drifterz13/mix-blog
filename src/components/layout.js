import React, { useState } from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import DarkBackground from "./DarkBackground"
import SideNav from "./SideNav"
import Footer from "./Footer"

import "./layout.css"

const Wrapper = styled("div")`
  position: relative;
  overflow-x: hidden;
  overflow-y: ${props => (props.isShowSideNav ? `hidden` : `auto`)};
  height: ${props => (props.isShowSideNav ? `100vh` : `100%`)};
  background: #fafafa;
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
          <Global
            styles={css`
              blockquote {
                border-left-color: #f92300;
              }
              :not(pre) > code[class*="language-"] {
                background: #f5f2f0;
              }
              code {
                font-family: 'Monaco';
              }
              .vscode-highlight .vscode-highlight-line-highlighted {
                background-color: #000;
                box-shadow: inset 2px 0 0 0 rgba(255, 255, 255, 0.5);
              }
            `}
          />
          <div>
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
          </div>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
