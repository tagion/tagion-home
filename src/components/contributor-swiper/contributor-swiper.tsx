import React, { useState } from "react";
import classNames from "classnames/bind";
import { SwiperClass } from "swiper/react";

import { CustomSwiper, Dropdown, SwiperButtonsWrapper } from "..";
import { ContributorsTypeName } from "../../common/enums";
import { contributorsFilterDropdownData } from "../../content/meet-our-contributors";

import * as styles from "./contributor-swiper.module.scss";

import { ReactComponent as RightArrowIcon } from "../../assets/images/right_arrow.svg";

const cx = classNames.bind(styles);

interface InputProps {
  title: string;
  classNames?: { title: string };
  cardGenerator: (
    contributorsType: ContributorsTypeName
  ) => React.JSX.Element[];
}

export const ContributorSwiper: React.FC<InputProps> = ({
  cardGenerator,
  title,
  classNames,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const [selectedFilterIndex, setSelectedFilterIndex] = useState<string>("1");
  const generatedCards = cardGenerator(
    contributorsFilterDropdownData[Number(selectedFilterIndex)]
  );

  return (
    <div
      className={`${cx(
        "contributor_swiper_block"
      )} main-top-margins disable-lateral-margins`}
    >
      <div className={`${cx("title_wrapper")} ${classNames?.title} title-font`}>
        <span>{title}</span>
        <Dropdown
          name="contributorFilterIndex"
          value={selectedFilterIndex}
          onChange={(e) => {
            setSelectedFilterIndex(e.target.value);
            swiperInstance?.slideTo(0);
          }}
          menuItems={contributorsFilterDropdownData}
          withLeftArrow
          withoutErrorMessages
          className={{
            dropdown: cx("dropdown"),
            leftArrow: cx("dropdown_leftArrow"),
            wrapper: cx("dropdown_wrapper"),
          }}
          menuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  fontFamily: "Inter-400, sans-serif",
                  lineHeight: "20px",
                  fontSize: "16px",
                  minHeight: "auto",
                },
              },
            },
          }}
        />
        <div className={cx("swiper_controls")}>
          <div className={cx("desktop_filter")}>
            {contributorsFilterDropdownData.map((contributorType, i) => (
              <div
                key={contributorType}
                onClick={() => {
                  setSelectedFilterIndex(i.toString());
                  swiperInstance?.slideTo(0);
                }}
                className={`${cx("contributor_type_item", {
                  selected: i === Number(selectedFilterIndex),
                })} prompt-400`}
              >
                <RightArrowIcon />
                <span> {contributorType}</span>
              </div>
            ))}
          </div>
          {swiperInstance && (
            <SwiperButtonsWrapper swiperInstance={swiperInstance} />
          )}
        </div>
      </div>

      <div className={cx("content")}>
        <CustomSwiper
          items={generatedCards}
          lateralSpace={{
            mobile: 16,
            tablet: 24,
            desktop: 80,
            desktop_large: 80,
            desktop_max: 0,
          }}
          spaceBetween={{
            mobile: 16,
            tablet: 16,
            desktop: 34,
            desktop_large: 27,
            desktop_max: 0,
          }}
          // todo delete swiperId
          swiperId={title}
          setSwiperInstance={setSwiperInstance}
          disableBottomSwiperButtons
        />
      </div>
    </div>
  );
};
