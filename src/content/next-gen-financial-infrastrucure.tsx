import React from "react";

import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

import nodePng from "../assets/images/node.png";
import speedPng from "../assets/images/speed.png";
import collaboratorsPng from "../assets/images/collaborators.png";
import distributedDataPng from "../assets/images/distributed_data.png";

export const nextGennFinancialInfrastrucureData: Array<{
  title: string | React.ReactElement;
  description: string;
  img: string;
  style?: Partial<Record<"title" | "description", BreakpointsStyleObjectType>>;
}> = [
  {
    title: "You own it, together. Nobody exploits it.",
    description:
      "Digital services have become a necessity of modern life, control over (personal) data is too important to leave to corporate interests. The underlying infrastructure should be a public good, universally accessible and not provided for private profits. That is why we designed Tagion. It belongs to all who contribute and rely on it - providing security and fully customisable control over your data - private, public or business-related. ",
    img: collaboratorsPng,
  },
  {
    title: "The Smart Database - best of both worlds",
    description:
      "Blockchains have accelerated common expectations about distribution and decentralisation. Tagion now delivers the long-missed solutions to their shortcomings that kept centralised data-management in place. Our database architecture offers full range of data control and sharing options at the individual record level - without compromising on security, efficiency and decentralised governance. ",
    img: distributedDataPng,
    style: {
      title: { desktop: { width: "472px" } },
    },
  },
  {
    title: "Decentralised Mainnet - Federated Databases",
    description:
      "Thanks to our native network architecture you can create your own Federated Database. It connects to the Tagion Mainnet but remains fully independent in how it manages proprietary data and participation. You can customise privacy, business and governance rules that suit your context, use-case and stakeholders. ",
    img: nodePng,
    style: {
      title: { desktop_large: { width: "400px" } },
      description: { tablet: { width: "460px" } },
    },
  },
  {
    title: "Security, scale and speed",
    description:
      "Our patented protocols, architectures and bespoke data formats allow for what seemed impossible before: write, update and delete data seamlessly. Making transactions at the speed of conventional centralised systems, all while benefitting from distributed storage and independent management. And because Tagion is desigend for efficiency at every level, hardware, bandwidth and energy requirements are minimal.",
    img: speedPng,
  },
];
