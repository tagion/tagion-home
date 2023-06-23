import React from "react";
import classNames from "classnames/bind";

import { ourVisionAndMissioBlockData } from "../../content";

import * as styles from "./our-vision-and-mission.module.scss";

const cx = classNames.bind(styles);

export const OurVisionAndMissionBlock: React.FC = () => {
  return (
    <div className={`${cx("our_vision_and_mission_block")} disable-lateral-margins`}>
      <div className={`${cx("text")} main-lateral-margins`}>
        <div className={`${cx("title")} title-font`}>
          Our vision and mission
        </div>
        <span className={`${cx("description")} body-font`}>
          Our vision is to empower everyone everywhere to participate in a
          sustainable economic world, giving people free choices and long-term
          prosperity. <br />
          Our mission is to build an open, independent and sustainable monetary
          system and banking infrastructure governed as a Commons.
        </span>
      </div>
      <div className={cx("circles_block")}>
        <div className={cx("horizontal_lines")} />
        <div className={cx("circles_wrapper")}>
          {ourVisionAndMissioBlockData &&
            ourVisionAndMissioBlockData.map(
              ({ description, label, title }, i) => (
                <CircleBlock
                  title={title}
                  description={description}
                  label={label}
                  withVerticalLine={i == 1}
                />
              )
            )}
        </div>
        <div className={cx("horizontal_lines")} />
      </div>
    </div>
  );
};

const CircleBlock = ({
  withVerticalLine,
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: JSX.Element | string;
  withVerticalLine?: boolean;
}) => {
  return (
    <div className={cx("circle_block")}>
      <div className={cx("circle")}>
        <div className={`${cx("label")} prompt-regular`}>{label}</div>
        <div className={`${cx("title")} prompt-regular`}>{title}</div>
        <div className={cx("description")}>{description}</div>
        {withVerticalLine && (
          <div className={cx("vertical_line_wrapper")}>
            <div className={cx("line")}>
              <div className={`${cx("purple_spot_label")} prompt-regular font-28`}>
                <div>We are here</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
