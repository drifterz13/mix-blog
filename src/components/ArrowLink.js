import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"
import { rhythm } from "../utils/typography"

const ArrowLink = ({ left, path, children }) => {
  if (left) {
    return (
      <Link to={path}>
        <div
          css={css`
            display: flex;
            width: 250px;
            @media (max-width: 480px) {
              font-size: 14px;
              width: auto;
            }
          `}
        >
          <FaLongArrowAltLeft
            size={32}
            css={css`
              margin-right: ${rhythm(0.5)};
            `}
          />
          {children}
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={path}>
        <div
          css={css`
            display: flex;
            width: 250px;
            text-align: right;
            @media (max-width: 480px) {
              font-size: 14px;
              width: auto;
            }
          `}
        >
          {children}
          <FaLongArrowAltRight
            size={32}
            css={css`
              margin-left: ${rhythm(0.5)};
            `}
          />
        </div>
      </Link>
    )
  }
}

export default ArrowLink
