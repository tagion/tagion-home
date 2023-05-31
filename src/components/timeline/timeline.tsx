import React from "react";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./timeline.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  phases: Array<{
    phase: string;
  }>;
  selectedPhaseIndex: number;
  onPhaseClick: (index: number) => void;
}

export const Timeline: React.FC<PropsWithChildren<InputProps>> = ({
  phases,
  selectedPhaseIndex,
  onPhaseClick,
}) => {
  const dotsGenerator = (isLastIndex: boolean) =>
    [...Array(4 + (isLastIndex ? 1 : 0)).keys()].map((item, i) => (
      <div className={cx("dot")} key={i} />
    ));

  return (
    <div className={`${cx("timeline")} user_select_none`}>
      {phases &&
        phases.map(({ phase: phaseName }, i) => (
          <div className={cx("phase")} key={i}>
            <div className={cx("dots")}>
              {dotsGenerator(phases.length - 1 === i)}
            </div>
            <div
              className={cx("clickable_block", {
                selected: i === selectedPhaseIndex,
              })}
              onClick={() => onPhaseClick(i)}
            >
              <span className={cx("name")}>{phaseName}</span>
              <div className={cx("line_wrapper")}>
                <div className={cx("line")}>
                  <div className={cx("indicator")} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
