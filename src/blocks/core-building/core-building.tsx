import React from "react";
import classNames from "classnames/bind";

import { coreBuildingBlockData } from "../../content";
import { QuestionBlockGenerator } from "../../components";

import * as styles from "./core-building.module.scss";

const cx = classNames.bind(styles);

export const CoreBuildingBlock: React.FC = ({}) => {
  return (
    <div className={`${cx("core_building_block")} main-top-margins`}>
      <div className={`${cx("title")} title-font`}>Core building blocks</div>
      <div className={`${cx("description")} body-font`}>
        For a real decentralised, independent, censorship resistant, borderless
        monetary system and banking infrastucture.
      </div>
      {coreBuildingBlockData.length &&
        coreBuildingBlockData.map((questionBlock, i) => (
          <div className={cx("questions_block")} key={i}>
            <div
              className={`${cx("questions_block_title")} subtitle-font-28-36-50`}
            >
              {questionBlock.title}
            </div>
            <QuestionBlockGenerator
              data={questionBlock.questions}
              withoutListSpot
              classNames={{
                mainWrapper: cx("questionBlockGenerator_mainWrapper"),
                questionBlock: cx("questionBlockGenerator_questionBlock"),
                questionWrapper: `subtitle-font-20-28 ${cx(
                  "questionBlockGenerator_questionWrapper"
                )}`,
                list: cx("questionBlockGenerator_list"),
              }}
            />
          </div>
        ))}
    </div>
  );
};
