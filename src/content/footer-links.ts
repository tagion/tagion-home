import { ExternalLinks } from "../common/enums";

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
      { name: "Explore Ecosystem", linkTo: "/ecosystem" },
      { name: "Get Tagions", linkTo: "/get-tagions" },
    ],
  },

  {
    title: "Company",
    links: [
      { name: "Community", linkTo: "/community" },
      { name: "About", linkTo: "/about" },
      { name: "Blog", linkTo: "/blog" },
    ],
  },
  {
    title: "Docs",
    links: [
      {
        name: "Tech paper",
        linkTo: "/resources/tech-paper.pdf",
        externalLink: true,
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
