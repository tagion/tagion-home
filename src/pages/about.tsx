import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  aboutPageGradients,
  bottomPageAnimatedGradientData,
  topPageAnimatedGradientData,
} from "../content";
import {
  FoundationBlock,
  OurValuesBlock,
  OurVisionAndMissionBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  //NatureIsOurClientBlock,
  MeetOurContributorsBlock,
} from "../blocks";
import { Colors } from "../common/enums";
import { AnimatedGradientWrapper } from "../wrappers";

import aboutPageIntro from "../assets/images/about-page/about-page-intro.png";

import * as styles from "../styles/pages/about.module.scss";

const cx = classNames.bind(styles);

const AboutPage = () => {
  return (
    <Layout
      withPaddingTop={false}
      scrollHeightForTransparentHeader={{ desktop_large: 90 }}
    >
      <AnimatedGradientWrapper gradientData={topPageAnimatedGradientData}>
        <IntroductoryBlock
          title="Built on vision and values"
          description="We dream of a future where everyone has equal opportunities to participate in a fair economy and has full control over their (personal) data. Today, we are actively building our dream - a modular, decentralised, scalable and secure network for a cooperative data management based on real human interactions. And the best part is that we are building it together with you."
          img={aboutPageIntro}
          classNames={{
            imgWrapper: cx("about_img_wrapper"),
            content: cx("about_content"),
            textWrapper: cx("about_text_wrapper"),
            introductoryBlock: cx("about_introductory_block"),
          }}
        />
        <OurVisionAndMissionBlock />
      </AnimatedGradientWrapper>

      <GradientSpotsWrapper
        gradients={aboutPageGradients.ourValuesBlock}
        disableMainSidePaddings
        bgColor={Colors.MAIN_DARK}
      >
        <OurValuesBlock />
      </GradientSpotsWrapper>
      <GradientSpotsWrapper
        gradients={aboutPageGradients.valuePartnersBlock}
        disableMainSidePaddings
      >
      </GradientSpotsWrapper>
      {/* <GradientSpotsWrapper
        gradients={aboutPageGradients.foundationBlock}
        disableMainSidePaddings
        bgColor={Colors.MAIN_DARK}
      >
        <FoundationBlock />
      </GradientSpotsWrapper> */}
      <MeetOurContributorsBlock />
        <ValuePartnersBlock className="main-bottom-margins" />
      <AnimatedGradientWrapper
        gradientData={bottomPageAnimatedGradientData}
        withLateralPaddings
      >
        <SubscribeToOurNewsletterBlock />
      </AnimatedGradientWrapper>
    </Layout>
  );
};

export default AboutPage;

export { Head } from "../components/head";
