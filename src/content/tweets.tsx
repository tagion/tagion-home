import React from "react";

import commonGoodGoverned from "../assets/images/community/common_good_governed.png";
import DART from "../assets/images/community/DART.png";
import hashgraphAndWavefront from "../assets/images/community/hashgraph_and_wavefront.png";
import shapeTheFutureFairEconomy from "../assets/images/community/shape_the_future_fair_economy.png";
import subDARTCustomisableGovernance from "../assets/images/community/sub-DART_customisable_governance.png";
import twitterTagionAvatar from "../assets/images/community/twitter_tagion_avatar.png";
import weArePioneringMoneyTweet from "../assets/images/community/we_are_pionering_money_tweet.png";

const tweetOwner = {
  name: "Tagion",
  nickName: "@TagionOfficial",
  avatar: twitterTagionAvatar,
};

export const tweetsBlockData = [
  {
    tweetOwner,
    tweetText: (
      <>
        We`ve been quiet, but for good reason. We're laser-focused on building
        an <span className="twitter-hashtag">#alternativemonetarysystem</span>.
        <div className="text-separator" />
        Our 2023 roadmap: prod. ready DART, consensus mechanism, APIs/services &
        Execution Engine.
        <div className="text-separator" />
        Stay tuned for the launch on truly distributed infrastructure.{" "}
        <span className="twitter-hashtag">#Tagion</span>
      </>
    ),
    tweetImg: weArePioneringMoneyTweet,
    linkTo:
      "https://twitter.com/TagionOfficial/status/1640670648778326016?s=20",
  },
  {
    tweetOwner,
    tweetText: (
      <>
        As Tagion gears up for launch, we're committed to prioritising open and
        transparent communication with our community. Stay tuned for updates on
        how to get involved in shaping the future of Tagion.{" "}
        <span className="twitter-hashtag">#Tagion</span>{" "}
        <span className="twitter-hashtag">#OpenCommunication</span>
      </>
    ),
    tweetImg: shapeTheFutureFairEconomy,
    linkTo:
      "https://twitter.com/TagionOfficial/status/1641394981314199553?s=20",
  },
  {
    tweetOwner,
    tweetText: (
      <>
        Introducing DART Consensus Database: a secure and distributed database
        with offline capabilities and a tamper-proof audit trail. Data integrity
        is ensured with a single fingerprint, and updates are agreed upon by all
        nodes for resilience and accessibility.{" "}
        <span className="twitter-hashtag">#DART</span>{" "}
        <span className="twitter-hashtag">#Database</span>
      </>
    ),
    tweetImg: DART,
    linkTo:
      "https://twitter.com/TagionOfficial/status/1648622840558567425?s=20",
  },
  {
    tweetOwner,
    tweetText: (
      <>
        Be part of a Common Good system where contributors are rewarded and
        given a weighted vote based on their participation and reputation, while
        nodes are randomly swapped in and out for true decentralisation. Users
        pay to use the system. <span className="twitter-hashtag">#Tagion</span>{" "}
        <span className="twitter-hashtag">#CommonGood</span>{" "}
        <span className="twitter-hashtag">#ProofOfCommunity</span>
      </>
    ),
    tweetImg: commonGoodGoverned,
    linkTo:
      "https://twitter.com/TagionOfficial/status/1651880115981230081?s=20",
  },
  {
    tweetOwner,
    tweetText: (
      <>
        Design your own rules to adapt to specific needs and values. Design your
        own sub-ecosystems with customisable governance thanks to Sub-DARTS{" "}
        <span className="twitter-hashtag">#DistributedDatabase</span>{" "}
        <span className="twitter-hashtag">#FutureProofMoney</span>
      </>
    ),
    tweetImg: subDARTCustomisableGovernance,
    linkTo:
      "https://twitter.com/TagionOfficial/status/1650819084563488771?s=20",
  },
  {
    tweetOwner,
    tweetText: (
      <>
        Tagion Hashgraph ensures consensus among nodes, while the Wavefront
        protocol enables synchronisation with no communication overhead. It's an
        efficient network consensus mechanism with definitive ordering and
        scalability. <span className="twitter-hashtag">#Tagion</span>{" "}
        <span className="twitter-hashtag">#FutureProofMoney</span>{" "}
        <span className="twitter-hashtag">#Decentralisation</span>
      </>
    ),
    tweetImg: hashgraphAndWavefront,
    linkTo:
      "https://twitter.com/TagionOfficial/status/1653714703963521029?s=20",
  },
];
