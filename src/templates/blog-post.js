import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import {
  SocialShareDesktop,
  SocialShareMobile,
} from "../components/SocialShare"
import BlogPostMetadata from "../components/BlogPostMetadata"
import GithubComment from "../components/GithubComment"
import ArrowLink from "../components/ArrowLink"
import MetaTagsWithAds from "../components/MetaTagsWithAds"

export default function BlogPost({ data, location, pageContext }) {
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
      <div className="text-center font-medium mt-2">
        Original photo by{" "}
        <a
          className="text-red-500"
          href={post.frontmatter.thumbnail_credit_link}
        >
          {post.frontmatter.thumbnail_credit}
        </a>
      </div>
      <div style={{ maxWidth: "780px" }} className="mx-auto mt-12 mb-0">
        <h1 className="mb-6 text-4xl font-bold">{post.frontmatter.title}</h1>
        <BlogPostMetadata
          tags={post.frontmatter.tags}
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SocialShareMobile location={location} />
        <div className="flex flex-wrap items-center justify-between my-12 text-red-500 font-medium">
          {prev && (
            <ArrowLink left path={prev.fields.slug}>
              <span className="hidden md:block lg:block">
                {prev.frontmatter.title}
              </span>
              <span className="block md:hidden lg:hidden text-base">
                Previous article
              </span>
            </ArrowLink>
          )}
          {next && (
            <ArrowLink right path={next.fields.slug}>
              <span className="hidden md:block lg:block">
                {next.frontmatter.title}
              </span>
              <span className="block md:hidden lg:hidden text-base">Next article</span>
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
