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
          "Tagion introduces a unique concept to make the Hashgraph-based system permissionless, where nodes can be randomly swapped in and out. Nodes are swapped in with weights based on their reputational score (see Proof of Community) and their score as node operators, reducing the risk of Sybil attacks. A protocol exists for becoming a node, and new node operators must earn sufficient scores to be swapped in.",
        ],
      },
    ],
  },
  {
    title: "Building towards a Common Good governed by the Community",
    questions: [
      {
        valueName:
          "Empowering community ownership and governance of Tagion network ",
        paragraphList: [
          "Community members drive and shape the development, operation, maintenance, decision-making, and governance of usable resources. Source code and binaries, including IP licenses, concepts and governance rules, and the actual running of the network are resources created, owned and governed by the community.",
        ],
      },
      {
        valueName:
          "Proof of Community - Reputation-weighted voting and rewards",
        paragraphList: [
          "Incentives, governance models and rules are essential for Tagion to be democratic and fair, where everyone has an equal right to join the community. A member`s voting power and rewards are not given, they are earned over time through action, reciprocity and respect.",
        ],
      },
      {
        valueName: "Proof of Community - How does it work?",
        paragraphList: [
          "Each community member has 150 atomic reputational claims that can be given to others in various categories. Each claim has a timestamp and a gene diversification score, preventing in-breeding among newly created member records. These claims determine a member's score in each category, which, in turn, determines their rewards and voting power in the community. The community decides on all governance rules and makes decisions based on these scores.",
        ],
      },
      {
        valueName: "A Self-Sustainable Common Good Revenue Model",
        paragraphList: [
          <>
            The users (the community) pay for utilising the system, and the
            users (the contributors) are paid for their work. Contributors are:
            <ul>
              <li>
                Node operators who provide the infrastructure with a live
                network.
              </li>
              <li>
                Core members who develop concepts, code, tools and maintain the
                system.
              </li>
              <li>Developers who build applications on top.</li>
              <li>Ambassadors who create engagement and educate.</li>
            </ul>
          </>,
        ],
      },
    ],
    style: {
      title: { tablet: { width: "470px" }, desktop_max: { width: "460px" } },
    },
  },
  {
    title: "DART Distributed Database",
    questions: [
      {
        valueName:
          "DART - A powerful Distributed Database built into the network",
        paragraphList: [
          "The DART generates a unique and secure identifier, called a bullseye, for its hash tree. It can quickly and inexpensively calculate the bullseye, even for large databases. By using a consensus mechanism, the nodes in the network agree on the bullseye of their respective databases, creating a robust distributed storage system with network integrity. The DART seamlessly integrates with the consensus process because it facilitates easy comparison of database states",
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
      {
        valueName:
          "Sub-DARTs host sub-ecosystems with own governance rules and applications",
        paragraphList: [
          "Sub-DARTs are customisable ecosystems with dedicated databases and optional specialised infrastructure. Each Sub-DART has its own governance rules written in its database, and the user configures and decides on these rules. Infrastructure capabilities are paid for in Tagions. Sub-DARTs can also be integrated into Tagion DEX functionality, making them tradeable with Tagions and all assets on the platform.",
        ],
      },
    ],
  },
];
