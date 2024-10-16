import React from "react";

import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

import exchangePng from "../assets/images/exchange.png";
import securityPng from "../assets/images/security.png";
import trustPng from "../assets/images/trust.png";
import workInProgressPng from "../assets/images/work_in_progress.png";

export const nextGennFinancialInfrastrucureData: Array<{
  title: string | React.ReactElement;
  description: string;
  img: string;
  style?: Partial<Record<"title" | "description", BreakpointsStyleObjectType>>;
}> = [
  {
    title: "Account for what you value",
    description:
      "Make your assets liquid, tradeable and accessible. Use tokens to represent ownership titles, access rights, financial instruments or any type of asset.  Create your own currencies to represent  what you value and enable the use-cases you envision.",
    img: workInProgressPng,
    style: {
      title: { desktop: { width: "472px" } },
    },
  },
  {
    title: "You own it, together. Nobody exploits it.",
    description:
      "Electronic payments and financial tools are a necesity of modern life. The underlying infrastructure should be a public good, universaly accessible and not operated for private profits. That is how Tagion is designed. It belogns to all who contribute and rely on it.",
    img: exchangePng,
  },
  {
    title: "Decentralised mainnet - federated sub-systems",
    description:
      "Thanks to sub-systems that can synchronize but remain independent from the mainnet, you can customise your network to work according to your rules. Create incentives and governance rules that suit your context.",
    img: trustPng,
    style: {
      title: { desktop_large: { width: "400px" } },
      description: { tablet: { width: "460px" } },
    },
  },
  {
    title: "At scale and speed",
    description:
      "Read, write, update and delete data seamlessly. Make transactions at the speed of conventional payment systems, but with the benefits of distributed networks. All with minimal energy consumption.",
    img: securityPng,
  },
];
