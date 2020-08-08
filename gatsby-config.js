module.exports = {
  siteMetadata: {
    title: `Worga Foundation`,
    description: `Worga Foundation website.`,
    author: `lfearnall`,
    url: `https://www.worgafoundation.org`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        display: `minimal-ui`,
        icon: `src/images/WorgaFoundation_Logo_MASTER_Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `89a757e405c846fcbb0b970af5cb82`,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'vsk4xue',
        },
        google: {
          families: ['Red Hat Display']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
