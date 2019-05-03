import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Blog from "../components/Blog"

import { rhythm } from "../utils/typography"
import Metatags from "../components/MetaTags"

const IndexPage = ({ pageContext }) => {
  const {
    group,
    additionalContext: { site },
  } = pageContext

  return (
    <Layout>
      <Metatags
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
        url={site.siteMetadata.siteUrl}
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
        {group.map(({ node }) => (
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
}
export default IndexPage
