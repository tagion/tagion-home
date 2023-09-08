import React from "react";
import classNames from "classnames/bind";

import { Button, CustomLink } from "../../components";
import { RelatedInformationBlock } from "../related-information";

import * as styles from "./partner-and-use-cases.module.scss";

const cx = classNames.bind(styles);

type RelatedInformationBlockDataType = {
  title: string;
  data: Array<{
    description: string;
    pageTitle: string;
    isImgDisplayedInRelatedInformationBlock: boolean | null;
    mainImgSrc: string;
  }>;
};

interface InputProps {
  pageTitle: string;
  aboutText: Array<string>;
  mainImgSrc: string;
  logo?: { src: string; width: string };
  websiteLink?: string;
  relatedInformationBlockData: RelatedInformationBlockDataType;
}

export const PartnerAndUseCasesBlock: React.FC<InputProps> = ({
  pageTitle,
  aboutText,
  mainImgSrc,
  logo,
  websiteLink,
  relatedInformationBlockData,
}) => {
  return (
    <div className={`${cx("partner_and_use_cases_block")}`}>
      <div className={`${cx("page_title")} title-font`}>{pageTitle}</div>
      <img src={mainImgSrc} alt={pageTitle} className={cx("main_img")} />
      <div className={`${cx("about_title")} subtitle-font-32-36-50`}>About</div>
      <div className={`${cx("description")} body-font`}>
        {aboutText.map((paragraph, i, arr) =>
          arr.length - 1 > i ? (
            <React.Fragment key={i}>
              {paragraph} <div className="text-separator" />
            </React.Fragment>
          ) : (
            paragraph
          )
        )}
      </div>
      {logo?.src && websiteLink && (
        <div className={cx("website_info")}>
          <img
            src={logo?.src}
            alt={`${pageTitle} logo`}
            style={{ width: logo?.width }}
          />
          <CustomLink
            linkTo={websiteLink}
            className={cx("website_link")}
            isExternalLink
          >
            <Button contentWidth={127} name="Visit Website" isGradientAdded />
          </CustomLink>
        </div>
      )}
      <RelatedInformationBlock
        data={relatedInformationBlockData.data}
        title={relatedInformationBlockData.title}
      />
    </div>
  );
};
