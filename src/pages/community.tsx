import React, { useState } from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  BuyEarnTagionsBlock,
  LetsTalkBlock,
  StartContributingBlock,
  SubscribeToOurNewsletterBlock,
  //TweetsAboutTagionBlock,
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
import { WhereToBuyTagionsBlock } from "../blocks/where-to-buy-tagions/where-to-buy-tagions";

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
          title={
            <>
              Co&#8209;Develop<br /> Co&#8209;Own
            </>
          }
          description={
            <>
              Are you a developer, designer, academic, writer or just want to give your idle hardware a new purpose?
              <br />
              The foundation of our decentralised network is you!
              <br />
              Join now as we release Tagion from the stewardship of its founders - and shape the future of digital infrastuctures!
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
      <WhereToBuyTagionsBlock/>
      <GradientSpotsWrapper
        gradients={communityPageGradients.tweetsAboutTagionBlock}
        disableMainSidePaddings
      >
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
