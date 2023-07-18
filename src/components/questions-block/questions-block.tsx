import React from "react";
import classNames from "classnames/bind";

import { QuestionBlockGenerator } from "../../components";

import * as styles from "./questions-block.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title: string | React.ReactElement;
  description?: string;
  data: {
    title: string;
    questions: {
      valueName: string;
      bulletedList: Array<string | React.ReactElement>;
    }[];
  }[];

  classNames?: { questionsBlock?: string };
  direction?: "column" | "row";
}

export const QuestionsBlock: React.FC<InputProps> = ({
  title,
  description,
  data,
  direction = "row",
  classNames,
}) => {
  return (
    <div
      className={`${cx("questions_block")} main-top-margins main-lateral-margins ${
        classNames?.questionsBlock
      }`}
    >
      <div className={`${cx("title")} title-font`}>{title}</div>
      <div className={`${cx("description")} body-font`}>{description}</div>
      {data.length &&
        data.map((questionBlock, i) => (
          <div
            className={cx("question_container", {
              isColumn: direction === "column",
              isRow: direction === "row",
            })}
            key={i}
          >
            <div
              className={`${cx(
                "question_container_title"
              )} subtitle-font-28-36-50`}
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
