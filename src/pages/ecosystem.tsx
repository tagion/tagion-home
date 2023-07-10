import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import {
  GradientSpotsWrapper,
  IntroductoryBlock,
  ScrollingBlock,
} from "../components";
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

import ecosystemPageIntro from "../assets/images/ecosystem/ecosystem_page_intro.png";

import * as styles from "../styles/pages/ecosystem.module.scss";

const cx = classNames.bind(styles);

const EcosystemPage = () => {
  return (
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        gradients={mainPageGradients.introductoryBlock}
        disableMainSidePaddings
      >
        <IntroductoryBlock
          title={
            <>
              Explore Our
              <br />
              Ecosystem
            </>
          }
          description="Safe, secure and stable transactions powered by permissionless Tagion Hashgraph and Wavefront, Proof of Community and DART distributed database."
          img={ecosystemPageIntro}
          classNames={{
            imgWrapper: cx("ecosystem_img_wrapper"),
            textWrapper: cx("ecosystem_text_wrapper"),
            introductoryBlock: cx("ecosystem_introductory_block"),
          }}
        />
      </GradientSpotsWrapper>
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
