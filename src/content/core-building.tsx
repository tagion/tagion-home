import React from "react";

export const coreBuildingBlockData = [
  {
    title: "Permissionless Tagion Hashgraph and Wavefront",
    questions: [
      {
        valueName:
          "Hashgraph - an Alternative to classical blockchain that provides ordering with full security",
        paragraphList: [
          "Hashgraph ensures consensus among nodes by providing a mathematically proven, finite solution to the Byzantine generals' problem. Gossip events between nodes create a communication history that is solved asynchronously with virtual voting and is used to establish a definitive and consistent ordering of events. Unlike classical blockchain-based systems, Hashgraph guarantees a secure and reliable distributed ledger technology with no probabilistic solutions or uncertain order.",
        ],
      },
      {
        valueName: "Wavefront - a solution to network congestion",
        paragraphList: [
          "Network bandwidth is a physical limitation of the system, with random gossip and synchronisation causing congestion. The patented Wavefront synchronisation mechanism uniquely identifies graph states and only communicates differences between them, reducing overhead in the synchronisation process between nodes.",
        ],
      },
      {
        valueName: "Unique Node Swapping Mechanism for a Permissionless System",
        paragraphList: [
          "Tagion introduces a unique concept to make the Hashgraph-based system permissionless, where nodes can be randomly swapped in and out. The active pool consists of a constant number of nodes participating in the Hashgraph consensus, while the passive pool dynamically adjusts in size to accommodate nodes joining or leaving the network. This setup allows for a permissionless way to join the network while preserving a degree of decentralisation.",
        ],
      },
      {
        valueName:
          "Decentralized community ownership and governance of the Tagion network",
        paragraphList: [
          "Tagion will become a truely decentralised network, in which no entity can dominate the others for their own benefit. To achieve this we strive for the highest level of inclusivity and openenss for new node-operators to join  the network and contribute to its resilience. Balancing this openess with the need for protection from network attacks and malicious takeovers is the delicate task of our governance system and the staged process of releasing the Tagion mainnet from the stewardship of the founders.",
        ],
      },
    ],
  },
  {
    title: "DART Distributed Database",
    questions: [
      {
        valueName:
          "DART - A powerful Distributed Database built into the network",
        paragraphList: [
          "The DART generates a unique and secure identifier, called a bullseye, for its hash tree. It can quickly and inexpensively calculate the bullseye, even for large databases. By using a consensus mechanism, the nodes in the network agree on the bullseye of their respective databases, creating a robust distributed storage system with network integrity. The DART seamlessly integrates with the consensus process because it facilitates easy comparison of database states.",
        ],
      },
      {
        valueName: "It`s Distributed",
        paragraphList: [
          "DART is designed for complete data integrity, with the ability to distribute the full database across nodes or shard it within sectors. This optimises network storage capacity utilisation for high data-intensive systems like CDN. With multiple nodes holding copies of the data, the database is highly resilient in any configuration.",
        ],
      },
      {
        valueName: "It`s Scalable",
        paragraphList: [
          <>
            Synchronisation is optimised for performance with in-memory record.
            One method involves Node A comparing its database with Node B's
            database. By searching the tree structure, it identifies the
            differences and synchronises only the distinct branches and leaves,
            known as a DART RIM. Node B sends a HiBON message containing the RIM
            data, which Node A uses to create a recorder and execute changes
            against its database. This approach is highly efficient as it
            operates at the binary data level, resulting in fast
            synchronisation.
            <div className="text-separator" />
            Another approach is to listen or ask for the consensus recorders,
            that is a recorder chain. Each epoch generates a new recorder that
            allows sequential updates to the database.
          </>,
        ],
      },
      {
        valueName: "It`s Resilient",
        paragraphList: [
          "DART includes a recorder chain system that captures all performed changes, ensuring backup, integrity, and documentation. The recorded journals enable replay and undo functions, and they can also aid in synchronising databases. Each node is responsible for maintaining these backups. The distributed nature of the database enhances its resilience by having multiple copies of the data.",
        ],
      },
    ],
  },
  {
    title: "Ecosystem of applications",
    questions: [
      {
        valueName:
          "Sub-systems with independent governance and bespoke rules",
        paragraphList: [
          "Our database system and network is organised in a federated architecture, with a Tagion mainnet and associated sub-systems. These sub-systems are fully customisable for the specific needs of projects, products or communities. Each sub-system has its own governance rules written in its database, and the users configure and decide on these rules independent from the mainnet rules.",
        ],
      },
      {
        valueName: "Development suite for complementary currencies",
        paragraphList: [
          "Tagion offers fast, efficient transactions without compromising decentralisation or security. This infrastrucutre cannot only transact with Tagions - our native utility tokens - but allows for the creation of bespoke currencies of all kinds. Read our blog series 'On the Money' to learn more about how and why.",
        ],
      },
      {
        valueName: "Decentralized exchange platform (DEX)",
        paragraphList: [
          "A native DEX application will ensure seamless trading with various currencies, both crypto and fiat. Exchange digital assets seamlessly. The Tagion Decentralised Exchange Protocol will enable real price discovery and transparency to create the best use of liquidity and pricing.",
        ],
      },
      {
        valueName: "Built equally for niche economies and mainstream projects",
        paragraphList: [
          "The Tagion network is the only distributed database that  is also decentralised while providing the speed, scale and efficiency needed for mainstream financial applications. The federated architecture with independent sub-systems allows for bespoke product suites and applications for many industries and stakeholder-constellations. The low energy consumption, lean data-architecure and inclusive licensing model and transparent governance provides means the above benefits do not only extend to corporate or governmental implementations but also invite shyper-local, non-profit and experimental communities to build on this infrastructure on equal terms. We’re creating a network where everyone has a stake, fostering an ecosystem that values contribution, collaboration, and mutual growth.",
        ],
      },
    ],
  },
];
