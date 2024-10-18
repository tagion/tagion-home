import React from "react";
import classNames from "classnames/bind";

import { Card, CustomLink } from "../../components";
import { valueForContributorsBlockData } from "../../content";

import * as styles from "./value-for-contributors.module.scss";

const cx = classNames.bind(styles);

export const ValueForContributorsBlock: React.FC = () => {
  return (
    <div className={`${cx("value_for_contributors_block")} main-top-margins`}>
      <div className={`${cx("title")} title-font`}>Value for contributors</div>
      <div className={cx("information_cards")}>
        {valueForContributorsBlockData.informationCards &&
          valueForContributorsBlockData.informationCards.map((cardData, i) => (
            <Card
              title={cardData.title}
              description={cardData.description}
              img={{
                path: cardData.img,
                alt: cardData.title,
              }}
              classNames={{
                card: cx("information_card"),
                mainContent: cx("information_card_main_content"),
                img: cx("information_card_img_wrapper"),
                title: cx("information_card_title"),
              }}
              key={i}              
            />
            
          ))}
      </div>
    </div>
  );
};