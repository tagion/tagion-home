import React, { useState } from "react";
import classNames from "classnames/bind";
import { SwiperClass } from "swiper/react";

import { CustomSwiper, SwiperButtonsWrapper } from "..";

import * as styles from "./tweets-swiper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title: string;
  classNames?: { wrapper?: string; title?: string };
  cardGenerator: () => React.JSX.Element[];
}

export const TweetsSwiper: React.FC<InputProps> = ({
  cardGenerator,
  title,
  classNames,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const generatedCards = cardGenerator();

  return (
    <div
      className={`${cx(
        "tweets_swiper_block"
      )} main-top-margins disable_lateral_margins ${classNames?.wrapper}`}
    >
      <div className={`${cx("title_wrapper")} ${classNames?.title} title-font`}>
        <span>{title}</span>
        {swiperInstance && (
          <SwiperButtonsWrapper
            swiperInstance={swiperInstance}
            className={cx("swiper_buttons")}
          />
        )}
      </div>

      <div className={cx("content")}>
        <CustomSwiper
          items={generatedCards}
          lateralSpace={{
            mobile: 16,
            tablet: 24,
            desktop: 80,
            desktop_large: 80,
            desktop_max: 0,
          }}
          spaceBetween={{
            mobile: 16,
            tablet: 16,
            desktop: 16,
            desktop_large: 24,
            desktop_max: 24,
          }}
          singleItemWindowWidth={346}
          swiperId={title}
          setSwiperInstance={setSwiperInstance}
          isWhiteColorButtons
        />
      </div>
    </div>
  );
};
