import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery } from 'gatsby'

function Metatags(props) {
  const { site: { siteMetadata: { title, description } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: "title", content: props.title },

        { name: "description", content: props.description || description },
        {
          property: "og:title",
          content: props.title || title,
        },
        {
          property: "og:url",
          content: props.pathname ? props.url + props.pathname : props.url,
        },

        {
          property: "og:image",
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: "og:image:secure_url",
          content: props.thumbnail && props.thumbnail,
        },

        {
          property: "og:description",
          content: props.description || description,
        },

        {
          property: "og:image:width",
          content: "1200",
        },

        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:locale",
          content: "en",
        },
        { name: "twitter:card", content: "summary_large_image" },

        { name: "twitter:title", content: props.title || title },

        {
          name: "twitter:description",
          content: props.description || description,
        },
        {
          name: "twitter:image",
          content: props.thumbnail && props.thumbnail,
        },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index, follow" },

        { name: "twitter:creator", content: "@codenothing" },
        { property: "og:site_name", content: "Codenothing" },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}

export default Metatags
