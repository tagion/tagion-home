import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { GradientSpotsWrapper, ScrollingBlock } from "../components";
import {
  SubscribeToOurNewsletterBlock,
  YouCanParticipateBlock,
} from "../blocks";
import {
  mainPageGradients,
  youCanParticipateBlockData,
  buildForTheRealWorldData,
  coreBuildingBlockData,
  FAQBlockData,
} from "../content";
import { QuestionsBlock } from "../components";

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
      <QuestionsBlock
        title="Core building blocks"
        description="For a real decentralised, independent, censorship resistant, borderless monetary system and banking infrastucture."
        data={coreBuildingBlockData}
      />
      <QuestionsBlock
        title={
          <>
            Frequently
            <br />
            asked questions
          </>
        }
        data={FAQBlockData}
        direction="column"
        classNames={{
          questionsBlock: cx("questionsBlock"),
        }}
      />
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
