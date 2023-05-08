import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as RightArrowIcon } from "../../assets/images/right-arrow.svg";

import * as styles from "./button.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  widthInPx?: number;
  Icon?: () => JSX.Element;
  isWhite?: boolean;
  isNotWide?: boolean;
  isCarousel?: boolean;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<InputProps> = ({
  name,
  type,
  widthInPx,
  isWhite,
  isNotWide,
  isCarousel,
  Icon,
  withArrow,
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${cx("button", {
        isCarousel,
        isWhite,
        withArrow,
      })} ${className}`}
      onClick={() => onClick?.()}
      style={{ width: `${widthInPx}px` }}
    >
      {name && <span>{name}</span>}
      {Icon && Icon()}
      {withArrow && <RightArrowIcon />}
    </button>
  );
};
