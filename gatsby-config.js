module.exports = {
  siteMetadata: {
    title: `Worga Foundation`,
    description: `The Worga Foundation believes in a world where Mabaan youth are contributing their knowledge and experiences to the development of countries around the world. 

    We are working on this by providing students with micro-grants, from our grassroots Education Support Fund, to help them overcome challenges that could force them to leave school. Often, the difference between staying in school and being forced out is no more than the cost of photocopies, graduation fees, solar lamps, or bus tickets. 
    
    When that’s all it takes to keep a student in school, we find a way to help.`,
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
