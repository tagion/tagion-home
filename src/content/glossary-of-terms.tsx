export const glossaryOfTermsData: {
  [key: string]: Array<{ term: string; meaning: string }>;
} = {
  A: [
    {
      term: "Atomic Swaps",
      meaning:
        "Are a trustless mechanism that enables the direct exchange of different cryptocurrencies between two parties without the need for intermediaries. It ensures simultaneous and irreversible transactions, allowing for secure peer-to-peer cryptocurrency trading across different blockchain networks.",
    },
  ],
  B: [
    {
      term: "Burned",
      meaning:
        "When tokens are destroyed permanently, typically to reduce the total supply.",
    },
  ],
  C: [
    {
      term: "Centralised Exchange (CEX)",
      meaning:
        "Refers to a digital platform that facilitates the buying, selling, and trading of cryptocurrencies through a centralised authority. It provides a user-friendly interface and often offers additional features such as advanced trading tools and liquidity, making it a popular choice for both novice and experienced cryptocurrency traders.",
    },
    {
      term: "Consensus Layer",
      meaning:
        "Refers to the component in a network that ensures agreement and synchronisation among participants on the validity of transactions and the state of the distributed ledger. It utilises consensus algorithms to achieve trust and consistency, enabling decentralised decision-making and maintaining the integrity of the blockchain network.",
    },
    {
      term: "Cryptocurrency",
      meaning: "Digital or virtual currency using cryptography for security.",
    },
    {
      term: "Consensus mechanism",
      meaning:
        "The protocols, algorithms, or other computer systems enabling trust and security in a blockchain network and allowing cryptocurrencies to work. These agreement systems determine the validity of transactions and governance of the blockchain. There are different types of consensus mechanisms with various benefits and drawbacks.",
    },
    {
      term: "Custodial",
      meaning:
        "Refers to services where the private keys of a cryptocurrency wallet are kept by a third-party.",
    },
  ],
  D: [
    {
      term: "DAO (Decentralised Autonomous Organization)",
      meaning:
        "An organisation represented by rules encoded as a computer program, transparent and controlled by shareholders and not influenced by a central government.",
    },
    {
      term: "dApp (Decentralised Application)",
      meaning: "An application that runs on a decentralised network.",
    },
    {
      term: "DeFi",
      meaning:
        "Decentralised Finance, refers to a financial system that enables individuals to access traditional financial services in a decentralised and permissionless manner. It eliminates the need for intermediaries such as banks and allows for greater transparency, efficiency, and financial inclusion.",
    },
    {
      term: "Distributed Archive of Random Transactions (DART)",
      meaning:
        "Distributed database is a system that stores data across multiple nodes or servers, providing high availability, scalability, and byzantine fault tolerance for managing large datasets in distributed environments.",
    },
    {
      term: "Distributed Hash Table (DHT)",
      meaning:
        "A decentralised data store that looks up data based on key-value pairs. Distributed hash tables are decentralised, so all nodes form the collective system without centralised coordination. They are generally fault-tolerant because data is replicated across multiple nodes.",
    },
    {
      term: "Distributed Ledger Technology (DLT)",
      meaning:
        "Refers to the technological infrastructure and protocols that allow simultaneous access, validation, and record updating in an immutable manner across a network spread across multiple entities or locations.",
    },
    {
      term: "DLT trilemma",
      meaning:
        "The trilemma is the challenge of achieving scalability, security and decentralisation —all three critical components of a great DLT system.",
    },
    {
      term: "Decentralised Exchange (DEX)",
      meaning:
        "A decentralised cryptocurrency exchange without a central authority.",
    },
  ],
  F: [
    {
      term: "Fiat",
      meaning: "Government-issued currency, such as USD, EUR or GBP. ",
    },
    {
      term: "Front running",
      meaning:
        "Refers to the unethical practice of a trader exploiting advance knowledge of pending orders to execute their own transactions before the original orders, potentially profiting from the subsequent price movement to the detriment of other market participants. It involves taking advantage of privileged information to gain an unfair advantage in the financial markets.",
    },
  ],
  G: [
    {
      term: "Gossip Protocol (or epidemic protocol)",
      meaning:
        "A procedure or process of peer-to-peer computer communication based on how epidemics spread.",
    },
    {
      term: "Governance Layer",
      meaning:
        "In a decentralised system refers to the framework and processes that enable participants to collectively make decisions and govern the protocol or network. It provides mechanisms for proposing, discussing, and implementing changes, ensuring transparency, inclusivity, and alignment of interests within the decentralised ecosystem.",
    },
  ],

  H: [
    {
      term: "Hashgraph",
      meaning:
        "A new consensus alternative to the blockchain. It uses a gossip protocol that works in the following manner: Every node in Hashgraph can spread signed information (called events) on newly-created transactions and transactions received from others to its randomly chosen neighbors.",
    },
    {
      term: "Hashed Timelock Contract (HTLC)",
      meaning:
        "A smart contract used to eliminate counterparty risk in cryptocurrency channels. It enables the implementation of time-bound transactions. In practical terms, a transaction's recipients must acknowledge payment by generating cryptographic proof within a specific timeframe. Otherwise, the transaction will not be executed.",
    },
    {
      term: "Hashinvariant Binary Object Notation (HiBON)",
      meaning:
        "The format for structuring all the exchanged and stored data. This format is inspired by Binary JSON (BSON), but the two formats are incompatible. In HiBON, the keys are sorted according to the ordering rules described below (in D-lang). The data is hash invariant for the same collection by ordering the keys.",
    },
    {
      term: "HiBON object",
      meaning:
        "Contains input bill numbers and the transaction script, including a list of digital signatures which sign the transaction script object. The signatures can be verified via the public keys represented in the input bills.",
    },
  ],

  I: [
    {
      term: "Interoperability",
      meaning:
        "The capability of different DLT networks to communicate and collaborate.",
    },
  ],
  L: [
    {
      term: "Liquidity",
      meaning:
        "The ease at which an asset can be converted into cash without affecting its market price.",
    },
  ],
  M: [
    {
      term: "Market Makers",
      meaning:
        "Are participants in financial markets who provide liquidity by constantly quoting bid and ask prices for assets, ensuring there is a continuous supply and demand. They facilitate efficient trading and reduce price volatility, often profiting from the spread between the bid and ask prices.",
    },
    {
      term: "Merkle tree",
      meaning:
        "A 'tree' where every node is labeled with the cryptographic hash of a data block, and every node that is not a leaf (called a branch, inner node, or inode) is labeled with the cryptographic hash of the labels of its child nodes.",
    },
  ],
  N: [
    {
      term: "Node",
      meaning:
        "Is defined from democratic principles, where all can participate and have one vote. These principles are translated into a permissionless system where one node has one vote and only controls one node. It would ensure the entire distribution of nodes because centralization is not possible.",
    },
    {
      term: "Non-Custodial",
      meaning:
        "Refers to a system or service that allows individuals to have full control and ownership of their assets without relying on a third-party custodian. It enables users to manage and transact with their digital assets directly, enhancing privacy, security, and self-sovereignty in the decentralised ecosystem.",
    },
  ],
  O: [
    {
      term: "Onchain",
      meaning:
        "Refers to activities or transactions that occur directly on a distributed network, utilising its native protocol and infrastructure. It ensures transparency, immutability, and decentralised execution, enabling secure and verifiable operations within the blockchain ecosystem.",
    },
    {
      term: "Oracles",
      meaning:
        "A bridge between the real world and DLT networks by providing data to smart contracts.",
    },
    {
      term: "Order book",
      meaning:
        "An order book is a dynamic record of buy and sell orders for a particular financial asset or cryptocurrency, displaying the quantity and price at which market participants are willing to transact. It provides real-time market depth and liquidity information, assisting traders in making informed decisions based on supply and demand dynamics.",
    },
  ],
  P: [
    {
      term: "Peer-to-Peer (P2P)",
      meaning:
        "Refers to the decentralised interactions that happen between two or more parties in a highly interconnected network.",
    },
    {
      term: "Platform as a Service",
      meaning:
        "A cloud computing model that provides developers with a platform to build, deploy, and manage applications without the need to worry about infrastructure management. It offers a streamlined development environment, scalability, and various tools and services to accelerate application development and deployment processes.",
    },
    {
      term: "Private Key",
      meaning:
        "A cryptographic key that allows users to access and control their funds in their digital wallet.",
    },
    {
      term: "Public Key",
      meaning:
        "A cryptographic key that others can see and use to send cryptocurrency to a particular address.",
    },
    {
      term: "Proof of work (PoW)",
      meaning:
        "A blockchain consensus mechanism where computing power is used to verify cryptocurrency transactions and add them to the blockchain.",
    },
    {
      term: "Proof of stake (PoS)",
      meaning:
        "A cryptocurrency consensus mechanism for processing transactions and creating new blocks in a blockchain. It works by selecting validators in proportion to their quantity of holdings in the associated cryptocurrency to avoid the computational cost of proof-of-work schemes.",
    },
  ],
  S: [
    {
      term: "Smart Contract",
      meaning:
        "Self-executing contracts where the terms of agreement or conditions are written into lines of code.",
    },
    {
      term: "Staking",
      meaning:
        "Holding a cryptocurrency in a wallet to support the operations of a blockchain network.",
    },
  ],
  T: [
    {
      term: "Token",
      meaning:
        "A representation of assets or utility on top of an existing DLT network.",
    },
    {
      term: "Tokenisation ",
      meaning:
        "Is the process of converting real-world assets into digital tokens on a decentralised network, enabling fractional ownership, increased liquidity, and the potential for new forms of value creation and transfer within decentralised ecosystems. It allows for the representation and exchange of assets in a more efficient, secure, and accessible manner.",
    },
    {
      term: "TradFi",
      meaning:
        "Short for Traditional Finance, represents the conventional financial system that operates through centralised institutions like banks and regulated intermediaries. It typically involves traditional banking services, investments, and regulatory frameworks aimed at maintaining stability and compliance within the financial industry.",
    },
    {
      term: "Transactions per second (TPS)",
      meaning:
        "The number of transactions a blockchain network can carry out in one second.",
    },
  ],
  V: [
    {
      term: "Validator",
      meaning:
        "A participant of a Proof-of-Stake (PoS) network. responsible for verifying new blocks and adding them to the chain to earn rewards.",
    },
  ],
  W: [
    {
      term: "Wallet",
      meaning:
        "A wallet is a digital application or device that securely stores cryptographic keys used to access and manage cryptocurrencies. It enables users to send, receive, and store their digital assets, providing a convenient and secure way to interact with networks.",
    },
    {
      term: "Wavefront",
      meaning:
        "Communication protocol where nodes randomly share information with neighbours, facilitating decentralised information spreading and consensus building in distributed systems.",
    },
  ],
  Z: [
    {
      term: "Zero-Knowledge Proofs",
      meaning:
        "A cryptographic method which allows one party (the prover) to prove to another party (the verifier) that a statement is true, without revealing any information apart from the fact that the statement is indeed true.",
    },
  ],
};
