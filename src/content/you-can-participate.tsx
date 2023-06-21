import React from "react";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import communityPng from "../assets/images/community.png";
import signedPaperPng from "../assets/images/signed_paper.png";
import tokenPng from "../assets/images/token.png";

export const youCanParticipateBlockData = [
  {
    title: (
      <>
        <span>Get </span>
        <div style={{ display: "inline-block" }}>
          Tagions <SmallArrowLinkIcon />
        </div>
      </>
    ),
    description: "Join the journey",
    Img: tokenPng,
    linkTo: "/get-tagions",
  },
  {
    title: (
      <>
        <span>Visit the </span>
        <div style={{ display: "inline-block" }}>
          Blog <SmallArrowLinkIcon />
        </div>
      </>
    ),
    description:
      "Discover how-to's, latest news, community generated content and more",
    Img: signedPaperPng,
    linkTo: "https://tagion.medium.com/",
    externalLink: true,
  },
  {
    title: (
      <>
        Join the Community <SmallArrowLinkIcon />
      </>
    ),
    description: "Become a part of a diverse network",
    Img: communityPng,
    linkTo: "https://t.co/OAuiTbX6cJ",
    externalLink: true,
  },
];
