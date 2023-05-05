import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as TwitterIcon } from "../../assets/images/twitter_icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/discord_icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram_icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github_icon.svg";

import * as styles from "./social-links.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  className?: string;
}

export const SocialLinks: React.FC<InputProps> = ({ className = "" }) => {
  return (
    <div className={`${cx("social_links")} ${className}`}>
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
  );
};
