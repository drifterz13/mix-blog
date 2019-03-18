import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const Container = styled("div")`
  align-self: flex-start;
  display: inline-block;
  width: 23px;
  height: 23px;
  cursor: pointer;
  transition: 0.4s ease all;
  position: absolute;
  right: ${rhythm(1)};
  z-index: 999;
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
  width: 23px;
  height: 3px;
  background: #2a2a2a;
  margin: 4px auto;
  transition: 0.4s ease all;
  will-change: transform;
`

const BarTop = styled(Bar)``

const BarBottom = styled(Bar)``

const BarMiddle = styled(Bar)``

export default ({ onToggle, isShowSideNav }) => (
  <Container
    isShowSideNav={isShowSideNav}
    onClick={() => onToggle(!isShowSideNav)}
  >
    <BarTop />
    <BarMiddle />
    <BarBottom />
  </Container>
)
