import React from "react";
import classNames from "classnames/bind";

import { ourValuesBlockData } from "../../content";
import { QuestionBlockGenerator } from "../../components";

import * as styles from "./our-values.module.scss";

const cx = classNames.bind(styles);

export const OurValuesBlock: React.FC = () => {
  return (
    <div
      className={`${cx(
        "our_values_block"
      )} disable_lateral_margins main_lateral_paddings`}
    >
      <div className={cx("heading")}>
        <div className={`${cx("title")} title-font`}>Our values</div>
        <div className={`${cx("description")} body-font`}>
          We believe in transparency, privacy and solving real problems.
        </div>
      </div>

      <QuestionBlockGenerator whiteColor data={ourValuesBlockData} />
    </div>
  );
};
