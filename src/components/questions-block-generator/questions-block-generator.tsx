import React, { useState } from "react";
import classNames from "classnames/bind";

import { ReactComponent as PlusIcon } from "../../assets/images/plus_icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/minus_icon.svg";

import * as styles from "./questions-block-generator.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  whiteColor?: boolean;
  withoutListSpot?: boolean;
  classNames?: {
    mainWrapper?: string;
    questionBlock?: string;
    questionWrapper?: string;
    list?: string;
  };
  data: Array<{
    valueName: string;
    bulletedList: Array<string | React.ReactElement>;
  }>;
}

export const QuestionBlockGenerator: React.FC<InputProps> = ({
  whiteColor,
  data,
  classNames,
  withoutListSpot,
}) => {
  const [openedValueIndex, setOpenedValueIndex] = useState<number>(-1);

  return (
    <div className={`${cx("question_block_generator_wrapper")} ${classNames?.mainWrapper}`}>
      {data.length &&
        data.map((question, i) => {
          const isQuestionOpened = openedValueIndex === i;
          return (
            <div
              className={`${cx("question_block", { whiteColor })} ${
                classNames?.questionBlock || ""
              }`}
              key={i}
            >
              <div
                className={`${cx(
                  "question_wrapper"
                )} subtitle-font-28-36-50 user_select_none ${
                  classNames?.questionWrapper || ""
                }`}
                onClick={() =>
                  setOpenedValueIndex((openedValueIndex) =>
                    openedValueIndex === i ? -1 : i
                  )
                }
              >
                <span>{question.valueName}</span>
                <div className={cx("icon_wrapper")}>
                  {isQuestionOpened ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              {isQuestionOpened && (
                <ul
                  className={`${cx("answer_list", {
                    withoutListSpot,
                  })} body-font ${classNames?.list || ""}`}
                >
                  {question.bulletedList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
    </div>
  );
};
