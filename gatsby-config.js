module.exports = {
  siteMetadata: {
    title: `Sailing To Mars`,
    description: `A Portfolio Site For Spenser Saling`,
    author: `Spenser Saling`,
    url: `https://sailingtomars.com/`,
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
        name: `sailing-to-mars`,
        short_name: `stm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
          },
          {
            family: `Open Sans`,
          },
          {
            family: 'Roboto'
          },
          {
            family: 'Raleway'
          },
          {
            family: 'Amatic SC'
          },
          {
            family: 'Poiret One'
          },
          {
            family: 'Forum'
          }
        ],
      },
    },
  ],
}
