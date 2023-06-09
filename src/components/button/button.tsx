import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as RightArrowIcon } from "../../assets/images/right-arrow.svg";
import spinerIcon from "../../assets/images/spiner.png";

import * as styles from "./button.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  id?: string;
  isDisabled?: boolean;
  widthInPx?: number;
  Icon?: () => JSX.Element;
  isWhite?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  withArrow?: boolean;
  className?: string;
  contentWidth?: number;
  onClick?: () => void;
}

export const Button: React.FC<InputProps> = ({
  name,
  type,
  widthInPx,
  isWhite,
  isRounded,
  isLoading,
  Icon,
  withArrow,
  className = "",
  contentWidth,
  onClick,
  id,
  isDisabled,
}) => {
  return (
    <button
      type={type}
      className={`${cx("button", {
        isRounded,
        isDisabled,
        isWhite,
        withArrow,
      })} ${className}`}
      onClick={() => onClick?.()}
      style={{ width: `${widthInPx}px` }}
      id={id}
      disabled={isDisabled || isLoading}
    >
      <div style={{ width: contentWidth ? `${contentWidth}px` : "auto" }}>
        {!isLoading ? (
          <>
            {name && <span>{name}</span>}
            {Icon && Icon()}
            {withArrow && <RightArrowIcon />}
          </>
        ) : (
          <img src={spinerIcon} className={cx("spinner")} />
        )}
      </div>
    </button>
  );
};
