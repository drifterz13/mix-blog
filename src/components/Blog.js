import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata"
import { rhythm } from "../utils/typography"

export default ({ title, excerpt, slug, tags, timeToRead, date }) => (
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
    <Link css={css`padding: 4px;`} to={slug}>อ่านต่อ >></Link>
  </div>
)
