import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const stacks = ["React", "Node.js", "Gatsby.js", "Html", "CSS"]

const NavItem = styled("li")`
  padding: 8px 10px;
  height: 37px;
  width: 120px;
  &:hover {
    border-bottom: 3px solid yellow;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    margin: auto;
  }
`

const LogoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  margin-bottom: ${rhythm(1)};
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
        @media (max-width: 480px) {
          width: 100%;
        }
      `}
    >
      <LogoContainer>
        <div
          css={css`
            color: grey;
            font-size: 50px;
            font-weight: bold;
          `}
        >
          {"<"}
          <span
            css={css`
              color: salmon;
              margin-left: 8px;
            `}
          >
            {">"}
          </span>
        </div>
        <h1
          css={css`
            text-transform: uppercase;
            margin: 0 0 0 ${rhythm(1)};
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <span>CODE</span>
            NOTHING
          </div>
        </h1>
      </LogoContainer>

      <ul
        css={css`
          list-style: none;
          margin: 0;
          display: flex;
          justify-content: left;
          align-items: center;
          width: 100%;
          height: 40px;
          flex-flow: row wrap;
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
