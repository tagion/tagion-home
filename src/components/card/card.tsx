import React, { CSSProperties } from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title?: string | JSX.Element;
  description: string | JSX.Element;
  label?: string;
  date?: string;
  img?: { path: string; alt?: string };
  videoSrc?: string;
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
    videoWrapper?: string;
  };
  onClick?: () => void;
  style?: Partial<Record<"videoWrapper" | "title" | "img", CSSProperties>>;
}

export const Card: React.FC<PropsWithChildren<InputProps>> = ({
  title,
  description,
  label,
  date,
  img,
  videoSrc,
  counter,
  fixedFontSize,
  ImgComponent,
  classNames,
  onClick,
  style,
}) => {
  return (
    <div
      className={`${cx("card")} ${classNames?.card || ""}`}
      onClick={onClick}
    >
      {(img || ImgComponent) && (
        <div className={`${cx("img_wrapper")} ${classNames?.img || ""}`}>
          {img && <img src={img.path} alt={img.alt} style={style?.img} />}
          {ImgComponent && ImgComponent()}
        </div>
      )}

      {videoSrc && (
        <div
          className={`${cx("video_wrapper")} ${classNames?.videoWrapper || ""}`}
          style={style?.videoWrapper}
        >
          <video
            autoPlay
            loop
            playsInline
            muted
            disableRemotePlayback={true}
            disablePictureInPicture={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}
      <div className={`${cx("main_content")} ${classNames?.mainContent || ""}`}>
        {counter && (
          <div className={`inter_16 ${classNames?.counter || ""}`}>
            {counter}
          </div>
        )}

        {title && (
          <div
            className={`${cx("title")} subtitle-font-28-50 ${
              classNames?.title || ""
            }`}
            style={style?.title}
          >
            {title}
          </div>
        )}

        {label && (
          <div className={`${cx("label")} ${classNames?.label || ""}`}>
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

        {date && <div className={cx("date")}>{date}</div>}
      </div>
    </div>
  );
};
