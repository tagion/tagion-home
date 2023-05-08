import React, { useState } from "react";
import classNames from "classnames/bind";

import { Button, GradientSpotsWrapper } from "../../components";
import {
  gradientBlockData,
  youCanBuildWalletGradientSpotsProps,
} from "../../content";
import { Colors } from "../../common/enums/colors";

import * as styles from "./you-can-build-a-wallet.module.scss";

import { ReactComponent as SecurityIcon } from "../../assets/images/security.svg";
import { ReactComponent as LeftArrowIcon } from "../../assets/images/left_arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/images/right-arrow.svg";

const cx = classNames.bind(styles);

export const YouCanBuildAWalletBlock: React.FC = () => {
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
    <div className={cx("you_can_build_a_wallet_block")}>
      <GradientSpotsWrapper
        spots={youCanBuildWalletGradientSpotsProps}
        bgColor={Colors.MAIN_DARK}
        disableMainSidePaddings={true}
      >
        <div className={cx("content_wrapper")}>
          <div className={cx("img_wrapper")}>
            <SecurityIcon className={cx("security_icon")} />
          </div>

          <div className={cx("content")}>
            <span className={`${cx("title")} title-font`}>
              {gradientBlockData[selectedIndex].title(cx("justPay_style"))}
            </span>
            <span className={`${cx("description")} body-font`}>
              {gradientBlockData[selectedIndex].description}
            </span>
            <Button name="Learn more" withArrow={true} isWhite={true} />
          </div>
          {carouselButtons(true)}
        </div>
      </GradientSpotsWrapper>
      {carouselButtons()}
    </div>
  );
};
