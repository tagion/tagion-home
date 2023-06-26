import React from "react";
import classNames from "classnames/bind";

import { natureIsOurClientBlockData } from "../../content";
import { CompanySwiper } from "../../components/company-swiper";
import { SwiperCompanyCard } from "../../components/company-swiper-card";

import * as styles from "./nature-is-our-client.module.scss";

const cx = classNames.bind(styles);

export const NatureIsOurClientBlock: React.FC = () => {
  const natureIsOurClientCardGenerator = () =>
    natureIsOurClientBlockData &&
    natureIsOurClientBlockData.map((client, i) => (
      <SwiperCompanyCard
        company={client}
        companyNumbers={natureIsOurClientBlockData.length}
        index={i}
        classNames={{
          imgWrapper: cx("nature_client_imgWrapper"),
          linkWrapper: cx("nature_client_linkWrapper"),
        }}
      />
    ));

  return (
    <CompanySwiper
      cardGenerator={natureIsOurClientCardGenerator}
      title="Nature is our client"
      classNames={{
        title: cx("title"),
      }}
    />
  );
};
