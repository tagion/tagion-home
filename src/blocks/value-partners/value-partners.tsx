import React from "react";
import classNames from "classnames/bind";

import { valuePartnersBlockData } from "../../content";
import { SwiperCompanyCard, CompanySwiper } from "../../components";

import * as styles from "./value-partners.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  className?: string;
}

export const ValuePartnersBlock: React.FC<InputProps> = ({ className }) => {
  const valuePartnerCardGenerator = () =>
    valuePartnersBlockData &&
    valuePartnersBlockData.map((partner, i) => (
      <SwiperCompanyCard
        company={partner}
        companyNumbers={valuePartnersBlockData.length}
        index={i}
        key={i}
        classNames={{
          imgWrapper: cx("value_partners_imgWrapper"),
        }}
      />
    ));

  return (
    <CompanySwiper
      cardGenerator={valuePartnerCardGenerator}
      title="Value partners"
      description="Creating adoption and building utility cases for the real world."
      classNames={{ wrapper: className }}
    />
  );
};
