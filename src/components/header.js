import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const stacks = ["React", "Node.js", "Gatsby.js", "Html", "CSS"]

const NavItem = styled("li")`
  padding: 8px 10px;
  margin: 0 ${rhythm(1)};
  height: 37px;
  &:hover {
    border-bottom: 3px solid yellow;
    cursor: pointer;
  }
`

const Header = () => (
  <header
    css={css`
      background: #2a2a2a;
      height: 300px;
      color: #fafafa;
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
      <Link to="/">
        <h1
          css={css`
            text-transform: uppercase;
            margin-bottom: ${rhythm(1)};
          `}
        >
          HEADER
        </h1>
      </Link>
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
        {stacks.map((stack, index) => (
          <NavItem key={index.toString()}>{stack}</NavItem>
        ))}
      </ul>
    </div>
  </header>
)

export default Header
