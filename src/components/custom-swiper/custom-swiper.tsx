import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";

import { SwiperButtons } from "../swiper-buttons";
import { PageSizes } from "../../common/enums";

import "swiper/css";
import "swiper/css/pagination";
import * as styles from "./custom-swiper.module.scss";

const cx = classNames.bind(styles);

type BreakpointsType = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  desktop_large?: number;
  desktop_max?: number;
};

interface InputProps {
  items: Array<JSX.Element>;
  swiperId: string;
  className?: string;
  spaceBetween?: BreakpointsType;
  lateralSpace?: BreakpointsType;
  singleItemWindowWidth?: number;
  disableBottomSwiperButtons?: boolean;
  setSwiperInstance?: React.Dispatch<React.SetStateAction<SwiperClass | null>>;
}

export const CustomSwiper: React.FC<InputProps> = ({
  items,
  className,
  swiperId,
  spaceBetween,
  lateralSpace,
  singleItemWindowWidth = 0,
  disableBottomSwiperButtons,
  setSwiperInstance,
}) => {
  const [isSwiperDisplayed, setIsSwiperDisplayed] = useState(false);
  const [lateralSpaceWidth, setLateralSpaceWidth] = useState(0);
  const [spaceBetweenCardsWidth, setSpaceBetweenCardsWidth] = useState(0);
  const [isWindowWidthLowerThanItem, setIsWindowWidthLowerThanItem] =
    useState(false);

  const resizeHandler = () => {
    let spaceSide = 0;
    let spaceBetweenCards = 0;
    if (window.innerWidth < PageSizes.TABLET) {
      spaceSide = lateralSpace?.mobile ? lateralSpace.mobile : 0;
      spaceBetweenCards = spaceBetween?.mobile ? spaceBetween.mobile : 0;
    } else if (
      window.innerWidth >= PageSizes.TABLET &&
      window.innerWidth < PageSizes.DESKTOP
    ) {
      spaceSide = lateralSpace?.tablet ? lateralSpace.tablet : 0;
      spaceBetweenCards = spaceBetween?.tablet ? spaceBetween.tablet : 0;
    } else if (
      window.innerWidth >= PageSizes.DESKTOP &&
      window.innerWidth < PageSizes.DESKTOP_LARGE
    ) {
      spaceSide = lateralSpace?.desktop ? lateralSpace.desktop : 0;
      spaceBetweenCards = spaceBetween?.desktop ? spaceBetween.desktop : 0;
    } else if (
      window.innerWidth >= PageSizes.DESKTOP_LARGE &&
      window.innerWidth < PageSizes.DESKTOP_MAX
    ) {
      spaceSide = lateralSpace?.desktop_large ? lateralSpace.desktop_large : 0;
      spaceBetweenCards = spaceBetween?.desktop_large
        ? spaceBetween.desktop_large
        : 0;
    } else if (window.innerWidth >= PageSizes.DESKTOP_MAX) {
      spaceSide = lateralSpace?.desktop_max ? lateralSpace.desktop_max : 0;
      spaceBetweenCards = spaceBetween?.desktop_max
        ? spaceBetween.desktop_max
        : 0;
    }
    setLateralSpaceWidth(spaceSide);
    setSpaceBetweenCardsWidth(spaceBetweenCards);
    setIsSwiperDisplayed(true);

    singleItemWindowWidth &&
      setIsWindowWidthLowerThanItem(
        () => window.innerWidth <= singleItemWindowWidth
      );
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => {
      resizeHandler();
    });
    return () => window.removeEventListener("resize", () => resizeHandler());
  }, []);

  const paddingRightCreator = (index: number) => {
    if (isWindowWidthLowerThanItem) {
      return spaceBetweenCardsWidth;
    } else if (index === items.length - 1) {
      return lateralSpaceWidth;
    } else {
      return 0;
    }
  };

  return (
    <>
      {isSwiperDisplayed && (
        <Swiper
          slidesPerView={"auto"}
          className={`${cx("swiper")} ${className || ""}`}
          id={swiperId}
          onSwiper={(swiper) => setSwiperInstance?.(swiper)}
          watchSlidesProgress
        >
          {items &&
            items.map((item, i) => (
              <SwiperSlide
                className={cx("swiper_slide")}
                style={{
                  paddingLeft: `${
                    i === 0 ? lateralSpaceWidth : spaceBetweenCardsWidth
                  }px`,
                  paddingRight: `${paddingRightCreator(i)}px`,
                }}
                key={i}
                id={`${i}`}
              >
                {item}
              </SwiperSlide>
            ))}
          {!disableBottomSwiperButtons && (
            <SwiperButtonsWrapper
              itemsLength={items.length}
              swiperId={swiperId}
            />
          )}
        </Swiper>
      )}
    </>
  );
};

const SwiperButtonsWrapper: React.FC<{
  itemsLength: number;
  swiperId: string;
}> = ({ itemsLength, swiperId }) => {
  const swiper = useSwiper();
  const [selectedItemId, setSelectedItemId] = useState(0);

  swiper.on("slideChangeTransitionEnd", () => {
    setSelectedItemId(getIdByClassName("swiper-slide-active"));
  });

  const getIdByClassName = (className: string) =>
    Number(
      document
        .getElementById(swiperId)
        ?.getElementsByClassName(className)[0]
        .getAttribute("id")
    );

  return (
    <SwiperButtons
      prevOnClick={() => swiper.slidePrev()}
      nextOnClick={() => swiper.slideNext()}
      prevButton={{ disabled: selectedItemId === 0 }}
      nextButton={{ disabled: selectedItemId === itemsLength - 1 }}
      className={cx("swiper_buttons")}
    />
  );
};
