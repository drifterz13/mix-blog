import React, { useState } from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import DarkBackground from "./DarkBackground"
import SideNav from "./SideNav"
import Footer from "./Footer"

import { ThemeContext } from "../utils/theme"
import "./layout.css"
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

const Wrapper = styled("div")`
  position: relative;
  overflow-x: hidden;
  overflow-y: ${props => (props.isShowSideNav ? `hidden` : `auto`)};
  height: ${props => (props.isShowSideNav ? `100vh` : `100%`)};
  background: ${props => (props.darkMode ? `#131315` : `auto`)};
  color: ${props => (props.darkMode ? `#fff` : `auto`)};
  h1 {
    color: ${props => (props.darkMode ? `#00f9e6` : `auto`)};
  }
`

const MainContainer = styled("div")`
  margin: ${rhythm(1)} auto;
  max-width: 1080px;
  height: 100%;
  min-height: 100vh;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const CODE_NOTHING_THEME = "CODE_NOTHING_THEME"

const Layout = ({ children }) => {
  const initialState =
    typeof window !== "undefined"
      ? localStorage.getItem(CODE_NOTHING_THEME)
      : false
  const [isShowSideNav, toggle] = useState(false)
  const [theme, setTheme] = useState(initialState)
  const isDarkMode = theme === "dark"

  React.useEffect(() => {
    localStorage.setItem(CODE_NOTHING_THEME, theme)
  }, [theme])

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
          <ThemeContext.Provider
            value={{
              setTheme,
              darkMode: isDarkMode,
            }}
          >
            <div>
              <Wrapper darkMode={isDarkMode} isShowSideNav={isShowSideNav}>
                <DarkBackground
                  onClickOutside={toggle}
                  isShowSideNav={isShowSideNav}
                />
                <SideNav
                  darkMode={isDarkMode}
                  onToggle={toggle}
                  isShowSideNav={isShowSideNav}
                />
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
          </ThemeContext.Provider>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
