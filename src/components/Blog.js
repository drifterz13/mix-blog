import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata"
import { rhythm } from "../utils/typography"
import { ThemeContext } from "../utils/theme"

export default ({ title, excerpt, slug, tags, timeToRead, date }) => {
  const { darkMode } = React.useContext(ThemeContext)
  return (
    <div
      css={css`
        margin-bottom: ${rhythm(1)};
      `}
    >
      <h1
        css={css`
          margin-top: 0;
          margin-bottom: 10px;
        `}
      >
        {title}
      </h1>
      <BlogPostMetadata tags={tags} timeToRead={timeToRead} date={date} />
      <p>{excerpt}</p>
      <Link
        css={css`
          padding: 4px;
          color: ${darkMode ? `#00f9e6` : `auto`};
          :hover {
            color: #f92300;
          }
        `}
        to={slug}
      >
        อ่านต่อ >>
      </Link>
    </div>
  )
}
