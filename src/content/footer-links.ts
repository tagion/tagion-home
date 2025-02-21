import { ExternalLinks, InternalLinks } from "../common/enums";
import { manifestoPdfLink, tokenomicsPdfLink, whitepaperPdfLink } from "./navigation-links";

export type LinkType = {
  name: string;
  linkTo: string;
  icon?: string;
  externalLink?: boolean;
};

export type FooterColumnLinkType = (typeof footerColumnLinks)[number];

export const footerColumnLinks = [
  {
    title: "About Tagion",
    links: [
      { name: "Explore Tech Stack", linkTo: InternalLinks.ECOSYSTEM },
      { name: "Get Tagions", linkTo: InternalLinks.GET_TAGIONS },
    ],
  },

  {
    title: "Legacy",
    links: [
      { name: "Participate", linkTo: InternalLinks.COMMUNITY },
      { name: "Origins", linkTo: InternalLinks.ABOUT },
      { name: "Blog", linkTo: InternalLinks.BLOG },
    ],
  },
  {
    title: "Docs",
    links: [
      // {
      //   name: "Tech paper",
      //   linkTo: InternalLinks.NOT_FOUND,
      //   //   linkTo: ExternalLinks.TECH_PAPER,
      //   //   externalLink: true,
      // },
      whitepaperPdfLink,
      {
        name: "Brand guidelines",
        linkTo: ExternalLinks.TAGION_BRAND_GUIDELINES,
        externalLink: true,
      },
      tokenomicsPdfLink,
      manifestoPdfLink,
    ],
  },
];
