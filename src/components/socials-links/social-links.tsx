import React from "react";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { ToastifyMessage } from "../toastify";

import { ReactComponent as TwitterIcon } from "../../assets/images/X_icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/discord_icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram_icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github_icon.svg";
import { ReactComponent as CopyLinkIcon } from "../../assets/images/copy_link_icon.svg";

import * as styles from "./social-links.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  className?: string;
  isWhiteColor?: boolean;
  withCopyLinkButton?: boolean;
  withHovering?: boolean;
  removeLink?: string;
  onCopyLinkClick?: () => void;
}

export const SocialLinks: React.FC<InputProps> = ({
  className = "",
  isWhiteColor,
  withCopyLinkButton,
  withHovering,
  removeLink,
  onCopyLinkClick,
}) => {
  let filteredSocialLinksData = socialLinksData;

  if (removeLink) {
    filteredSocialLinksData = socialLinksData.filter(
      (linksData) => linksData.name !== removeLink
    );
  }

  return (
    <div
      className={`${cx("social_links", {
        isWhiteColor,
        withHovering,
      })} ${className}`}
    >
      {filteredSocialLinksData?.length &&
        filteredSocialLinksData.map(({ link, Icon }) => (
          <a
            href={link}
            target="_blank"
            className={`${cx("link")} link`}
            key={uuidv4()}
          >
            <Icon />
          </a>
        ))}
      {withCopyLinkButton && (
        <CopyLinkIcon
          className={`${cx("link")} link`}
          onClick={() => {
            onCopyLinkClick?.();
            toast(({ closeToast }) => (
              <ToastifyMessage
                closeToast={closeToast}
                status="success"
                mainText="Link copied!"
              />
            ));
          }}
        />
      )}
    </div>
  );
};

//todo import file with social links and move this object to the separate file
const socialLinksData = [
  {
    name: "twitter",
    link: "https://twitter.com/TagionOfficial",
    Icon: TwitterIcon,
  },
  {
    name: "telegram",
    link: "https://t.me/tagionChat",
    Icon: TelegramIcon,
  },
  {
    name: "github",
    link: "https://github.com/tagion",
    Icon: GithubIcon,
  },
  {
    name: "discord",
    link: "https://discord.gg/za2hb62quR",
    Icon: DiscordIcon,
  },
];
