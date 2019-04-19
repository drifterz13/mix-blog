import React from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "../utils/theme"

const Container = styled("div")`
  align-self: flex-start;
  display: none;
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: 0.3s ease all;
  position: relative;
  justify-content: right;
  margin: 0;
  z-index: 999;
  @media (max-width: 780px) {
    display: inline-block;
  }
  ${() => BarTop} {
    transform: ${props =>
      props.isShowSideNav
        ? `rotateZ(45deg) translateX(25%) translateY(150%)`
        : "none"};
  }
  ${() => BarMiddle} {
    width: ${props => (props.isShowSideNav ? 0 : `auto`)};
  }
  ${() => BarBottom} {
    transform: ${props =>
      props.isShowSideNav
        ? `rotateZ(-45deg) translateX(25%) translateY(-150%)`
        : "none"};
  }
`

const Bar = styled("div")`
  display: block;
  width: 26px;
  height: 3px;
  margin: 5px auto;
  transition: 0.3s ease all;
  will-change: transform;
  background: ${props => (props.darkMode ? `#00f9e6` : `#2a2a2a`)};
`

const BarTop = styled(Bar)``

const BarBottom = styled(Bar)``

const BarMiddle = styled(Bar)``

export default ({ onToggle, isShowSideNav }) => {
  const { darkMode } = React.useContext(ThemeContext)
  return (
    <Container
      isShowSideNav={isShowSideNav}
      onClick={() => onToggle(!isShowSideNav)}
    >
      <BarTop darkMode={darkMode} />
      <BarMiddle darkMode={darkMode} />
      <BarBottom darkMode={darkMode} />
    </Container>
  )
}
