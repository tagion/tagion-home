import React, { useState } from "react";
import classNames from "classnames/bind";
import { SwiperClass } from "swiper/react";

import { CustomSwiper, SwiperButtonsWrapper } from "..";

import * as styles from "./inclusive-elastic-decentralised-swiper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title: string | React.ReactElement;
  description: string | React.ReactElement;
  cardGenerator: () => React.JSX.Element[];
}

export const InclusiveElasticDecentralisedSwiper: React.FC<InputProps> = ({
  cardGenerator,
  title,
  description,
}) => {
  const generatedCards = cardGenerator();

  return (
    <div
      className={`${cx(
        "inclusive_elastic_decentralised_swiper"
      )} disable-lateral-margins`}
    >
      <div className={`${cx("text_wrapper")} main-lateral-paddings`}>
        <div className={`${cx("title")} title-font`}>{title}</div>
        <div className={`${cx("description")} body-font`}>{description}</div>
      </div>

      <div className={cx("content")}>
        <CustomSwiper
          items={generatedCards}
          lateralSpace={{
            mobile: 16,
            tablet: 24,
            desktop: 80,
            desktop_large: 80,
            desktop_max: 120,
          }}
          spaceBetween={{
            mobile: 16,
            tablet: 16,
            desktop: 16,
            desktop_large: 24,
            desktop_max: 24,
          }}
          swiperId={"inclusive-block"}
          disableBottomSwiperButtons
          className={cx("mobile_cards")}
        />
        <div className={`${cx("desktop_cards")} main-lateral-paddings`}>
          {cardGenerator()}
        </div>
        <div className={`${cx("note")} body-font main-lateral-paddings`}>
          *Tagion enables sharding for unlimited TPS in the future
        </div>
      </div>
    </div>
  );
};
