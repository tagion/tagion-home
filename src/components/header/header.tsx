import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import logoIcon from "../../assets/images/logo.svg";
import burgerMenuIcon from "../../assets/images/burger_menu_icon.svg";
import closeButtonIcon from "../../assets/images/close_button_icon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter_icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/discord_icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram_icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github_icon.svg";

import * as styles from "./header.module.scss";

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
  const [isNavPanelOpened, setIsNavPanelOpened] = useState<boolean>(false);

  return (
    <header>
      <div className={cx("header_content")}>
        <Link to="/" className={cx("logo_wrapper")}>
          <img src={logoIcon} alt="Tagion logo icon" />
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
            setIsNavPanelOpened(true);
          }}
        >
          <img src={burgerMenuIcon} />
        </div>

        <NavigationPanel
          isOpened={isNavPanelOpened}
          isOpenedHandler={setIsNavPanelOpened}
        />
      </div>
    </header>
  );
};

// for testing. In the future it will be transferred to a separate file. We are waiting for the design...
const NavigationPanel = ({
  isOpened,
  isOpenedHandler,
}: {
  isOpened: boolean;
  isOpenedHandler: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Drawer anchor="right" open={isOpened}>
      <Box
        sx={{
          p: 2,
          height: 1,
          backgroundColor: "#000000",
          width: "100vw",
        }}
      >
        <img
          src={closeButtonIcon}
          alt="Close Icon"
          onClick={() => isOpenedHandler(false)}
        />
      </Box>
    </Drawer>
  );
};
