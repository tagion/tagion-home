import React from "react";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";
import { ReactComponent as DecardLogoIcon } from "../assets/images/decard_logo_icon.svg";
import { ReactComponent as AeonLogoIcon } from "../assets/images/aeon_logo_icon.svg";
import { ReactComponent as ProfileLogoIcon } from "../assets/images/profile_icon_logo.svg";
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
      "DECARD conceived and coded Tagion. DECARD has funded the technical development of Tagion through token sales and by helping their clients leverage this cutting-edge technology for business applications in currency design, payments, tokenisation and distributed data-management. ",
    linkTo: "https://decard.io/",
    //linkTo: InternalLinks.PARTNERS_DECARD,
  },
  {
    logo: <AeonLogoIcon />,
    name: (
      <>
        <span>AEON</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description:
      "Aeon provides an integrated solution for investing in natural capital, supported by a digital platform - built on Tagion technology - that ensures seamless data management for efficient and impactful sustainability investments. Aeon Group is the first user of the Tagion Technology and early collaborator of Decard. ",
    linkTo: "https://aeongroup.io/",
    //linkto: InternalLinks.PARTNERS_AEON
  },

  {
    logo: <ProfileLogoIcon />,
    name: (
      <>
        <span>YOU</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description:
      "Achieving decentralisation means handing over the network to its users. Respond to your invitation and become a contributor and co-owner of Tagion. ",
      linkTo: InternalLinks.COMMUNITY,
  },
];
