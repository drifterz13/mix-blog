import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Tag({ pageContext, data }) {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag.toUpperCase()} Tags (${totalCount} total)`

  return (
    <Layout>
      <div className="max-w-screen-md m-auto md:mt-6 lg:mt-6">
        <h1 className="mt-0">{tagHeader}</h1>
        <ul className="md:list-inside lg:list-inside mb-6">
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
