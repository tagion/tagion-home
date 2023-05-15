import React from "react";
import classNames from "classnames/bind";

import * as styles from "./label.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name: string;
  isActive?: boolean;
  isTitleLabel?: boolean;
  isGrayTextColor?: boolean;
  isDecreases?: boolean;
  withBorder?: boolean;
  boxShadow?: boolean;
  onClick?: (name: string) => void;
}

export const Label: React.FC<InputProps> = ({
  name,
  isActive,
  isTitleLabel,
  isGrayTextColor,
  isDecreases = true,
  boxShadow,
  withBorder,
  onClick,
}) => {
  return (
    <div
      className={cx("label", {
        isActive,
        isTitleLabel,
        isGrayTextColor: isGrayTextColor && !isActive,
        withBorder,
        isDecreases,
        boxShadow,
      })}
      onClick={() => onClick?.(name)}
    >
      {name}
    </div>
  );
};
