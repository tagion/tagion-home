import React from "react";
import classNames from "classnames/bind";

import * as styles from "./tagion-monitor-info.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  className?: string;
}

export const TagionMonitorInfo: React.FC<InputProps> = ({ className }) => {
  const infoBlock = (dataItem: number, index: number) => (
    <div className={cx("info_block")} key={index}>
      <div className={`${cx("title")} body-font`}>{infoTitles[index]}</div>
      <div className={`${cx("data")} subtitle-font`}>{dataItem}</div>
    </div>
  );

  return (
    <div className={`${cx("tagion_monitor_info", {})} ${className}`}>
      {infoData && infoData.map((dataItem, i) => infoBlock(dataItem, i))}
    </div>
  );
};

const infoTitles = [
  "Transactions in progress",
  "Epoch number",
  "Epoch timestamp",
  "Hashgraph rounds",
];

// from TagionMonitor
const infoData = [7620, 48820, 48820, 78];
