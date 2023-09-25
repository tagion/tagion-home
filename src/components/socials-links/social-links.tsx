import React from "react";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { Tooltip, ToastifyMessage } from "../../components";
import { socialLinksData } from "../../content/social-links";
import { SocialLinkNames } from "../../common/enums";

import { ReactComponent as CopyLinkIcon } from "../../assets/images/copy_link_icon.svg";

import * as styles from "./social-links.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  className?: string;
  isWhiteColor?: boolean;
  withCopyLinkButton?: boolean;
  withHovering?: boolean;
  removeLinks?: Array<SocialLinkNames>;
  shareMessageData?: { messageText: string };
  withTooltips?: boolean;
}

export const SocialLinks: React.FC<InputProps> = ({
  className = "",
  isWhiteColor,
  withCopyLinkButton,
  withHovering,
  removeLinks,
  withTooltips,
  shareMessageData,
}) => {
  let filteredSocialLinksData = socialLinksData;
  const currentLink = window.location.href;

  if (removeLinks?.length) {
    filteredSocialLinksData = socialLinksData.filter(
      (linksData) => !removeLinks.includes(linksData.name)
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
        filteredSocialLinksData.map(
          ({ link, Icon, shareMessage, tooltipText }) => (
            <a
              data-tooltip-content={tooltipText}
              href={
                shareMessageData && shareMessage
                  ? shareMessage(currentLink, shareMessageData.messageText)
                  : link
              }
              target="_blank"
              className={`${cx("link")} link tooltip-anchor`}
              key={uuidv4()}
            >
              <Icon />
            </a>
          )
        )}

      {withCopyLinkButton && (
        <CopyLinkIcon
          data-tooltip-content="Copy link"
          className={`${cx("link", "copy_link")} link tooltip-anchor`}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
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

      {withTooltips && (
        <Tooltip anchorSelect=".tooltip-anchor" className={cx("tooltip")} />
      )}
    </div>
  );
};
