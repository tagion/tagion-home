import React from "react";
import classNames from "classnames/bind";

import { Card, CustomLink } from "../../components";
import { valueForContributorsBlockData } from "../../content";

import * as styles from "./social-media-links.module.scss";

const cx = classNames.bind(styles);

export const SocialMediaLinksBlock: React.FC = () => {
  return (
    <div className={`${cx("social_media_links_block")} main-top-margins`}>
      <div className={cx("information_cards")}>
        {valueForContributorsBlockData.informationCards &&
          valueForContributorsBlockData.informationCards.map((cardData, i) => (
            <Card
            //  title={cardData.title}
            //  description={cardData.description}
            //  img={{
            //    path: cardData.img,
            //    alt: cardData.title,
            //  }}
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
        
      <div className={cx("link_cards")}>
        {valueForContributorsBlockData.linkCards &&
          valueForContributorsBlockData.linkCards.map((cardData, i) => {
            const isComimgSoon = cardData.description === "Coming soon";
            return (
              <CustomLink
                linkTo={cardData.linkTo}
                isExternalLink
                className={`${cx("custom_link")} ${
                  isComimgSoon && "disable-link"
                }`}
                key={i}
              >
                <Card
                  title={cardData.title}
                  description={cardData.description}
                  img={{ path: cardData.img }}
                  classNames={{
                    card: cx("link_card", {
                      isComimgSoon,
                    }),
                    img: cx("link_card_img_wrapper"),
                    mainContent: cx("link_card_main_content"),
                    title: cx("link_card_title"),
                    description: cx("link_card_description"),
                  }}
                />
              </CustomLink>
            );
          })}
      </div>
    </div>
  );
};