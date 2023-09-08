import React from "react";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";
import { ReactComponent as DecardLogoIcon } from "../assets/images/decard_logo_icon.svg";
import { ReactComponent as VenzoLogoIcon } from "../assets/images/venzo_logo_icon.svg";
import { ReactComponent as AfricaInvestorLogoIcon } from "../assets/images/africa_investor_logo_icon.svg";
import { InternalLinks } from "../common/enums";

export const valuePartnersBlockData = [
  {
    logo: <DecardLogoIcon />,
    name: (
      <>
        <span>DECARD</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description:
      "A Web3 technology and banking powerhouse with cutting-edge expertise in scalable DLT solutions.",
    linkTo: InternalLinks.PARTNERS_DECARD,
  },
  {
    logo: <VenzoLogoIcon />,
    name: (
      <>
        <span>VENZO</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description:
      "Nordic leader in digital transformation with extensive experience in all aspects of digital strategy and technology.",
    linkTo: InternalLinks.PARTNERS_VENZO,
  },

  {
    logo: <AfricaInvestorLogoIcon />,
    name: (
      <>
        <span>Africa Investor</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description:
      "An institutional investment holding platform and a principal investor in strategic infrastructure assets in Africa.",
    linkTo: InternalLinks.PARTNERS_AFRICA_INVESTOR,
  },
];
