import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as VISALogo } from "../assets/images/VISA_logo.svg";
import { ReactComponent as TagionLogo } from "../assets/images/logo.svg";
import { ReactComponent as BitcoinLogo } from "../assets/images/bitcoin_logo.svg";
import { ReactComponent as EthereumLogo } from "../assets/images/ethereum_logo.svg";
import { ReactComponent as SmallArrowLinkIcon } from "../assets/images/small_arrow_link.svg";

import * as styles from "../components/inclusive-elastic-decentralised-swiper-card/inclusive-elastic-decentralised-swiper-card.module.scss";

const cx = classNames.bind(styles);

const arrowSvgWrapper = (value: string) => (
  <span className={cx("value_with_arrow")}>
    {value} <SmallArrowLinkIcon className={cx("mobile_arrow_link")} />
  </span>
);

export const inclusiveElasticDecentralisedData = [
  {
    data: {
      TPS: {
        value: arrowSvgWrapper("24.000"),
        linkTo:
          "https://usa.visa.com/run-your-business/small-business-tools/retail.html",
      },
      timeToFinality: {
        value: arrowSvgWrapper("2880 min"),
        linkTo:
          "https://www.lightspeedhq.com/blog/how-long-does-it-take-for-a-credit-card-payment-to-go-through/",
      },
      fees: {
        value: arrowSvgWrapper("3%"),
        linkTo:
          "https://www.bankrate.com/finance/credit-cards/a-guide-to-foreign-transaction-fees/",
      },
      environmentalImpact: {
        value: (
          <>
            {arrowSvgWrapper("0.0015")} <br />
            <span className={cx("kWh_ptx")}>kWh p/tx</span>
          </>
        ),
        linkTo:
          "https://www.sciencedirect.com/science/article/pii/S2352864822001390#bib27",
      },
    },

    Logo: VISALogo,
    logoWidth: { mobile: "99px", desktop_large: "107px" },
  },
  {
    data: {
      TPS: {
        value: arrowSvgWrapper("27"),
        linkTo:
          "https://www.fidelitydigitalassets.com/research-and-insights/rise-layer-2-scaling-ethereum",
      },
      timeToFinality: {
        value: arrowSvgWrapper("15 min"),
        linkTo: "https://ethereum.org/en/roadmap/single-slot-finality/",
      },
      fees: {
        value: arrowSvgWrapper("$0.736"),
        linkTo:
          "https://ycharts.com/indicators/ethereum_average_transaction_fee",
      },
      environmentalImpact: {
        value: (
          <>
            {arrowSvgWrapper("125")} <br />
            <span className={cx("kWh_ptx")}>kWh p/tx</span>
          </>
        ),
        linkTo:
          "https://www.sciencedirect.com/science/article/pii/S2352864822001390",
      },
    },
    Logo: EthereumLogo,
    logoWidth: { mobile: "131px", desktop_large: "185px" },
  },
  {
    data: {
      TPS: {
        value: arrowSvgWrapper("6"),
        linkTo: "https://ieeexplore.ieee.org/document/8115844",
      },
      timeToFinality: {
        value: arrowSvgWrapper("60 min"),
        linkTo: "https://academy.binance.com/en/glossary/finality",
      },
      fees: {
        value: arrowSvgWrapper("$3"),
        linkTo:
          "https://ycharts.com/indicators/bitcoin_average_transaction_fee",
      },
      environmentalImpact: {
        value: (
          <>
            {arrowSvgWrapper("1777")} <br />
            <span className={cx("kWh_ptx")}>kWh p/tx</span>
          </>
        ),
        linkTo:
          "https://www.sciencedirect.com/science/article/pii/S2352864822001390",
      },
    },
    Logo: BitcoinLogo,
    logoWidth: { mobile: "128px", desktop_large: "128px" },
  },
  {
    data: {
      TPS: { value: "10.000*" },
      timeToFinality: { value: "8 seconds" },
      fees: { value: "$0.05" },
      environmentalImpact: {
        value: (
          <>
            {"<0,001 "}
            <br />
            <span className={cx("kWh_ptx")}>kWh p/tx</span>
          </>
        ),
      },
    },
    Logo: TagionLogo,
    logoWidth: { mobile: "132px", desktop_large: "154px" },
    gradientLogo: true,
  },
];
