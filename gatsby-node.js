const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.category === `page`
  ) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/pages${value}`,
    })
  } else if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.category === `document`
  ) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/document${value}`,
    })
  } else if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.category === `member`
  ) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/members${value}`,
    })
  }
}
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("./src/templates/page.js")
  const memberTemplate = path.resolve("./src/templates/member.js")
  const documentTemplate = path.resolve("./src/templates/document.js")

  const result = await graphql(`
    {
      members: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/content/members/*.md" } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              category
              path
              title
            }
          }
        }
      }
      documents: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/content/documents/*.md" } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              category
              path
              title
            }
          }
        }
      }
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/content/pages/*.md" } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              category
              path
              title
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.pages.edges.forEach(({ node }) => {
    createPage({
      filter: { fileAbsolutePath: { regex: "/content/pages/" } },
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  result.data.documents.edges.forEach(({ node }) => {
    createPage({
      filter: { fileAbsolutePath: { regex: "/content/documents/" } },
      path: node.frontmatter.path,
      component: documentTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  result.data.members.edges.forEach(({ node }) => {
    createPage({
      filter: { fileAbsolutePath: { regex: "/content/members/" } },
      path: node.frontmatter.path,
      component: memberTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
