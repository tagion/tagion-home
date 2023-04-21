import React from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title?: string | JSX.Element;
  description: string;
  img?: { path: string; alt: string };
  ImgComponent?: () => JSX.Element;
  className?: string;
}

export const Card: React.FC<PropsWithChildren<InputProps>> = ({
  title,
  description,
  img,
  ImgComponent,
  className,
}) => {
  return (
    <div className={`${cx("card", {})} ${className}`}>
      {img && <img src={img.path} alt={img.alt} />}
      {ImgComponent && ImgComponent()}
      <div className={`${cx("title")} title-font`}>{title}</div>
      <div className={`${cx("description")} body-font`}>{description}</div>
    </div>
  );
};
