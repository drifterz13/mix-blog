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
    index,
    first,
    last,
    additionalContext: { site },
  } = pageContext
  const prev = index - 1 === 1 ? "" : (index - 1).toString()
  const next = (index + 1).toString()

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
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: ${rhythm(2)};
            a:only-child {
              margin: 0 auto;
            }
          `}
        >
          {!first && (
            <Link to={`/${prev}`} disabled={first}>{`← Previous Page`}</Link>
          )}
          {!last && (
            <Link to={`/${next}`} disabled={last}>{`Next Page →`}</Link>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
