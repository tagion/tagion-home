import React, { useState } from "react";
import classNames from "classnames/bind";
import { SwiperClass } from "swiper/react";

import { CustomSwiper, SwiperButtonsWrapper } from "..";

import * as styles from "./permissionless-tagion-hashgraph-swiper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  cardGenerator: () => React.JSX.Element[];
  classNames?: { wrapper?: string; title?: string };
}

export const PermissionlessTagionHashgraphSwiper: React.FC<InputProps> = ({
  cardGenerator,
  classNames,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  return (
    <div
      className={`${cx(
        "tagion_hashgrap_swiper_block"
      )} disable-lateral-margins ${classNames?.wrapper}`}
    >
      <CustomSwiper
        items={cardGenerator()}
        className={cx("mobile_card")}
        lateralSpace={{ mobile: 16, tablet: 24 }}
        spaceBetween={{ mobile: 16, tablet: 16 }}
        singleItemWindowWidth={492}
        swiperId="permission-tagion-hashgraph"
        setSwiperInstance={setSwiperInstance}
        disableBottomSwiperButtons
      />
      <div className={cx("desktop_card")}>{cardGenerator()}</div>

      {swiperInstance && (
        <SwiperButtonsWrapper
          swiperInstance={swiperInstance}
          isWhiteColor
          className={cx("swiper_buttons")}
        />
      )}
    </div>
  );
};
