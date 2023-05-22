import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
<<<<<<< HEAD
import { GradientSpotsWrapper } from "../components";
=======
import { GradientSpotsWrapper, IntroductoryBlock } from "../components";
>>>>>>> develop
import {
  ExploreOurEcosystemBlock,
  FinancialInfrastrucureNextGenBlock,
  SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  ValuePartnersBlock,
  YouCanBuildAWalletBlock,
  YouCanParticipateBlock,
<<<<<<< HEAD
=======
  TimelineBlock,
  LetsTalkBlock,
>>>>>>> develop
} from "../blocks";
import {
  gradientSpotsProps,
  newsletterSubscribeGradientSpotsProps,
} from "../content";

<<<<<<< HEAD
=======
import { ReactComponent as HeroIcon } from "../assets/images/hero_icon.svg";
import pointAnimation from "../assets/videos/point-animation.gif";

>>>>>>> develop
import * as styles from "../styles/pages/index.module.scss";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout>
<<<<<<< HEAD
      <ValuePartnersBlock />
      <FinancialInfrastrucureNextGenBlock />
      <YouCanBuildAWalletBlock />
      <GradientSpotsWrapper spots={gradientSpotsProps}>
        <ExploreOurEcosystemBlock />
        <SecureScalableDecentralisedBlock />
      </GradientSpotsWrapper>
      <YouCanParticipateBlock />
      <GradientSpotsWrapper spots={newsletterSubscribeGradientSpotsProps}>
        {/* temporary_block will be replaced by a component  */}
        <div className={cx("temporary_block")} />
=======
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
      <TimelineBlock />
      <YouCanParticipateBlock />
      <ValuePartnersBlock />
      <GradientSpotsWrapper spots={newsletterSubscribeGradientSpotsProps}>
        <LetsTalkBlock />
>>>>>>> develop
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
