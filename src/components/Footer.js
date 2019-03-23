import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa"
import SubscribeBox from "./SubscribeBox"

const iconStyles = css`
  margin: 0 12px;
`

const Footer = () => {
  return (
    <footer
      css={css`
        background: #639ee2;
        padding: ${rhythm(1)};
        height: 170px;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        letter-spacing: 1.8px;
        @media (max-width: 480px) {
          height: 400px;
          flex-direction: column;
        }
      `}
    >
      {/* <SubscribeBox /> */}
      <div>
        <p>@2019, CodeNothing</p>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <FaFacebook css={iconStyles} size="28" />
          <FaTwitterSquare css={iconStyles} size="28" />
          <FaInstagram css={iconStyles} size="28" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
