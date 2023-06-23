import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";

import { Button, Card } from "..";

import * as styles from "./company-swiper-card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  company: {
    logo: React.JSX.Element;
    name: React.JSX.Element;
    description: string;
    linkTo: string;
  };
  index: number;
  companyNumbers: number;
  classNames?: { imgWrapper?: string; linkWrapper?: string };
}

export const SwiperCompanyCard: React.FC<InputProps> = ({
  company,
  index,
  companyNumbers,
  classNames,
}) => {
  return (
    <Link
      to={company.linkTo}
      target="_blank"
      className={`${cx("link_wrapper", {
        lastItem: index === companyNumbers - 1,
        firstItem: index === 0,
      })} ${classNames?.linkWrapper || ""}`}
    >
      <Card
        title={company.name}
        description={company.description}
        ImgComponent={() => company.logo}
        classNames={{
          img: `${cx("company_logo")} ${classNames?.imgWrapper || ""}`,
          title: `${cx("company_title")} subtitle-font-28-36`,
        }}
      />
      <Button name="Learn more" withArrow className={cx("learn_more_button")} />
    </Link>
  );
};
