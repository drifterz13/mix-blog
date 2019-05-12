import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Metatags(props) {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(
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
          name: "keywords",
          content:
            props.keywords && props.keywords.length > 0
              ? props.keywords.join(", ")
              : "javascript",
        },
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
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script>
        {` (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-6434348615393592",
    enable_page_level_ads: true
  });`}
      </script>
    </Helmet>
  )
}

export default Metatags
