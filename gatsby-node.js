const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(fileNode.sourceInstanceName)
    console.log(fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const pageTemplate = path.resolve(`src/templates/page.js`);
  const documentTemplate = path.resolve(`src/templates/document.js`);
  const memberTemplate = path.resolve(`src/templates/member.js`);

  const result = await graphql(`
  {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___title]
        order: ASC
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      filter: { fileAbsolutePath: {regex : "\/pages/"}},
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      filter: { fileAbsolutePath: {regex : "\/documents/"}},
      path: node.frontmatter.path,
      component: documentTemplate,
      context: {}, // additional data can be passed via context
    })
  })


  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      filter: { fileAbsolutePath: {regex : "\/members/"}},
      path: node.frontmatter.path,
      component: memberTemplate,
      context: {}, // additional data can be passed via context
    })
  })
};
