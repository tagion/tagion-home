import React from "react";
import classNames from "classnames/bind";

import * as styles from "../blocks/secure-scalable-decentralised/secure-scalable-decentralised.module.scss";

const cx = classNames.bind(styles);

export const secureScalableDecentralizedData = [
  {
    title: (
      <>
        8 seconds <br className={cx("eight_seconds_br")} />
        to finality
      </>
    ),
    description: "Transfer money, exchange and validate data fast.",
  },
  {
    title: (
      <>
        Low
        <br />
        fees
      </>
    ),
    description: "Transfer money at almost no cost.",
  },
  {
    title: (
      <>
        10,000
        <br />
        TPS
      </>
    ),
    description:
      "Volume of transactions on par with VISA. Built to scale to hundreds of shards.",
  },
  {
    title: (
      <>
        Eco-friendly
        <br />
        consensus
      </>
    ),
    description:
      "The Tagion consensus mechanism uses nearly no energy compared to PoW systems and you do not need to mine or stake a future!",
  },
];
