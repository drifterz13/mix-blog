import React from "react"
import { css } from "@emotion/core"
import { FaFacebook } from "react-icons/fa"
import { IoMdCall, IoMdMail } from 'react-icons/io'

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const listStyles = css`
  display: flex;
  justify-content: left;
  align-items: center;
  > span {
    margin-left: ${rhythm(1)};
  }
`

export default () => (
  <Layout>
    <div
      css={css`
        max-width: 780px;
        margin: ${rhythm(2)} auto;
        > h1 {
          margin-top: 0;
        }
        @media (max-width: 480px) {
          margin: 0 auto;
        }
      `}
    >
      <h1>CONTACT</h1>
      <ul
        css={css`
          margin-left: 0;
          list-style: none;
        `}
      >
        <li css={listStyles}>
          <IoMdCall size={22} />
          <span>Tel: 094-545-1858</span>
        </li>
        <li css={listStyles}>
          <IoMdMail size={22} />
          <span>devnothing@gmail.com</span>
        </li>
        <li css={listStyles}>
          <FaFacebook size={22} />
          <span>facebook.com/devnothing</span>
        </li>
      </ul>
    </div>
  </Layout>
)
