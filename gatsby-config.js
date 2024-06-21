module.exports = {
  siteMetadata: {
    title: "Carte de visite - Cyriaque",
    author: "Cyriaque Delaveau",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carte de visite - Cyriaque`,
        short_name: `CarteDeVisite`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo.jpg`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
