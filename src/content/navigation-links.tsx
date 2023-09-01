import React from "react";

import { ExternalLinks, InternalLinks } from "../common/enums";

import tokenIcon from "../assets/images/token.png";
import globeIcon from "../assets/images/globe.png";
import brandGuidelinesIcon from "../assets/images/brand_guidelines.png";
import { ReactComponent as RocketIcon } from "../assets/images/coming-soon/rocket_icon.svg";
import { ReactComponent as WalletIcon } from "../assets/images/coming-soon/wallet_icon.svg";
import { ReactComponent as DEXIcon } from "../assets/images/coming-soon/DEX_icon.svg";

import { ReactComponent as TechPaperIcon } from "../assets/images/coming-soon/tech_paper_icon.svg";
import { ReactComponent as GovermentIcon } from "../assets/images/coming-soon/government_icon.svg";
import { ReactComponent as BuildIcon } from "../assets/images/coming-soon/build_icon.svg";
import { ReactComponent as WhitePaperIcon } from "../assets/images/coming-soon/whitePaper_icon.svg";

export const techPaperLink = {
  name: "Tech paper",
  linkTo: InternalLinks.NOT_FOUND,
  // linkTo: ExternalLinks.TECH_PAPER,
  // externalLink: true,
  description: "Dive into the tech details",
  Icon: () => <TechPaperIcon />,
};

export const privacyPolicyLink = {
  name: "Privacy Policy",
  linkTo: InternalLinks.PRIVACY_POLICY,
  externalLink: false,
};

export const termsOfUseLink = {
  name: "Terms of use",
  linkTo: InternalLinks.TERMS_OF_USE,
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
        linkTo: InternalLinks.ECOSYSTEM,
        description: "Learn about our tech stack",
        img: globeIcon,
      },
      {
        name: "Running Networks",
        linkTo: InternalLinks.NOT_FOUND,
        description: "Coming soon",
        Icon: () => <RocketIcon />,
      },
      {
        name: "Get Tagions",
        linkTo: InternalLinks.GET_TAGIONS,
        description: "Buy tokens",
        img: tokenIcon,
      },
      {
        name: "Wallet",
        linkTo: InternalLinks.NOT_FOUND,
        description: "Coming soon",
        Icon: () => <WalletIcon />,
      },
      {
        name: "DEX",
        linkTo: InternalLinks.NOT_FOUND,
        description: "Coming soon",
        Icon: () => <DEXIcon />,
      },
    ],
  },
  {
    name: "Community",
    linkTo: InternalLinks.COMMUNITY,
  },
  {
    name: "Docs",
    subContent: [
      {
        name: "Whitepaper",
        linkTo: InternalLinks.NOT_FOUND,
        description: "Coming soon",
        Icon: () => <WhitePaperIcon />,
      },
      { ...techPaperLink },
      {
        name: "Governance paper",
        linkTo: InternalLinks.NOT_FOUND,
        description: "Coming soon",
        Icon: () => <GovermentIcon />,
      },
      {
        name: "SDKs",
        linkTo: InternalLinks.NOT_FOUND,
        description: "Coming soon",
        Icon: () => <BuildIcon />,
      },
      {
        name: "Brand guidelines",
        linkTo: ExternalLinks.TAGION_BRAND_GUIDELINES,
        description: "Explore, create, contribute",
        img: brandGuidelinesIcon,
        externalLink: true,
      },
    ],
  },
  {
    name: "About",
    linkTo: InternalLinks.ABOUT,
  },
  {
    name: "Blog",
    linkTo: InternalLinks.BLOG,
    externalLink: true,
  },
];
