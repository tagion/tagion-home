import React from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title?: string | JSX.Element;
  description: string | JSX.Element;
  label?: string;
  img?: { path: string; alt: string };
  counter?: string;
  fixedFontSize?: { description: string };
  ImgComponent?: () => JSX.Element;
  classNames?: {
    card?: string;
    mainContent?: string;
    counter?: string;
    title?: string;
    description?: string;
    label?: string;
    img?: string;
  };
}

export const Card: React.FC<PropsWithChildren<InputProps>> = ({
  title,
  description,
  label,
  img,
  counter,
  fixedFontSize,
  ImgComponent,
  classNames,
}) => {
  return (
    <div className={`${cx("card")} ${classNames?.card || ""}`}>
      {(img || ImgComponent) && (
        <div className={`${cx("img_wrapper")} ${classNames?.img || ""}`}>
          {img && <img src={img.path} alt={img.alt} />}
          {ImgComponent && ImgComponent()}
        </div>
      )}

      <div className={`${cx("main_content")} ${classNames?.mainContent || ""}`}>
        {counter && (
          <div className={`font-16 ${classNames?.counter || ""}`}>
            {counter}
          </div>
        )}
        <div
          className={`${cx("title")} subtitle-font-28-50 ${
            classNames?.title || ""
          }`}
        >
          {title}
        </div>
        {label && (
          <div
            className={`${cx("label")} ${classNames?.label || ""}`}
          >
            {label}
          </div>
        )}
        <div
          className={`${cx("description")} ${
            fixedFontSize?.description
              ? `font-${fixedFontSize.description}`
              : "body-font"
          } ${classNames?.description || ""}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
