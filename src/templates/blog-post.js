import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import DisqusThread from "../components/DisqusThread"
import {
  SocialShareDesktop,
  SocialShareMobile,
} from "../components/SocialShare"
import BlogPostMetadata from "../components/BlogPostMetadata"
import Metatags from "../components/MetaTags"

export default ({ data, location }) => {
  const post = data.markdownRemark
  const { siteUrl } = data.site.siteMetadata
  return (
    <Layout>
      <Metatags
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        url={siteUrl}
        pathname={location.pathname}
        thumbnail={siteUrl + post.frontmatter.thumbnail.childImageSharp.resize.src}
      />
      <SocialShareDesktop location={location} />
      <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
      <div
        css={css`
          max-width: 780px;
          margin: ${rhythm(2)} auto 0 auto;
        `}
      >
        <h1
          css={css`
            margin-bottom: 10px;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <BlogPostMetadata
          tags={post.frontmatter.tags}
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SocialShareMobile location={location} />
        <DisqusThread
          id={post.id}
          title={post.frontmatter.title}
          path={post.fields.slug}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        tags
        thumbnail {
          childImageSharp {
            resize(width: 1200, height: 620) {
              src
            }
            fluid(maxWidth: 1080, maxHeight: 620, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
