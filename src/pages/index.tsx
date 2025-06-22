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
              Cooperative <span className="massive_word">Financial</span> Infrastructure
            </>
          }
          description="Future-proof data management and sharing  needs a customisable, distributed, and scalable foundation. Tagion enables communities and businesses to build distributed database solutions that foster transparency, fairness, and efficiency, driving inclusive and sustainable growth. "
          classNames={{
            imgWrapper: cx("main_img_wrapper"),
            textWrapper: cx("main_text_wrapper"),
            content: cx("main_content"),
            introductoryBlock: cx("main_introductory_block"),
          }}
        />
        <ScrollingBlock
          title={
            <>
              The technology <br /> that enables and aligns
            </>
          }
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
      <h2 className={cx("invitation_title")}>You are invited</h2>
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
