import React from "react";
import classNames from "classnames/bind";

import { CustomSwiper } from "../../components";

import * as styles from "./company-swiper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  cardGenerator: () => React.JSX.Element[];
  title: string;
  classNames?: { title: string };
}

export const CompanySwiper: React.FC<InputProps> = ({
  cardGenerator,
  title,
  classNames,
}) => {
  return (
    <div
      className={`${cx(
        "company_swiper_block"
      )} main-top-margins disable-lateral-margins`}
    >
      <div className={`${cx("title")} ${classNames?.title} title-font`}>
        {title}
      </div>
      <div className={cx("content")}>
        <CustomSwiper
          items={cardGenerator()}
          className={cx("mobile_card")}
          lateralSpace={{ mobile: 16, tablet: 24 }}
          spaceBetween={{ mobile: 16, tablet: 16 }}
          singleItemWindowWidth={359}
          swiperId={title}
        />
        <div className={cx("desktop_card")}>{cardGenerator()}</div>
      </div>
    </div>
  );
};
