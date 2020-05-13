/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Site",
    description: "This is my site.",
  },
  plugins: [`gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/content/pages`,
      name: `documents`,
      path: `${__dirname}/content/documents`,
      name: `members`,
      path: `${__dirname}/content/members`,
    },
  },
  `gatsby-transformer-remark`
]
}
