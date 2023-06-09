import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { detect } from "detect-browser";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./gradient-spots-wrapper.module.scss";
import { PageSizes } from "../../common/enums";

import spaceBlueGradient from "../../assets/images/gradient-spots/space_blue.png";
import ionicMintGradient from "../../assets/images/gradient-spots/ionic_mint.png";
import ozoneBlueGradient from "../../assets/images/gradient-spots/ozone_blue.png";
import phitoGreenGradient from "../../assets/images/gradient-spots/phito_green.png";
// import main from "../../assets/images/gradient-spots/main.png";

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
  gradientImage?: string;
  backgroundPosition?: { x?: string; y?: string };
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
  gradientImage,
  backgroundPosition,
}) => {
  const [pageWidth, setPageWidth] = useState(0);

  const browser = detect();
  const isAppleDevice =
    browser?.name === "ios" ||
    browser?.name === "safari" ||
    browser?.os === "iOS";

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
    // let x = [
    //   spaceBlueGradient,
    //   ionicMintGradient,
    //   ozoneBlueGradient,
    //   phitoGreenGradient,
    // ];
    return gradientProperties.map((spot, i) => (
      // <img
      //   src={x[i]}
      //   className={cx("spot")}
      //   style={{
      //     // width: spot.width,
      //     // height: spot.height,
      //     width: `calc(${spot.width} * 1.5)`,
      //     height: `calc(${spot.height} * 1.5)`,
      //     transform: spot.transform,
      //     top: spot.top,
      //     bottom: spot.bottom,
      //     left: spot.left,
      //     right: spot.right,
      //   }}
      //   key={i}
      // />
      <div
        className={cx("spot")}
        style={{
          width: spot.width,
          height: spot.height,
          backgroundColor: spot.color,
          filter: spot.filter,
          // WebkitFilter: spot.filter,
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

  const isShowedTestGradient = pageWidth >= PageSizes.DESKTOP_LARGE;

  return (
    <div
      className={`${cx("gradient_spots_wrapper", {
        mainSidePaddings: !disableMainSidePaddings,
      })} ${className}`}
      style={{
        backgroundColor: bgColor,
        background: isShowedTestGradient
          ? `url(${gradientImage}) no-repeat`
          : "",
        backgroundPositionY: `${backgroundPosition?.y}`,
        backgroundPositionX: `${backgroundPosition?.x}`,
        backgroundSize: "cover",
      }}
    >
      {/* <img src={main}/> */}
      {/* {gradientSpotsGenerator()} */}

      {/* <img src={phitoGreenGradient} alt="" />
      <img src={ionicMintGradient} alt="" />
      <img src={spaceBlueGradient} alt="" />
      <img src={ozoneBlueGradient} alt="" /> */}

      <div className={cx("children_wrapper")}>{children}</div>
    </div>
  );
};
