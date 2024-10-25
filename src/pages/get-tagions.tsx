import React from "react";
import classNames from "classnames/bind";

import {
  SubscribeToOurNewsletterBlock,
  BuyEarnTagionsBlock,
  YouCanParticipateBlock,
} from "../blocks";
import { Layout } from "../templates/layout";
import { IntroductoryBlock } from "../components";
import {
  bottomPageAnimatedGradientData,
  topPageAnimatedGradientData,
  youCanParticipateBlockData,
} from "../content";
import { AnimatedGradientWrapper } from "../wrappers";

import getTagionsPageIntro from "../assets/images/get-tagions-page/get_tagions_intro.png";

import * as styles from "../styles/pages/get-tagions.module.scss";

const cx = classNames.bind(styles);

const GetTagionsPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <AnimatedGradientWrapper gradientData={topPageAnimatedGradientData}>
        <IntroductoryBlock
          title="Get Tagions"
          description="Buy Tagions today. Join the movement to build a future proof monetary system."
          img={getTagionsPageIntro}
          classNames={{
            imgWrapper: cx("get_tagions_img_wrapper"),
            content: cx("get_tagions_content"),
            textWrapper: cx("get_tagions_text_wrapper"),
            introductoryBlock: cx("get_tagions_introductory_block"),
          }}
        />
        <BuyEarnTagionsBlock />
      </AnimatedGradientWrapper>

      <AnimatedGradientWrapper
        gradientData={bottomPageAnimatedGradientData}
        withLateralPaddings
      >
        <YouCanParticipateBlock data={youCanParticipateBlockData.gettagionsPage} />
        <SubscribeToOurNewsletterBlock />
      </AnimatedGradientWrapper>
    </Layout>
  );
};

export default GetTagionsPage;

export { Head } from "../components/head";
