import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Hamburger from "./Hamburger"

const Container = styled("div")`
  width: calc(100% - 150px);
  margin: 0 auto;
  padding: ${rhythm(1)};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
  align-self: center;
`

const LogoText = styled("h2")`
  margin: 0;
  display: flex;
  flex-direction: column;
  border: 5px solid #639ee2;
  border-radius: 14px;
  padding: 8px;
`

const NavContainer = styled("ul")`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  flex-flow: row wrap;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  min-width: 650px;
  @media (max-width: 780px) {
    display: none;
  }
`

const NavItem = styled("li")`
  padding: 8px 10px;
  height: 37px;
  margin: 0 ${rhythm(0.5)};
  > a {
    color: #2a2a2a;
    text-decoration: none;
    &:hover {
      color: #f34a4a;
      cursor: pointer;
    }
  }
  @media (max-width: 780px) {
    margin: auto;
  }
`

const Header = ({ isShowSideNav, onToggle }) => {
  return (
    <React.Fragment>
      <header
        css={css`
          background: #fff;
          height: 150px;
          color: #2a2a2a;
        `}
      >
        <Container>
          <LogoContainer>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LogoText>
                CODE<span>NOTHING</span>
              </LogoText>
            </Link>
          </LogoContainer>
          <NavContainer>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavContainer>
          <Hamburger onToggle={onToggle} isShowSideNav={isShowSideNav} />
        </Container>
      </header>
    </React.Fragment>
  )
}

export default Header
