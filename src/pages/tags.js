import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
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
        All Tags
      </h1>
      <ul
        css={css`
          list-style-position: inside;
          @media (max-width: 480px) {
            list-style-position: unset;
          }
        `}
      >
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
