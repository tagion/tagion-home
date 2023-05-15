import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { SwiperButtons } from "../swiper-buttons";
import { PageSizes } from "../../common/enums";

import "swiper/css";
import "swiper/css/pagination";
import * as styles from "./custom-swiper.module.scss";

const cx = classNames.bind(styles);

type BreakpointsType = { mobile: number; tablet: number };

interface InputProps {
  items: Array<JSX.Element>;
  className: string;
  spaceBetween?: BreakpointsType;
  lateralSpace?: BreakpointsType;
  singleItemWindowWidth?: number;
}

export const CustomSwiper: React.FC<InputProps> = ({
  items,
  className,
  spaceBetween,
  lateralSpace,
  singleItemWindowWidth = 0,
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
    } else if (window.innerWidth >= PageSizes.TABLET) {
      spaceSide = lateralSpace?.tablet ? lateralSpace.tablet : 0;
      spaceBetweenCards = spaceBetween?.tablet ? spaceBetween.tablet : 0;
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
          className={`${cx("swiper")} ${className}`}
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
          <SwiperButtonsWrapper itemsLength={items.length} />
        </Swiper>
      )}
    </>
  );
};

const SwiperButtonsWrapper: React.FC<{ itemsLength: number }> = ({
  itemsLength,
}) => {
  const swiper = useSwiper();
  const [selectedItemId, setSelectedItemId] = useState(0);

  swiper.on("slideChangeTransitionEnd", () => {
    setSelectedItemId(getIdByClassName("swiper-slide-active"));
  });

  const getIdByClassName = (className: string) =>
    Number(document.getElementsByClassName(className)[0].getAttribute("id"));

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
