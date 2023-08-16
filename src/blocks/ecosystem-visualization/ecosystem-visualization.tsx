import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { videosData, transparentBlocksData } from "../../content";
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

  const hoveredVideoData = transparentBlocksData[hoveredVideoIndex];

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

  const videoHandler = (isVideoPlaying: boolean, videoId: string) => {
    const video = document.getElementById(videoId) as HTMLVideoElement;

    if (video) {
      isVideoPlaying ? video.play() : video.pause();
    }
  };

  const onMouseOverHandler = (
    index: number,
    isVideoPlaying: boolean,
    videoId: string
  ) => {
    setHoveredVideoIndex(index);
    videoHandler(isVideoPlaying, videoId);
  };

  const onMouseLeaveHandler = (isVideoPlaying: boolean, videoId: string) => {
    setHoveredVideoIndex(-1);
    videoHandler(isVideoPlaying, videoId);
  };

  const sizeDeterminator = <T,>(object: {
    desktop_large?: T;
    desktop_max?: T;
  }) => {
    return pageSize === "DESKTOP_LARGE"
      ? object?.desktop_large
      : pageSize === "DESKTOP_MAX"
      ? object?.desktop_max
      : undefined;
  };

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
        {transparentBlocksData.length &&
          transparentBlocksData.map(({ description, img, title }, i) => (
            <Card
              title={title}
              description={description}
              img={{ path: img }}
              key={i}
              classNames={{
                img: cx("card_img_wrapper"),
                card: cx("card"),
                title: cx("card_title"),
              }}
            />
          ))}
      </div>

      <div
        className={`${cx("desktop_large_cards_container")}`}
        id="cards_container"
      >
        {videosData.length &&
          videosData.map(
            ({ videoPositions, width, videoSrc, videoId, style }, i) => {
              const videoWidth =
                sizeDeterminator<typeof width.desktop_large>(width);
              const videoAbsolutePositions =
                sizeDeterminator<typeof videoPositions.desktop_large>(
                  videoPositions
                );
              const styles = {
                width: videoWidth,
                top: videoAbsolutePositions?.top,
                bottom: videoAbsolutePositions?.bottom,
                right: videoAbsolutePositions?.right,
                left: videoAbsolutePositions?.left,
                margin: videoAbsolutePositions?.margin,
                ...style,
              };

              return (
                <video
                  loop
                  playsInline
                  muted
                  disableRemotePlayback={true}
                  disablePictureInPicture={true}
                  key={i}
                  id={videoId}
                  style={styles}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              );
            }
          )}
        {transparentBlocksData.length &&
          transparentBlocksData.map(
            ({ blockPositions, width, height, videoId, style }, i) => {
              const blockWidth =
                sizeDeterminator<typeof width.desktop_large>(width);
              const blockAbsolutePositions =
                sizeDeterminator<typeof blockPositions.desktop_large>(
                  blockPositions
                );
              const videoHeight =
                height && sizeDeterminator<typeof height.desktop_large>(height);

              const styles = {
                width: blockWidth,
                top: blockAbsolutePositions?.top,
                bottom: blockAbsolutePositions?.bottom,
                right: blockAbsolutePositions?.right,
                left: blockAbsolutePositions?.left,
                margin: blockAbsolutePositions?.margin,
                ...style,
              };

              return (
                <div
                  className={cx("transparent_block")}
                  key={i}
                  style={{
                    ...styles,
                    height: videoHeight,
                  }}
                  onMouseOver={() => onMouseOverHandler(i, true, videoId)}
                  onMouseLeave={() => onMouseLeaveHandler(false, videoId)}
                ></div>
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
