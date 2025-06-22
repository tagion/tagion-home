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
    title: "DART and HiBON",
    description:
      "Our innovative database is built on a new data format that gives ownership and control for each individual record. It's built from the bottom up to prevent bottlenecks in scalability that have previously hampered the adoption of distributed networks. ",
    img: distributedDataPng,
  },
  {
    title: "Wavefront and Hashgraph",
    description:
      "Our patented Wavefront communication protocol enables a fast Hashgraph consensus across our distributed database with low computation and storage overheads that allow for any scale.",
    img: roadMapPng,
  },
  {
    title:
      "Network formation",
    description:
      "Tagion remains open and secure by combining meritocratic and random elements in determining which nodes participate in the Mainnet consensus. Federated Databases remain independent in their datamanagement and participation rules.",
    img: nodePng,
  },
];
