import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { MdWbSunny } from "react-icons/md"
import Hamburger from "./Hamburger"

import { ThemeContext } from "../utils/theme"

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
  border: 5px solid ${props => (props.darkMode ? `#00f9e6` : `#639ee2`)};
  border-radius: 14px;
  padding: 8px;
  color: ${props => (props.darkMode ? "#00f9e6" : "auto")};
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
    color: ${props => (props.darkMode ? "#00f9e6" : "#2a2a2a")};
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
  const { darkMode, setTheme } = React.useContext(ThemeContext)

  return (
    <React.Fragment>
      <header
        css={css`
          background: ${darkMode ? "#0a0a0a" : "#fff"};
          height: 150px;
          color: #2a2a2a;
        `}
      >
        <Container>
          <LogoContainer>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LogoText darkMode={darkMode}>
                CODE<span>NOTHING</span>
              </LogoText>
            </Link>
          </LogoContainer>
          <NavContainer>
            <NavItem darkMode={darkMode}>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem darkMode={darkMode}>
              <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem>
              <MdWbSunny
                onClick={() => setTheme(darkMode ? "light" : "dark")}
                size={28}
                css={css`
                  margin: 0 15px;
                  color: ${darkMode ? `#fff` : `#2a2a2a`};
                `}
              />
            </NavItem>
          </NavContainer>
          <div
            css={css`
              align-self: flex-start;
              display: flex;
            `}
          >
            <MdWbSunny
              onClick={() => setTheme(darkMode ? "light" : "dark")}
              size={28}
              css={css`
                margin: 0 15px;
                color: ${darkMode ? `#fff` : `#2a2a2a`};
                display: none;
                @media (max-width: 480px) {
                  display: block;
                }
              `}
            />
            <Hamburger onToggle={onToggle} isShowSideNav={isShowSideNav} />
          </div>
        </Container>
      </header>
    </React.Fragment>
  )
}

export default Header
