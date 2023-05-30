import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tagion`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-svgr",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/small_logo.svg",
      },
    },
  ],
};

export default config;
