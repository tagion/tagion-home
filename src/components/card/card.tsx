import React from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title?: string;
  description: string;
  img?: string;
}

export const Card: React.FC<PropsWithChildren<InputProps>> = ({
  title,
  description,
  img,
}) => {
  return (
    <div className={cx("card", {})}>
      <img src={img} alt={title} />
      <div className={`${cx("title")} title-font`}>{title}</div>
      <div className={`${cx("description")} body-font`}>{description}</div>
    </div>
  );
};
