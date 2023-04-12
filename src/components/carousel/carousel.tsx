import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { PageSizes } from "../../common/enums";

import * as styles from "./carousel.module.scss";
import { Button } from "../button";

const cx = classNames.bind(styles);

interface InputProps {
  carouselName: string;
  slideMinWidth: number;
  items: Array<Object>;
  // isShownNextItem?: boolean;
  nextButtonId: string;
  prevButtonId: string;
  maximusShowedItems?: number;
  additionalContent?: any;
  breakpoints?: {
    mobile?: {
      pageWidth?: number;
      itemWidth?: number;
      marginBeetwenItems?: number;
      firstItemMargin?: number;
    };
    desktop?: {
      pageWidth?: number;
      itemWidth?: number;
      marginBeetwenItems?: number;
    };
  };
  carouselItemCreator: (
    index: number,
    firstShowedIndex: number,
    isMobileSize: boolean,
    item: any,
    itemsLength: number,
    maximusShowed: number,
    isShownNextItem?: boolean
  ) => JSX.Element;
}

export const Carousel: React.FC<InputProps> = ({
  items,
  carouselName,
  slideMinWidth,
  // isShownNextItem,
  additionalContent,
  prevButtonId,
  nextButtonId,
  maximusShowedItems = 4,
  breakpoints,
  carouselItemCreator,
}) => {
  const [lastScrollWidth, setLastScrollWidth] = useState(0);
  const [firstShowedIndex, setFirstShowedIndex] = useState(0);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [maximusShowed, setMaximusShowed] = useState(maximusShowedItems);

  const defaultMargin = 30;

  const itemsLength = items.length;
  // const prevButtonId = `${carouselName}_prev_button`;
  // const nextButtonId = `${carouselName}_next_button`;
  const sectionId = `${carouselName}_section`;
  const sliderId = `${carouselName}_slider`;

  const slideWidth =
    isMobileSize && breakpoints?.mobile?.itemWidth
      ? breakpoints?.mobile?.itemWidth
      : breakpoints?.desktop?.itemWidth;

  const marginBeetwenItems =
    (isMobileSize && breakpoints?.mobile?.marginBeetwenItems
      ? breakpoints?.mobile?.marginBeetwenItems
      : breakpoints?.desktop?.marginBeetwenItems) || defaultMargin;
  console.log(marginBeetwenItems);
  const oneSideMargin = marginBeetwenItems / 2;

  const maxWidth: number = isMobileSize
    ? PageSizes.MOBILE
    : slideMinWidth * maximusShowed +
      marginBeetwenItems * maximusShowed +
      marginBeetwenItems;

  const marginRightHandler = (index: number) => {
    if (isMobileSize) {
      return (
        oneSideMargin + (index === items.length - 1 ? marginBeetwenItems : 0)
      );
    } else {
      return (
        oneSideMargin +
        (maximusShowed !== 1 && index === items.length - 1 ? oneSideMargin : 0)
      );
    }
  };

  const marginLeftHandler = (index: number) => {
    if (isMobileSize) {
      return oneSideMargin + (index === 0 ? marginBeetwenItems : 0);
    } else {
      return (
        oneSideMargin + (maximusShowed !== 1 && index === 0 ? oneSideMargin : 0)
      );
    }
  };

  console.log("maximusShowed", maximusShowed);

  const resizeHandler = (maximusShowed: number) => {
    setIsMobileSizeHandler();

    if (window.innerWidth <= PageSizes.MOBILE && !(maximusShowed === 1)) {
      setMaximusShowed(() => 1);
    } else if (window.innerWidth > PageSizes.MOBILE) {
      maximusShowedItems !== maximusShowed &&
        setMaximusShowed(() => maximusShowedItems);
    }
    // if (
    //   window.innerWidth > PageSizes.MOBILE &&
    //   window.innerWidth <= 986 &&
    //   !(maximusShowed === 2)
    // ) {
    //   console.log("window w");
    //   setMaximusShowed((prev) => 2);
    // }
    // if (
    //   window.innerWidth > 986 &&
    //   window.innerWidth <= 1235 &&
    //   !(maximusShowed === 3) &&
    //   maximusShowedItems > maximusShowed
    // ) {
    //   console.log("window 3");
    //   setMaximusShowed((prev) => 3);
    // }
    // console.log("333 111", maximusShowedItems < maximusShowed, maximusShowedItems,  maximusShowed);

    // if (
    //   window.innerWidth > 1235 &&
    //   !(maximusShowed === 4) &&
    //   maximusShowedItems > maximusShowed
    // ) {
    //   console.log("333", maximusShowedItems < maximusShowed, maximusShowedItems,  maximusShowed);
    //   setMaximusShowed((prev) => 4);
    // }
  };

  const getSlidesContainer = () => document.getElementById(sliderId);

  const setIsMobileSizeHandler = () => {
    setIsMobileSize(window.innerWidth <= PageSizes.MOBILE);
  };

  const temporaryDisableButtonById = (id: string) => {
    const button = document.getElementById(id) as HTMLButtonElement;
    if (button) {
      button.disabled = true;
      setTimeout(() => {
        button.disabled = false;
      }, 400);
    }
  };

  const nextButtonClickHandler = () => {
    const slidesContainer = getSlidesContainer();
    temporaryDisableButtonById(nextButtonId);

    if (slideWidth && slidesContainer) {
      if (isMobileSize) {
        console.log("isMobileSize", isMobileSize);
        if (firstShowedIndex <= items.length - 2) {
          slidesContainer.scrollLeft =
            Math.round(slidesContainer.scrollLeft) +
            slideWidth +
            marginBeetwenItems;

          if (firstShowedIndex === items.length - 2) {
            setLastScrollWidth(() => slidesContainer.scrollLeft);
          }
          setFirstShowedIndex((prev) =>
            prev + 1 <= itemsLength ? prev + 1 : prev
          );
        }
      } else {
        slidesContainer.scrollLeft +=
          slideWidth * maximusShowed + marginBeetwenItems * maximusShowed;

        setFirstShowedIndex((prev) => {
          if (prev + maximusShowed <= itemsLength - maximusShowed) {
            return prev + maximusShowed;
          }
          return itemsLength - maximusShowed;
        });
      }
    }
  };

  const prevButtonClickHandler = () => {
    const slidesContainer = getSlidesContainer();
    temporaryDisableButtonById(prevButtonId);

    if (slideWidth && slidesContainer) {
      if (isMobileSize) {
        if (firstShowedIndex > 0) {
          if (firstShowedIndex === items.length - 1) {
            slidesContainer.scrollLeft = Math.round(lastScrollWidth);
          } else {
            slidesContainer.scrollLeft =
              Math.round(slidesContainer.scrollLeft) -
              (slideWidth + marginBeetwenItems);
          }

          setFirstShowedIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
        }
      } else {
        slidesContainer.scrollLeft -=
          slideWidth * maximusShowed + marginBeetwenItems * maximusShowed;

        setFirstShowedIndex((prev) =>
          prev - maximusShowed >= 0 ? prev - maximusShowed : 0
        );
      }
    }
  };

  const slideWrapperStyleCreator = (index: number) => ({
    marginRight: `${marginRightHandler(index)}px`,
    marginLeft: `${marginLeftHandler(index)}px`,
    minWidth: `${slideWidth}px`,
  });

  // useEffect(() => {
  //   const prevButton = document.getElementById(prevButtonId);
  //   prevButton &&
  //     prevButton?.addEventListener("click", (e) => {
  //       prevButtonClickHandler();
  //     });

  //   return () =>
  //     prevButton?.removeEventListener("click", (e) => {
  //       prevButtonClickHandler();
  //     });
  // }, []);

  // useEffect(() => {
  //   const nextButton = document.getElementById(nextButtonId);
  //   nextButton &&
  //     nextButton?.addEventListener("click", (e) => {
  //       console.log("click");
  //       nextButtonClickHandler();
  //     });

  //   return () => {
  //     nextButton?.removeEventListener("click", (e) => {
  //       nextButtonClickHandler();
  //     });
  //   };
  // }, [isMobileSize]);

  useEffect(() => {
    resizeHandler(maximusShowed);

    window.addEventListener("resize", () => {
      resizeHandler(maximusShowed);
    });
    return () =>
      window.removeEventListener("resize", () => resizeHandler(maximusShowed));
  }, [maximusShowed]);

  const buttons = additionalContent?.buttons?.prevButton &&
    additionalContent?.buttons?.nextButton && (
      <div className={additionalContent?.buttons?.wrapperClassName}>
        {React.cloneElement(additionalContent.buttons.prevButton, {
          onClick: prevButtonClickHandler,
        })}
        {React.cloneElement(additionalContent.buttons.nextButton, {
          onClick: nextButtonClickHandler,
        })}
      </div>
    );

  return (
    <div className={cx("slider_wrapper")} style={{ maxWidth: maxWidth + "px" }}>
      {additionalContent && (
        <div className={additionalContent.topSideClassName}>
          {additionalContent.title && (
            <div className={additionalContent.title.wrapperClassName}>
              {additionalContent.title.text}
            </div>
          )}
          {!isMobileSize && buttons}
        </div>
      )}
      <section
        className={cx("slider_wrapper")}
        id={sectionId}
        style={{ maxWidth: maxWidth + "px" }}
      >
        <ul className={cx("slides_container")} id={sliderId}>
          {items &&
            items.map((item: Object, index: number) => {
              return (
                <li
                  className={cx("slide_wrapper")}
                  key={index}
                  style={slideWrapperStyleCreator(index)}
                >
                  {carouselItemCreator(
                    index,
                    firstShowedIndex,
                    isMobileSize,
                    item,
                    itemsLength,
                    maximusShowed
                    // isShownNextItem
                  )}
                </li>
              );
            })}
        </ul>
      </section>

      {additionalContent &&
        additionalContent?.buttons &&
        isMobileSize &&
        buttons}
    </div>
  );
};
