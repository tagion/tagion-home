import React, { useState } from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  LetsTalkBlock,
  StartContributingBlock,
  SubscribeToOurNewsletterBlock,
  TweetsAboutTagionBlock,
  ValueForContributorsBlock,
} from "../blocks";
import {
  bottomPageAnimatedGradientData,
  communityPageGradients,
  topPageAnimatedGradientData,
} from "../content";
import { useResizeEvent } from "../hooks";
import { PageSizes } from "../common/enums";
import { AnimatedGradientWrapper } from "../wrappers";

import comminityPageIntroDesktop from "../assets/images/community/community_page_intro_desktop.png";
import comminityPageIntroMobile from "../assets/images/community/community_page_intro_mobile.png";

import * as styles from "../styles/pages/community.module.scss";

const cx = classNames.bind(styles);

const CommunityPage = () => {
  const [isMobileIntroImg, setIsMobileIntroImg] = useState(false);
  useResizeEvent({
    resizeHandler: () =>
      setIsMobileIntroImg(window.innerWidth < PageSizes.DESKTOP),
  });
  return (
    <Layout
      withPaddingTop={false}
      scrollHeightForTransparentHeader={{ mobile: 40, desktop_large: 70 }}
    >
      <AnimatedGradientWrapper gradientData={topPageAnimatedGradientData}>
        <IntroductoryBlock
          title="Grow With Us"
          description={
            <>
              Are you a developer, designer, academic, writer or other?
              <br />
              You can join a core unit for system development and governance,
              update this website, create media and content and more!
              <br />
              Join early and receive Tagion rewards.
            </>
          }
          img={
            isMobileIntroImg
              ? comminityPageIntroMobile
              : comminityPageIntroDesktop
          }
          classNames={{
            imgWrapper: cx("community_img_wrapper"),
            textWrapper: cx("community_text_wrapper"),
            introductoryBlock: cx("community_introductory_block"),
          }}
        />
        <StartContributingBlock />
      </AnimatedGradientWrapper>
      <ValueForContributorsBlock />
      <GradientSpotsWrapper
        gradients={communityPageGradients.tweetsAboutTagionBlock}
        disableMainSidePaddings
      >
        <TweetsAboutTagionBlock />
      </GradientSpotsWrapper>
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

export default CommunityPage;

export { Head } from "../components/head";
