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
}

const comingSoonPages = navigationLinks.reduce<Array<string>>((acc, value) => {
  return value.subContent?.length ? [...acc, value.name] : acc;
}, []);

export const Header: React.FC<InputProps> = ({ isHeaderShownOnTop }) => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);
  const [isSideMenuDisplayed, setIsSideMenuDisplayed] =
    useState<boolean>(false);
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const [anchorSubMenuElement, setAnchorSubMenuElement] =
    useState<null | HTMLElement>(null);
  const [selectedSubMenuIndex, setSelectedSubMenuIndex] = useState<number>(0);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  // todo move all poper logic into a separate component or hook
  const poperCanBeOpen = isSubMenuOpened && Boolean(anchorSubMenuElement);
  const poperId = poperCanBeOpen ? "popper" : undefined;

  const selectedSubContent = navigationLinks[selectedSubMenuIndex].subContent;

  const closeSubMenu = () => {
    setIsSubMenuOpened(false);
    setAnchorSubMenuElement(null);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedSubMenuIndex(index);
    setAnchorSubMenuElement(event.currentTarget);
    !isSubMenuOpened && setIsSubMenuOpened(() => true);
  };

  const handleClickAway = (e: MouseEvent | TouchEvent) => {
    const isComingSoonPage = comingSoonPages.some(
      (item) => item === (e?.target as HTMLElement)?.textContent
    );

    if (!isComingSoonPage) {
      closeSubMenu();
    }
  };

  const resizeHandler = () => {
    setIsSideMenuDisplayed(() =>
      window.innerWidth > PageSizes.DESKTOP_LARGE ? false : true
    );
    setIsSubMenuOpened(() => window.innerWidth > PageSizes.DESKTOP_LARGE);
  };

  const scrollHandler = () => {
    closeSubMenu();

    const scrollWithTransparentHeader =
      window.innerWidth < PageSizes.DESKTOP_LARGE ? 60 : 150;

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
      className={cx("header", {
        isHeaderTransparent: isHeaderTransparent && !isHeaderShownOnTop,
      })}
    >
      <Link to="/" className={cx("logo_wrapper")}>
        <LogoIcon />
      </Link>

      <nav>
        {navigationLinks.length &&
          navigationLinks.map((link, i) => (
            <div
              className={`${cx("menu_item")} user_select_none`}
              onClick={(e) =>
                link.linkTo ? navigate(link.linkTo) : handleMenuItemClick(e, i)
              }
              key={i}
            >
              <span>{link.name}</span>
              {link.subContent?.length && (
                <DownArrowIcon className={cx("arrow")} />
              )}
            </div>
          ))}
      </nav>

      <SocialLinks className={cx("external_links")} />

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
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <div
              className={cx("submenu", {
                isTwoRows:
                  selectedSubContent.length <= 4 &&
                  selectedSubContent.length > 2,
              })}
            >
              {navigationLinks[selectedSubMenuIndex].subContent?.map(
                ({ Icon, name, description, linkTo }, i, subContentArray) => {
                  const isEvenNumber = subContentArray.length % 2 === 0;
                  return (
                    <a
                      href={linkTo}
                      target="_blank"
                      className={cx("link", {
                        isOdd: !isEvenNumber,
                        isEven: isEvenNumber,
                        isDisabled: description === "Coming soon",
                      })}
                      key={i}
                    >
                      <div className={cx("icon")}>{Icon && <Icon />}</div>
                      <div
                        className={`${cx("text", {
                          isComingSoon: description === "Coming soon",
                        })} user_select_none`}
                      >
                        <div className={cx("title")}>{name}</div>
                        <div className="font-16">{description}</div>
                      </div>
                    </a>
                  );
                }
              )}
            </div>
          </ClickAwayListener>
        </Popper>
      )}
    </header>
  );
};
