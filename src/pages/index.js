import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"

const IndexPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Blog
        key={node.id}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        slug={node.fields.slug}
      />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`

export default IndexPage
