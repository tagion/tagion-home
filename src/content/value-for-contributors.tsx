import React from "react";

import { ExternalLinks } from "../common/enums/external_links";

import securityIcon from "../assets/images/security.png";
import tokenIcon from "../assets/images/token_high_resolution_cutted.png";
import twitterIcon from "../assets/images/X_icon.svg";
import discordIcon from "../assets/images/discord_icon.svg";
import telegramIcon from "../assets/images/telegram_icon.svg";
import githubIcon from "../assets/images/github_icon.svg";
import mediumIcon from "../assets/images/medium_logo.svg";
import docsIcon from "../assets/images/docs_icon.svg";
import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

export const valueForContributorsBlockData = {
  informationCards: [
    {
      title: "Grow your reputation",
      description: "Engage in community and network governance",
      img: securityIcon,
    },
    {
      title: "Get Tagion rewards",
      description: "Join early, explore and play Get Tagions in return",
      img: tokenIcon,
    },
  ],
  linkCards: [
    {
      title: (
        <>
          GitHub <SmallArrowLinkIcon />
        </>
      ),
      description: "Read and contribute to code base",
      img: githubIcon,
      linkTo: ExternalLinks.GITHUB,
    },
    {
      title: (
        <>
          Medium <SmallArrowLinkIcon />
        </>
      ),
      description: "Read our latest, write your story",
      img: mediumIcon,
      linkTo: ExternalLinks.MEDIUM,
    },
    {
      title: (
        <>
          Discord <SmallArrowLinkIcon />
        </>
      ),
      description: "Find your creative squad",
      img: discordIcon,
      linkTo: ExternalLinks.DISCORD,
    },
    {
      title: (
        <>
          Twitter <SmallArrowLinkIcon />
        </>
      ),
      description: "Share the love",
      img: twitterIcon,
      linkTo: ExternalLinks.TWITTER,
    },
    {
      title: (
        <>
          Telegram <SmallArrowLinkIcon />
        </>
      ),
      description: "Join the chat",
      img: telegramIcon,
      linkTo: ExternalLinks.TELEGRAM,
    },

    {
      title: <>Docs</>,
      description: "Coming soon",
      img: docsIcon,
      linkTo: ExternalLinks.DOCS,
    },
  ],
};
