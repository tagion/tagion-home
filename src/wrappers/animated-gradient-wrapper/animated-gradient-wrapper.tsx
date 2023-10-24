import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import classNames from "classnames/bind";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { GradientColorsName } from "../../common/enums";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import { AnimatedGradientsType, gradientGenerator } from "../../content";

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

interface InputProps {
  withLateralPaddings?: boolean;
  gradientData: {
    [breakpointName: string]: {
      style: CSSProperties;
      gradients: AnimatedGradientsType;
    };
  };
}

export const AnimatedGradientWrapper: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, withLateralPaddings, gradientData }) => {
  const [loadedGradientIds, setLoadedGradientIds] = useState<Array<number>>([]);

  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => breakpointDeterminator(),
  });

  const currentGradientData = gradientData[pageSize];

  const gradientRefs = React.useRef<Array<MutableRefObject<HTMLImageElement>>>(
    []
  );
  gradientRefs.current = Object.values(GradientColorsName).map(
    (_, i) => gradientRefs.current[i] ?? React.createRef()
  );

  useEffect(() => {
    if (pageSize && currentGradientData) {
      const gradients = currentGradientData.gradients;

      gsapHandler(
        GradientColorsName.PHITO_GREEN,
        gradients.phito_green.motionPath
      );
      gsapHandler(
        GradientColorsName.IONIC_MINT,
        gradients.ionic_mint.motionPath
      );
      gsapHandler(
        GradientColorsName.OZONE_BLUE,
        gradients.ozone_blue.motionPath
      );
      gsapHandler(GradientColorsName.TAG_BLUE, gradients.tag_blue.motionPath);
    }
  }, [pageSize]);

  useLayoutEffect(() => {
    gradientRefs.current.forEach((ref, i) => {
      ref.current?.addEventListener("load", () => {
        setLoadedGradientIds((loadedGradientIds) =>
          loadedGradientIds.includes(i)
            ? loadedGradientIds
            : [...loadedGradientIds, i]
        );
      });
    });
  });

  return (
    <div
      className={`${cx("animated_gradient_wrapper")} disable_lateral_margins`}
    >
      <div
        className={cx("gradient_wrapper")}
        style={currentGradientData?.style}
      >
        {pageSize &&
          currentGradientData.gradients &&
          gradientGenerator(currentGradientData.gradients).map(
            ({ className, id, imgSrc, style }, i, arr) => (
              <img
                ref={gradientRefs.current[i]}
                src={imgSrc}
                className={className}
                id={id}
                style={{
                  ...style,
                  opacity: loadedGradientIds.length === arr.length ? "1" : "0",
                }}
                key={id}
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
