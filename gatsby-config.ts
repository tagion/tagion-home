import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tagion`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/small_logo.svg",
      },
    },
  ],
};

export default config;
