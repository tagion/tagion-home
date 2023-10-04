import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";

import { Card, CustomLink } from "..";

import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin_icon.svg";

import * as styles from "./contributor-swiper-card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  contributor: {
    portrait: string;
    name: React.JSX.Element;
    description: string;
    linkedinLink: string;
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
    <div
      className={`${cx("contributor_swiper_card", {
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
      <CustomLink
        className={cx("linkedin_link")}
        isExternalLink
        linkTo={contributor.linkedinLink}
      >
        <LinkedinIcon />
      </CustomLink>
    </div>
  );
};
