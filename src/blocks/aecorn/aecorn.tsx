import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import classNames from "classnames/bind";

import { Button, Card } from "../../components";

import { InternalLinks, PageSizes } from "../../common/enums";
import { aecornBlockCasesData } from "../../content";

import { ReactComponent as AecornLogoIcon } from "../../assets/images/company-logos/rounded_aecorn_logo.svg";

import * as styles from "./aecorn.module.scss";

const cx = classNames.bind(styles);

export const AecornBlock: React.FC = () => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  const resizeHandler = () =>
    setIsMobileSize(() => window.innerWidth < PageSizes.DESKTOP_LARGE);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => {
      resizeHandler();
    });
    return () => window.removeEventListener("resize", () => resizeHandler());
  }, []);

  const title = (
    <span className={`${cx("title")} title-font`}>Supply chain case</span>
  );

  return (
    <div className={`${cx("aecorn_block")} main-top-margins`}>
      <div className={cx("forest_img_header")}>
        <AecornLogoIcon />
        <div className={`${cx("img_text")} title-font`}>
          Aecorn:
          <br />
          Technology-driven reforestation
        </div>
      </div>
      <div className={`${cx("block_body")} main_lateral_paddings`}>
        {isMobileSize && title}
        <div className={cx("cases_wrapper")}>
          {aecornBlockCasesData.length &&
            aecornBlockCasesData.map((caseData) => (
              <Card
                title={caseData.title}
                description={caseData.description}
                key={caseData.title}
              />
            ))}
        </div>

        <div className={cx("button_and_title_wrapper")}>
          {!isMobileSize && title}
          <Button
            name="Learn more"
            withArrow
            isGradientAdded
            onClick={() => navigate(InternalLinks.USE_CASES_AECORN)}
          />
        </div>
      </div>
    </div>
  );
};
