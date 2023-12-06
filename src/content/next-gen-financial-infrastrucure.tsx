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
    title: "Massively scalable. Prepared for future growth",
    description:
      "Tagion is unlike other ledgers technologies where all data history is stored. Delete obsolete data and save storage space. Own your data with a distributed database with full consensus.",
    img: workInProgressPng,
    style: {
      title: { desktop: { width: "472px" } },
    },
  },
  {
    title: "Outstanding performance at speed, volume and low cost",
    description:
      "Transfer money, exchange and validate data fast at almost no cost. Benefit from high transaction volumes and distributed storage optimised for high throughput.",
    img: exchangePng,
  },
  {
    title: "No way of jumping the line",
    description:
      "No risk of unfair transaction advantage. No need for oracles. Fair ordering ensures there’s no manipulation or bias.",
    img: trustPng,
    style: {
      title: { desktop_large: { width: "400px" } },
      description: { tablet: { width: "460px" } },
    },
  },
  {
    title: "Enhanced security with embedded randomness",
    description:
      "Randomness makes it hard for attackers to exploit vulnerabilities. It also opens possibilities for novel application features.",
    img: securityPng,
  },
];
