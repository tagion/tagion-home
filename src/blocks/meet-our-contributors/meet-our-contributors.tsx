import React from "react";

import { contributorsBlockData } from "../../content";
import { ContributorSwiperCard, ContributorSwiper } from "../../components";

export const MeetOurContributorsBlock: React.FC = () => {
  const contributorsCardGenerator = () =>
    contributorsBlockData &&
    contributorsBlockData.map((client, i) => (
      <ContributorSwiperCard
        contributorNumbers={contributorsBlockData.length}
        index={i}
        contributor={client}
      />
    ));

  return (
    <ContributorSwiper
      cardGenerator={contributorsCardGenerator}
      title="Meet our contributors"
    />
  );
};
