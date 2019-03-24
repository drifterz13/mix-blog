import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata";

export default ({ title, excerpt, slug, tags, timeToRead, date }) => (
  <div>
    <h1
      css={css`
        margin-bottom: 10px;
      `}
    >
      {title}
    </h1>
    <BlogPostMetadata tags={tags} timeToRead={timeToRead} date={date} />
    <p>{excerpt}</p>
    <Link to={slug}>อ่านต่อ >></Link>
  </div>
)
