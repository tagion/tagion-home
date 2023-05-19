import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper } from "../components";
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

import * as styles from "../styles/pages/index.module.scss";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout>
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
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
