import React, { CSSProperties } from "react";
import classNames from "classnames/bind";
import { navigate } from "gatsby";

import { Card } from "../card";

import * as styles from "./page-description.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title: string;
  description: string;
  date: string;
  img: {
    path: string;
    alt?: string;
    style?: CSSProperties;
  };
  navigateTo: string;
  labelsIds?: Array<number>;
  classNames?: {
    card: string;
    mainContent: string;
    title: string;
    img: string;
  };
  isUpperCardHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const PageDescription: React.FC<InputProps> = ({
  title,
  description,
  date,
  img,
  navigateTo,
  labelsIds,
  classNames,
  isUpperCardHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={cx("page_description_card")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* {labelsIds && (
        <div className={cx("labels")}>
          {labelsIds?.map((id) => (
            <div className={cx("label")}>
              <span className={cx("spot")} style={{background: labels[id].color}} />
              <span className={cx("label_name")}>{labels[id].name}</span>
            </div>
          ))}
        </div>
      )} */}
      <div className={cx("desktop_bottom_line", { isUpperCardHovered })} />
      <Card
        title={title}
        description={description}
        img={img}
        date={date}
        classNames={{
          card: cx("card"),
          mainContent: cx("card_mainContent"),
          title: `${cx("card_title")} prompt-28`,
          description: cx("card_description"),
          img: cx("card_imgWrapper"),
        }}
        onClick={() => navigate(navigateTo)}
        style={{ img: img.style }}
      />
    </div>
  );
};
