import React from "react";

import { InternalLinks } from "../common/enums";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import communityPng from "../assets/images/community.png";
import signedPaperPng from "../assets/images/signed_paper.png";
import tokenPng from "../assets/images/token.png";

export const getTagions = {
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
};

export const visitTheBlog = {
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
  linkTo: InternalLinks.BLOG,
};

export const joinTheCommunity = {
  title: (
    <>
      Join the Community <SmallArrowLinkIcon />
    </>
  ),
  description: "Become a part of a diverse network",
  Img: communityPng,
  linkTo: "/community",
};

export const youCanParticipateBlockData = {
  aboutPage: [visitTheBlog, joinTheCommunity],
  mainPage: [getTagions, visitTheBlog, joinTheCommunity],
};
