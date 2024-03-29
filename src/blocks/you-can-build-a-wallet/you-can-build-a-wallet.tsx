import React, { useState } from "react";
import classNames from "classnames/bind";

import { GradientSpotsWrapper, SwiperButtons } from "../../components";
import { gradientBlockData } from "../../content";
import { Colors } from "../../common/enums/colors";

import * as styles from "./you-can-build-a-wallet.module.scss";

import securityIcon from "../../assets/images/security.svg";

const cx = classNames.bind(styles);

export const YouCanBuildAWalletBlock: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const carouselButtons = (isWhiteColor?: boolean) => (
  //   <SwiperButtons
  //     isWhiteColor={isWhiteColor}
  //     className={cx("carousel_buttons")}
  //     prevOnClick={() =>
  //       setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
  //     }
  //     nextOnClick={() =>
  //       setSelectedIndex((prev) =>
  //         prev < gradientBlockData.length - 1 ? prev + 1 : prev
  //       )
  //     }
  //   />
  // );

  return (
    <div className={cx("you_can_build_a_wallet_block")}>
      <GradientSpotsWrapper
        bgColor={Colors.MAIN_DARK}
        disableMainSidePaddings={true}
      >
        <div className={cx("content_wrapper")}>
          <div className={cx("img_wrapper")}>
            <img src={securityIcon} className={cx("security_icon")} />
          </div>

          <div className={cx("content")}>
            <span className={`${cx("title")} title-font`}>
              {gradientBlockData[selectedIndex].title(cx("justPay_style"))}
            </span>
            <span className={`${cx("description")} body-font`}>
              {gradientBlockData[selectedIndex].description}
            </span>
            {/* <Button
              name="Learn more"
              withArrow={true}
              isWhite={true}
              onClick={() => navigate("/about")}
            /> */}
          </div>
          {/* {carouselButtons(true)} */}
        </div>
      </GradientSpotsWrapper>
      {/* {carouselButtons()} */}
    </div>
  );
};
