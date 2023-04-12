import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";

import * as styles from "./button.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  id?: string;
  name?: string;
  Icon?: any;
  type?: "submit" | "button" | "reset";
  widthInPx?: number;
  heightInPx?: number;
  isWhite?: boolean;
  isNotWide?: boolean;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<InputProps> = ({
  id,
  name,
  Icon,
  type,
  widthInPx,
  heightInPx,
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
      style={{ width: `${widthInPx}px`, height: `${heightInPx}px` }}
      id={id}
    >
      {name && <span>{name}</span>}
      {Icon}
      {withArrow && <DownArrowIcon />}
    </button>
  );
};
