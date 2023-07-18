import React from "react";
import classNames from "classnames/bind";

import { Card } from "..";

import * as styles from "./permissionless-tagion-hashgraph-card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  card: {
    videoSrc: string;
    title: React.JSX.Element | string;
    description: string;
  };
  index: number;
  classNames?: { imgWrapper?: string; linkWrapper?: string };
}

export const PermissionlessTagionHashgraphSwiperCard: React.FC<InputProps> = ({
  card,
  index,
  classNames,
}) => {
  return (
    <div className={cx("permissionless_swiper_card")}>
      <div className={cx("sequence_number")}>
        <div className={cx("green_spot")} />
        {`0${index + 1}`}
      </div>
      <Card
        title={card.title}
        description={card.description}
        videoSrc={card.videoSrc}
        classNames={{
          title: `${cx("card_title")} subtitle-font-28-36-50`,
          description: `${cx("card_description")}`,
          videoWrapper: cx("video_wrapper"),
          card: cx("card"),
        }}
      />
    </div>
  );
};
