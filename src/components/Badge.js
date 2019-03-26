import React from "react"
import { css } from "@emotion/core"

function getBackgroundFromTag(tag) {
  switch (tag) {
    case "html":
      return `#f29300`
    case "css":
      return `#639ee2`
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
        width: 64px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${getBackgroundFromTag(tag)};
        color: #fff;
        :nth-of-type(2) {
            margin-left: 5px;
        }
      `}
    >
      {`# ${tag}`}
    </div>
  )
}
