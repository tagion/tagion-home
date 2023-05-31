import React from "react";
import classNames from "classnames/bind";
import { ToastContainer } from "react-toastify";

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
  secureScalableDecentralisedBlockSpotsProps,
  introductoryBlockSpotsProps,
  newsletterSubscribeGradientSpotsProps,
} from "../content";

import { ReactComponent as HeroIcon } from "../assets/images/hero_icon.svg";
import pointAnimation from "../assets/videos/point-animation.gif";

import * as styles from "../styles/pages/index.module.scss";
import "react-toastify/dist/ReactToastify.css";

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

      <GradientSpotsWrapper
        spots={secureScalableDecentralisedBlockSpotsProps}
        disableMainSidePaddings={true}
      >
        <SecureScalableDecentralisedBlock />
        <YouCanParticipateBlock />
        <ValuePartnersBlock />
      </GradientSpotsWrapper>

      <GradientSpotsWrapper spots={newsletterSubscribeGradientSpotsProps}>
        <LetsTalkBlock />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
      {/* todo create separate component for ToastContainer and import in Layout wrapper*/}
      <ToastContainer
        autoClose={3000}
        closeOnClick={false}
        closeButton={false}
        draggable={false}
        icon={false}
        hideProgressBar={true}
        className={cx("toast_container")}
      />
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
