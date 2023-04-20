import twitterIcon from "../assets/images/twitter_icon.svg";
import discordIcon from "../assets/images/discord_icon.svg";
import telegramIcon from "../assets/images/telegram_icon.svg";

export type LinkType = {
  name: string;
  linkTo: string;
  icon?: string;
};

export type FooterColumnLinkType = typeof footerColumnLinks[number];

export const footerColumnLinks = [
  {
    title: "Tapps",
    links: [
      { name: "Wallet", linkTo: "https://www.google.com.ua/" },
      { name: "Dex", linkTo: "https://www.google.com.ua/" },
      { name: "Get Tagions", linkTo: "https://www.google.com.ua/" },
    ],
  },

  {
    title: "Company",
    links: [
      { name: "Community", linkTo: "https://www.google.com.ua/" },
      { name: "About", linkTo: "https://www.google.com.ua/" },
      { name: "Blog", linkTo: "https://www.google.com.ua/" },
    ],
  },
  {
    title: "Docs",
    links: [
      { name: "SDKs", linkTo: "https://www.google.com.ua/" },
      { name: "Whitepaper", linkTo: "https://www.google.com.ua/" },
      { name: "Governance paper", linkTo: "https://www.google.com.ua/" },
      { name: "TechPaper", linkTo: "https://www.google.com.ua/" },
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
