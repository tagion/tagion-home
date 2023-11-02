import React from "react";
import classNames from "classnames/bind";

import { ourVisionAndMissioBlockData } from "../../content";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import { BreakpointsStyleObjectType } from "../../common/types/breakpoints-style-object-type";

import * as styles from "./our-vision-and-mission.module.scss";

const cx = classNames.bind(styles);

export const OurVisionAndMissionBlock: React.FC = () => {
  return (
    <div
      className={`${cx(
        "our_vision_and_mission_block"
      )} disable_lateral_margins`}
    >
      <div className={`${cx("text")} main-lateral-margins`}>
        <div className={`${cx("title")} title-font`}>Our vision</div>
        <span className={`${cx("description")} body-font`}>
          Our vision is to pioneer a real global alternative to the incumbent
          financial systems that is open for everyone. <br />
          Financial systems should benefit everyone and not the few. Everyone
          deserves the freedom to choose alternatives and create the best life
          and prosperity for themselves. Tagion enables an efficient economy
          where every actor is empowered to build their optimal future.
        </span>
      </div>
      <div className={cx("circles_block")}>
        <div className={cx("horizontal_lines")} />
        <div className={cx("circles_wrapper")}>
          {ourVisionAndMissioBlockData &&
            ourVisionAndMissioBlockData.map(
              ({ description, label, title, style }, i) => (
                <CircleBlock
                  title={title}
                  description={description}
                  label={label}
                  style={style}
                  withVerticalLine={i == 1}
                  key={i}
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
  style,
}: {
  label: string;
  title: string;
  description: JSX.Element | string;
  withVerticalLine?: boolean;
  style?: {
    title: BreakpointsStyleObjectType;
    description?: BreakpointsStyleObjectType;
  };
}) => {
  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => {
      breakpointDeterminator();
    },
  });
  return (
    <div className={cx("circle_block")}>
      <div className={cx("circle")}>
        <div className={`${cx("label")} prompt-regular`}>{label}</div>
        <div
          className={`${cx("title")} prompt-regular`}
          style={pageSize ? style?.title[pageSize] : {}}
        >
          {title}
        </div>
        <div
          className={`${cx("description")} inter_400`}
          style={pageSize ? style?.description?.[pageSize] : {}}
        >
          {description}
        </div>
        {withVerticalLine && (
          <div className={cx("vertical_line_wrapper")}>
            <div className={cx("line")}>
              <div
                className={`${cx("purple_spot_label")} prompt-regular font-28`}
              >
                <div>We are here</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
