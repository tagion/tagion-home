import React, { useEffect } from "react";
import classNames from "classnames/bind";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { v4 as uuidv4 } from "uuid";

import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { GradientColorsName } from "../../common/enums";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import { gradientGenerator, gsapHandlerData } from "../../content";

import * as styles from "./animated-gradient-wrapper.module.scss";

const cx = classNames.bind(styles);

gsap.registerPlugin(MotionPathPlugin);
const gsapHandler = (id: string, path: MotionPath.Vars["path"]) => {
  gsap.to(`#${id}`, {
    duration: 17,
    motionPath: {
      path: path,
      fromCurrent: false,
    },
    ease: "none",
    repeat: -1,
  });
};

export const AnimatedGradientWrapper: React.FC<
  PropsWithChildren<{
    isBoottomPageGradient?: boolean;
    withLateralPaddings?: boolean;
  }>
> = ({ children, isBoottomPageGradient, withLateralPaddings }) => {
  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => breakpointDeterminator(),
  });

  useEffect(() => {
    if (pageSize && gsapHandlerData[pageSize]) {
      gsapHandler(
        GradientColorsName.PHITO_GREEN,
        gsapHandlerData[pageSize].phito_green.motionPath
      );
      gsapHandler(
        GradientColorsName.IONIC_MINT,
        gsapHandlerData[pageSize].ionic_mint.motionPath
      );
      gsapHandler(
        GradientColorsName.OZONE_BLUE,
        gsapHandlerData[pageSize].ozone_blue.motionPath
      );
      gsapHandler(
        GradientColorsName.SPACE_BLUE,
        gsapHandlerData[pageSize].space_blue.motionPath
      );
    }
  }, [pageSize]);

  return (
    <div
      className={`${cx("animated_gradient_wrapper")} disable_lateral_margins`}
    >
      <div
        className={cx("gradient_wrapper", {
          isBoottomPageGradient,
        })}
      >
        {pageSize &&
          gsapHandlerData[pageSize] &&
          gradientGenerator(pageSize).map(
            ({ className, id, imgSrc, style }) => (
              <img
                src={imgSrc}
                className={className}
                id={id}
                style={style}
                key={uuidv4()}
              />
            )
          )}
      </div>

      <div
        className={`${cx("children_wrapper")} ${
          withLateralPaddings && "main_lateral_paddings"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
