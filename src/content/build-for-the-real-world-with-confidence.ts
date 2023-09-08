import { BreakpointsStyleObjectType } from "../common/types/breakpoints-style-object-type";

import rocketPng from "../assets/images/rocket.png";
import walletPng from "../assets/images/wallet.png";
import transactionPng from "../assets/images/transaction.png";
import DARTPng from "../assets/images/DART.png";

export const buildForTheRealWorldData: Array<{
  title: string | React.ReactElement;
  description: string;
  img: string;
  style?: { title: BreakpointsStyleObjectType };
}> = [
  {
    title: "Tokenise your assets with Tagion SDKs, APIs and WASM",
    description:
      "Unlock new possibilities: transform real and digital assets into digital tokens easilty with WASM. Experience the future of asset trading with increased liquidity, accessibility and scalability and connect to other ecosystems.",
    img: rocketPng,
  },
  {
    title:
      "Control and manage your assets with secure wallets (or make your own)",
    description:
      "Your financial future, your rules. Manage your assets and redefine financial independence. Craft your own personalised asset management solution.",
    img: walletPng,
    style: {
      title: {
        desktop_large: { letterSpacing: "-0.5px" },
        desktop_max: { letterSpacing: "-0.5px", width: "800px" },
      },
    },
  },
  {
    title: "Trade and exchange your assets with Tagion Exchange protocol",
    description:
      "Benefit from real price discovery and fair ordering for every asset type. Take your trading to the next level and trade assets with confidence.",
    img: transactionPng,
  },
  {
    title: "Flexible asset and data management system",
    description:
      "Experience the power to seamlessly update and delete data in the DART Distributed Database. Keep your information dynamic, evolving overtime, while optimising storage efficiency thanks to stateless Tagion protocol.",
    img: DARTPng,
    style: { title: { desktop: { width: "350px" } } },
  },
];
