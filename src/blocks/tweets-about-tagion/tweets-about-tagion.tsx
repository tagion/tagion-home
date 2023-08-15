import React from "react";

import { contributorsBlockData, tweetsBlockData } from "../../content";
import {
  TweetsSwiper,
  SwiperTweetCard,
} from "../../components";

export const TweetsAboutTagionBlock: React.FC = () => {
  const tweetsCardGenerator = () =>
    tweetsBlockData &&
    tweetsBlockData.map((tweet, i) => (
      <SwiperTweetCard
        tweetNumbers={contributorsBlockData.length}
        index={i}
        tweet={tweet}
      />
    ));

  return (
    <TweetsSwiper
      cardGenerator={tweetsCardGenerator}
      title="Tweets about Tagion"
      classNames={{ wrapper: 'main-bottom-margins' }}
    />
  );
};
