import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  FinancialInfrastrucureNextGenBlock,
  SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  YouCanParticipateBlock,
  LetsTalkBlock,
} from "../blocks";
import { mainPageGradients, youCanParticipateBlockData } from "../content";

import pointAnimation from "../assets/videos/point-animation.gif";
import mainPageIntro from "../assets/images/main-page-intro.png";

import * as styles from "../styles/pages/index.module.scss";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        gradients={mainPageGradients.introductoryBlock}
        disableMainSidePaddings
      >
        <IntroductoryBlock
          gifAnimation={pointAnimation}
          img={mainPageIntro}
          title="We Are Pioneering Money"
          description="Tagion empowers everyone everywhere to participate in a sustainable
            economic world. Evolving trust with your participation."
          classNames={{
            imgWrapper: cx("main_img_wrapper"),
            textWrapper: cx("main_text_wrapper"),
            content: cx("main_content"),
            introductoryBlock: cx("main_introductory_block"),
          }}
        />
      </GradientSpotsWrapper>
      <FinancialInfrastrucureNextGenBlock />

      <GradientSpotsWrapper
        disableMainSidePaddings={true}
        gradients={mainPageGradients.secureScalableDecentralisedBlockGradient}
      >
        <SecureScalableDecentralisedBlock />
        <YouCanParticipateBlock
          className="main-lateral-paddings"
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
