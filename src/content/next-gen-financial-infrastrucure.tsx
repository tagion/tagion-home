import React from "react";

import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

import workInProgressPng from "../assets/images/work_in_progress.png";
import globePng from "../assets/images/globe.png";
import securityPng from "../assets/images/security.png";
import transaction from "../assets/images/transaction.png";

export const nextGennFinancialInfrastrucureData: Array<{
  title: string | React.ReactElement;
  description: string;
  img: string;
  style?: { title: BreakpointsStyleObjectType };
}> = [
  {
    title: "Data integrity with distributed storage on the network",
    description:
      "Experience secure decentralisation, efficient transaction tracking, and flexible data management. Handle large volumes of data simultaneously with ease.",
    img: workInProgressPng,
    style: { title: { desktop: { width: "472px" } } },
  },
  {
    title: "Performance at scale with security",
    description:
      "Transfer money, exchange and validate data fast at almost no cost. Benefit from high transaction volumes optimised for high bandwidth capacity thanks to novel DLT infrastructure.",
    img: securityPng,
    style: { title: { tablet: { width: "300px" } } },
  },
  {
    title: "Fair ordering of transactions",
    description:
      "A great fit for trading and exchange platforms thanks to fair transaction processing and real price discovery. No risk of unfair transaction advantage.",
    img: transaction,
    style: { title: { desktop_max: { width: "365px" } } },
  },
  {
    title: (
      <>
        Adapt to the local.{" "}
        <span style={{ display: "inline-block" }}>Stay global</span>
      </>
    ),
    description:
      "Create context-specific applications and ecosystems with customisable governance at every layer. Make your own rules to challenge the “one-size-fits-all” approach.",
    img: globePng,
    style: { title: { desktop_max: { width: "504px" } } },
  },
];
