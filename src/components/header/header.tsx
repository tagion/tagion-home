import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import classNames from "classnames/bind";
import { ClickAwayListener } from "@mui/base";
import { Popper } from "@mui/material";

import { SideMenu } from "../side-menu";
import { PageSizes } from "../../common/enums";

import { SocialLinks } from "../socials-links";
import { navigationLinks } from "../../content";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as BurgerMenuIcon } from "../../assets/images/burger_menu_icon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";

import * as styles from "./header.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  isHeaderShownOnTop?: boolean;
  isPageWithDarkBackground?: boolean;
}

export const Header: React.FC<InputProps> = ({
  isHeaderShownOnTop,
  isPageWithDarkBackground,
}) => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);
  const [isSideMenuDisplayed, setIsSideMenuDisplayed] =
    useState<boolean>(false);
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const [anchorSubMenuElement, setAnchorSubMenuElement] =
    useState<null | HTMLElement>(null);
  const [selectedSubMenuIndex, setSelectedSubMenuIndex] = useState<number>(-1);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  // todo move all poper logic into a separate component or hook
  const poperCanBeOpen = isSubMenuOpened && Boolean(anchorSubMenuElement);
  const poperId = poperCanBeOpen ? "popper" : undefined;

  const selectedSubContent = navigationLinks[selectedSubMenuIndex]?.subContent;

  const handleOnMouseOverMenuItem = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedSubMenuIndex(index);
    !anchorSubMenuElement && setAnchorSubMenuElement(event.currentTarget);
    setIsSubMenuOpened(() => true);
  };

  const resizeHandler = () => {
    setIsSideMenuDisplayed(() =>
      window.innerWidth > PageSizes.DESKTOP_LARGE ? false : true
    );
  };

  const scrollHandler = () => {
    const scrollWithTransparentHeader =
      window.innerWidth < PageSizes.DESKTOP_LARGE ? 60 : 150;

    if (
      window.document.documentElement.scrollTop <= scrollWithTransparentHeader
    ) {
      document
        .getElementById("header")
        ?.style.setProperty(
          "transition",
          "backdrop-filter 100ms, -webkit-backdrop-filter 200ms, background-color 400ms"
        );
    }

    setIsHeaderTransparent(
      () =>
        !(
          window.document.documentElement.scrollTop >
          scrollWithTransparentHeader
        )
    );
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => resizeHandler());
    return () => {
      window.removeEventListener("resize", () => resizeHandler());
    };
  }, []);

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", () => {
      scrollHandler();
    });
    return () => window.removeEventListener("scroll", () => scrollHandler());
  }, []);

  return (
    <header
      id="header"
      className={cx("header", {
        isHeaderTransparent: isHeaderTransparent && !isHeaderShownOnTop,
        isPageWithDarkBackground,
      })}
    >
      <Link to="/" className={cx("logo_wrapper")}>
        <LogoIcon />
      </Link>

      <nav>
        {navigationLinks.length &&
          navigationLinks.map((link, i) => {
            const withSubMenu = link.subContent?.length;

            const linkContent = (
              <>
                <span>{link.name}</span>
                {withSubMenu && <DownArrowIcon className={cx("arrow")} />}
              </>
            );

            return (
              <div
                className={cx("menu_item_wrapper")}
                onMouseOver={(e) =>
                  withSubMenu && handleOnMouseOverMenuItem(e, i)
                }
                onMouseLeave={() => withSubMenu && setIsSubMenuOpened(false)}
                key={i}
              >
                {link.externalLink ? (
                  <a
                    className={`${cx("menu_item", {
                      withSubMenu,
                      isActive: isSubMenuOpened && selectedSubMenuIndex === i,
                    })} user_select_none`}
                    href={link.linkTo}
                    target="_blank"
                  >
                    {linkContent}
                  </a>
                ) : (
                  <div
                    className={`${cx("menu_item", {
                      withSubMenu,
                      isActive: isSubMenuOpened && selectedSubMenuIndex === i,
                    })} user_select_none`}
                    onClick={() => link.linkTo && navigate(link.linkTo)}
                  >
                    {linkContent}
                  </div>
                )}
              </div>
            );
          })}
      </nav>

      <SocialLinks className={cx("external_links")} isWhiteColor />

      <BurgerMenuIcon
        className={cx("burger_menu_icon")}
        onClick={() => {
          setIsSideMenuOpened(true);
        }}
      />

      {isSideMenuDisplayed && (
        <SideMenu
          isOpened={isSideMenuOpened}
          isOpenedHandler={setIsSideMenuOpened}
        />
      )}

      {anchorSubMenuElement && selectedSubContent?.length && (
        <Popper
          id={poperId}
          open={isSubMenuOpened}
          anchorEl={anchorSubMenuElement}
          className={cx("popper")}
          onMouseOver={() => setIsSubMenuOpened(true)}
          onMouseLeave={() => setIsSubMenuOpened(false)}
        >
          <div
            className={cx("submenu", {
              docsSubmenu:
                navigationLinks[selectedSubMenuIndex].name === "Docs",
              ecosystemSubmenu:
                navigationLinks[selectedSubMenuIndex].name === "Ecosystem",
            })}
          >
            {selectedSubContent?.map(
              (
                { Icon, name, description, linkTo, img, externalLink },
                i,
                subContentArray
              ) => {
                const isFirstColumn = (subContentArray.length - 1) / 2 >= i;
                return (
                  <a
                    href={linkTo}
                    target={externalLink ? "_blank" : ""}
                    className={cx("link", {
                      isFirstColumn,
                      isSecondColumn: !isFirstColumn,
                      isDisabled: description === "Coming soon",
                    })}
                    key={i}
                  >
                    {Icon && (
                      <div className={cx("icon")}>
                        <Icon />
                      </div>
                    )}
                    {img && <img src={img} className={cx("icon")} />}
                    <div
                      className={`${cx("text", {
                        isComingSoon: description === "Coming soon",
                      })} user_select_none`}
                    >
                      <div className={`${cx("title")} font-28 prompt-regular`}>
                        {name}
                      </div>
                      <div className="inter-16">{description}</div>
                    </div>
                  </a>
                );
              }
            )}
          </div>
        </Popper>
      )}
    </header>
  );
};
