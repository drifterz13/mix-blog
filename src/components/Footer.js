import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa"

const iconStyles = css`
  margin: 0 12px;
`

const Footer = () => {
  return (
    <footer
      css={css`
        background: #639ee2;
        padding: ${rhythm(1)};
        height: 200px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <p>@2019 CodeNothing</p>
      <div style={{ display: "flex" }}>
        <FaFacebook css={iconStyles} size="28" />
        <FaTwitterSquare css={iconStyles} size="28" />
        <FaInstagram css={iconStyles} size="28" />
      </div>
    </footer>
  )
}

export default Footer
