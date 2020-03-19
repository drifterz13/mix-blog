import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"

export default function Tags({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  return (
    <Layout>
      <div style={{ maxWidth: "780px" }} className="m-auto md:mt-6 lg:mt-6">
        <h1 className="mt-0">All Tags</h1>
        <ul className="md:list-inside lg:list-inside">
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
}

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
