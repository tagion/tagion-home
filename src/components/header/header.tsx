import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import logoIcon from "../../assets/images/logo.svg";
import twitterIcon from "../../assets/images/twitter_icon.svg";
import discordIcon from "../../assets/images/discord_icon.svg";
import telegramIcon from "../../assets/images/telegram_icon.svg";
import githubIcon from "../../assets/images/github_icon.svg";
import burgerMenuIcon from "../../assets/images/burger_menu_icon.svg";

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
          <Link to="/explore">Explore</Link>
          <Link to="/community">Community</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <div className={cx("external_links")}>
          <a href="https://twitter.com/">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://discord.com/">
            <img src={discordIcon} alt="Discord icon" />
          </a>
          <a href="https://t.me/joinchat/SCowXllJB2gOXDHu">
            <img src={telegramIcon} alt="Telegram icon" />
          </a>
          <a href="https://github.com/tagion/tagion-home">
            <img src={githubIcon} alt="GitHub icon" />
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
          backgroundColor: "#E7E7E7",
          width: "100vw",
        }}
      >
        <IconButton sx={{ mb: 2 }}>
          <CloseIcon onClick={() => isOpenedHandler(false)} />
        </IconButton>
      </Box>
    </Drawer>
  );
};
