const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node)
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // pagination
    const postsPerPage = 7
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/1` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/index.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
    //

    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? false : posts[index - 1].node
      const next = index === posts.length - 1 ? false : posts[index + 1].node
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          prev,
          next,
        },
      })
    })

    let tags = []

    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve("./src/templates/tag.js"),
        context: {
          tag,
        },
      })
    })
  })
}
