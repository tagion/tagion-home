import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

import { Button, CustomLink } from "../../components";
import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { miuCustomColumns } from "../../helpers";
import { useResizeEvent } from "../../hooks";
import { PageSizes } from "../../common/enums";

import { ReactComponent as LeftArrowIcon } from "../../assets/images/left_arrow.svg";
import { ReactComponent as SimplifiedArrowIcon } from "../../assets/images/simplified_arrow.svg";

import * as styles from "./information-block-wrapper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  changeViewAfter?: number;
  gridBreakpoints?: Partial<
    Record<
      "xs" | "sm" | "md" | "lg" | "xl",
      { firstColumn: number; secondColumn: number }
    >
  >;
  navigationSideTitle?: string;
  showNavigationMenu?: boolean;
  insertElementIntoNavigationSide?: React.ReactElement;
  classNames?: {
    informationBlockWrapper?: string;
    navigationSideWrapper?: string;
  };
  breadcrumbsData?: Array<{
    name: string;
    linkTo?: string;
    stateToNewPage?: { [key: string]: number | string };
  }>;
}

export const InformationBlockWrapper: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  changeViewAfter,
  gridBreakpoints,
  navigationSideTitle,
  showNavigationMenu = true,
  insertElementIntoNavigationSide,
  classNames,
  breadcrumbsData,
}) => {
  const [isViewChanged, setIsViewChanged] = useState(false);

  const navigationBlockPositionHandler = () => {
    const footerElement = document.getElementById("footer");
    const headerElement = document.getElementById("header");
    const informationBlockWrapperElement = document.getElementById(
      "information_block_wrapper"
    );
    const desktopNavigationBlockWrapperElement = document.getElementById(
      "desktop_navigation_block_wrapper"
    );
    const navigationSideWrapperElement = document.getElementById(
      "navigation_side_wrapper"
    );

    if (
      desktopNavigationBlockWrapperElement &&
      informationBlockWrapperElement &&
      footerElement &&
      headerElement &&
      navigationSideWrapperElement
    ) {
      const bottomPadding =
        window.innerWidth >= PageSizes.DESKTOP_LARGE ? 180 : 80;

      const maxPageScrollValue =
        document.body.scrollHeight - document.body.offsetHeight;

      const visibleFooterHeight =
        footerElement?.offsetHeight - (maxPageScrollValue - window.scrollY);

      const distanceToTheTopOfPage =
        (informationBlockWrapperElement
          ? Number(
              window
                .getComputedStyle(informationBlockWrapperElement)
                .getPropertyValue("padding-top")
                .replace("px", "")
            )
          : 0) + headerElement?.offsetHeight;

      const distanceBetweenNavigationBlockAndFooter =
        window.document.body.offsetHeight -
        desktopNavigationBlockWrapperElement.offsetHeight -
        distanceToTheTopOfPage -
        visibleFooterHeight;

      if (distanceBetweenNavigationBlockAndFooter < bottomPadding) {
        navigationSideWrapperElement.style.display = "flex";
        desktopNavigationBlockWrapperElement.style.position = "unset";
      } else {
        navigationSideWrapperElement.style.display = "block";
        desktopNavigationBlockWrapperElement.style.position = "fixed";
      }
    }
  };

  useResizeEvent({
    resizeHandler: () => {
      setIsViewChanged(
        changeViewAfter
          ? window.innerWidth >= changeViewAfter
          : window.innerWidth >= PageSizes.DESKTOP
      );
      navigationBlockPositionHandler();
    },
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      navigationBlockPositionHandler();
    });
  }, []);

  const onBackButtonClick = () => history.back();

  const breadcrumbs = breadcrumbsData?.length && (
    <div className={`${cx("breadcrumbs_wrapper")} inter_16`}>
      {breadcrumbsData.map(({ name, linkTo, stateToNewPage }, i, arr) => (
        <div className={cx("breadcrumb")} key={name}>
          <CustomLink linkTo={linkTo} state={stateToNewPage}>
            {name}
          </CustomLink>
          {i !== arr.length - 1 && <SimplifiedArrowIcon />}
        </div>
      ))}
    </div>
  );

  return (
    <Grid
      container
      columns={miuCustomColumns}
      className={`${cx("information_block_wrapper")} main-lateral-paddings  ${
        classNames?.informationBlockWrapper || ""
      }`}
      id="information_block_wrapper"
    >
      <Grid
        item
        xs={gridBreakpoints?.xs?.firstColumn || 4}
        sm={gridBreakpoints?.sm?.firstColumn || 4}
        md={gridBreakpoints?.md?.firstColumn || (isViewChanged ? 3 : 8)}
        lg={gridBreakpoints?.lg?.firstColumn || 3}
        xl={gridBreakpoints?.xl?.firstColumn || 3}
        className={`${cx("navigation_side_wrapper", {
          isInheritPosition: !isViewChanged,
        })} ${classNames?.navigationSideWrapper || ""}`}
        id="navigation_side_wrapper"
      >
        {navigationSideTitle && (
          <div className={`subtitle-font-32-50-80`}>{navigationSideTitle}</div>
        )}

        {insertElementIntoNavigationSide && (
          <div>{insertElementIntoNavigationSide}</div>
        )}

        {showNavigationMenu && (
          <>
            <LeftArrowIcon
              className={cx("mobile_button")}
              onClick={onBackButtonClick}
            />
            <div
              className={cx("desktop_navigation_block_wrapper")}
              id="desktop_navigation_block_wrapper"
            >
              <Button
                Icon={LeftArrowIcon}
                isRounded
                onClick={onBackButtonClick}
              />
            </div>
          </>
        )}
        {!isViewChanged && breadcrumbs}
      </Grid>
      <Grid
        item
        xs={gridBreakpoints?.xs?.secondColumn || 4}
        sm={gridBreakpoints?.sm?.secondColumn || 4}
        md={gridBreakpoints?.sm?.secondColumn || (isViewChanged ? 5 : 8)}
        lg={gridBreakpoints?.lg?.secondColumn || 9}
        xl={gridBreakpoints?.xl?.secondColumn || 9}
        className={cx("content_side_wrapper")}
      >
        {isViewChanged && breadcrumbs}
        {children}
      </Grid>
    </Grid>
  );
};
