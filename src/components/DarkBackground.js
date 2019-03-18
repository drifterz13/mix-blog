import React from "react"
import styled from "@emotion/styled"

const calcStyles = props => (props.isShowSideNav ? "100%" : 0)

const BackGroundElement = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${calcStyles};
  width: ${calcStyles};
  z-index: 998;
  background: hsla(0, 0%, 0%, 0.65);
`

export default ({ isShowSideNav, onClickOutside }) => (
  <BackGroundElement
    onClick={() => onClickOutside(!isShowSideNav)}
    isShowSideNav={isShowSideNav}
  />
)
