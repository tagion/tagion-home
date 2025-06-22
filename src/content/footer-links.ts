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
    title: "Documentation",
    links: [
      { name: "Governance Development", linkTo: ExternalLinks.GOVERNANCE_DEVELOPMENT }, //https://docs.tagion.org/gov/intro
      { name: "Tech Documentation", linkTo: ExternalLinks.TECH_DOCUMENTATION }, //https://docs.tagion.org/tech/guide
      { name: "Blog on Medium", linkTo: ExternalLinks.MEDIUM },
    ],
  },

  {
    title: "Downloads",
    links: [
      // {
      //   name: "Tech paper",
      //   linkTo: InternalLinks.NOT_FOUND,
      //   //   linkTo: ExternalLinks.TECH_PAPER,
      //   //   externalLink: true,
      // },
      {
        name: "JustPay Wallet",
        linkTo: ExternalLinks.JUSTPAY_WALLET,
        externalLink: true,
      },
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
      { name: "Join the Conversation", linkTo: ExternalLinks.DISCORD },
      { name: "Buy TGN Utility Tokens", linkTo: InternalLinks.GET_TAGIONS },
      { name: "Co-develope and Participate", linkTo: InternalLinks.COMMUNITY },
    ],
  },
];
