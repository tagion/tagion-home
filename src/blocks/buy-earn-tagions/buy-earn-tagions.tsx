import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { navigate } from "gatsby";

import {
  Button,
  Card,
  GradientSpotsWrapper,
  SubmitRequestModal,
} from "../../components";
import { getTagionsPageGradients } from "../../content";
import { Colors, PageSizes } from "../../common/enums";

import tokenIcon from "../../assets/images/token_high_resolution.png";
import treasuryIcon from "../../assets/images/treasury.png";

import * as styles from "./buy-earn-tagions.module.scss";

const cx = classNames.bind(styles);

export const BuyEarnTagionsBlock: React.FC = ({}) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const resizeHandler = () =>
    setIsMobileSize(() => window.innerWidth < PageSizes.TABLET);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => {
      resizeHandler();
    });
    return () => window.removeEventListener("resize", () => resizeHandler());
  }, []);

  return (
    <div className={`${cx("buy_earn_tagions_block")} main-lateral-paddings`}>
      <GradientSpotsWrapper
        gradients={getTagionsPageGradients.buyEarnTagionBlock}
        disableMainSidePaddings
        bgColor={Colors.MAIN_DARK}
        className={{
          bgWrapper: cx("moving_subblock", {
            isBigger: hoveredCardIndex === 0,
            isLower: hoveredCardIndex === 1,
          }),
        }}
      >
        <div
          className={cx("card_wrapper", { withGradient: true })}
          onMouseEnter={() => setHoveredCardIndex(0)}
          onMouseLeave={() => setHoveredCardIndex(-1)}
          onClick={() => setIsModalOpened(true)}
        >
          <Card
            title="Where to buy Tagions"
            description="If you`re interested in owning your own tagions, please contact us."
            img={{ path: tokenIcon, alt: "token icon" }}
            classNames={{
              card: cx("card"),
              mainContent: cx("main_content"),
              title: cx("card_title"),
              description: cx("card_description"),
              img: cx("card_img"),
            }}
          />
          <div className={cx("button_wrapper")}>
            <Button
              name="Buy Tagions"
              isWhite
              isGradientAdded
              contentWidth={isMobileSize ? 117 : 150}
              className={cx("button")}
              withArrow={!isMobileSize}
            />
          </div>
        </div>
      </GradientSpotsWrapper>

      <div
        className={cx("card_wrapper", "moving_subblock", {
          isBigger: hoveredCardIndex === 1,
          isLower: hoveredCardIndex === 0,
        })}
        onMouseEnter={() => setHoveredCardIndex(1)}
        onMouseLeave={() => setHoveredCardIndex(-1)}
        onClick={() => navigate("/community")}
      >
        <Card
          title="Ways to earn Tagions"
          description={
            <>
              Get involved, get rewards!
              <br />
              Get rewards and earn Tagions by evolving the network together with
              the core contributors.
            </>
          }
          img={{ path: treasuryIcon, alt: "treasury icon" }}
          classNames={{
            card: cx("card"),
            mainContent: cx("main_content"),
            title: cx("card_title"),
            description: cx("card_description"),
            img: cx("card_img"),
          }}
        />
        <div className={cx("button_wrapper")}>
          <Button
            name="Learn more"
            isGradientAdded
            contentWidth={isMobileSize ? 111 : 143}
            className={cx("button")}
            withArrow={!isMobileSize}
          />
        </div>
      </div>

      <SubmitRequestModal
        open={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
    </div>
  );
};
