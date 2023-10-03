import React from "react";

import { InternalLinks } from "../common/enums";

import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";
import aecornLogoIcon from "../assets/images/aecorn_logo.png";
import climateCapitalTechnologiesLogoIcon from "../assets/images/climate_capital_technologies_logo.png";
import BCPLogoIcon from "../assets/images/BCP_logo.png";

export const natureIsOurClientBlockData = [
  {
    logo: <img src={aecornLogoIcon} />,
    name: (
      <>
        <span>Aecorn</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description: "Long term reforestation with real community ownership.",
    linkTo: InternalLinks.USE_CASES_AECORN,
  },
  {
    logo: <img src={climateCapitalTechnologiesLogoIcon} />,
    name: (
      <>
        <span>
          Climate Capital
          <br />
          Technologies
          <SmallArrowLinkIcon style={{ marginBottom: "3px" }} />
        </span>
      </>
    ),
    description:
      "Cocreating viable business models to mobilise, accelerate and deploy investment in nature-based projects.",
    linkTo: InternalLinks.USE_CASES_CCT,
  },

  {
    logo: <img src={BCPLogoIcon} />,
    name: (
      <>
        <span>BCP</span>
        <SmallArrowLinkIcon />
      </>
    ),
    description: "Driving new form of conservation finance.",
    linkTo: "https://bcp.earth",
  },
];
