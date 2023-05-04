import React, { useState } from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { Button, GradientBlock, GradientSpotsWrapper } from "../components";
import {
  ExploreOurEcosystemBlock,
  FinancialInfrastrucureNextGenBlock,
  SecureScalableDecentralisedBlock,
  SubscribeToOurNewsletterBlock,
  YouCanParticipateBlock,
} from "../blocks";
import {
  gradientBlockData,
  gradientSpotsProps,
  newsletterSubscribeGradientSpotsProps,
} from "../content";

import * as styles from "../styles/pages/index.module.scss";

import { ReactComponent as SecurityIcon } from "../assets/images/security.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/images/left_arrow.svg";
import { ReactComponent as RightArrowIcon } from "../assets/images/right-arrow.svg";

const cx = classNames.bind(styles);

const IndexPage = () => {
  // will be removed after adding the carousel component
  const [selectedIndex, setSelectedIndex] = useState(0);

  const carouselButtons = (isWhiteColor?: boolean) => (
    <div className={cx("carousel_buttons")}>
      <Button
        Icon={() => <LeftArrowIcon />}
        isCarousel={true}
        isWhite={isWhiteColor}
        onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))}
      />
      <Button
        Icon={() => <RightArrowIcon />}
        isCarousel={true}
        isWhite={isWhiteColor}
        onClick={() =>
          setSelectedIndex((prev) =>
            prev < gradientBlockData.length - 1 ? prev + 1 : prev
          )
        }
      />
    </div>
  );

  return (
    <Layout>
      <FinancialInfrastrucureNextGenBlock />

      <div className={cx("gradientBlock_wrapper")}>
        <GradientBlock>
          <div className={cx("gradientBlock_content_wrapper")}>
            <div className={cx("img_wrapper")}>
              <SecurityIcon className={cx("security_icon")} />
            </div>

            <div className={cx("body")}>
              <span className={cx("title")}>
                {gradientBlockData[selectedIndex].title(cx("justPay_style"))}
              </span>
              <span className={`${cx("description")} body-font`}>
                {gradientBlockData[selectedIndex].description}
              </span>
              <Button name="Learn more" withArrow={true} isWhite={true} />
            </div>
            {carouselButtons(true)}
          </div>
        </GradientBlock>
        {carouselButtons()}
      </div>
      <GradientSpotsWrapper spots={gradientSpotsProps}>
        <ExploreOurEcosystemBlock />
        <SecureScalableDecentralisedBlock />
      </GradientSpotsWrapper>
      <YouCanParticipateBlock />
      <GradientSpotsWrapper spots={newsletterSubscribeGradientSpotsProps}>
        {/* temporary_block will be replaced by a component  */}
        <div className={cx("temporary_block")} />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";
