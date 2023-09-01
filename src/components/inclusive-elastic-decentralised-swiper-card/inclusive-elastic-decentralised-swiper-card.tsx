import React, { useState } from "react";
import classNames from "classnames/bind";

import { CustomLink, GradientSpotsWrapper } from "..";
import { PageSizes } from "../../common/enums";
import { useResizeEvent } from "../../hooks";
import { ecosystemPageGradients } from "../../content";

import * as styles from "./inclusive-elastic-decentralised-swiper-card.module.scss";

import { ReactComponent as SmallArrowLinkIcon } from "../../assets/images/small_arrow_link.svg";

const cx = classNames.bind(styles);

type DataCharacteristicType = {
  value: string | React.JSX.Element;
  linkTo?: string;
};

interface InputProps {
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
  logoWidth: { mobile: string; desktop_large: string };
  gradientLogo?: boolean;
  data: {
    TPS: DataCharacteristicType;
    timeToFinality: DataCharacteristicType;
    fees: DataCharacteristicType;
    environmentalImpact: DataCharacteristicType;
  };
}

export const InclusiveElasticDecentralisedSwiperCard: React.FC<InputProps> = ({
  Logo,
  data,
  logoWidth,
  gradientLogo,
}) => {
  const [companyLogoWidth, setCompanyLogoWidth] = useState("");
  useResizeEvent({
    resizeHandler: () => {
      setCompanyLogoWidth(
        window.innerWidth < PageSizes.DESKTOP_LARGE
          ? logoWidth.mobile
          : logoWidth.desktop_large
      );
    },
  });

  const cardData = [
    { title: "TPS", value: data.TPS.value, linkTo: data.TPS.linkTo },
    {
      title: "Time to finality",
      value: data.timeToFinality.value,
      linkTo: data.timeToFinality.linkTo,
    },
    { title: "Fees", value: data.fees.value, linkTo: data.fees.linkTo },
    {
      title: "Environmental impact",
      value: data.environmentalImpact.value,
      linkTo: data.environmentalImpact.linkTo,
    },
  ];

  const logo = <Logo width={companyLogoWidth} />;

  return (
    <div className={cx("inclusive_elastic_decentralised_swiper_card")}>
      <div className={cx("logo_wrapper", { withPaddings: !gradientLogo })}>
        {gradientLogo ? (
          <GradientSpotsWrapper
            gradients={ecosystemPageGradients.iElasticDecentralisedBlock}
            disableMainSidePaddings
            className={{
              gradientWrapper: cx("gradientSpotsWrapper_gradientWrapper"),
            }}
          >
            {logo}
          </GradientSpotsWrapper>
        ) : (
          logo
        )}
      </div>

      <div className={cx("data_wrapper")}>
        {cardData.length &&
          cardData.map(({ title, value, linkTo }, i) => (
            <div className={cx("data")} key={i}>
              <div className={`${cx("title")} inter-16`}>{title}</div>
              <CustomLink
                linkTo={linkTo}
                isExternalLink={true}
                className={`${cx("value")} subtitle-font-28-36`}
              >
                {value}
                <SmallArrowLinkIcon className={cx("arrow_link")} />
              </CustomLink>
            </div>
          ))}
      </div>
    </div>
  );
};
