module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aymenhamza.com/",
    title: "Aymen Hamza",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:300,600,800`],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `nrwq62ix`,
        dataset: `production`,
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};
