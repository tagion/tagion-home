import React, { useState } from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  LetsTalkBlock,
  SubscribeToOurNewsletterBlock,
  TweetsAboutTagionBlock,
  ValueForContributorsBlock,
} from "../blocks";
import { communityPageGradients, mainPageGradients } from "../content";
import { useResizeEvent } from "../hooks";
import { PageSizes } from "../common/enums";

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
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        gradients={communityPageGradients.introductoryBlock}
        disableMainSidePaddings
      >
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
      </GradientSpotsWrapper>
      <ValueForContributorsBlock />
      <GradientSpotsWrapper
        gradients={communityPageGradients.tweetsAboutTagionBlock}
        disableMainSidePaddings
      >
        <TweetsAboutTagionBlock />
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

export default CommunityPage;

export { Head } from "../components/head";
