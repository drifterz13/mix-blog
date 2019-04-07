import favicon16 from "../../favicon/favicon-16x16.png"
import favicon32 from "../../favicon/favicon-32x32.png"
import manifest from "../../favicon/site.webmanifest"
import appleTouchIcon from "../../favicon/apple-touch-icon.png"

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `theme-color`,
          content: `#222`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      link={[
        { rel: "icon", type: "image/png", size: "16x16", href: `${favicon16}` },
        { rel: "icon", type: "image/png", size: "32x32", href: `${favicon32}` },
        { rel: "manifest", href: `${manifest}` },
        { rel: "apple-touch-icon", size: "180x180", href: `${appleTouchIcon}` },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ['html','css','javascript','react'],
}

export default SEO
