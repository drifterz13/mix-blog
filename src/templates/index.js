import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"

export default ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/1" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div style={{ maxWidth: "780px" }} className="mx-auto my-0 md:mt-4">
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
        <div className="w-full flex justify-between">
          {!isFirst && (
            <Link className="text-red-500 font-medium" to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className="text-red-500 font-medium" to={nextPage} rel="next">
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
