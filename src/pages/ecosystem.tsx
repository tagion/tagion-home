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
  //YouCanParticipateBlock,
  InclusiveElasticDecentralisedBlock,
  PermissionlessTagionHashgraphBlock,
  //EcosystemVisualizationBlock,
} from "../blocks";
import {
  //youCanParticipateBlockData,
  buildForTheRealWorldData,
  coreBuildingBlockData,
  FAQBlockData,
  ecosystemPageGradients,
  bottomPageAnimatedGradientData,
  topPageAnimatedGradientData,
} from "../content";
import { QuestionsBlock } from "../components";
import { Colors, PageSizes } from "../common/enums";
import { useResizeEvent } from "../hooks";
import { AnimatedGradientWrapper } from "../wrappers";

import ecosystemPageIntro from "../assets/images/ecosystem/ecosystem_page_intro.png";
// import problemsIcon from "../assets/images/problems_icon.png";
import FAQ_600_gradient from "../assets/images/gradient/ecosystem/tablet/FAQ_600.png";
import FAQ_1440_gradient from "../assets/images/gradient/ecosystem/desktop-max/FAQ_1440.png";

import * as styles from "../styles/pages/ecosystem.module.scss";
// add later when done import // { DecentralisationMilestonesBlock } from "../blocks/decentralisation-milestones";

const cx = classNames.bind(styles);

const EcosystemPage = () => {
  // const [FAQImage, setFAQImage] = useState("");

  // useResizeEvent({
  //   resizeHandler: () => {
  //     setFAQImage(
  //       window.innerWidth >= PageSizes.DESKTOP
  //         ? FAQ_1440_gradient
  //         : FAQ_600_gradient
  //     );
  //   },
  // });

  return (
    <Layout withPaddingTop={false}>
      <AnimatedGradientWrapper gradientData={topPageAnimatedGradientData}>
        <IntroductoryBlock
          title={
            <>
             <span style={{ lineHeight: '1' }}></span>
              The way of <br />the Tagion
            </>
          }
          description="Discover how Tagion functions under the hood and learn about our patented technologies that allow for the speed, scalability and low energy consumption that set Tagion apart from other solutions."
          img={ecosystemPageIntro}
          classNames={{
            imgWrapper: cx("ecosystem_img_wrapper"),
            textWrapper: cx("ecosystem_text_wrapper"),
            introductoryBlock: cx("ecosystem_introductory_block"),
          }}
        />
        <ScrollingBlock
          title="A class of its own in distributed networks"
          data={buildForTheRealWorldData}
          classNames={{
            wrapper: "main-lateral-margins",
            title: cx("scrollingBlock_title"),
          }}
        />
      </AnimatedGradientWrapper>
      <GradientSpotsWrapper
        gradients={ecosystemPageGradients.ecosystemVisualizationBlock}
        mixBlendModeMultiply
      >

      </GradientSpotsWrapper>

      <GradientSpotsWrapper bgColor={Colors.MAIN_DARK} disableMainSidePaddings>
        <InclusiveElasticDecentralisedBlock />
        <PermissionlessTagionHashgraphBlock />
      </GradientSpotsWrapper>

      <div
        className={`${cx("questions_blocks_wrapper")} disable_lateral_margins`}
      >
        <QuestionsBlock
          title="Core building blocks"
          description={ //! FIX THIS ERROR IN THE NEAR FUTURE !
            <>
              Understand how our technology enables real decentralisation and independent, sovereign, scalable data and transaction infrastuctures. For starters, here is a&nbsp;
              <a 
                href="https://docs.tagion.org/gov/intro/jargonbusting" 
                style={{ color: 'black' }}
              >
              101 article about Tagion works.
              </a>
              &nbsp;For a deep dive, find all details on our&nbsp;
              <a 
                href="https://docs.tagion.org/tech/intro"
                style={{ color: 'black' }}
              >
              technical documentation pages.
              </a>
            </>
          }
          data={coreBuildingBlockData}
        />
        {/* <div className={cx("FAQ_wrapper")}>
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
        </div> */}
      </div>
      <AnimatedGradientWrapper
        gradientData={bottomPageAnimatedGradientData}
        withLateralPaddings
      >
        <SubscribeToOurNewsletterBlock />
      </AnimatedGradientWrapper>
    </Layout>
  );
};

export default EcosystemPage;

export { Head } from "../components/head";
