import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";

import { Card } from "..";

import * as styles from "./tweets-swiper-card.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  tweet: {
    tweetOwner: {
      name: string;
      nickName: string;
      avatar: string;
    };
    tweetText: React.JSX.Element;
    tweetImg: string;
    linkTo: string;
  };
  index: number;
  tweetNumbers: number;
  classNames?: { imgWrapper?: string; linkWrapper?: string };
}

export const SwiperTweetCard: React.FC<InputProps> = ({
  tweet,
  index,
  tweetNumbers,
  classNames,
}) => {
  return (
    <Link
      to={tweet.linkTo}
      target="_blank"
      className={`${cx("link_wrapper", {
        lastItem: index === tweetNumbers - 1,
        firstItem: index === 0,
      })} ${classNames?.linkWrapper || ""}`}
    >
      <Card
        title={tweet.tweetOwner.name}
        description={tweet.tweetOwner.nickName}
        img={{ path: tweet.tweetOwner.avatar, alt: "Twitter user image" }}
        classNames={{
          img: cx("user_img_wrapper"),
          title: `${cx("user_name")}`,
          description: `${cx("user_nickname")}`,
          mainContent: `${cx("user_mainContent")}`,
          card: cx("twitter_user_details_card"),
        }}
      />
      <Card
        description={tweet.tweetText}
        img={{ path: tweet.tweetImg, alt: "Twitter post image" }}
        classNames={{
          img: cx("post_img"),
          description: cx("post_text"),
          card: cx("twitter_post_details_card"),
        }}
      />
    </Link>
  );
};
