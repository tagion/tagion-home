import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";

import * as styles from "./button.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name: string;
  type?: "submit" | "button" | "reset";
  widthInPx?: number;
  isWhite?: boolean;
  isNotWide?: boolean;
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
  withArrow,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${cx("button", {
        isWhite,
        isNotWide,
        withArrow,
      })} ${className}`}
      onClick={() => onClick?.()}
      style={{ width: `${widthInPx}px` }}
    >
      <span>{name}</span>
      {withArrow && <DownArrowIcon />}
    </button>
  );
};
