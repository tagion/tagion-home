import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";
import { createPortal } from "react-dom";

import { Button, CustomLink } from "../../components";
import { RelatedInformationBlock } from "../related-information";

import * as styles from "./partner-and-use-cases.module.scss";

const cx = classNames.bind(styles);

type RelatedInformationBlockDataType = {
  title: string;
  data: Array<{
    name: string;
    description: string;
    pageTitle: string;
    isImgDisplayedInRelatedInformationBlock: boolean | null;
    mainImgSrc?: string;
  }>;
  isStaticImg?: boolean;
};

interface InputProps {
  pageTitle: string;
  aboutText: Array<{ paragraph?: string; list?: Array<string> }>;
  mainImgSrc: string;
  logo?: { src: string; width: string };
  websiteLink?: string;
  relatedInformationBlockData?: RelatedInformationBlockDataType;
  buttonLinkName: string;
}

export const PartnerAndUseCasesBlock: React.FC<InputProps> = ({
  pageTitle,
  aboutText,
  mainImgSrc,
  logo,
  websiteLink,
  relatedInformationBlockData,
  buttonLinkName,
}) => {
  const [
    desktopNavigationBlockWrapperElement,
    setDesktopNavigationBlockWrapperElement,
  ] = useState<HTMLElement | null>(null);

  const descriptionGenerator = (
    textObject: { paragraph?: string; list?: Array<string> },
    withBottomIndent: boolean
  ) => (
    <React.Fragment key={uuidv4()}>
      {textObject.paragraph}
      {textObject.list && (
        <ul>
          {textObject.list.map((item) => (
            <li key={uuidv4()}>{item}</li>
          ))}
        </ul>
      )}
      {withBottomIndent && <div className="text-separator" />}
    </React.Fragment>
  );

  const websiteInfoBlock = () =>
    logo?.src &&
    websiteLink && (
      <div
        className={`${cx("website_info")} website_info`}
        id="website_info_block"
      >
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
          <Button name={buttonLinkName} isGradientAdded />
        </CustomLink>
      </div>
    );

  useEffect(() => {
    const desktopNavigationBlockWrapperEl = document.getElementById(
      "desktop_navigation_block_wrapper"
    );
    desktopNavigationBlockWrapperEl &&
      setDesktopNavigationBlockWrapperElement(
        () => desktopNavigationBlockWrapperEl
      );
  }, []);

  return (
    <div className={`${cx("partner_and_use_cases_block")}`}>
      <div className={`${cx("page_title")} title-font`}>{pageTitle}</div>
      <img src={mainImgSrc} alt={pageTitle} className={cx("main_img")} />
      <div className={`${cx("about_title")} subtitle-font-32-36-50`}>About</div>
      <div className={`${cx("description")} body-font`}>
        {aboutText?.length &&
          aboutText.map((textObject, i, arr) =>
            descriptionGenerator(textObject, arr.length - 1 > i)
          )}
      </div>
      {websiteInfoBlock()}
      {desktopNavigationBlockWrapperElement &&
        createPortal(websiteInfoBlock(), desktopNavigationBlockWrapperElement)}
      {relatedInformationBlockData && (
        <RelatedInformationBlock
          data={relatedInformationBlockData.data}
          title={relatedInformationBlockData.title}
          isStaticImg={relatedInformationBlockData.isStaticImg}
        />
      )}
    </div>
  );
};
