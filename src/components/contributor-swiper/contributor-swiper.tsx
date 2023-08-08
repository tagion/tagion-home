import React, { useState } from "react";
import classNames from "classnames/bind";
import { SwiperClass } from "swiper/react";

import { CustomSwiper, SwiperButtons } from "..";

import * as styles from "./contributor-swiper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title: string;
  classNames?: { title: string };
  cardGenerator: () => React.JSX.Element[];
}

export const ContributorSwiper: React.FC<InputProps> = ({
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
        "contributor_swiper_block"
      )} main-top-margins disable-lateral-margins`}
    >
      <div className={`${cx("title_wrapper")} ${classNames?.title} title-font`}>
        <span>{title}</span>
        {swiperInstance && (
          <SwiperButtonsWrapper swiperInstance={swiperInstance} />
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
            desktop: 34,
            desktop_large: 27,
            desktop_max: 0,
          }}
          // todo delete swiperId
          swiperId={title}
          setSwiperInstance={setSwiperInstance}
          disableBottomSwiperButtons
        />
      </div>
    </div>
  );
};

// todo move to a separate component
const SwiperButtonsWrapper: React.FC<{
  swiperInstance: SwiperClass;
}> = ({ swiperInstance }) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);

  swiperInstance.on("progress", () => {
    if (swiperInstance.progress >= 1) {
      setIsNextButtonDisabled(() => true);
    } else if (swiperInstance.progress <= 0) {
      setIsPrevButtonDisabled(() => true);
    } else {
      setIsPrevButtonDisabled(() => false);
      setIsNextButtonDisabled(() => false);
    }
  });

  return (
    <SwiperButtons
      prevOnClick={() => swiperInstance?.slidePrev()}
      nextOnClick={() => swiperInstance?.slideNext()}
      prevButton={{ disabled: isPrevButtonDisabled }}
      nextButton={{ disabled: isNextButtonDisabled }}
      className={cx("swiper_buttons")}
    />
  );
};
