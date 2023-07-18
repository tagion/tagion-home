import { ReactComponent as VISALogo } from "../assets/images/VISA_logo.svg";
import { ReactComponent as TagionLogo } from "../assets/images/logo.svg";
import { ReactComponent as BitcoinLogo } from "../assets/images/bitcoin_logo.svg";
import { ReactComponent as EthereumLogo } from "../assets/images/ethereum_logo.svg";

export const inclusiveElasticDecentralisedData = [
  {
    data: {
      TPS: {
        value: "24.000",
        linkTo:
          "https://usa.visa.com/run-your-business/small-business-tools/retail.html",
      },
      timeToFinality: {
        value: "2880 min",
        linkTo:
          "https://www.lightspeedhq.com/blog/how-long-does-it-take-for-a-credit-card-payment-to-go-through/",
      },
      fees: {
        value: "3%",
        linkTo:
          "https://www.bankrate.com/finance/credit-cards/a-guide-to-foreign-transaction-fees/",
      },
      environmentalImpact: {
        value: "0.0015",
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
        value: "27",
        linkTo:
          "https://www.fidelitydigitalassets.com/research-and-insights/rise-layer-2-scaling-ethereum",
      },
      timeToFinality: {
        value: "15 min",
        linkTo: "https://ethereum.org/en/roadmap/single-slot-finality/",
      },
      fees: {
        value: "$0.736",
        linkTo:
          "https://ycharts.com/indicators/ethereum_average_transaction_fee",
      },
      environmentalImpact: {
        value: "125",
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
        value: "6",
        linkTo: "https://ieeexplore.ieee.org/document/8115844",
      },
      timeToFinality: {
        value: "60 min",
        linkTo: "https://academy.binance.com/en/glossary/finality",
      },
      fees: {
        value: "$3",
        linkTo:
          "https://ycharts.com/indicators/bitcoin_average_transaction_fee",
      },
      environmentalImpact: {
        value: "1777",
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
      fees: { value: "$0.0005" },
      environmentalImpact: {
        value: "<0,001",
      },
    },
    Logo: TagionLogo,
    logoWidth: { mobile: "132px", desktop_large: "154px" },
    gradientLogo: true,
  },
];
