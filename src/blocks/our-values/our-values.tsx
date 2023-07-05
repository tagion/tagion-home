import React, { useState } from "react";
import classNames from "classnames/bind";

import { ourValuesBlockData } from "../../content";

import { ReactComponent as PlusIcon } from "../../assets/images/plus_icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/minus_icon.svg";

import * as styles from "./our-values.module.scss";

const cx = classNames.bind(styles);

export const OurValuesBlock: React.FC = () => {
  const [openedValueIndex, setOpenedValueIndex] = useState<number>(-1);

  return (
    <div
      className={`${cx(
        "our_values_block"
      )} disable-lateral-margins main-lateral-paddings`}
    >
      <div className={`${cx("title")} title-font`}>Our values</div>
      <div className={cx("values_wrapper")}>
        {ourValuesBlockData.length &&
          ourValuesBlockData.map((value, i) => {
            const isValueOpened = openedValueIndex === i;
            return (
              <div className={cx("value_block")} key={i}>
                <div
                  className={`${cx(
                    "value_name"
                  )} subtitle-font-28-36-50 user_select_none`}
                  onClick={() =>
                    setOpenedValueIndex((openedValueIndex) =>
                      openedValueIndex === i ? -1 : i
                    )
                  }
                >
                  <span>{value.valueName}</span>
                  <div className={cx("icon_wrapper")}>
                    {isValueOpened ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </div>
                {isValueOpened && (
                  <ul className={`${cx("values_list")} body-font`}>
                    {value.bulletedList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
