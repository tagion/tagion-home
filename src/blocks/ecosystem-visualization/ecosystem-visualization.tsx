import React, { CSSProperties, useEffect, useState } from "react";
import classNames from "classnames/bind";

import { videosData, transparentBlocksData } from "../../content";
import { Card } from "../../components";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import { BreakpointNames } from "../../common/enums";

import * as styles from "./ecosystem-visualization.module.scss";

const cx = classNames.bind(styles);

type StyleType = Record<BreakpointNames, CSSProperties>;
type BreakpointsStringType = Record<BreakpointNames, string>;
type BreakpointsCSSPropertiesType = Record<BreakpointNames, CSSProperties>;

export const EcosystemVisualizationBlock: React.FC = () => {
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(-1);
  const [popupScrollData, setPopupScrollData] = useState({
    scrollPosition: 0,
    isFixed: false,
    isTopAbsolutePosition: false,
  });
  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();

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
      breakpointDeterminator();
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
          transparentBlocksData.map(
            (
              { description, title, videoId, disabledForMobile, height, style },
              i
            ) =>
              !disabledForMobile && (
                <Card
                  title={title}
                  description={description}
                  videoSrc={
                    videosData.find(
                      (videoData) => videoData.videoId === videoId
                    )?.videoSrc
                  }
                  key={i}
                  classNames={{
                    videoWrapper: cx("card_video_wrapper"),
                    card: cx("card"),
                    title: cx("card_title"),
                    description: cx("card_description"),
                  }}
                  style={{
                    videoWrapper: {
                      height: pageSize && height?.[pageSize],
                      marginBottom:
                        pageSize &&
                        (style as StyleType)?.[pageSize]?.marginBottom,
                      marginTop:
                        pageSize && (style as StyleType)?.[pageSize]?.marginTop,
                    },
                  }}
                />
              )
          )}
      </div>

      <div
        className={`${cx("desktop_large_cards_container")}`}
        id="cards_container"
      >
        {videosData.length &&
          videosData.map(
            ({ videoPositions, width, videoSrc, videoId, style }, i) => {
              const videoAbsolutePositions =
                pageSize &&
                (videoPositions as BreakpointsCSSPropertiesType)?.[pageSize];
              const styles = {
                width: pageSize && (width as BreakpointsStringType)?.[pageSize],
                top: videoAbsolutePositions && videoAbsolutePositions?.top,
                bottom:
                  videoAbsolutePositions && videoAbsolutePositions?.bottom,
                right: videoAbsolutePositions && videoAbsolutePositions?.right,
                left: videoAbsolutePositions && videoAbsolutePositions?.left,
                margin:
                  videoAbsolutePositions && videoAbsolutePositions?.margin,
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
              const blockAbsolutePositions =
                pageSize &&
                (blockPositions as BreakpointsCSSPropertiesType)?.[pageSize];

              const styles = {
                width: pageSize && (width as BreakpointsStringType)?.[pageSize],
                top: blockAbsolutePositions && blockAbsolutePositions?.top,
                bottom:
                  blockAbsolutePositions && blockAbsolutePositions?.bottom,
                right: blockAbsolutePositions && blockAbsolutePositions?.right,
                left: blockAbsolutePositions && blockAbsolutePositions?.left,
                margin:
                  blockAbsolutePositions && blockAbsolutePositions?.margin,
                ...style,
              };

              return (
                <div
                  className={cx("transparent_block")}
                  key={i}
                  style={{
                    ...styles,
                    height: pageSize && height?.[pageSize],
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
            dartAndNodeSwappingBlock: hoveredVideoData.dartAndNodeSwappingBlock,
          })}
          id="popup"
        >
          <div className={`${cx("popup_title")} prompt-regular prompt-36`}>
            {hoveredVideoData.title}
          </div>
          <div className={`${cx("popup_description")} inter_400`}>
            {hoveredVideoData.description}
          </div>
        </div>
      )}
    </div>
  );
};
