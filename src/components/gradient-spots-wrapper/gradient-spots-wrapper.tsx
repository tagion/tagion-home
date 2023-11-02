import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { PageSizes } from "../../common/enums";

import * as styles from "./gradient-spots-wrapper.module.scss";

const cx = classNames.bind(styles);

type IGradientResolution = {
  img: (value?: boolean) => string;
  options?: {
    bgSize?: string;
    bgPositionY?: string;
    bgPositionX?: string;
    bgPosition?: string;
  };
};

interface InputProps {
  bgColor?: string;
  disableMainSidePaddings?: boolean;
  className?: { bgWrapper?: string; gradientWrapper?: string };
  imgArgument?: boolean;
  disableOverflowHidden?: boolean;
  mixBlendModeMultiply?: boolean;
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
  imgArgument,
  className,
  gradients,
  disableOverflowHidden,
  mixBlendModeMultiply,
}) => {
  const [pageWidth, setPageWidth] = useState(0);

  let gradientImg: string = "";
  let gradientOptions = null;
  if (gradients) {
    if (pageWidth >= PageSizes.DESKTOP_MAX && gradients.desktop_max) {
      gradientImg = gradients.desktop_max.img(imgArgument);
      gradientOptions = gradients.desktop_max.options;
    } else if (
      pageWidth >= PageSizes.DESKTOP_LARGE &&
      pageWidth < PageSizes.DESKTOP_MAX &&
      gradients.desktop_large
    ) {
      gradientImg = gradients.desktop_large.img(imgArgument);
      gradientOptions = gradients.desktop_large.options;
    } else if (
      pageWidth >= PageSizes.DESKTOP &&
      pageWidth < PageSizes.DESKTOP_LARGE &&
      gradients.desktop
    ) {
      gradientImg = gradients.desktop.img(imgArgument);
      gradientOptions = gradients.desktop.options;
    } else if (
      pageWidth >= PageSizes.TABLET &&
      pageWidth < PageSizes.DESKTOP &&
      gradients.tablet
    ) {
      gradientImg = gradients.tablet.img(imgArgument);
      gradientOptions = gradients.tablet.options;
    } else if (
      pageWidth > 0 &&
      pageWidth < PageSizes.TABLET &&
      gradients.mobile
    ) {
      gradientImg = gradients.mobile.img(imgArgument);
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

  const gradientSpotsWrapper = (
    <div
      className={`${cx("gradient_spots_wrapper", {
        mainSidePaddings: !disableMainSidePaddings,
        disableOverflowHidden,
      })} disable_lateral_margins ${className?.gradientWrapper || ""}`}
      style={{
        background: `no-repeat ${gradientOptions?.bgPositionX || "0%"} ${
          gradientOptions?.bgPositionY || "top"
        } / ${gradientOptions?.bgSize || "100% 100%"} url(${gradientImg})`,
        [gradientOptions?.bgPosition ? "backgroundPosition" : ""]:
          gradientOptions?.bgPosition,
      }}
    >
      <div
        className={cx("children_wrapper", {
          mixBlendModeMultiply,
        })}
      >
        {children}
      </div>
    </div>
  );

  return bgColor ? (
    <div
      style={{ backgroundColor: bgColor }}
      className={`disable_lateral_margins ${className?.bgWrapper || ""}`}
    >
      {gradientSpotsWrapper}
    </div>
  ) : (
    gradientSpotsWrapper
  );
};
