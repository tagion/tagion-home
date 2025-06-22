import React from "react";

import { InternalLinks } from "../common/enums";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import communityPng from "../assets/images/community.png";
import signedPaperPng from "../assets/images/signed_paper.png";
import tokenHighResCuttedPng from "../assets/images/token_high_resolution_cutted.png";
import developerPng from "../assets/images/developer.png";

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
  description: "Participate in a diverse network, bring your use-case and skills.",
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
    "Discover the latest developments, learn how it works and what powers its development, engage with your peers and current stewards.",
  Img: signedPaperPng,
  linkTo: InternalLinks.LEARNANDFOLLOW,
};

export const joinTheCommunity = {
  title: (
    <>
      Get Tagions <SmallArrowLinkIcon />
    </>
  ),
  description: "Be an early supporter and benefit from realising our common goals by purchasing out TGN utility tokens.",
  Img: tokenHighResCuttedPng,
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
    "Discover the latest news and recent blog-posts, for example on money and currency innovation.",
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
  description: "Find all the technical details, summary descriptions and a glossary.",
  Img: developerPng,
  linkTo: "https://docs.tagion.org/",
};

export const joinTheConversation = {
  title: (
    <>
      Join the conversation <SmallArrowLinkIcon />
    </>
  ),
  description: "Engage in a diverse network, meet the team and bring what you are good at.",
  Img: communityPng,
  linkTo: ExternalLinks.DISCORD,
};

export const youCanParticipateBlockData = {
  mainPage: [getTagions, visitTheBlog, joinTheCommunity],
  learnandfollowPage: [visitOurBlog, codeAndDocumentation, joinTheConversation],
  gettagionsPage: [visitTheBlog, getTagions],};
