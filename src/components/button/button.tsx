import React from "react";
import classNames from "classnames/bind";

import * as styles from "./button.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name: string;
  type?: "submit" | "button" | "reset";
  widthInPx?: number;
  isWhite?: boolean;
  isNotWide?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<InputProps> = ({
  name,
  type,
  widthInPx,
  isWhite,
  isNotWide,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cx("button", { isWhite, isNotWide })}
      onClick={() => onClick?.()}
      style={{ width: `${widthInPx}px` }}
    >
      {name}
    </button>
  );
};
