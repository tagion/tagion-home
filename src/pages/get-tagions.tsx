import React from "react";
import classNames from "classnames/bind";

import {
  SubscribeToOurNewsletterBlock,
  YouCanParticipateBlock,
} from "../blocks";
import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  getTagionsPageGradients,
  youCanParticipateBlockData,
} from "../content";

import getTagionsPageIntro from "../assets/images/get-tagions-page/get_tagions_intro.png";

import * as styles from "../styles/pages/get-tagions.module.scss";

const cx = classNames.bind(styles);

const GetTagionsPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        gradients={getTagionsPageGradients.introductoryBlock}
        disableMainSidePaddings
      >
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
        <h2 style={{ height: "300px", border: "1px solid black" }}>
          ---Where to buy Tagions---
        </h2>
      </GradientSpotsWrapper>

      <GradientSpotsWrapper
        gradients={getTagionsPageGradients.subscribeToNewsletterBlock}
      >
        <YouCanParticipateBlock data={youCanParticipateBlockData.aboutPage} />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default GetTagionsPage;

export { Head } from "../components/head";
