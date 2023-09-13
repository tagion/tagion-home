import type { GatsbyConfig, Node } from "gatsby";
import path from "path";

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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS_ID, // Google Analytics / GA
        ],

        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // // Delays processing pageview events on route update (in milliseconds)
          // delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/small_logo.svg",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(
          __dirname,
          "src/content/collection-routing-data/partners"
        ),
        name: `partner`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(
          __dirname,
          "src/content/collection-routing-data/use-cases"
        ),
        name: `useCases`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }: { node: Node }) => {
          const sourceInstanceName = node.sourceInstanceName;
          if (sourceInstanceName === `partners`) {
            return `partner`;
          }
          if (sourceInstanceName === `useCases`) {
            return `useCase`;
          }
          return sourceInstanceName;
        },
      },
    },
  ],
};

export default config;
