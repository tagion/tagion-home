import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./gradient-spots-wrapper.module.scss";
import { PageSizes } from "../../common/enums";

const cx = classNames.bind(styles);

type GradientPropType = Array<{
  color: string;
  width: string;
  height: string;
  filter: string;
  transform: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}>;

interface InputProps {
  bgColor?: string;
  disableMainSidePaddings?: boolean;
  className?: string;
  spots: {
    desktop_max?: GradientPropType;
    desktop_large?: GradientPropType;
    desktop?: GradientPropType;
    tablet?: GradientPropType;
    mobile?: GradientPropType;
  };
}

export const GradientSpotsWrapper: React.FC<PropsWithChildren<InputProps>> = ({
  spots,
  bgColor,
  disableMainSidePaddings,
  children,
  className,
}) => {
  const [pageWidth, setPageWidth] = useState(0);

  const gradientSpotsGenerator = () => {
    let gradientProperties: GradientPropType = [];
    if (pageWidth >= PageSizes.DESKTOP_MAX && spots.desktop_max) {
      gradientProperties = spots.desktop_max;
    } else if (
      pageWidth >= PageSizes.DESKTOP_LARGE &&
      pageWidth < PageSizes.DESKTOP_MAX &&
      spots.desktop_large
    ) {
      gradientProperties = spots.desktop_large;
    } else if (
      pageWidth >= PageSizes.DESKTOP &&
      pageWidth < PageSizes.DESKTOP_LARGE &&
      spots.desktop
    ) {
      gradientProperties = spots.desktop;
    } else if (
      pageWidth >= PageSizes.TABLET &&
      pageWidth < PageSizes.DESKTOP &&
      spots.tablet
    ) {
      gradientProperties = spots.tablet;
    } else if (pageWidth >= 0 && spots.mobile) {
      gradientProperties = spots.mobile;
    }

    return gradientProperties.map((spot, i) => (
      <div
        className={cx("spot")}
        style={{
          width: spot.width,
          height: spot.height,
          backgroundColor: spot.color,
          filter: spot.filter,
          transform: spot.transform,
          top: spot.top,
          bottom: spot.bottom,
          left: spot.left,
          right: spot.right,
        }}
        key={i}
      ></div>
    ));
  };

  const setPageWidthHandler = () => setPageWidth(window.innerWidth);

  useEffect(() => {
    setPageWidthHandler();
    window.addEventListener("resize", () => setPageWidthHandler());
    return () => {
      window.removeEventListener("resize", () => setPageWidthHandler());
    };
  }, []);

  return (
    <div
      className={`${cx("gradient_spots_wrapper", {
        mainSidePaddings: !disableMainSidePaddings,
      })} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {gradientSpotsGenerator()}
      <div className={cx("children_wrapper")}>{children}</div>
    </div>
  );
};
