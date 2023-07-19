import React from "react";

import connectWithCurrencies from "../assets/images/ecosystem/connect_with_currencies.png";
import participateInFairEconomy from "../assets/images/ecosystem/participate_in_fair_economy.png";
import buildTheFuture from "../assets/images/ecosystem/build_the_future.png";
import DEX from "../assets/images/ecosystem/DEX.png";
import proofOfCommunity from "../assets/images/ecosystem/proof_of_community.png";
import nodeSwapping from "../assets/images/ecosystem/node_swapping.png";
import DART from "../assets/images/ecosystem/DART.png";

export const ecosystemVisualizationBlockData = [
  {
    title: "Connect with currencies",
    description:
      "Tagion offers low energy consumption, low time to finality and high transaction volume simultaneously without compromising on decentralisation, scalability and security. Interoperability with other currencies, both fiat and crypto, thanks to our DEX provides endless opportunities for seamless trading.",
    img: connectWithCurrencies,
    imgPositions: {
      desktop_large: { top: "302px", right: "0" },
      desktop_max: { top: "384px", right: "0" },
    },
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
  },
  {
    title: "Participate in a fair economy",
    description:
      "Everyone, anywhere can transfer, borrow, lend money, grow your portfolio, fund your ideas, settle payments, buy insurance, invest in the future. Tagion is a Common Good, as we believe money and the financial system should serve all actors` interests equally, so no single actor can exploit the system to their advantage.",
    img: participateInFairEconomy,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    imgPositions: {
      desktop_large: { top: "0", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { top: "0", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    title: "Build the future",
    description:
      "The ability to create own governance rules in customised sub-ecosystems creates endless opportunities for building use cases in different industries, ranging from supply chain to arts, from nature conservation to banking, from healthcare to audit.",
    img: buildTheFuture,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    imgPositions: {
      desktop_large: { top: "302px", left: "0" },
      desktop_max: { top: "384px", left: "0" },
    },
  },
  {
    title: "DEX",
    description:
      "Tagion Decentralised Exchange (DEX) - our non-custodial distributed order book marketplace – will enable real price discovery and transparency and create the best use of liquidity and pricing. It enables seamless exchange of digital assets, while maintaining regulatory compliance.",
    img: DEX,
    imgPositions: {
      desktop_large: { top: "317px", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { top: "408px", right: "0", left: "0", margin: "0 auto" },
    },
    width: {
      desktop_large: "290px",
      desktop_max: "369px",
    },
  },
  {
    title: "Proof of Community",
    description:
      "Tagion empowers community ownership and governance, allowing members to shape development, decision-making, and resource management. Through the Proof of Community model, reputation-weighted voting and rewards are earned, ensuring fairness. A self-sustainable revenue model enables users to pay for system utilisation while contributors are compensated for their work. This inclusive approach involves node operators, core members, developers, and ambassadors, fostering engagement and education.",
    img: proofOfCommunity,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    imgPositions: {
      desktop_large: {
        bottom: "701px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "896px", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    title: "Node Swapping",
    description:
      "Tagion introduces a permissionless system for Hashgraph, allowing random node swapping based on reputational scores and operator performance. Node Swapping reduces the risk of Sybil attacks. and enables the network to be decentralised. See Proof of Community for more information on how to become a node.",
    img: nodeSwapping,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    imgPositions: {
      desktop_large: {
        bottom: "413px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "528px", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    title: "DART Distributed Database and Hashgraph Consensus Mechanism",
    description: (
      <>
        DART offers distributed and scalable storage for applications, ensuring
        data integrity and back up. You can create customised solutions with
        sub-DARTs with specific case-based rules and integrated trading
        capabilities. The DART can handle large amounts of data efficiently as
        the databases are distributed across nodes, optimising the network
        capacity.
        <br className="br-separator" /> Hashgraph is a revolutionary technology
        that ensures agreement across nodes, offering a secure and reliable
        distrbuted ledger. Unlike traditional blockchains, which rely on
        probability, Hashgraph consensus is deterministic. There is always an
        definitive order of events, so there is greater trust, accuracy and
        reliability in the network.
      </>
    ),
    img: DART,
    width: {
      desktop_large: "460px",
      desktop_max: "586px",
    },
    imgPositions: {
      desktop_large: { bottom: "0", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { bottom: "0", right: "0", left: "0", margin: "0 auto" },
    },
  },
];
