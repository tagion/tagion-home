import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import { aboutPageGradients, mainPageGradients } from "../content";

import aboutPageIntro from "../assets/images/about-page/about-page-intro.png";
import {
  LetsTalkBlock,
  OurValuesBlock,
  OurVisionAndMissionBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  YouCanParticipateBlock,
} from "../blocks";
import { Colors } from "../common/enums";

import * as styles from "../styles/pages/about.module.scss";

const cx = classNames.bind(styles);

const AboutPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        gradients={mainPageGradients.introductoryBlock}
        disableMainSidePaddings
      >
        <IntroductoryBlock
          title="About"
          description="Five years ago, we were dreaming of a fairer, more efficient and inclusive monetary system and banking infrastructure. Today, we’re building our dream - a decentralised, scalable and secure money-based network with real human interactions. And the best part, is that we are building it together with you."
          img={aboutPageIntro}
          classNames={{
            imgWrapper: cx("about_img_wrapper"),
            content: cx("about_content"),
            textWrapper: cx("about_text_wrapper"),
            introductoryBlock: cx("about_introductory_block"),
          }}
        />
      </GradientSpotsWrapper>
      <OurVisionAndMissionBlock />
      <GradientSpotsWrapper
        gradients={aboutPageGradients.OurValuesBlock}
        disableMainSidePaddings
        bgColor={Colors.MAIN_DARK}
      >
        <OurValuesBlock />
      </GradientSpotsWrapper>
      <ValuePartnersBlock />
      <YouCanParticipateBlock />
      <GradientSpotsWrapper
        gradients={mainPageGradients.subscribeToNewsletterBlock}
      >
        <LetsTalkBlock />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default AboutPage;

export { Head } from "../components/head";
