import React from "react";
import classNames from "classnames/bind";

import * as styles from "./introductory-block.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  gifAnimation: any;
  title: string;
  description: string;
}

export const IntroductoryBlock: React.FC<InputProps> = ({
  Icon,
  gifAnimation,
  title,
  description,
}) => {
  return (
    <div className={cx("introductory_block")}>
      {gifAnimation && (
        <div className={cx("testnet_running")}>
          <img src={gifAnimation} alt="point animation" />
          <span className="font-16">Testnet running</span>
        </div>
      )}
      <div className={cx("content")}>
        <div className={cx("icon_wrapper")}>
          <Icon className={cx("icon")} />
        </div>
        <div className={cx("text_wrapper")}>
          <div className={`${cx("title")} title-font`}>{title}</div>
          <div className={`${cx("description")} body-font`}>{description}</div>
        </div>
      </div>
    </div>
  );
};
