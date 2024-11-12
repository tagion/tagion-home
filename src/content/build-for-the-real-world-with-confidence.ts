import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

import distributedDataPng from "../assets/images/distributed_data.png";
import roadMapPng from "../assets/images/roadmap.png";
import trustPng from "../assets/images/trust.png";
import nodePng from "../assets/images/node.png";

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
    img: distributedDataPng,
  },
  {
    title: "Wavefront",
    description:
      "The patented communication protocol enables fast consensus across our distributed database.",
    img: roadMapPng,
  },
  {
    title: "Ordering and deterministic consensus",
    description:
      "Our consensus is deterministic and reliable, not probabilistic and potentially changeable as in most blockchain implementations. New transactions are submitted in strict order, to prevent fraud and manipulation.",
    img: trustPng,
  },
  {
    title:
      "Node swapping",
    description:
      "Tagion remains open and secure by combining meritocratic and random elements in determining which nodes participate in the consensus mechanism.",
    img: nodePng,
  },
];
