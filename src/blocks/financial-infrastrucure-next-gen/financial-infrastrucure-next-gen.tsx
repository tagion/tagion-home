import React from "react";
import classNames from "classnames/bind";

import { nextGennFinancialInfrastrucureData } from "../../content";
import { Card } from "../../components";

import * as styles from "./financial-infrastrucure-next-gen.module.scss";

const cx = classNames.bind(styles);

export const FinancialInfrastrucureNextGenBlock: React.FC = () => {
  return (
    <div className={`${cx("financial_infrastrucure_next_gen")}`}>
      <div className={`${cx("title")} title-font`} onClick={() => focus()}>
        Next generation
        <br />
        financial infrastructure
      </div>
      <div className={cx("blocks")}>
        {nextGennFinancialInfrastrucureData &&
          nextGennFinancialInfrastrucureData.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              description={item.description}
              img={{ path: item.img, alt: item.title }}
              counter={`0${i + 1}`}
              classNames={{
                card: cx("card"),
                mainContent: cx("main_content"),
                title: cx("card_title"),
                description: cx("card_description"),
                img: cx("card_img"),
                counter: cx("card_counter"),
              }}
            />
          ))}
      </div>
    </div>
  );
};
