import React from "react";
import classNames from "classnames/bind";

import mainPageIntro from "../../assets/images/main-page-intro.png";
// import { ReactComponent as HeroSvg } from "../../assets/images/hero_icon.svg";

import * as styles from "./introductory-block.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  // Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  gifAnimation: string;
  title: string;
  description: string;
}

export const IntroductoryBlock: React.FC<InputProps> = ({
  // Icon,
  gifAnimation,
  title,
  description,
}) => {
  return (
    <div className={cx("introductory_block")}>
      {gifAnimation && (
        <div className={cx("gif_wrapper")}>
          <img src={gifAnimation} alt="point animation" />
          <span className="font-16">Networks running</span>
        </div>
      )}
      <div className={cx("content")}>
        <div className={cx("icon_wrapper")}>
          <img src={mainPageIntro} className={cx("icon")} />
        </div>
        <div className={cx("text_wrapper")}>
          <div className={`${cx("title")} title-font`}>{title}</div>
          <div className={`${cx("description")} body-font`}>{description}</div>
        </div>
      </div>
    </div>
  );
};
