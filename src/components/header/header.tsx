import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";

import { SideMenu } from "../side-menu";
import { PageSizes } from "../../common/enums";

import { SocialLinks } from "../socials-links";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as BurgerMenuIcon } from "../../assets/images/burger_menu_icon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";

import * as styles from "./header.module.scss";

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);
  const [isSideMenuDisplayed, setIsSideMenuDisplayed] =
    useState<boolean>(false);

  const resizeHandler = () => {
    setIsSideMenuDisplayed(() =>
      window.innerWidth > PageSizes.DESKTOP_LARGE ? false : true
    );
  };
  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => resizeHandler());
    return () => {
      window.removeEventListener("resize", () => resizeHandler());
    };
  }, []);

  return (
    <header>
      <Link to="/" className={cx("logo_wrapper")}>
        <LogoIcon />
      </Link>

      <nav>
        <Link to="/coming-soon">
          <span>Ecosystem</span>
          <DownArrowIcon className={cx("arrow")} />
        </Link>
        <Link to="/coming-soon">Community</Link>
        <Link to="/coming-soon">
          <span>Docs</span> <DownArrowIcon className={cx("arrow")} />
        </Link>
        <Link to="/coming-soon">About</Link>
        <Link to="/coming-soon">Blog</Link>
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
    </header>
  );
};
