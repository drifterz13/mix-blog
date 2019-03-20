import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import CommentBox from "../components/CommentBox";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {/* <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} /> */}
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <CommentBox title={post.frontmatter.title} slug={post.fields.slug} />
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
