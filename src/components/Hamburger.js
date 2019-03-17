import React from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  align-self: flex-start;
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.4s ease all;
  &:hover ${() => BarTop} {
    transform: rotateZ(45deg) translateX(25%) translateY(150%);
  }
  &:hover ${() => BarMiddle} {
    width: 0;
  }
  &:hover ${() => BarBottom} {
    transform: rotateZ(-45deg) translateX(25%) translateY(-150%);
  }
`

const Bar = styled("div")`
  display: block;
  width: 30px;
  height: 3px;
  background: #2a2a2a;
  margin: 6px auto;
  transition: 0.4s ease all;
  will-change: transform;
`

const BarTop = styled(Bar)``

const BarBottom = styled(Bar)``

const BarMiddle = styled(Bar)``

export default () => (
  <Container>
    <BarTop />
    <BarMiddle />
    <BarBottom />
  </Container>
)
