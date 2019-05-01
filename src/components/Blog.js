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
        /* box-shadow: 0 0 12px rgba(0,0,0,0.225); */
        box-shadow: 3px 4px 0 ${darkMode ? `#00f9e6` : `mediumslateblue`};
        border: 2px solid ${darkMode ? `#00f9e6` : `mediumslateblue`};
        border-radius: 2px;
        background: ${darkMode ? `#1f1f1f` : `#fafafa`};
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
      <Link
        css={css`
          padding: 4px;
          color: ${darkMode ? `#00f9e6` : `#639ee2`};
          :hover {
            color: #accbf0;
          }
        `}
        to={slug}
      >
        Read more >>
      </Link>
    </div>
  )
}
