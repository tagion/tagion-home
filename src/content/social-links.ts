import { ExternalLinks, SocialLinkNames } from "../common/enums";

import { ReactComponent as TwitterIcon } from "../assets/images/X_icon.svg";
import { ReactComponent as DiscordIcon } from "../assets/images/discord_icon.svg";
import { ReactComponent as TelegramIcon } from "../assets/images/telegram_icon.svg";
import { ReactComponent as GithubIcon } from "../assets/images/github_icon.svg";

export const socialLinksData = [
  {
    name: SocialLinkNames.TWITTER,
    link: ExternalLinks.TWITTER,
    Icon: TwitterIcon,
    shareMessage: (link: string, message: string) =>
      `https://twitter.com/intent/tweet?text=${message}&url=${link}`,
    tooltipText: "Share in Twitter",
  },
  {
    name: SocialLinkNames.TELEGRAM,
    link: ExternalLinks.TELEGRAM,
    Icon: TelegramIcon,
    shareMessage: (link: string, message: string) =>
      `https://telegram.me/share/url?text=${message}&url=${link}`,
    tooltipText: "Share in Telegram",
  },
  {
    name: SocialLinkNames.GITHUB,
    link: ExternalLinks.GITHUB,
    Icon: GithubIcon,
  },
  {
    name: SocialLinkNames.DISCORD,
    link: ExternalLinks.DISCORD,
    Icon: DiscordIcon,
  },
];
