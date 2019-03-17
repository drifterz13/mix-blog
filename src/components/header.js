import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useWindowWidth } from "./useWindowWidth"
import Hamburger from "./Hamburger"

const stacks = ["React", "Node.js", "Javascript", "Html", "CSS"]

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
  border-radius: 2px;
  padding: 8px;
`

const NavContainer = styled("ul")`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  flex-flow: row wrap;
  text-transform: uppercase;
  font-weight: bold;
  @media (max-width: 480px) {
    display: none;
  }
`

const NavItem = styled("li")`
  padding: 8px 10px;
  height: 37px;
  margin: 0 ${rhythm(0.5)};
  &:hover {
    color: #f92301;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    margin: auto;
  }
`

const Header = () => {
  const width = useWindowWidth()
  console.log(width)
  return (
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

        {width > 480 ? (
          <NavContainer>
            {stacks.map((stack, index) => (
              <NavItem key={index.toString()}>{stack}</NavItem>
            ))}
          </NavContainer>
        ) : (
          <Hamburger />
        )}
      </Container>
    </header>
  )
}

export default Header
