import React from "react";

import connectWithCurrencies from "../assets/images/ecosystem/connect_with_currencies.png";
import participateInFairEconomy from "../assets/images/ecosystem/participate_in_fair_economy.png";
import buildTheFuture from "../assets/images/ecosystem/build_the_future.png";
import DEX from "../assets/images/ecosystem/DEX.png";
import proofOfCommunity from "../assets/images/ecosystem/proof_of_community.png";
import nodeSwapping from "../assets/images/ecosystem/node_swapping.png";
import DART from "../assets/images/ecosystem/DART.png";

enum VideoIdsEnum {
  CONNECT_WITH_CURRENCIES_VIDEO = "connect_with_currencies_video",
  PARTICIPATE_IN_FAIR_ECONOMY_VIDEO = "participate_in_fair_economy_video",
  BUILD_THE_FUTURE_VIDEO = "build_the_future_video",
  DEX_VIDEO = "DEX_video",
  PROOF_OF_COMMUNITY_VIDEO = "proof_of_community_video",
  NODE_SWAPPING_VIDEO = "node_swapping_video",
  DART_VIDEO = "DART_video",
}

export const ecosystemVisualizationBlockData = [
  {
    title: "Connect with currencies",
    description:
      "Tagion offers fast, efficient transactions without compromising decentralisation or security. Our DEX will ensure seamless trading with various currencies, both crypto and fiat.",
    img: connectWithCurrencies,
    videoSrc: "/videos/connect_with_currencies.mp4",
    videoId: VideoIdsEnum.CONNECT_WITH_CURRENCIES_VIDEO,
    videoPositions: {
      desktop_large: { top: "302px", right: "25px" },
      desktop_max: { top: "384px", right: "50px" },
    },
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
  },
  {
    title: "Participate in a fair economy",
    description:
      "Picture this: easy money transfers, borrowing, lending, investing, and more with Tagion. We're all about fairness - no one can take unfair advantage because the network is built to include, rather than exclude and exploit.",
    img: participateInFairEconomy,
    videoSrc: "/videos/participate_in_fair_economy.mp4",
    videoId: VideoIdsEnum.PARTICIPATE_IN_FAIR_ECONOMY_VIDEO,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    videoPositions: {
      desktop_large: { top: "0", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { top: "0", right: "0", left: "0", margin: "0 auto" },
    },
    style: { borderRadius: "70px" },
  },
  {
    title: "Build the future",
    description:
      "Shape the future by designing your own rules in custom ecosystems and applications. Explore limitless possibilities across industries like supply chain, arts, nature conservation, banking, healthcare, and audit.",
    img: buildTheFuture,
    videoSrc: "/videos/build_the_future.mp4",
    videoId: VideoIdsEnum.BUILD_THE_FUTURE_VIDEO,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    videoPositions: {
      desktop_large: { top: "302px", left: "25px" },
      desktop_max: { top: "384px", left: "50px" },
    },
  },
  {
    title: (
      <>
        Tagion Decentralised
        <br /> Exchange Protocol
      </>
    ),
    description:
      "Exchange digital assets seamlessly. Tagion Decentralised Exchange Protocol will enable real price discovery and transparency to create the best use of liquidity and pricing.",
    img: DEX,
    videoSrc: "/videos/DEX.mp4",
    videoId: VideoIdsEnum.DEX_VIDEO,
    videoPositions: {
      desktop_large: { top: "340px", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { top: "438px", right: "0", left: "0", margin: "0 auto" },
    },
    width: {
      desktop_large: "290px",
      desktop_max: "380px",
    },
  },
  {
    title: "Proof of Community",
    description:
      "As a node operator, core contributor, developer or ambassador, you can take part in network governance and shape the network’s development. Based on reputation-weighted voting and rewards earned, Tagion’s governance model ensures fairness and empowers community ownership.",
    img: proofOfCommunity,
    videoSrc: "/videos/proof_of_community.mp4",
    videoId: VideoIdsEnum.PROOF_OF_COMMUNITY_VIDEO,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    videoPositions: {
      desktop_large: {
        bottom: "708px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "904px", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    title: "Node Swapping",
    description:
      "Active nodes, carrying out validation tasks, are periodically and randomly rotated with passive ones, reducing the risk of Sybil attacks and enabling network decentralisation. This is a novel feature innovating Hashgraph technology.",
    img: nodeSwapping,
    videoSrc: "/videos/node_swapping.mp4",
    videoId: VideoIdsEnum.NODE_SWAPPING_VIDEO,
    playWithVideoId: VideoIdsEnum.DART_VIDEO,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    videoPositions: {
      desktop_large: {
        bottom: "422px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "538px", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    title: "DART Distributed Database and Hashgraph Consensus Mechanism",
    description: (
      <>
        Ensure your data integrity and back up with distributed and scalable
        storage. The DART can handle large amounts of data efficiently as the
        databases are distributed across nodes, optimising the network capacity.
        You can create customised solutions with sub-DARTs with specific
        case-based rules and integrated trading capabilities.
        <br className="br-separator" /> Hashgraph is a revolutionary technology
        that ensures agreement across nodes. Unlike traditional blockchains,
        which rely on probability, Hashgraph provides a definitive order of
        events, so there is greater trust, accuracy and reliability in the
        network.
      </>
    ),
    img: DART,
    videoSrc: "/videos/DART.mp4",
    videoId: VideoIdsEnum.DART_VIDEO,
    playWithVideoId: VideoIdsEnum.NODE_SWAPPING_VIDEO,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    videoPositions: {
      desktop_large: { bottom: "0", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { bottom: "0", right: "0", left: "0", margin: "0 auto" },
    },
  },
];
