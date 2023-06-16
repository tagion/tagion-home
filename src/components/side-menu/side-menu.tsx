import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";
import Drawer from "@mui/material/Drawer";

import { Colors } from "../../common/enums/colors";
import { navigationLinks, sideMenuGradients } from "../../content";
import { CustomLink, GradientSpotsWrapper } from "../../components";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close_button_icon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";

import * as styles from "./side-menu.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  isOpened: boolean;
  isOpenedHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SideMenu: React.FC<InputProps> = ({
  isOpened,
  isOpenedHandler,
}) => {
  const [openedLinkIndexes, setOpenedLinkIndexes] = useState<Array<number>>([]);

  const onClickLinkHandler = (index: number) => {
    setOpenedLinkIndexes((openedIndexes) => {
      return openedIndexes.some((openedIndex) => openedIndex === index)
        ? openedIndexes.filter((openedIndex) => openedIndex !== index)
        : [...openedIndexes, index];
    });
  };

  return (
    <Drawer anchor="right" open={isOpened} disableRestoreFocus={true}>
      <GradientSpotsWrapper
        bgColor={Colors.MAIN_WHITE}
        className={cx("gradient_wrapper")}
        gradients={sideMenuGradients}
      >
        <div className={`${cx("side_menu_content")} user_select_none`}>
          <div className={cx("header")}>
            <Link
              to="/"
              onClick={() => {
                location.pathname === "/" && isOpenedHandler(false);
              }}
              className={cx("logo_wrapper")}
            >
              <LogoIcon />
            </Link>
            <CloseIcon
              className={cx("close_icon")}
              onClick={() => isOpenedHandler(false)}
            />
          </div>

          <div className={cx("links_wrapper")}>
            {navigationLinks &&
              navigationLinks.map((linkItem, i) => {
                const isLinkOpened = openedLinkIndexes.some(
                  (index) => index === i
                );
                return linkItem.subContent ? (
                  <div className={cx("link_with_content")} key={i}>
                    <div
                      className={cx("name", { underline: isLinkOpened })}
                      onClick={() => onClickLinkHandler(i)}
                    >
                      <span>{linkItem.name}</span>
                      <DownArrowIcon
                        className={cx("arrow_icon", {
                          isOpened: isLinkOpened,
                        })}
                      />
                    </div>
                    {isLinkOpened && (
                      <div className={cx("sublinks_wrapper")}>
                        {linkItem.subContent?.length &&
                          linkItem.subContent.map((sublinkItem, i) => (
                            <CustomLink
                              linkTo={
                                sublinkItem.description === "Coming soon"
                                  ? ""
                                  : sublinkItem.linkTo || ""
                              }
                              className={cx("sublink", {
                                isComingSoon:
                                  sublinkItem.description === "Coming soon",
                              })}
                              isExternalLink={sublinkItem?.externalLink}
                              key={i}
                            >
                              <div className={cx("sublink_name")}>
                                {sublinkItem.name}
                              </div>
                              <div className={cx("description")}>
                                {sublinkItem.description}
                              </div>
                            </CustomLink>
                          ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <CustomLink
                    linkTo={linkItem.linkTo || ""}
                    className={cx("link")}
                    key={i}
                  >
                    {linkItem.name}
                  </CustomLink>
                );
              })}
          </div>
        </div>
      </GradientSpotsWrapper>
    </Drawer>
  );
};
