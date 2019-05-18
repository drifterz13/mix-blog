import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const SideNavContainer = styled("div")`
  height: 100%;
  width: 70%;
  transform: ${props =>
    props.isShowSideNav ? "translateX(0%)" : "translateX(100%)"};
  position: absolute;
  z-index: 999;
  top: 0;
  left: 30%;
  background: ${props => (props.darkMode ? `#131315` : `#fff`)};
  overflow-x: hidden;
  transition: transform 0.3s;
  will-change: transform;
  padding-top: ${rhythm(2)};
`

const SideNavItem = styled(Link)`
  padding: ${rhythm(0.5)} ${rhythm(1)};
  text-decoration: none;
  display: block;
  transition: transform 0.3s;
  will-change: transform;
`

export default ({ isShowSideNav, darkMode }) => {
  return (
    <SideNavContainer darkMode={darkMode} isShowSideNav={isShowSideNav}>
      <SideNavItem
        css={css`
          color: ${darkMode ? `#fff` : `#2a2a2a`};
        `}
        to="/about"
      >
        About
      </SideNavItem>
      <SideNavItem
        css={css`
          color: ${darkMode ? `#fff` : `#2a2a2a`};
        `}
        to="/contact"
      >
        Contact
      </SideNavItem>
    </SideNavContainer>
  )
}
