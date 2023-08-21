import React from "react";

import { contributorsBlockData } from "../../content";
import { ContributorSwiperCard, ContributorSwiper } from "../../components";
import { ContributorsTypeName } from "../../common/enums";

export const MeetOurContributorsBlock: React.FC = () => {
  const contributorsCardGenerator = (contributorsType: ContributorsTypeName) =>
    contributorsBlockData &&
    contributorsBlockData.reduce<React.JSX.Element[]>(
      (acc, value, i) => {
        return contributorsType === value.type ||
          contributorsType === ContributorsTypeName.ALL_CONTRIBUTORS
          ? [
              ...acc,
              <ContributorSwiperCard
                contributorNumbers={contributorsBlockData.length}
                index={i}
                contributor={value}
              />,
            ]
          : acc;
      },

      []
    );

  return (
    <ContributorSwiper
      cardGenerator={contributorsCardGenerator}
      title="Meet our contributors"
    />
  );
};
