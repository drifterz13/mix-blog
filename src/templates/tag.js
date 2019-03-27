import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"

export default ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag.toUpperCase()} Tags (${totalCount} total)`

  return (
    <Layout>
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
          @media (max-width: 480px) {
            margin: auto;
          }
        `}
      >
        <h1
          css={css`
            margin-top: 0;
          `}
        >
          {tagHeader}
        </h1>

        <ul
          css={css`
            list-style-position: inside;
            margin-bottom: ${rhythm(2)};
            @media (max-width: 480px) {
              list-style-position: unset;
            }
          `}
        >
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        <Link to="/tags">All tags >></Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
