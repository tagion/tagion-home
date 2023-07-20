import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { ecosystemVisualizationBlockData } from "../../content";
import { Card } from "../../components";
import { useResizeEvent } from "../../hooks";
import { PageSizes } from "../../common/enums";

import * as styles from "./ecosystem-visualization.module.scss";

const cx = classNames.bind(styles);

export const EcosystemVisualizationBlock: React.FC = () => {
  const [pageSize, setPageSize] = useState("");
  const [hoveredImgIndex, setHoveredImgIndex] = useState(-1);
  const [popupScrollData, setPopupScrollData] = useState({
    scrollPosition: 0,
    isFixed: false,
    isTopAbsolutePosition: false,
  });

  const scrollHandler = () => {
    const cardsContainerElement = document.getElementById("cards_container");

    if (cardsContainerElement) {
      const { height, top } = cardsContainerElement.getBoundingClientRect();

      setPopupScrollData((popupScrollData) => {
        const isScrollToTop =
          popupScrollData.scrollPosition - window.scrollY > 0;
        const popupElement = document.getElementById("popup");
        const topPadding = (popupElement?.offsetHeight || 0) + 30;
        const cardsContainerPositionAccordingToBottomOfPage =
          window.innerHeight - (height + top);

        return {
          scrollPosition: window.scrollY,
          isFixed:
            isScrollToTop && cardsContainerPositionAccordingToBottomOfPage < 0
              ? Math.abs(cardsContainerPositionAccordingToBottomOfPage) +
                  topPadding <
                height
              : cardsContainerPositionAccordingToBottomOfPage - 180 < 0 &&
                Math.abs(cardsContainerPositionAccordingToBottomOfPage) <
                  height - topPadding,
          isTopAbsolutePosition:
            cardsContainerPositionAccordingToBottomOfPage + height < topPadding,
        };
      });
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", function () {
      scrollHandler();
    });
  }, []);

  useResizeEvent({
    resizeHandler: () => {
      if (
        window.innerWidth >= PageSizes.DESKTOP_LARGE &&
        window.innerWidth < PageSizes.DESKTOP_MAX
      ) {
        setPageSize("DESKTOP_LARGE");
      }
      if (window.innerWidth >= PageSizes.DESKTOP_MAX) {
        setPageSize("DESKTOP_MAX");
      }
      setHoveredImgIndex(-1);
    },
  });

  const hoveredImgData = ecosystemVisualizationBlockData[hoveredImgIndex];

  return (
    <div
      className={`${cx(
        "ecosystem_visualization_block"
      )} main-top-margins main-bottom-margins`}
    >
      <div className={`${cx("title")} title-font`}>Ecosystem visualization</div>
      <div className={`${cx("description")} body-font`}>
        Tagion Ecosystem is a living organism. It evolves with your
        participation. Interact to explore.
      </div>

      <div className={`${cx("mobile_cards_container")}`}>
        {ecosystemVisualizationBlockData.length &&
          ecosystemVisualizationBlockData.map(
            ({ description, img, title }, i) => (
              <Card
                title={title}
                description={description}
                img={{ path: img, alt: title }}
                key={i}
                classNames={{
                  img: cx("card_img_wrapper"),
                  card: cx("card"),
                  title: cx("card_title"),
                }}
              />
            )
          )}
      </div>

      <div
        className={`${cx("desktop_large_cards_container")}`}
        id="cards_container"
      >
        {ecosystemVisualizationBlockData.length &&
          ecosystemVisualizationBlockData.map(
            ({ img, title, imgPositions, width }, i) => {
              const imgAbsolutePositions =
                pageSize === "DESKTOP_LARGE"
                  ? imgPositions?.desktop_large
                  : pageSize === "DESKTOP_MAX"
                  ? imgPositions?.desktop_max
                  : undefined;

              const imgWidth =
                pageSize === "DESKTOP_LARGE"
                  ? width?.desktop_large
                  : pageSize === "DESKTOP_MAX"
                  ? width?.desktop_max
                  : undefined;
              return (
                <img
                  src={img}
                  alt={title}
                  className={cx("img")}
                  style={{
                    width: imgWidth,
                    top: imgAbsolutePositions?.top,
                    bottom: imgAbsolutePositions?.bottom,
                    right: imgAbsolutePositions?.right,
                    left: imgAbsolutePositions?.left,
                    margin: imgAbsolutePositions?.margin,
                  }}
                  onMouseOver={() => setHoveredImgIndex(i)}
                  onMouseLeave={() => setHoveredImgIndex(-1)}
                  key={i}
                />
              );
            }
          )}
      </div>

      {hoveredImgIndex > -1 && hoveredImgData && (
        <div
          className={cx("popup", {
            isVisible: hoveredImgIndex >= 0,
            absoluteRightSide: hoveredImgIndex === 2,
            fixedRightSide: hoveredImgIndex === 2 && popupScrollData.isFixed,
            isFixed: popupScrollData.isFixed,
            isTopAbsolutePosition:
              popupScrollData.isTopAbsolutePosition && !popupScrollData.isFixed,
          })}
          id="popup"
        >
          <div className={`${cx("popup_title")} prompt-regular prompt-36`}>
            {hoveredImgData.title}
          </div>
          <div className={cx("popup_description")}>
            {hoveredImgData.description}
          </div>
        </div>
      )}
    </div>
  );
};
