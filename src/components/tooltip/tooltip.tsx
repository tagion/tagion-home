import React from "react";
import classNames from "classnames/bind";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import * as styles from "./tooltip.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  anchorSelect?: string;
  className?: string;
}

export const Tooltip: React.FC<InputProps> = ({ anchorSelect, className }) => {
  return (
    <ReactTooltip
      anchorSelect={anchorSelect}
      className={`${cx("tooltip")} inter_16 ${className}`}
    />
  );
};
