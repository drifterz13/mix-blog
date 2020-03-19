const path = require("path")
const SITE_URL = `https://www.codenothing.co`

module.exports = {
  siteMetadata: {
    title: `codenothing`,
    description: `Blog for Javascript developer.`,
    author: `@codenothing`,
    siteUrl: SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: "SynthWave '84",
              extensions: [
                {
                  identifier: "RobbOwen.synthwave-vscode",
                  version: "0.0.7",
                },
              ],
              injectStyles: true,
              extensionDataDirectory: path.resolve("extensions"),
              logLevel: "error",
            },
          },
          {
            resolve: "gatsby-remark-emoji",
            options: {
              emojiConversion: "shortnameToUnicode",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,500,500i,600,700`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137822837-1",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
  ],
}
