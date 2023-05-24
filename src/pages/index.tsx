import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
import {
  ExploreOurEcosystemBlock,
  FinancialInfrastrucureNextGenBlock,
  SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  YouCanBuildAWalletBlock,
  YouCanParticipateBlock,
  TimelineBlock,
  LetsTalkBlock,
} from "../blocks";
import {
  gradientSpotsProps,
  newsletterSubscribeGradientSpotsProps,
} from "../content";

import { ReactComponent as HeroIcon } from "../assets/images/hero_icon.svg";
import pointAnimation from "../assets/videos/point-animation.gif";

import * as styles from "../styles/pages/index.module.scss";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout>
      <IntroductoryBlock
        Icon={HeroIcon}
        gifAnimation={pointAnimation}
        title="We Are Pioneering Money"
        description="Tagion empowers everyone everywhere to participate in a sustainable
            economic world. Evolving trust with your participation."
      />
      <FinancialInfrastrucureNextGenBlock />
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
