/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Paul Brasfield Portfolio",
    description: "Paul Brasfield's Portfolio",
    copyright: "This website is Copyright 2022 Paul Brasfield",
    contact: "PaulBrasfield@hotmail.com",
  },
}
