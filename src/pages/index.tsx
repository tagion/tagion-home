import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import {
  GradientSpotsWrapper,
  IntroductoryBlock,
  ScrollingBlock,
} from "../components";
import {
  //AecornBlock,
  //SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  //ValuePartnersBlock,
  YouCanParticipateBlock,
  LetsTalkBlock,
  WhatIsTagionBlock,
} from "../blocks";
import {
  bottomPageAnimatedGradientData,
  mainPageGradients,
  nextGennFinancialInfrastrucureData,
  topPageAnimatedGradientData,
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
      <AnimatedGradientWrapper gradientData={topPageAnimatedGradientData}>
        <IntroductoryBlock
          gifAnimation={pointAnimation}
          img={mainPageIntro}
          title={
            <>
              Ready For <span className="massive_word">New</span> Ecosystems
            </>
          }
          description="Future-proof economies need a customisable, distributed and massively scalable foundation to build resilient use cases. Tagion is a decentralised network for high volume transactions and distributed solutions. "
          classNames={{
            imgWrapper: cx("main_img_wrapper"),
            textWrapper: cx("main_text_wrapper"),
            content: cx("main_content"),
            introductoryBlock: cx("main_introductory_block"),
          }}
        />
        <ScrollingBlock
          title="We stand out from the crowd"
          data={nextGennFinancialInfrastrucureData}
          classNames={{
            title: cx("scrollingBlock_title"),
            wrapper: "main-lateral-margins",
          }}
        />
      </AnimatedGradientWrapper>

      <WhatIsTagionBlock />
      <GradientSpotsWrapper
        disableMainSidePaddings={true}
        gradients={mainPageGradients.secureScalableDecentralisedBlockGradient}
      >
      </GradientSpotsWrapper>
      <YouCanParticipateBlock data={youCanParticipateBlockData.mainPage} />
      <AnimatedGradientWrapper
        gradientData={bottomPageAnimatedGradientData}
        withLateralPaddings
      >
        <LetsTalkBlock />
        <SubscribeToOurNewsletterBlock />
      </AnimatedGradientWrapper>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
