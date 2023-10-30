import React from "react";
import { CustomLink } from "../components";
import { ExternalLinks } from "../common/enums/external_links";

export const permissionlessTagionHashgraphBlockData = [
  {
    title: "Permissionless Tagion Hashgraph and Wavefront",
    description:
      "Everyone can provide the tagion infrastructure by operating a node with this delivering the Tagion network. Tagion Hashgraph ensures consensus among nodes, so everyone knows the truth and one truth only. Wavefront protocol provides efficient synchronisation between two nodes’ state of the Hashgraph with no communication overhead, delivering an efficient network consensus mechanism that has ordering and is scalable.",
    videoSrc: "/videos/hashgraph_animation.mov",
  },
  {
    title: "Towards a Common Good governed by the Community",
    description: (
      <>
        Tagion's goal is to build a Common Good resource based on{" "}
        <CustomLink
          className="underlined-gray-link"
          linkTo={ExternalLinks.ELINOR_OSTROMS_PRINCIPLES}
          isExternalLink
        >
          Elinor Ostrom's principles
        </CustomLink>
        , where the community governs the system, and anyone can be a community
        member. Contributors, including node operators, core members,
        ambassadors, and developers, are rewarded and given a weighted vote
        based on their contribution and reputation.
      </>
    ),
    videoSrc: "/videos/proof_of_community_animation.mov",
  },
  {
    title: "DART - A Secure and Scalable Distributed Database",
    description:
      "Distributed applications require scalable storage with data integrity, resilience, and backup, all of which the DART system provides. It efficiently stores SHA-256 hashes using a data structure with 256 leaves. The DART includes a cryptographic fingerprint called a bullseye, which is updated upon modification, ensuring data integrity. Users can create custom sub-darts with their own governance and delete obsolete data.",
    videoSrc: "/videos/dart_animation.mov",
  },
];
