const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const pageEntryTemplate = path.resolve(`src/templates/page.js`);

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
      path: node.frontmatter.path,
      component: pageEntryTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}; 