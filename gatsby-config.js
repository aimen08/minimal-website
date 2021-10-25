module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aymenhamza.com/",
    title: "Aymen Hamza",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:300,600,800`],
      },
    },
  ],
};
