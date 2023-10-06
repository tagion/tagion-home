import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import { PaddingSizes } from "../../common/enums";

import { ReactComponent as RightArrowIcon } from "../../assets/images/right_arrow.svg";
import { ReactComponent as SuccessIcon } from "../../assets/images/success_icon.svg";
import spinerIcon from "../../assets/images/spiner.png";

import * as styles from "./button.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  id?: string;
  isDisabled?: boolean;
  widthInPx?: number;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isWhite?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  withArrow?: boolean;
  withSuccessIcon?: boolean;
  className?: string;
  contentWidth?: number;
  isGradientAdded?: boolean;
  isGradientFixedActive?: boolean;
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
  withSuccessIcon,
  className = "",
  contentWidth,
  onClick,
  id = name,
  isDisabled,
  isGradientAdded = false,
  isGradientFixedActive = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(200);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setButtonWidth(() => buttonRef?.current?.clientWidth || 200);
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`${cx("button", {
        isRounded,
        isDisabled,
        isWhite,
        withArrow,
        isGradientAdded,
        isGradientFixedActive,
        isHovered,
      })} prompt-regular font-20 ${className}`}
      onClick={() => onClick?.()}
      style={{
        width: `${widthInPx}px`,
        backgroundPositionX: `${
          contentWidth
            ? (contentWidth || 0) + PaddingSizes.BUTTON_LATERAL * 2
            : buttonWidth
        }px`,
      }}
      id={id}
      disabled={isDisabled || isLoading}
      onMouseOver={() => setIsHovered(() => true)}
      onMouseLeave={() => setIsHovered(() => false)}
    >
      <div style={{ width: contentWidth ? `${contentWidth}px` : "auto" }}>
        {!isLoading ? (
          <>
            {name && <span>{name}</span>}
            {Icon && <Icon className={cx("arrow_icon")} />}
            {withArrow && <RightArrowIcon className={cx("arrow_icon")} />}
            {withSuccessIcon && <SuccessIcon className={cx("success_icon")} />}
          </>
        ) : (
          <img src={spinerIcon} className={cx("spinner")} />
        )}
      </div>
    </button>
  );
};
