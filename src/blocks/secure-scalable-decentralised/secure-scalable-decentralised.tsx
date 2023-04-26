import React from "react";
import classNames from "classnames/bind";

import { secureScalableDecentralizedData } from "../../content";
import { Button, Card } from "../../components";

import * as styles from "./secure-scalable-decentralised.module.scss";

const cx = classNames.bind(styles);

export const SecureScalableDecentralisedBlock: React.FC = () => {
  const blocksGenerator = () =>
    secureScalableDecentralizedData.map((block, i) => (
      <div className={cx("block")} key={i}>
        <div className={cx("header")}>
          <div className={cx("indicator")}></div>
          <span>{`0${i + 1}`}</span>
        </div>
        <Card
          className={cx("secure_scalable_decentralised_card")}
          title={block.title}
          description={block.description}
          fixedFontSize={{ description: "20" }}
        />
      </div>
    ));

  return (
    <div className={cx("secure_scalable_decentralised_block")}>
      <div className={`${cx("title")} title-font`}>
        Secure. Scalable.
        <br />
        Decentralized.
      </div>
      <div className={cx("body")}>
        <div className={cx("blocks_wrapper")}>
          {secureScalableDecentralizedData && blocksGenerator()}
        </div>
        <Button name="Compare" withArrow />
      </div>
    </div>
  );
};
