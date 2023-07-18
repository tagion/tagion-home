import React from "react";

import { ExternalLinks } from "../common/enums/external_links";

import tokenIcon from "../assets/images/token.png";
import globeIcon from "../assets/images/globe.png";
import { ReactComponent as RocketIcon } from "../assets/images/coming-soon/rocket_icon.svg";
import { ReactComponent as WalletIcon } from "../assets/images/coming-soon/wallet_icon.svg";
import { ReactComponent as DEXIcon } from "../assets/images/coming-soon/DEX_icon.svg";

import { ReactComponent as TechPaperIcon } from "../assets/images/coming-soon/tech_paper_icon.svg";
import { ReactComponent as GovermentIcon } from "../assets/images/coming-soon/government_icon.svg";
import { ReactComponent as BuildIcon } from "../assets/images/coming-soon/build_icon.svg";
import { ReactComponent as WhitePaperIcon } from "../assets/images/coming-soon/whitePaper_icon.svg";

export const techPaperLink = {
  name: "TechPaper",
  linkTo: "/resources/tech-paper.pdf",
  externalLink: true,
  description: "Dive into the tech details",
  Icon: () => <TechPaperIcon />,
};

export const privacyPolicyLink = {
  name: "Privacy Policy",
  linkTo: "/privacy-policy",
  externalLink: false,
};

export const termsOfUseLink = {
  name: "Terms of use",
  linkTo: "/terms-of-use",
  externalLink: false,
};

export const navigationLinks: Array<{
  name: string;
  linkTo?: string;
  externalLink?: boolean;
  subContent?: Array<{
    name: string;
    linkTo?: string;
    externalLink?: boolean;
    description: string;
    Icon?: () => React.JSX.Element;
    img?: string;
  }>;
}> = [
  {
    name: "Ecosystem",
    subContent: [
      {
        name: "Explore Ecosystem",
        linkTo: "/ecosystem",
        description: "Learn about our tech stack",
        img: globeIcon,
      },
      {
        name: "Running Networks",
        linkTo: "/404",
        description: "Coming soon",
        Icon: () => <RocketIcon />,
      },
      {
        name: "Get Tagions",
        linkTo: "/get-tagions",
        description: "Buy tokens",
        img: tokenIcon,
      },
      {
        name: "Wallet",
        linkTo: "/404",
        description: "Coming soon",
        Icon: () => <WalletIcon />,
      },
      {
        name: "DEX",
        linkTo: "/404",
        description: "Coming soon",
        Icon: () => <DEXIcon />,
      },
    ],
  },
  {
    name: "Community",
    linkTo: "/community",
  },
  {
    name: "Docs",
    subContent: [
      { ...techPaperLink },
      {
        name: "Governance paper",
        linkTo: "/404",
        description: "Coming soon",
        Icon: () => <GovermentIcon />,
      },
      {
        name: "SDKs",
        linkTo: "/404",
        description: "Coming soon",
        Icon: () => <BuildIcon />,
      },
      {
        name: "WhitePaper",
        linkTo: "/404",
        description: "Coming soon",
        Icon: () => <WhitePaperIcon />,
      },
    ],
  },
  {
    name: "About",
    linkTo: "/about",
  },
  {
    name: "Blog",
    linkTo: ExternalLinks.MEDIUM,
    externalLink: true,
  },
];
