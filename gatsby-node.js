exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const ArticleTemplate = require.resolve(`./src/templates/article.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: ArticleTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
