import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";

import { Card } from "..";

import * as styles from "./contributor-swiper-card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  contributor: {
    portrait: string;
    name: React.JSX.Element;
    description: string;
    linkTo: string;
    label: string;
  };
  index: number;
  contributorNumbers: number;
  classNames?: {
    linkWrapper?: string;
  };
}

export const ContributorSwiperCard: React.FC<InputProps> = ({
  contributor,
  index,
  contributorNumbers,
  classNames,
}) => {
  return (
    <Link
      to={contributor.linkTo}
      target="_blank"
      className={`${cx("link_wrapper", {
        lastItem: index === contributorNumbers - 1,
        firstItem: index === 0,
      })} ${classNames?.linkWrapper || ""}`}
    >
      <Card
        title={contributor.name}
        description={contributor.description}
        img={{
          path: contributor.portrait,
          alt: `${contributor.name} portrait`,
        }}
        label={contributor.label}
        classNames={{
          card: cx("contributor_card"),
          mainContent: cx("contributor_mainContent"),
          description: cx("contributor_description"),
          label: cx("contributor_label"),
          title: cx("contributor_title"),
          img: cx("contributor_imgWrapper"),
        }}
      />
    </Link>
  );
};
