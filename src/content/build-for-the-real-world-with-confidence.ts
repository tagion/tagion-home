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
    title: "DART",
    description:
      "Our innovative database is built from the bottom up to prevent bottlenecks that have previously hampered the adoption of distributed networks.",
    img: tokenPng,
  },
  {
    title: "Wavefront",
    description:
      "The patented communication protocol enables fast consensus across our distributed database.",
    img: explorePng,
  },
  {
    title: "Ordering and deterministic consensus",
    description:
      "Our consensus is deterministic and reliable, not probabilistic and potentially changeable as in most blockchain implementations. New transactions are submitted in strict order, to prevent fraud and manipulation.",
    img: ideaPng,
  },
  {
    title:
      "Node swapping",
    description:
      "Tagion remains open and secure by combining meritocratic and random elements in determining which nodes participate in the consensus mechanism.",
    img: growthInclinDeclinePng,
  },
];
