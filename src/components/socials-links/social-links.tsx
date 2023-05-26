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
      <a href="https://twitter.com/TagionOfficial" target="_blank">
        <TwitterIcon />
      </a>
      <a href="https://t.me/tagionChat" target="_blank">
        <TelegramIcon />
      </a>
      <a href="https://github.com/tagion" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://discord.gg/za2hb62quR" target="_blank">
        <DiscordIcon />
      </a>
    </div>
  );
};
