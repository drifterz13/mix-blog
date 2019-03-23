import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import DisqusThread from "../components/DisqusThread"

export default ({ data }) => {
  const post = data.markdownRemark
  // Add Gatsby Image if neccessary
  return (
    <Layout>
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1080, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
