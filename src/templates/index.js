import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Blog from "../components/Blog"

import { rhythm } from "../utils/typography"

export default ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog/1" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
          @media (max-width: 480px) {
            margin: 0 auto;
          }
        `}
      >
        {posts.map(({ node }) => (
          <Blog
            key={node.id}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            slug={node.fields.slug}
            tags={node.frontmatter.tags}
            timeToRead={node.timeToRead}
            date={node.frontmatter.date}
          />
        ))}
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
          `}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "YYYY-MM-DD")
            tags
            thumbnail {
              childImageSharp {
                resize(width: 1200, height: 630) {
                  src
                }
                fluid(maxWidth: 1080, maxHeight: 620, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            thumbnail_credit
            thumbnail_credit_link
          }
        }
      }
    }
  }
`
