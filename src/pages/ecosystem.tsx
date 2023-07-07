import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, ScrollingBlock } from "../components";
import {
  CoreBuildingBlock,
  SubscribeToOurNewsletterBlock,
  YouCanParticipateBlock,
} from "../blocks";
import {
  mainPageGradients,
  youCanParticipateBlockData,
  buildForTheRealWorldData,
} from "../content";

import * as styles from "../styles/pages/ecosystem.module.scss";

const cx = classNames.bind(styles);

const EcosystemPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <div style={{ height: "200px" }} />
      <ScrollingBlock
        title="Build for the real world with confidence"
        data={buildForTheRealWorldData}
        classNames={{ title: cx("scrollingBlock_title") }}
      />
      <CoreBuildingBlock />
      <GradientSpotsWrapper
        gradients={mainPageGradients.subscribeToNewsletterBlock}
      >
        <YouCanParticipateBlock data={youCanParticipateBlockData.mainPage} />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default EcosystemPage;

export { Head } from "../components/head";
