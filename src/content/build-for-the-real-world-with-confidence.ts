import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

import tokenPng from "../assets/images/token_high_resolution.png";
import explorePng from "../assets/images/explore.png";
import ideaPng from "../assets/images/idea.png";
import growthInclinDeclinePng from "../assets/images/growth_incline_decline.png";

export const buildForTheRealWorldData: Array<{
  title: string | React.ReactElement;
  description: string;
  img: string;
  style?: { title: BreakpointsStyleObjectType };
}> = [
  {
    title: "Convert real-world assets into digital tokens",
    description:
      "Make your assets liquid, tradeable and accessible. Use tokens to represent ownership, value, access rights to various assets, such as real estate, natural land, art, financial instruments and more.",
    img: tokenPng,
  },
  {
    title: "Trace and monitor your goods and services with full transparency",
    description:
      "Bring accountability and efficiency to your full value chain. Assess and manage goods and services in real-time. Reduce blind spots and increase visibility of your network.",
    img: explorePng,
  },
  {
    title: "Create your own customised networks, products and services",
    description:
      "Thanks to sub-DARTs you can customise your network to work according to your rules. Create incentives and governance rules that suit your context.",
    img: ideaPng,
  },
  {
    title:
      "Optimise your data accuracy. Stay compliant, efficient and secure at low cost",
    description:
      "Read, write, update and delete data seamlessly. A flexible asset and data management system, the DART Distributed Database keeps your information dynamic, evolving overtime.",
    img: growthInclinDeclinePng,
  },
];
