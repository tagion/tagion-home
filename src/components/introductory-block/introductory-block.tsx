import React from "react";
import classNames from "classnames/bind";

import * as styles from "./introductory-block.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  gifAnimation?: string;
  title: string;
  description: string;
  img: string;
  classNames?: {
    imgWrapper?: string;
    textWrapper?: string;
    content?: string;
    introductoryBlock?: string;
  };
}

export const IntroductoryBlock: React.FC<InputProps> = ({
  gifAnimation,
  title,
  description,
  img,
  classNames = {
    imgWrapper: "",
    textWrapper: "",
    content: "",
    introductoryBlock: "",
  },
}) => {
  return (
    <div
      className={`${cx("introductory_block")} ${classNames?.introductoryBlock}`}
    >
      {gifAnimation && (
        <div className={cx("gif_wrapper")}>
          <img src={gifAnimation} alt="point animation" />
          <span className="font-16">Networks running</span>
        </div>
      )}
      <div className={`${cx("content")} ${classNames?.content}`}>
        <div className={`${cx("icon_wrapper")} ${classNames?.imgWrapper}`}>
          <img src={img} className={cx("icon")} />
        </div>
        <div className={`${cx("text_wrapper")} ${classNames?.textWrapper}`}>
          <div className={`${cx("title")} title-font`}>{title}</div>
          <div className={`${cx("description")} body-font`}>{description}</div>
        </div>
      </div>
    </div>
  );
};
