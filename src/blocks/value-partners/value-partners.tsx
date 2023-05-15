import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";

import { Button, Card, CustomSwiper } from "../../components";
import { valuePartnersBlockData } from "../../content";

import * as styles from "./value-partners.module.scss";

const cx = classNames.bind(styles);

export const ValuePartnersBlock: React.FC = () => {
  const valuePartnerCardGenerator = () =>
    valuePartnersBlockData &&
    valuePartnersBlockData.map((partner, i) => (
      <Link
        to={partner.linkTo}
        target="_blank"
        className={cx("link_wrapper", {
          lastItem: i === valuePartnersBlockData.length - 1,
          firstItem: i === 0,
        })}
        key={i}
      >
        <Card
          title={partner.name}
          description={partner.description}
          ImgComponent={() => partner.logo}
          classNames={{ img: cx("partner_logo"), title: cx("partner_title") }}
        />
        <Button
          name="Learn more"
          withArrow
          className={cx("learn_more_button")}
        />
      </Link>
    ));

  return (
    <div className={cx("value_partners_block")}>
      <div className={`${cx("title")} title-font`}>Value partners</div>
      <div className={cx("content")}>
        <CustomSwiper
          items={valuePartnerCardGenerator()}
          className={cx("mobile_partners_card")}
          lateralSpace={{ mobile: 16, tablet: 24 }}
          spaceBetween={{ mobile: 16, tablet: 16 }}
          singleItemWindowWidth={359}
          swiperId="value-partners"
        />
        <div className={cx("desktop_partners_card")}>
          {valuePartnerCardGenerator()}
        </div>
      </div>
    </div>
  );
};
