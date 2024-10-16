import React from "react";

import { InternalLinks } from "../common/enums";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import communityPng from "../assets/images/community.png";
import signedPaperPng from "../assets/images/signed_paper.png";
import tokenPng from "../assets/images/token.png";

export const getTagions = {
  title: (
    <>
      <span>Contribute </span>
      <div style={{ display: "inline-block" }}>
         <SmallArrowLinkIcon />
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
      <span>Follow and </span>
      <div style={{ display: "inline-block" }}>
        learn <SmallArrowLinkIcon />
      </div>
    </>
  ),
  description:
    "Discover the latest news, learn our blog, engage with your peers and the stewards",
  Img: signedPaperPng,
  linkTo: InternalLinks.BLOG,
};

export const joinTheCommunity = {
  title: (
    <>
      Get Tagions <SmallArrowLinkIcon />
    </>
  ),
  description: "Be an early supporter and benefit from realising our common goals",
  Img: communityPng,
  linkTo: "/community",
};

export const youCanParticipateBlockData = {
  aboutPage: [visitTheBlog, joinTheCommunity],
  mainPage: [getTagions, visitTheBlog, joinTheCommunity],
};
