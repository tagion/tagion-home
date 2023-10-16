import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import {
  GradientSpotsWrapper,
  IntroductoryBlock,
  ScrollingBlock,
} from "../components";
import {
  SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  YouCanParticipateBlock,
  LetsTalkBlock,
  WhatIsTagionBlock,
} from "../blocks";
import {
  mainPageGradients,
  nextGennFinancialInfrastrucureData,
  youCanParticipateBlockData,
} from "../content";
import { AnimatedGradientWrapper } from "../wrappers";

import pointAnimation from "../assets/videos/point-animation.gif";
import mainPageIntro from "../assets/images/main-page-intro.png";

import * as styles from "../styles/pages/index.module.scss";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <AnimatedGradientWrapper>
        <IntroductoryBlock
          gifAnimation={pointAnimation}
          img={mainPageIntro}
          title={
            <>
              Build <br />
              The Future. Start Today.
            </>
          }
          description="Benefit from our highly scalable, decentralised and secure DLT network infrastructure and drive innovation across finance, supply chains, nature conservation, exchange protocols and beyond."
          classNames={{
            imgWrapper: cx("main_img_wrapper"),
            textWrapper: cx("main_text_wrapper"),
            content: cx("main_content"),
            introductoryBlock: cx("main_introductory_block"),
          }}
        />
        <ScrollingBlock
          title="Next generation adaptive infrastructure"
          data={nextGennFinancialInfrastrucureData}
          classNames={{
            title: cx("scrollingBlock_title"),
            wrapper: "main_lateral_paddings",
          }}
        />
      </AnimatedGradientWrapper>

      <WhatIsTagionBlock />
      <GradientSpotsWrapper
        disableMainSidePaddings={true}
        gradients={mainPageGradients.secureScalableDecentralisedBlockGradient}
      >
        <SecureScalableDecentralisedBlock />
        <YouCanParticipateBlock
          className="main_lateral_paddings"
          data={youCanParticipateBlockData.mainPage}
        />
        <ValuePartnersBlock />
      </GradientSpotsWrapper>

      <GradientSpotsWrapper
        gradients={mainPageGradients.subscribeToNewsletterBlock}
      >
        <LetsTalkBlock />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
