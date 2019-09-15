import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { MdWbSunny } from "react-icons/md"
import Hamburger from "./Hamburger"
import Logo from "../../static/images/transparent-logo.png"

const Container = styled("div")`
  width: 780px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 780px) {
    padding: ${rhythm(1)} 1.0875rem;
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
  border-radius: 5px;
  padding: 8px;
  color: #222;
  @media (max-wdith: 480px) {
    font-size: 24px;
  }
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
  flex: 1;
  @media (max-width: 780px) {
    display: none;
  }
`

const NavItem = styled("li")`
  padding: 8px 10px;
  height: 37px;
  margin: 0 ${rhythm(0.5)};
  > a {
    color: #222;
    text-decoration: none;
    &:hover {
      color: #f92300;
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoContainer>
              <img
                src={Logo}
                alt="Codenothing logo"
                css={css`
                  margin-bottom: 0;
                  @media (max-width: 480px) {
                    height: 70px;
                  }
                `}
              />
              <LogoText>
                CODE<span>NOTHING</span>
              </LogoText>
            </LogoContainer>
          </Link>
          <NavContainer>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavContainer>
          <div>
            <Hamburger onToggle={onToggle} isShowSideNav={isShowSideNav} />
          </div>
        </Container>
      </header>
    </React.Fragment>
  )
}

export default Header
