import React from "react";

import { ReactComponent as GlobeIcon } from "../assets/images/coming-soon/globe_icon.svg";
import { ReactComponent as RocketIcon } from "../assets/images/coming-soon/rocket_icon.svg";
import { ReactComponent as TokenIcon } from "../assets/images/coming-soon/tagion_icon.svg";
import { ReactComponent as WalletIcon } from "../assets/images/coming-soon/wallet_icon.svg";
import { ReactComponent as DEXIcon } from "../assets/images/coming-soon/DEX_icon.svg";

import { ReactComponent as TechPaperIcon } from "../assets/images/coming-soon/tech_paper_icon.svg";
import { ReactComponent as GovermentIcon } from "../assets/images/coming-soon/government_icon.svg";
import { ReactComponent as BuildIcon } from "../assets/images/coming-soon/build_icon.svg";
import { ReactComponent as WhitePaperIcon } from "../assets/images/coming-soon/whitePaper_icon.svg";

export const navigationLinks = [
  {
    name: "Ecosystem",
    subContent: [
      {
        name: "Explore Ecosystem",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <GlobeIcon />,
      },
      {
        name: "Running Networks",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <RocketIcon />,
      },
      {
        name: "Get Tagions",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <TokenIcon />,
      },
      {
        name: "Wallet",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <WalletIcon />,
      },
      {
        name: "DEX",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <DEXIcon />,
      },
    ],
  },
  {
    name: "Community",
    linkTo: "/coming-soon",
  },
  {
    name: "Docs",
    subContent: [
      {
        name: "TechPaper",
        linkTo: "https://tagion.org/resources/tech-paper.pdf",
        externalLink: true,
        description: "Dive into the tech details",
        Icon: () => <TechPaperIcon />,
      },
      {
        name: "Governance paper",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <GovermentIcon />,
      },
      {
        name: "SDKs",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <BuildIcon />,
      },
      {
        name: "WhitePaper",
        linkTo: "/coming-soon",
        description: "Coming soon",
        Icon: () => <WhitePaperIcon />,
      },
    ],
  },
  {
    name: "About",
    linkTo: "/coming-soon",
  },
  {
    name: "Blog",
    linkTo: "/coming-soon",
  },
];
