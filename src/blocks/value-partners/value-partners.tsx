import React from "react";
import classNames from "classnames/bind";

import { valuePartnersBlockData } from "../../content";
import { CompanySwiper } from "../../components/company-swiper";
import { SwiperCompanyCard } from "../../components";

import * as styles from "./value-partners.module.scss";

const cx = classNames.bind(styles);

export const ValuePartnersBlock: React.FC = () => {
  const valuePartnerCardGenerator = () =>
    valuePartnersBlockData &&
    valuePartnersBlockData.map((partner, i) => (
      <SwiperCompanyCard
        company={partner}
        companyNumbers={valuePartnersBlockData.length}
        index={i}
        classNames={{
          imgWrapper: cx("value_partners_imgWrapper"),
        }}
      />
    ));

  return (
    <CompanySwiper
      cardGenerator={valuePartnerCardGenerator}
      title="Value partners"
    />
  );
};
