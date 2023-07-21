import React, { useState } from "react";
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
  InclusiveElasticDecentralisedBlock,
  PermissionlessTagionHashgraphBlock,
  EcosystemVisualizationBlock,
} from "../blocks";
import {
  youCanParticipateBlockData,
  buildForTheRealWorldData,
  coreBuildingBlockData,
  FAQBlockData,
  ecosystemPageGradients,
} from "../content";
import { QuestionsBlock } from "../components";
import { Colors, PageSizes } from "../common/enums";
import { useResizeEvent } from "../hooks";

import ecosystemPageIntro from "../assets/images/ecosystem/ecosystem_page_intro.png";
import problemsIcon from "../assets/images/problems_icon.png";
import FAQ_600_gradient from "../assets/images/gradient/ecosystem/tablet/FAQ_600.png";
import FAQ_1440_gradient from "../assets/images/gradient/ecosystem/desktop-max/FAQ_1440.png";

import * as styles from "../styles/pages/ecosystem.module.scss";

const cx = classNames.bind(styles);

const EcosystemPage = () => {
  const [FAQImage, setFAQImage] = useState("");

  useResizeEvent({
    resizeHandler: () => {
      setFAQImage(
        window.innerWidth >= PageSizes.DESKTOP
          ? FAQ_1440_gradient
          : FAQ_600_gradient
      );
    },
  });

  return (
    <Layout withPaddingTop={false}>
      <GradientSpotsWrapper
        gradients={ecosystemPageGradients.introductoryBlock}
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
        <ScrollingBlock
          title="Build for the real world with confidence"
          data={buildForTheRealWorldData}
          classNames={{
            wrapper: "main-lateral-margins",
            title: cx("scrollingBlock_title"),
          }}
        />
      </GradientSpotsWrapper>
      <GradientSpotsWrapper
        gradients={ecosystemPageGradients.ecosystemVisualizationBlock}
      >
        <EcosystemVisualizationBlock />
      </GradientSpotsWrapper>

      <GradientSpotsWrapper bgColor={Colors.MAIN_DARK} disableMainSidePaddings>
        <InclusiveElasticDecentralisedBlock />
        <PermissionlessTagionHashgraphBlock />
      </GradientSpotsWrapper>

      <div
        className={`${cx("questions_blocks_wrapper")} disable-lateral-margins`}
      >
        <QuestionsBlock
          title="Core building blocks"
          description="For a real decentralised, independent, censorship resistant, borderless monetary system and banking infrastucture."
          data={coreBuildingBlockData}
        />
        <div className={cx("FAQ_wrapper")}>
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
          <img className={cx("gradient")} src={FAQImage} alt="gradient" />
          <img
            className={cx("problems_icon")}
            src={problemsIcon}
            alt="magnifying glass icon"
          />
        </div>
      </div>
      <GradientSpotsWrapper
        gradients={ecosystemPageGradients.subscribeToNewsletterBlock}
      >
        <YouCanParticipateBlock data={youCanParticipateBlockData.mainPage} />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default EcosystemPage;

export { Head } from "../components/head";
