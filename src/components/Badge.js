import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

function getBackgroundFromTag(tag) {
  switch (tag) {
    case "html":
      return `#f29300`
    case "css":
      return `#639ee2`
    case "react":
      return `#61dafb`
    case "javascript":
      return `#e29ced`
    case "story":
      return `#62eaae`
    default:
      break
  }
}

export default ({ tag }) => {
  return (
    <div
      css={css`
        padding: 0 12px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: bold;
        width: auto;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${getBackgroundFromTag(tag)};
        :not(:first-of-type) {
          margin-left: 5px;
        }
      `}
    >
      <Link
        to={`/tags/${tag}`}
        css={css`
          text-decoration: none;
          color: #fff;
          padding: 4px;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        {`# ${tag}`}
      </Link>
    </div>
  )
}
