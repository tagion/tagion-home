import React from "react";

import { InternalLinks } from "../common/enums";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import communityPng from "../assets/images/community.png";
import signedPaperPng from "../assets/images/signed_paper.png";
import tokenPng from "../assets/images/token.png";

import { ExternalLinks } from "../common/enums/external_links";

export const getTagions = {
  title: (
    <>
      <span>Contribute </span>
      <div style={{ display: "inline-block" }}>
         <SmallArrowLinkIcon />
      </div>
    </>
  ),
  description: "Participate in a diverse network, bring what you are good at",
  Img: communityPng,
  linkTo: InternalLinks.COMMUNITY,
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
  linkTo: InternalLinks.LEARNANDFOLLOW,
};

export const joinTheCommunity = {
  title: (
    <>
      Get Tagions <SmallArrowLinkIcon />
    </>
  ),
  description: "Be an early supporter and benefit from realising our common goals",
  Img: tokenPng,
  linkTo: "/get-tagions",
};

export const visitOurBlog = {
  title: (
    <>
      <span>Visit our </span>
      <div style={{ display: "inline-block" }}>
        Blog <SmallArrowLinkIcon />
      </div>
    </>
  ),
  description:
    "Discover the latest news and our blog, engage with your peers and the stewards",
  Img: signedPaperPng,
  linkTo: "https://tagion.medium.com/",
};

export const codeAndDocumentation = {
  title: (
    <>
      <span>Code and Documentation </span>
      <div style={{ display: "inline-block" }}>
         <SmallArrowLinkIcon />
      </div>
    </>
  ),
  description: "Find all the details and participate in running and governing the network",
  Img: tokenPng,
  linkTo: "https://docs.tagion.org/",
};

export const joinTheConversation = {
  title: (
    <>
      Join the conversation <SmallArrowLinkIcon />
    </>
  ),
  description: "Engage in a diverse network, meet the team and bring what you are good at",
  Img: communityPng,
  linkTo: ExternalLinks.DISCORD,
};

export const youCanParticipateBlockData = {
  mainPage: [getTagions, visitTheBlog, joinTheCommunity],
  learnandfollowPage: [visitOurBlog, codeAndDocumentation, joinTheConversation],
  gettagionsPage: [visitTheBlog, getTagions],};
