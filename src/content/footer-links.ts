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
      { name: "Governance Development", linkTo: ExternalLinks.GOVERNANCE_DEVELOPMENT }, //https://docs.tagion.org/gov/intro
      { name: "Tech Documentation", linkTo: ExternalLinks.TECH_DOCUMENTATION }, //https://docs.tagion.org/tech/guide
      tokenomicsPdfLink,
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
      manifestoPdfLink,
      {
        name: "Brand Guidelines",
        linkTo: ExternalLinks.TAGION_BRAND_GUIDELINES,
        externalLink: true,
      },
    ],
  },
  
  {
    title: "Next steps",
    links: [
      { name: "Participate", linkTo: InternalLinks.COMMUNITY },
      { name: "Origins", linkTo: InternalLinks.ABOUT },
      { name: "Blog", linkTo: InternalLinks.BLOG },
    ],
  },
];
