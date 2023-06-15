import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { PageSizes } from "../../common/enums";

import * as styles from "./gradient-spots-wrapper.module.scss";

const cx = classNames.bind(styles);

type IGradientResolution = {
  img: () => string;
  options?: { bgSize?: string; bgPositionY?: string; bgPositionX?: string };
};

interface InputProps {
  bgColor?: string;
  disableMainSidePaddings?: boolean;
  className?: string;
  gradients?: {
    desktop_max?: IGradientResolution;
    desktop_large?: IGradientResolution;
    desktop?: IGradientResolution;
    tablet?: IGradientResolution;
    mobile?: IGradientResolution;
  };
}

export const GradientSpotsWrapper: React.FC<PropsWithChildren<InputProps>> = ({
  bgColor,
  disableMainSidePaddings,
  children,
  className,
  gradients,
}) => {
  const [pageWidth, setPageWidth] = useState(0);

  let gradientImg: string = "";
  let gradientOptions = null;
  if (gradients) {
    if (pageWidth >= PageSizes.DESKTOP_MAX && gradients.desktop_max) {
      gradientImg = gradients.desktop_max.img();
      gradientOptions = gradients.desktop_max.options;
    } else if (
      pageWidth >= PageSizes.DESKTOP_LARGE &&
      pageWidth < PageSizes.DESKTOP_MAX &&
      gradients.desktop_large
    ) {
      gradientImg = gradients.desktop_large.img();
      gradientOptions = gradients.desktop_large.options;
    } else if (
      pageWidth >= PageSizes.DESKTOP &&
      pageWidth < PageSizes.DESKTOP_LARGE &&
      gradients.desktop
    ) {
      gradientImg = gradients.desktop.img();
      gradientOptions = gradients.desktop.options;
    } else if (
      pageWidth >= PageSizes.TABLET &&
      pageWidth < PageSizes.DESKTOP &&
      gradients.tablet
    ) {
      gradientImg = gradients.tablet.img();
      gradientOptions = gradients.tablet.options;
    } else if (
      pageWidth >= 0 &&
      pageWidth < PageSizes.TABLET &&
      gradients.mobile
    ) {
      gradientImg = gradients.mobile.img();
      gradientOptions = gradients.mobile.options;
    }
  }

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
      style={{
        background: `no-repeat ${gradientOptions?.bgPositionX || "0%"} ${
          gradientOptions?.bgPositionY || "top"
        } / ${gradientOptions?.bgSize || "100% 100%"} url(${gradientImg})`,
      }}
    >
      <div className={cx("children_wrapper")}>{children}</div>
    </div>
  );
};
