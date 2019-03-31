import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const stacks = ["React", "Node.js", "Javascript", "Html", "CSS"]

const SideNavContainer = styled("div")`
  height: 100%;
  width: 70%;
  transform: ${props =>
    props.isShowSideNav ? "translateX(0%)" : "translateX(100%)"};
  position: absolute;
  z-index: 999;
  top: 0;
  left: 30%;
  background-color: #f9f9f9;
  overflow-x: hidden;
  transition: transform 0.3s;
  will-change: transform;
  padding-top: ${rhythm(2)};
`

const SideNavItem = styled("a")`
  padding: ${rhythm(0.5)} ${rhythm(1)};
  text-decoration: none;
  color: #2a2a2a;
  display: block;
  transition: transform 0.3s;
  will-change: transform;
`

export default ({ isShowSideNav }) => (
  <SideNavContainer isShowSideNav={isShowSideNav}>
    {stacks.map((stack, index) => (
      <SideNavItem key={index.toString()}>{stack}</SideNavItem>
    ))}
  </SideNavContainer>
)
