import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import {
  SocialShareDesktop,
  SocialShareMobile,
} from "../components/SocialShare"
import BlogPostMetadata from "../components/BlogPostMetadata"
import GithubComment from "../components/GithubComment"
import ArrowLink from "../components/ArrowLink"
import MetaTagsWithAds from "../components/MetaTagsWithAds"

export default ({ data, location, pageContext }) => {
  const { prev, next } = pageContext
  const post = data.markdownRemark
  const { siteUrl } = data.site.siteMetadata
  return (
    <Layout>
      <MetaTagsWithAds
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        url={siteUrl}
        pathname={location.pathname}
        thumbnail={
          siteUrl + post.frontmatter.thumbnail.childImageSharp.resize.src
        }
        keywords={post.frontmatter.tags}
      />
      <SocialShareDesktop location={location} />
      <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
      <div
        css={css`
          text-align: center;
          margin-top: ${rhythm(0.5)};
        `}
      >
        Original photo by{" "}
        <a href={post.frontmatter.thumbnail_credit_link}>
          {post.frontmatter.thumbnail_credit}
        </a>
      </div>
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
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin: ${rhythm(2)} 0 calc(${rhythm(2)} - 16px) 0;
          `}
        >
          {prev && (
            <ArrowLink left path={prev.fields.slug}>
              <span
                css={css`
                  @media (max-width: 480px) {
                    width: 100px;
                  }
                `}
              >
                {prev.frontmatter.title}
              </span>
            </ArrowLink>
          )}
          {next && (
            <ArrowLink right path={next.fields.slug}>
              <span
                css={css`
                  @media (max-width: 480px) {
                    width: 100px;
                  }
                `}
              >
                {next.frontmatter.title}
              </span>
            </ArrowLink>
          )}
        </div>
        <GithubComment />
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
