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
      description: "Engage and shape our network governance",
      img: securityIcon,
    },
    {
      title: "Get Tagion rewards",
      description: "Join early, explore, contribute and test: Get Tagion tokens in return!",
      img: tokenIcon,
    },
  ],
  linkCards: [
    {
    title: (
      <>
        Discord <SmallArrowLinkIcon />
      </>
    ),
    description: "This is where our community meets - join!",
    img: discordIcon,
    linkTo: ExternalLinks.DISCORD,
    },
    {
      title: (
        <>
          GitHub <SmallArrowLinkIcon />
        </>
      ),
      description: "Download, audit and contribute to our code base",
      img: githubIcon,
      linkTo: ExternalLinks.GITHUB,
    
    },
    {
      title: <>Docs</>,
      description: "Documentation about our tech and governance",
      img: docsIcon,
      linkTo: ExternalLinks.DOCS,
    },
    {
      title: (
        <>
          Medium <SmallArrowLinkIcon />
        </>
      ),
      description: "Read our blog: practical and educational",
      img: mediumIcon,
      linkTo: ExternalLinks.MEDIUM,
    },
    {
      title: (
        <>
          Telegram <SmallArrowLinkIcon />
        </>
      ),
      description: "Get updates and Join the chat",
      img: telegramIcon,
      linkTo: ExternalLinks.TELEGRAM,
    },
    {
    
      title: (
        <>
          X <SmallArrowLinkIcon />
        </>
      ),
      description: "For those who love tweeting",
      img: twitterIcon,
      linkTo: ExternalLinks.TWITTER,
    },
  ],
};
