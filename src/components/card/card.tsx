import React from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title?: string | JSX.Element;
  description: string | JSX.Element;
  img?: { path: string; alt: string };
  fixedFontSize?: { description: string };
  ImgComponent?: () => JSX.Element;
  className?: string;
}

export const Card: React.FC<PropsWithChildren<InputProps>> = ({
  title,
  description,
  img,
  fixedFontSize,
  ImgComponent,
  className,
}) => {
  return (
    <div className={`${cx("card", {})} ${className}`}>
      {img && <img src={img.path} alt={img.alt} />}
      {ImgComponent && ImgComponent()}
      <div className={`${cx("title")} subtitle-font`}>{title}</div>
      <div
        className={`${cx("description")} ${
          fixedFontSize?.description
            ? `font-${fixedFontSize.description}`
            : "body-font"
        }`}
      >
        {description}
      </div>
    </div>
  );
};
