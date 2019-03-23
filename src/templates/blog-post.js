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

export default ({ data, location }) => {
  const post = data.markdownRemark
  // Add Gatsby Image if neccessary
  return (
    <Layout>
      <SocialShareDesktop location={location} />
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
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
      frontmatter {
        title
      }
    }
  }
`
