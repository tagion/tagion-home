import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";

import { SideMenu } from "../side-menu";
import { PageSizes } from "../../common/enums";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as BurgerMenuIcon } from "../../assets/images/burger_menu_icon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter_icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/discord_icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram_icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github_icon.svg";

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
      <div className={cx("header_content")}>
        <Link to="/" className={cx("logo_wrapper")}>
          <LogoIcon />
        </Link>

        <nav>
          <Link to="/ecosystem">
            <span>Ecosystem</span>
            <DownArrowIcon className={cx("arrow")} />
          </Link>
          <Link to="/community">Community</Link>
          <Link to="/docs">
            <span>Docs</span> <DownArrowIcon className={cx("arrow")} />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <div className={cx("external_links")}>
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
          <a href="https://discord.com/">
            <TelegramIcon />
          </a>
          <a href="https://t.me/joinchat/SCowXllJB2gOXDHu">
            <GithubIcon />
          </a>
          <a href="https://github.com/tagion/tagion-home">
            <DiscordIcon />
          </a>
        </div>

        <div
          className={cx("burger_menu")}
          onClick={() => {
            setIsSideMenuOpened(true);
          }}
        >
          <BurgerMenuIcon />
        </div>
        {isSideMenuDisplayed && (
          <SideMenu
            isOpened={isSideMenuOpened}
            isOpenedHandler={setIsSideMenuOpened}
          />
        )}
      </div>
    </header>
  );
};
