import { ExternalLinks, InternalLinks } from "../common/enums";

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
      {
        name: "Tech paper",
        linkTo: InternalLinks.NOT_FOUND,
      //   linkTo: ExternalLinks.TECH_PAPER,
      //   externalLink: true,
      },
      {
        name: "Brand guidelines",
        linkTo: ExternalLinks.TAGION_BRAND_GUIDELINES,
        externalLink: true,
      },
    ],
  },
  // {
  //   title: "SOCIAL",
  //   links: [
  //     {
  //       name: "Twitter",
  //       linkTo: "https://www.google.com.ua/",
  //       icon: twitterIcon,
  //     },
  //     {
  //       name: "Discord",
  //       linkTo: "https://www.google.com.ua/",
  //       icon: discordIcon,
  //     },
  //     {
  //       name: "Telegram",
  //       linkTo: "https://www.google.com.ua/",
  //       icon: telegramIcon,
  //     },
  //   ],
  // },
];
