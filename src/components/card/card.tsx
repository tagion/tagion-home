import React from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

import twitterIcon from "../../assets/images/twitter_icon.svg";
import arrowIcon from "../../assets/images/right_arrow_icon.svg";
import arrowInCircleIcon from "../../assets/images/arrow_in_circle_icon.svg";

import * as styles from "./card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  widthInPx?: number;
  heightInPx?: number;
  borderRadiusInPx?: number;
  paddingsInPx?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };

  title?: string;
  description: string;
  img?: string;

  tweetInfo?: {
    nickname: string;
    name: string;
  };
  linkWithArrowInfo?: { linkTo: string; name?: string };

  isUpcomingEventCard?: boolean;
  isLinkCard?: boolean;
  isContributingCard?: boolean;
  isTagionEcosystemCard?: boolean;
  isTimeline?: boolean;
  isValueForContributorsCard?: boolean;
}

export const Card: React.FC<PropsWithChildren<InputProps>> = ({
  widthInPx,
  heightInPx,
  paddingsInPx,
  borderRadiusInPx,
  title,
  description,
  img,
  tweetInfo,
  linkWithArrowInfo,
  isUpcomingEventCard,
  isContributingCard,
  isTagionEcosystemCard,
  isValueForContributorsCard,
  isLinkCard,
  isTimeline,
  children,
}) => {
  const doesCardHaveLinkWrapper = linkWithArrowInfo;
  const isCardHeaderDisplayed =
    !isContributingCard && (img || tweetInfo || isUpcomingEventCard);
  const isCardFooterDisplayed =
    tweetInfo || linkWithArrowInfo || isContributingCard;

  const propsStyles = {
    maxWidth: `${widthInPx}px`,
    width: widthInPx ? "100%" : "",
    minHeight: heightInPx ? `${heightInPx}px` : "",
    padding: paddingsInPx
      ? `${paddingsInPx?.top}px ${paddingsInPx?.right}px ${paddingsInPx?.bottom}px ${paddingsInPx?.left}px`
      : "",
    borderRadius: `${borderRadiusInPx}px`,
  };

  const card = () => (
    <div
      className={cx("card", {
        isUpcomingEventCard,
        isLinkCard: isLinkCard,
        isContributingCard,
        isTagionEcosystemCard,
        isValueForContributorsCard,
        isTweet: tweetInfo,
        isTimeline,
        cardShadow: !isContributingCard,
      })}
      style={propsStyles}
    >
      {isCardHeaderDisplayed && (
        <div className={cx("card_header")}>
          {img && (
            <img
              className={cx("img", {
                upcomingEventImgSizes: isUpcomingEventCard,
              })}
              src={img}
              alt={title}
            />
          )}

          {tweetInfo && (
            <div className={cx("tweet_user_info")}>
              <span>{tweetInfo.name}</span>
              <span>{tweetInfo.nickname}</span>
            </div>
          )}

          {isUpcomingEventCard && (
            <div className={cx("event_label")}>Event</div>
          )}
        </div>
      )}

      <div className={cx("card_body")}>
        {title && <span className={cx("title")}>{title}</span>}
        {description && (
          <span className={cx("description")}>{description}</span>
        )}
      </div>
      {children}
      {isCardFooterDisplayed && (
        <div className={cx("card_footer")}>
          {tweetInfo && (
            <img
              className={cx("twitter_logo")}
              src={twitterIcon}
              alt="Twitter logo"
            />
          )}

          {linkWithArrowInfo && (
            <div className={cx("link_with_arrow")}>
              <span>{linkWithArrowInfo?.name || title}</span>
              <img src={arrowIcon} alt="Arrow" />
            </div>
          )}

          {isContributingCard && (
            <img
              className={cx("arrow_in_circle_icon")}
              src={arrowInCircleIcon}
              alt="Arrow link icon"
            />
          )}
        </div>
      )}
    </div>
  );

  return doesCardHaveLinkWrapper ? (
    <Link to={linkWithArrowInfo.linkTo} className={cx("link_wrapper")}>
      {card()}
    </Link>
  ) : (
    card()
  );
};
