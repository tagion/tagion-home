import React from "react";

import {
  InclusiveElasticDecentralisedSwiper,
  //InclusiveElasticDecentralisedSwiperCard,
} from "../../components";
import { inclusiveElasticDecentralisedData } from "../../content";

export const InclusiveElasticDecentralisedBlock: React.FC = () => {
  const inclusiveCardGenerator = () => [];
  /*  inclusiveElasticDecentralisedData &&
    inclusiveElasticDecentralisedData.map((card, i) => (
      <InclusiveElasticDecentralisedSwiperCard
        Logo={card.Logo}
        logoWidth={card.logoWidth}
        gradientLogo={card?.gradientLogo}
        data={card.data}
        key={i}
      />
    ));
*/
  return (
    <InclusiveElasticDecentralisedSwiper
      cardGenerator={inclusiveCardGenerator}
      title={
        <>
          Fast. Efficient.
          <br />
          Decentralised. Scalable.
        </>
      }
      description={
        <>
          Tagion is a data infrastructure for all use-cases, with a customisable and interoperable stack, high transactions per second (TPS), low fees and zero-to-none environmental impact.
          <div className="text-separator" />
          Combining the state-of-the-art  Hashgraph consensus mechanism and our groundbreaking Wavefront to synchronise data between nodes makes the distributed DART database the most powerful and secure dual layered solution for efficient, fungible and massively scalable business and community applications.
        </>
      }
    />
  );
};
