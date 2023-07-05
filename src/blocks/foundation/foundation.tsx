import React from "react";
import classNames from "classnames/bind";

import governmentPng from "../../assets/images/government.png";

import * as styles from "./foundation.module.scss";

const cx = classNames.bind(styles);

export const FoundationBlock: React.FC = () => {
  return (
    <div className={`${cx("foundation_block")}`}>
      <img src={governmentPng} alt="GovernmentPng image" />
      <div className={cx("content")}>
        <div className={`${cx("title")} subtitle-gradient-block-font`}>
          Foundation
        </div>
        <div className={`${cx("description")} body-font`}>
          Tagion Foundation is a not-for-profit organisation dedicated to
          supporting Tagion and related technologies. The function of TF is to
          fund critical development of Tagion infrastructure and community
          governance with emphasis on security, scalability and
          decentralisation.
        </div>
      </div>
    </div>
  );
};
