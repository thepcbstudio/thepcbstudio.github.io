module.exports = {
  siteMetadata: {
    shortTitle: `ThePCBStudio`,
    title: `ThePCBStudio – Giving Life to PCB`,
    description: `Giving Life to PCB.`,
    siteUrl:
      process.env.NODE_ENV === `production`
        ? `https://thepcbstudio.com`
        : `http://localhost:8000`,
    name: `Dolly Mitra`,
    email: `dolly.mitra@thepcbstudio.com`,
    linkedIn: `https://www.linkedin.com/in/dolly-mitra/`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
