import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata"
import { rhythm } from "../utils/typography"
import { ThemeContext } from "../utils/theme"

export default ({ title, slug, tags, timeToRead, date }) => {
  const { darkMode } = React.useContext(ThemeContext)
  return (
    <div
      css={css`
        margin-bottom: ${rhythm(1)};
        padding: ${rhythm(1)};
        box-shadow: 3px 4px 0 ${darkMode ? `#fff` : `#131313`};
        border: 2px solid ${darkMode ? `#fff` : `#131313`};
        border-radius: 2px;
      `}
    >
      <h1
        css={css`
          margin-top: 0;
          margin-bottom: 10px;
          color: ${darkMode ? `white` : `auto`};
        `}
      >
        {title}
      </h1>
      <BlogPostMetadata tags={tags} timeToRead={timeToRead} date={date} />
      <Link
        css={css`
          padding: 4px;
        `}
        to={slug}
      >
        Read more >>
      </Link>
    </div>
  )
}
