import React from "react";
import classNames from "classnames/bind";

import { GlossaryBlock } from "../blocks/glossary/glossary";

import { Layout } from "../templates/layout";
import {
  GradientSpotsWrapper,
  IntroductoryBlock,
  ScrollingBlock,
} from "../components";

import { SocialMediaLinksBlock } from '../blocks/social-media-links';

import { YouCanParticipateBlock } from '../blocks/you-can-participate';

import {
  SubscribeToOurNewsletterBlock,
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
              Learn <span className="massive_word">&</span> follow
            </>
          }
          description="Stay up to date on all developments, freshen up on the details and background information and become part of the future of cooperative finance."
          classNames={{
            imgWrapper: cx("main_img_wrapper"),
            textWrapper: cx("main_text_wrapper"),
            content: cx("main_content"),
            introductoryBlock: cx("main_introductory_block"),
          }}
        />
      </AnimatedGradientWrapper>
      <YouCanParticipateBlock data={youCanParticipateBlockData.learnandfollowPage} />
      <SocialMediaLinksBlock />
      <GradientSpotsWrapper
        disableMainSidePaddings={true}
        gradients={mainPageGradients.secureScalableDecentralisedBlockGradient}
      >
      </GradientSpotsWrapper>
      <AnimatedGradientWrapper
        gradientData={bottomPageAnimatedGradientData}
        withLateralPaddings
      >
        <GlossaryBlock />
        <SubscribeToOurNewsletterBlock />
      </AnimatedGradientWrapper>
    </Layout>
  );
};



export default IndexPage;

export { Head } from "../components/head";
