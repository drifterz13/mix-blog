import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/Blog"

import { rhythm } from "../utils/typography"
import Metatags from "../components/MetaTags"

const IndexPage = ({ data, location }) => (
  <Layout yellow>
    <Metatags
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      url={data.site.siteMetadata.siteUrl}
      location={location.pathname}
    />
    <div
      css={css`
        max-width: 780px;
        margin: ${rhythm(2)} auto 0 auto;
        @media (max-width: 480px) {
          margin: 0 auto;
        }
      `}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
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
    </div>
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
          timeToRead
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

export default IndexPage
