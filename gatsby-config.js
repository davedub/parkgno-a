/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "parkgno-a",
    description: "Gatsby starter.",
  },
  plugins: [`gatsby-plugin-netlify-cms`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/src/content/members/`,
        },
      },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `documents`,
        path: `${__dirname}/src/content/documents/`,
      },
    },
  `gatsby-transformer-remark`,
]
}
