import React from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./gradient-block.module.scss";

const cx = classNames.bind(styles);

interface InputProps {}

export const GradientBlock: React.FC<PropsWithChildren<InputProps>> = ({
  children,
}) => {
  return (
    <div className={cx("gradient_block")}>
      <div className={cx("gradient_color")} />
      {children}
    </div>
  );
};
