import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import DisqusThread from "../components/DisqusThread"
import {
  SocialShareDesktop,
  SocialShareMobile,
} from "../components/SocialShare"
import BlogPostMetadata from "../components/BlogPostMetadata"

export default ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SocialShareDesktop location={location} />
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
        `}
      >
        <h1
          css={css`
            margin-bottom: 10px;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <BlogPostMetadata
          tags={post.frontmatter.tags}
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SocialShareMobile location={location} />
        <DisqusThread
          id={post.id}
          title={post.frontmatter.title}
          path={post.fields.slug}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`
