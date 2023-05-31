import React from "react";
// import { ReactComponent as CommunityIcon } from "../assets/images/community_icon.svg";
// import { ReactComponent as SignedPaperIcon } from "../assets/images/signed_paper_icon.svg";
// import { ReactComponent as TokenIcon } from "../assets/images/token_icon.svg";
import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import communityIcon from "../assets/images/community_icon.svg";
import signedPaperIcon from "../assets/images/signed_paper_icon.svg";
import tokenIcon from "../assets/images/token_icon.svg";

export const youCanParticipateBlockData = [
  {
    title: (
      <>
        Get Tagions <SmallArrowLinkIcon />
      </>
    ),
    description: "Join the journey",
    Img: tokenIcon,
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
    Img: signedPaperIcon,
    linkTo: "/blog",
  },
  {
    title: (
      <>
        Join the Community <SmallArrowLinkIcon />
      </>
    ),
    description: "Become a part of a diverse network",
    Img: communityIcon,
    linkTo: "/community",
  },
];
