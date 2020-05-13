const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPages} = actions;

  const pageEntryTemplate = path.resolve(`src/templates/pages.js`);

  const result = await graphql(`
    {
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