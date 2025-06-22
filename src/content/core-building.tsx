import React from "react";

export const coreBuildingBlockData = [
  {
    title: "DART Distributed Database",
    questions: [
      {
        valueName:
          "DART a powerful distributed database built into the network",
        paragraphList: [
          "DART stands for 'Distributed Archive or Random Transactions' and stores data in a Hashtable indexed as a Scarce Merkle Tree. With consensus about database changes being achieved by the Hashgraph and Wavefront protocols (see above), it is possible to edit, share and delete data as needed. The unique HiBON data format deployed allows for ownership and control of data at the record level, prioritising security while achieving unprecedented efficiency.",
        ],
      },
      {
        valueName: "It`s Distributed",
        paragraphList: [
          "DART is designed for complete data integrity, with the ability to distribute the full database across nodes or shard it within sectors. This optimises network storage capacity utilisation for high data-intensive systems like CDN. It efficiently stores SHA-256 hashes using a data structure with 256 leaves on each branch. The DART allows for the swift calculation of a cryptographic fingerprint called a bullseye, which is updated upon modification, ensuring data integrity across all nodes. ",
        ],
      },
      {
        valueName: "It`s Scalable",
        paragraphList: [
          <>
            Seperating data storage and consensus mechanisms allows Tagion to achieve the flexibility, privacy and efficiencies required to offer distributed solutions to business-applications at all scales. The HiBON data format, combined with the DART architecture, along with the Hashgraph and Wavefront protocols mean that Tagion enables volume and speed of transactions previously only possible on centralised systems. All while requiring minimal resources in hard-ware, bandwidth and energy consumptions. 
          </>,
        ],
      },
      {
        valueName: "It`s Resilient",
        paragraphList: [
          "DART and node architectures include a recorder chain system that captures all performed database changes, ensuring backup, integrity, and documentation. The recorded journals enable replay and undo functions, and they can also aid in synchronising databases. Each node is responsible for maintaining these backups. The distributed nature of the database enhances its resilience by having multiple copies of the data.",
        ],
      },
    ],
  },
  {
    title: "Permissionless Tagion Hashgraph and Wavefront",
    questions: [
      {
        valueName:
          "Hashgraph - an alternative to blockchain consensus",
        paragraphList: [
          "Hashgraph ensures consensus among nodes by providing a mathematically proven, finite solution to the Byzantine generals' problem. Gossip events between nodes create a communication history that is used to establish a definitive and consistent ordering of events and updates to the database. Unlike classical blockchain-based systems, Hashgraph guarantees a secure and reliable distributed ledger technology with no probabilistic solutions or uncertain order.",
        ],
      },
      {
        valueName: "Wavefront - an alternative to network congestion",
        paragraphList: [
          "Network bandwidth is a physical limitation of the system, with random gossip and synchronisation causing congestion. The patented Wavefront synchronisation mechanism uniquely identifies graph states and only communicates differences between them, reducing overhead in the synchronisation process between nodes.",
        ],
      },
      {
        valueName: "Unique node-swapping mechanism for a permissionless system",
        paragraphList: [
          "Tagion introduces a unique concept to make the Hashgraph-based system permissionless, where nodes can be randomly swapped in and out. The active pool consists of a constant number of nodes participating in the Hashgraph consensus, while the passive pool dynamically adjusts in size to accommodate nodes joining or leaving the network. This setup allows for a permissionless way to join the network while preserving a degree of decentralisation.",
        ],
      },
      {
        valueName:
          "Decentralized community ownership and governance of the Tagion network",
        paragraphList: [
          "Tagion will become a truly decentralised network, in which no entity can dominate the others for their own benefit. To achieve this we strive for the highest level of inclusivity and openness for new node-operators to join the network and contribute to its resilience. Balancing this openness with the need for protection from network attacks and malicious takeovers is the delicate task of our governance system and the staged process of releasing the Tagion mainnet from the stewardship of the founders.",
        ],
      },
    ],
  },
  {
    title: "Ecosystem of applications",
    questions: [
      {
        valueName:
          "Federated Databases with independent governance and bespoke rules",
        paragraphList: [
          "Our database system is organised in a two-tiered architecture: the Tagion Mainnet and Federated Databases which are independent and fully customisable for the specific needs of projects, products or communities. Each Federated Database has its own governance rules determined by its participants. The Tagion Mainnet provides a public-notary service to Federated Databases which allows for transparency and audits, while protecting sensible or proprietary data.",
        ],
      },
      {
        valueName: "Development suite for token and currency applications",
        paragraphList: [
          "Tagion offers fast, efficient transactions without compromising decentralisation or security. This infrastructure cannot only transact with Tagions - our native utility tokens - but allows for the creation of bespoke data infrastructures of all kinds.",
        ],
      },
      {
        valueName: "Decentralized exchange platform (DEX)",
        paragraphList: [
          " A native DEX application will ensure seamless trading of TGN with various currencies, and exchange digital assets seamlessly. The Tagion Decentralised Exchange Protocol will enable real price discovery and transparency to create the best use of liquidity and pricing.",
        ],
      },
      {
        valueName: "Built equally for niche applications and mainstream projects",
        paragraphList: [
          "The Tagion network is the only distributed database that is fully decentralised while providing the speed, scale and efficiency needed for mainstream digital services. Its low energy consumption, lean data-architecture and inclusive licencing model with transparent governance cater not only to corporate or governmental applications but also invite hyper-local, non-profit and experimental communities to use Tagion on equal terms. We’re creating a network where everyone has a stake, fostering an ecosystem that values contribution, collaboration, and mutual growth.",
        ],
      },
    ],
  },
];
