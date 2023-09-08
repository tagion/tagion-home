import React from "react";
import classNames from "classnames/bind";

import * as styles from "../blocks/ecosystem-visualization/ecosystem-visualization.module.scss";

const cx = classNames.bind(styles);

enum VideoIdsEnum {
  CONNECT_WITH_CURRENCIES_VIDEO = "connect_with_currencies_video",
  PARTICIPATE_IN_FAIR_ECONOMY_VIDEO = "participate_in_fair_economy_video",
  BUILD_THE_FUTURE_VIDEO = "build_the_future_video",
  DEX_VIDEO = "DEX_video",
  PROOF_OF_COMMUNITY_VIDEO = "proof_of_community_video",
  DART_AND_NODE_SWAPPING_VIDEO = "dart_and_node_swapping_video",
}

const dartAndNodeSwappingBlock = {
  title: "Node Swapping",
  description: (
    <>
      Tagion introduces a permissionless system for Hashgraph, allowing random
      node swapping based on reputational scores and operator performance. Node
      Swapping reduces the risk of Sybil attacks and enables the network to be
      decentralised.
      <div className={`${cx("popup_title")} prompt-regular prompt-36 title`}>
        DART Distributed Database and Hashgraph Consensus Mechanism
      </div>
      <div style={{ letterSpacing: "-0.2px" }}>
        Ensure your data integrity and back up with distributed and scalable
        storage. The DART can handle large amounts of data efficiently as the
        databases are distributed across nodes, optimising the network capacity.
        You can create customised solutions with sub-DARTs with specific
        case-based rules and integrated trading capabilities.
        <div className="text-separator" /> Hashgraph is a revolutionary
        technology that ensures agreement across nodes. Unlike traditional
        blockchains, which rely on probability, Hashgraph provides a definitive
        order of events, so there is greater trust, accuracy and reliability in
        the network.
      </div>
    </>
  ),
};

export const videosData = [
  {
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
    style: { borderRadius: "30%" },
  },
  {
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
    videoSrc: "/videos/proof_of_community.mp4",
    videoId: VideoIdsEnum.PROOF_OF_COMMUNITY_VIDEO,
    width: {
      desktop_large: "506px",
      desktop_max: "644px",
    },
    videoPositions: {
      desktop_large: {
        bottom: "712px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "906px", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    videoSrc: "/videos/DART_and_node_swapping.mp4",
    videoId: VideoIdsEnum.DART_AND_NODE_SWAPPING_VIDEO,
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

export const transparentBlocksData = [
  {
    title: "Connect with currencies",
    description:
      "Tagion offers fast, efficient transactions without compromising decentralisation or security. Our DEX will ensure seamless trading with various currencies, both crypto and fiat.",
    videoId: VideoIdsEnum.CONNECT_WITH_CURRENCIES_VIDEO,
    blockPositions: {
      desktop_large: { top: "379px", right: "46px" },
      desktop_max: { top: "485px", right: "73px" },
    },
    width: {
      desktop_large: "466px",
      desktop_max: "599px",
    },
    height: {
      mobile: "160px",
      tablet: "252px",
      desktop: "296px",
      desktop_large: "247px",
      desktop_max: "310px",
    },
  },
  {
    title: "Participate in a fair economy",
    description:
      "Picture this: easy money transfers, borrowing, lending, investing, and more with Tagion. We're all about fairness - no one can take unfair advantage because the network is built to include, rather than exclude and exploit.",
    videoId: VideoIdsEnum.PARTICIPATE_IN_FAIR_ECONOMY_VIDEO,
    width: {
      desktop_large: "466px",
      desktop_max: "599px",
    },
    height: {
      mobile: "172px",
      tablet: "271px",
      desktop: "318px",
      desktop_large: "247px",
      desktop_max: "310px",
    },
    blockPositions: {
      desktop_large: { top: "96px", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { top: "122px", right: "0", left: "0", margin: "0 auto" },
    },
  },
  {
    title: "Build the future",
    description:
      "Shape the future by designing your own rules in custom ecosystems and applications. Explore limitless possibilities across industries like supply chain, arts, nature conservation, banking, healthcare, and audit.",
    videoId: VideoIdsEnum.BUILD_THE_FUTURE_VIDEO,
    width: {
      desktop_large: "466px",
      desktop_max: "599px",
    },
    height: {
      mobile: "157px",
      tablet: "253px",
      desktop: "297px",
      desktop_large: "247px",
      desktop_max: "310px",
    },
    blockPositions: {
      desktop_large: { top: "379px", left: "46px" },
      desktop_max: { top: "485px", left: "73px" },
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
    videoId: VideoIdsEnum.DEX_VIDEO,
    blockPositions: {
      desktop_large: { top: "342px", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { top: "432px", right: "0", left: "0", margin: "0 auto" },
    },
    width: {
      desktop_large: "290px",
      desktop_max: "380px",
    },
    height: {
      mobile: "135px",
      tablet: "212px",
      desktop: "248px",
      desktop_large: "160px",
      desktop_max: "230px",
    },
    style: { mobile: { marginBottom: "16px" } },
  },
  {
    title: "Common Good Network Governance",
    description:
      "Based on Nobel Prize winner Elinor Ostrom's principles of governing common resources, Tagion combines Node Governance with reputation-weighted scoring: a novel self-regulation method. We're creating a network where everyone has a stake, fostering an ecosystem that values contribution, collaboration, and mutual growth.",
    videoId: VideoIdsEnum.PROOF_OF_COMMUNITY_VIDEO,
    disabledForMobile: false,
    dartAndNodeSwappingBlock: false,
    width: {
      desktop_large: "466px",
      desktop_max: "599px",
    },
    height: {
      mobile: "183px",
      tablet: "288px",
      desktop: "338px",
      desktop_large: "247px",
      desktop_max: "310px",
    },
    blockPositions: {
      desktop_large: {
        bottom: "715px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "910px", right: "0", left: "0", margin: "0 auto" },
    },
    style: {
      mobile: { marginTop: "-16px" },
      tablet: { marginTop: "-16px" },
      desktop: { marginTop: "-16px" },
    },
  },
  {
    ...dartAndNodeSwappingBlock,
    videoId: VideoIdsEnum.DART_AND_NODE_SWAPPING_VIDEO,
    disabledForMobile: false,
    dartAndNodeSwappingBlock: true,
    width: {
      desktop_large: "466px",
      desktop_max: "599px",
    },
    height: {
      mobile: "355px",
      tablet: "560px",
      desktop: "657px",
      desktop_large: "247px",
      desktop_max: "310px",
    },
    blockPositions: {
      desktop_large: {
        bottom: "460px",
        right: "0",
        left: "0",
        margin: "0 auto",
      },
      desktop_max: { bottom: "590px", right: "0", left: "0", margin: "0 auto" },
    },
    style: {
      mobile: { marginTop: "40px" },
      tablet: { marginTop: "40px" },
      desktop: { marginTop: "40px" },
    },
  },
  {
    ...dartAndNodeSwappingBlock,
    videoId: VideoIdsEnum.DART_AND_NODE_SWAPPING_VIDEO,
    disabledForMobile: true,
    dartAndNodeSwappingBlock: true,
    width: {
      desktop_large: "506px",
      desktop_max: "639px",
    },
    height: {
      desktop_large: "460px",
      desktop_max: "573px",
    },
    blockPositions: {
      desktop_large: { bottom: "0", right: "0", left: "0", margin: "0 auto" },
      desktop_max: { bottom: "11px", right: "0", left: "0", margin: "0 auto" },
    },
    style: { borderRadius: "40%" },
  },
];
