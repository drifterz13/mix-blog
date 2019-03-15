import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const stacks = ["React", "Node.js", "Gatsby.js", "Html", "CSS"]

const NavItem = styled("li")`
  padding: 8px 10px;
  margin: 0 ${rhythm(1)};
  height: 37px;
  &:hover {
    border-bottom: 3px solid #2ec4b6;
    cursor: pointer;
  }
`

const Header = () => (
  <header
    css={css`
      background: #fdfffc;
      height: 200px;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.525);
    `}
  >
    <div
      css={css`
        width: calc(100% - 150px);
        margin: 0 auto;
        padding: ${rhythm(1)};
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1
        css={css`
          text-transform: uppercase;
          margin-bottom: ${rhythm(1)};
        `}
      >
        HEADER
      </h1>
      <ul
        css={css`
          list-style: none;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 40px;
        `}
      >
        {stacks.map(stack => (
          <NavItem>{stack}</NavItem>
        ))}
      </ul>
    </div>
  </header>
)

export default Header
