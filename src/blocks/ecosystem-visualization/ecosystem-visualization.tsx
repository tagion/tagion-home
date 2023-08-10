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
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(-1);
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
      setHoveredVideoIndex(-1);
    },
  });

  const videoHandler = (title: string, isVideoPlaying: boolean) => {
    const video = document.getElementById(`${title}-video`) as HTMLVideoElement;

    if (video) {
      isVideoPlaying ? video.play() : video.pause();
    }
  };

  const hoveredVideoData = ecosystemVisualizationBlockData[hoveredVideoIndex];

  return (
    <div
      className={`${cx(
        "ecosystem_visualization_block"
      )} main-top-margins main-bottom-margins`}
    >
      <div className={`${cx("title")} title-font`}>Ecosystem visualisation</div>
      <div className={`${cx("description")} body-font`}>
        We're building a new era of distributed technology. A modular network to
        architect real world use cases. Tagion offers customisation and
        specialisation at every layer and is run by and for the community. Hover
        over each module to learn more.
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
            ({ title, videoPositions, width, videoSrc }, i) => {
              const videoAbsolutePositions =
                pageSize === "DESKTOP_LARGE"
                  ? videoPositions?.desktop_large
                  : pageSize === "DESKTOP_MAX"
                  ? videoPositions?.desktop_max
                  : undefined;

              const imgWidth =
                pageSize === "DESKTOP_LARGE"
                  ? width?.desktop_large
                  : pageSize === "DESKTOP_MAX"
                  ? width?.desktop_max
                  : undefined;
              return (
                <video
                  loop
                  playsInline
                  muted
                  disableRemotePlayback={true}
                  disablePictureInPicture={true}
                  key={i}
                  id={`${title}-video`}
                  style={{
                    width: imgWidth,
                    top: videoAbsolutePositions?.top,
                    bottom: videoAbsolutePositions?.bottom,
                    right: videoAbsolutePositions?.right,
                    left: videoAbsolutePositions?.left,
                    margin: videoAbsolutePositions?.margin,
                  }}
                  onMouseOver={() => {
                    setHoveredVideoIndex(i);
                    videoHandler(title, true);
                  }}
                  onMouseLeave={() => {
                    setHoveredVideoIndex(-1);
                    videoHandler(title, false);
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              );
            }
          )}
      </div>

      {hoveredVideoIndex > -1 && hoveredVideoData && (
        <div
          className={cx("popup", {
            isVisible: hoveredVideoIndex >= 0,
            isFixed: popupScrollData.isFixed,
            isTopAbsolutePosition:
              popupScrollData.isTopAbsolutePosition && !popupScrollData.isFixed,
          })}
          id="popup"
        >
          <div className={`${cx("popup_title")} prompt-regular prompt-36`}>
            {hoveredVideoData.title}
          </div>
          <div className={cx("popup_description")}>
            {hoveredVideoData.description}
          </div>
        </div>
      )}
    </div>
  );
};
