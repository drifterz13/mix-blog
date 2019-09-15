import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata"
import { rhythm } from "../utils/typography"

export default ({ title, slug, tags, timeToRead, date }) => {
  return (
    <div
      css={css`
        margin-bottom: ${rhythm(1)};
        padding: ${rhythm(1)};
        box-shadow: 3px 4px 0 #131313;
        border: 2px solid #131313;
        border-radius: 2px;
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
        `}
        to={slug}
      >
        Read more >>
      </Link>
    </div>
  )
}
