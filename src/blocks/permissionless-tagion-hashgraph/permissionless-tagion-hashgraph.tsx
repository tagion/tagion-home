import React from "react";

import {
  PermissionlessTagionHashgraphSwiper,
  PermissionlessTagionHashgraphSwiperCard,
} from "../../components";
import { permissionlessTagionHashgraphBlockData } from "../../content";

export const PermissionlessTagionHashgraphBlock: React.FC = () => {
  const tagionHashgraphCardGenerator = () =>
    permissionlessTagionHashgraphBlockData &&
    permissionlessTagionHashgraphBlockData.map((card, i) => (
      <PermissionlessTagionHashgraphSwiperCard
        card={{
          title: card.title,
          videoSrc: card.videoSrc,
          description: card.description,
        }}
        index={i}
        key={i}
      />
    ));

  return (
    <PermissionlessTagionHashgraphSwiper
      cardGenerator={tagionHashgraphCardGenerator}
    />
  );
};
