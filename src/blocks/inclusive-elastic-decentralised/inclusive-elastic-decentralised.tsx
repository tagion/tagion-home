import React from "react";

import {
  InclusiveElasticDecentralisedSwiper,
  InclusiveElasticDecentralisedSwiperCard,
} from "../../components";
import { inclusiveElasticDecentralisedData } from "../../content";

export const InclusiveElasticDecentralisedBlock: React.FC = () => {
  const inclusiveCardGenerator = () =>
    inclusiveElasticDecentralisedData &&
    inclusiveElasticDecentralisedData.map((card, i) => (
      <InclusiveElasticDecentralisedSwiperCard
        Logo={card.Logo}
        logoWidth={card.logoWidth}
        gradientLogo={card?.gradientLogo}
        data={card.data}
        key={i}
      />
    ));

  return (
    <InclusiveElasticDecentralisedSwiper
      cardGenerator={inclusiveCardGenerator}
      title={
        <>
          Inclusive. Elastic.
          <br />
          Decentralised. Scalable.
        </>
      }
      description={
        <>
          Tagion is a decentralised money-based network for the future
          sustainable economy with low bandwidth requirements, high transaction
          per second (TPS), low fees and zero to none environmental impact.
          <div className="text-separator" />
          We have combined a state-of-the-art distributed Tagion Hashgraph with
          groundbreaking Wavefront, syncing the graph between nodes, and an aBFT
          consensus mechanism to bring you a complete infrastructure for
          efficient, fungible and censorship-resistant money.
        </>
      }
    />
  );
};
