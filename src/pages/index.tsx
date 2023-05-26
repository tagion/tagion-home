import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  FinancialInfrastrucureNextGenBlock,
  SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  YouCanBuildAWalletBlock,
  YouCanParticipateBlock,
  LetsTalkBlock,
} from "../blocks";
import {
  gradientSpotsProps,
  introductoryBlockSpotsProps,
  newsletterSubscribeGradientSpotsProps,
} from "../content";

import { ReactComponent as HeroIcon } from "../assets/images/hero_icon.svg";
import pointAnimation from "../assets/videos/point-animation.gif";

import * as styles from "../styles/pages/index.module.scss";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        spots={introductoryBlockSpotsProps}
        disableMainSidePaddings
      >
        <IntroductoryBlock
          Icon={HeroIcon}
          gifAnimation={pointAnimation}
          title="We Are Pioneering Money"
          description="Tagion empowers everyone everywhere to participate in a sustainable
            economic world. Evolving trust with your participation."
        />
        <FinancialInfrastrucureNextGenBlock />
      </GradientSpotsWrapper>

      <YouCanBuildAWalletBlock />
      <GradientSpotsWrapper spots={gradientSpotsProps}>
        {/* <ExploreOurEcosystemBlock /> */}
        <SecureScalableDecentralisedBlock />
      </GradientSpotsWrapper>
      {/* <TimelineBlock /> */}
      <YouCanParticipateBlock />
      <ValuePartnersBlock />
      <GradientSpotsWrapper spots={newsletterSubscribeGradientSpotsProps}>
        <LetsTalkBlock />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
