import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";
import { createPortal } from "react-dom";

import { Button, CustomLink } from "../../components";
import { RelatedInformationBlock } from "../related-information";
import { useResizeEvent } from "../../hooks";
import { PageSizes } from "../../common/enums";

import * as styles from "./partner-and-use-cases.module.scss";

const cx = classNames.bind(styles);

type RelatedInformationBlockDataType = {
  title: string;
  data: Array<{
    name: string;
    description: string;
    pageTitle: string;
    isImgDisplayedInRelatedInformationBlock: boolean | null;
    mainImgSrc: string;
  }>;
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
  const navigationBlockPositionHandler = () => {
    const footerEl = document.getElementById("footer");
    const headerEl = document.getElementById("header");
    const informationBlockWrapperEl = document.getElementById(
      "information_block_wrapper"
    );
    const desktopNavigationBlockWrapperEl = document.getElementById(
      "desktop_navigation_block_wrapper"
    );
    const navigationSideWrapperEl = document.getElementById(
      "navigation_side_wrapper"
    );

    if (
      desktopNavigationBlockWrapperEl &&
      informationBlockWrapperEl &&
      footerEl &&
      headerEl &&
      navigationSideWrapperEl
    ) {
      const bottomPadding =
        window.innerWidth >= PageSizes.DESKTOP_LARGE ? 180 : 80;

      const maxPageScrollValue =
        document.body.scrollHeight - document.body.offsetHeight;

      const visibleFooterHeight =
        footerEl?.offsetHeight - (maxPageScrollValue - window.scrollY);

      const distanceToTheTopOfPage =
        (informationBlockWrapperEl
          ? Number(
              window
                .getComputedStyle(informationBlockWrapperEl)
                .getPropertyValue("padding-top")
                .replace("px", "")
            )
          : 0) + headerEl?.offsetHeight;

      const distanceBetweenNavigationBlockAndFooter =
        window.document.body.offsetHeight -
        desktopNavigationBlockWrapperEl.offsetHeight -
        distanceToTheTopOfPage -
        visibleFooterHeight;

      if (distanceBetweenNavigationBlockAndFooter < bottomPadding) {
        navigationSideWrapperEl.style.display = "flex";
        desktopNavigationBlockWrapperEl.style.position = "unset";
      } else {
        navigationSideWrapperEl.style.display = "block";
        desktopNavigationBlockWrapperEl.style.position = "fixed";
      }
    }
  };

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

  useResizeEvent({
    resizeHandler: () => {
      navigationBlockPositionHandler();
    },
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      navigationBlockPositionHandler();
    });
  }, []);

  const desktopNavigationBlockWrapperEl = document.getElementById(
    "desktop_navigation_block_wrapper"
  );

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
      {desktopNavigationBlockWrapperEl &&
        createPortal(websiteInfoBlock(), desktopNavigationBlockWrapperEl)}
      {relatedInformationBlockData && (
        <RelatedInformationBlock
          data={relatedInformationBlockData.data}
          title={relatedInformationBlockData.title}
        />
      )}
    </div>
  );
};
