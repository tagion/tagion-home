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
      )} disable-lateral-margins`}
    >
      <div className={`${cx("text")} main-lateral-margins`}>
        <div className={`${cx("title")} title-font`}>
          Our vision and mission
        </div>
        <span className={`${cx("description")} body-font`}>
          Our vision is to empower inclusive participation to cultivate a Common
          Good sustainable network for a resilient future. <br />
          Our mission is to advance use of fair decentralised technology by
          developing an inclusive economic protocol and network for diverse
          applications.
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
  style?: { title: BreakpointsStyleObjectType };
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
        <div className={`${cx("description")} inter-400`}>{description}</div>
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
