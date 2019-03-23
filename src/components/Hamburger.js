import React from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  align-self: flex-start;
  display: none;
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: 0.4s ease all;
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
  background: #2a2a2a;
  margin: 5px auto;
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
