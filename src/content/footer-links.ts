import { ExternalLinks, InternalLinks } from "../common/enums";
import { tokenomicsPdfLink, whitepaperPdfLink } from "./navigation-links";

export type LinkType = {
  name: string;
  linkTo: string;
  icon?: string;
  externalLink?: boolean;
};

export type FooterColumnLinkType = (typeof footerColumnLinks)[number];

export const footerColumnLinks = [
  {
    title: "Ecosystem",
    links: [
      { name: "Explore Ecosystem", linkTo: InternalLinks.ECOSYSTEM },
      { name: "Get Tagions", linkTo: InternalLinks.GET_TAGIONS },
    ],
  },

  {
    title: "Company",
    links: [
      { name: "Community", linkTo: InternalLinks.COMMUNITY },
      { name: "About", linkTo: InternalLinks.ABOUT },
      { name: "Blog", linkTo: InternalLinks.BLOG, externalLink: true },
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
    ],
  },
];
