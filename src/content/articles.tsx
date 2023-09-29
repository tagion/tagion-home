import React, { CSSProperties } from "react";

import { Colors, ExternalLinks } from "../common/enums";
import { CustomLink } from "../components";

import moneyAsAcommonsImg from "../assets/images/blog/money_as_a_commons.png";
import reliableConsensusImg from "../assets/images/blog/reliable_consensus.png";
import hashgraphSchemeImg from "../assets/images/blog/hashgraph_scheme.png";
import discordMeetingImg from "../assets/images/blog/discord_meeting.png";
import exampleOfTheHashgraphSchemeImg from "../assets/images/blog/example_of_the_hashgraph_scheme.png";
import structureOfDARTDatabaseSchemeImg from "../assets/images/blog/structure_of_DART_database_scheme.png";
import poolsSchemeImg from "../assets/images/blog/pools_scheme.png";
import seniorityProbabilityMultiplierSchemeImg from "../assets/images/blog/seniority_probability_multiplier_scheme.png";
import incentivesBenefitingEcosystemImg from "../assets/images/blog/incentives_benefiting_ecosystem.png";
import supplyAndDemandSidesImg from "../assets/images/blog/supply_and_demand_sides.png";

type ArticleDataType = {
  name: string;
  timeToRead: string;
  dateOfCreation: string;
  mainImgData?: {
    path: string;
    alt: string;
    style?: CSSProperties;
  };
  descriptiveImgData?: {
    path: string;
    alt: string;
    style?: CSSProperties;
  };
  description: string;
  author: string;
  labels: Array<number>;
  linkTo: string;
  textContent: Array<{
    subTitle?: string | React.ReactElement;
    body?: React.ReactElement;
  }>;
};

export const redefiningMoneyArticleData: ArticleDataType = {
  name: "Redefining Money",
  timeToRead: "5 min",
  dateOfCreation: "26 May 2023",
  mainImgData: {
    path: moneyAsAcommonsImg,
    alt: "Money as a common article image",
  },
  description:
    "Money plays a leading role in our lives. It shapes our actions, ambitions and aspirations. We work hard to earn it and eagerly seek opportunities to make it grow.",
  author: "Irina Panovich",
  labels: [0, 2],
  linkTo: "redefining-money",
  textContent: [
    {
      body: (
        <>
          Money plays a leading role in our lives. It shapes our actions,
          ambitions and aspirations. We work hard to earn it and eagerly seek
          opportunities to make it grow. But have you wondered about the bigger
          picture of money?
          <div className="text-separator" />
          Money extends beyond personal wealth. It's a resource that profoundly
          affects the global community. And understanding its value and impact
          can help us make better choices about how we use it.
          <div className="text-separator" />
          Today, money is not limited to physical currencies. With the emergence
          of distributed ledger technology (DLT) giving rise to
          cryptocurrencies, money has become more complex and versatile than
          ever before.
          <div className="text-separator" />
          This blog post will explore the concept of money based on Nobel Price
          Winner Elinor Ostrom's principles of governing resources and introduce
          how Tagion applies these in practice.
        </>
      ),
    },
    {
      subTitle: "Effective resource management",
      body: (
        <>
          Inclusive and participatory processes with clear and practical rules
          are vital to managing common good resources effectively. Elinor
          Ostrom's principles for common good resource management highlight the
          importance of collective action, local autonomy and diversity (Ostrom,
          1990).
          <div className="text-separator" />
          Money systems should enable decision-making power and self-governance
          locally because local communities operating on the “front line” have
          context-specific knowledge, allowing for more accurate decisions and
          predictions. Adapting to changing circumstances and supporting
          sustainable use of resources requires diverse and flexible
          institutions.
          <div className="text-separator" />
          These three key principles of effective resource management offer
          valuable insights into managing money as a shared resource.
          <div className="text-separator" />
          Let's consider each principle in the context of effective money
          resource management and how today's financial system mismanages these
          resources.
        </>
      ),
    },
    {
      subTitle: "Collective action",
      body: (
        <>
          Collaboration requires mutual understanding to establish regulations,
          monetary policies, and economic frameworks that promote stability,
          fairness, and transparency. Considering the perspectives of
          individuals, communities, financial institutions, and governments is
          essential for collaboration to be effective.
          <div className="text-separator" />
          Today, money and resource management frameworks need more inclusive
          and participatory processes proposed by Ostrom. Decision-making is
          concentrated in the hands of a few players. Central banks, regulatory
          bodies and large financial institutions set monetary policies that
          affect everyone.
          <div className="text-separator" />
          This centralisation limits the representation of diverse perspectives
          and diminishes the potential for collective action. The needs of
          individuals and communities, who interact with money daily, are often
          overlooked. For example, policies that benefit large corporations or
          wealthy individuals while neglecting the needs of low-income
          communities can increase inequalities.
        </>
      ),
    },
    {
      subTitle: "Local autonomy",
      body: (
        <>
          Empowering local communities and individuals to control financial
          transactions promotes local decision-making power and self-governance.
          Money systems can foster economic empowerment and reduce inequalities
          by promoting financial literacy, access to banking services, and
          versatile financial tools.
          <div className="text-separator" />
          Today, centralised authorities impose control over monetary policies
          and apply a “one-size-fits-all” approach to economic decision-making.
          The financial system may not fully reflect the diverse needs,
          aspirations and challenges of different regions and populations.
          <div className="text-separator" />
          For example, rural communities may have limited access to banking
          services as a result of particular environmental factors. Cooperative
          models, community-driven initiatives and context specific policies
          require specific dynamics for effective resource management.
        </>
      ),
    },
    {
      subTitle: "Institutional diversity",
      body: (
        <>
          A resilient and inclusive monetary system can adapt to continuous
          change and cater to different needs and contexts. Institutions should
          encourage innovation, competition and the development of alternative
          financial models, not inhibit them.
          <div className="text-separator" />
          Today, there is a limited number of financial frameworks. Over time,
          certain institutions have gained prominence. Established power
          dynamics, a self-reinforcing cycle of network effects and a high
          regulatory barrier to entry have solidified current institutions in
          their dominant position.
        </>
      ),
    },
    {
      subTitle: "The rise of Distributed Ledger Tech (DLTs)",
      body: (
        <>
          The rise of DLTs challenges the traditional financial landscape and
          introduces new possibilities for effective resource management. DLTs
          are decentralised systems that enable secure and transparent recording
          of transactions across multiple participants or nodes. In the context
          of building a fair and equitable monetary system, DLTs play a pivotal
          role.
          <div className="text-separator" />
          Unlike centralised monetary systems, which rely on a central authority
          to validate transactions, DLTs allow for peer-to-peer interactions and
          decision-making based on consensus. This ensures no single entity has
          complete control. In line with Ostrom's principles, this
          decentralisation promotes fairness, transparency and inclusivity.
        </>
      ),
    },
    {
      subTitle: "Understanding Tagion's approach",
      body: (
        <>
          Elinor Ostrom emphasises the importance of shared resources and
          equitable decision-making to benefit the many rather than the few.
          Tagion's design puts these principles into action.
          <div className="text-separator" />
          Its community governance structure, Proof-of-Community, prioritises
          transparency and active participation. Its unique technology stack
          includes a distributed database, DART, built into the network and hash
          graph consensus, enabling an environment for a scalable, secure and
          decentralised network to flourish.
        </>
      ),
    },
    {
      subTitle: "Empowering community ownership and governance",
      body: (
        <>
          Community members drive and shape usable resources' development,
          operation, maintenance, decision-making, and governance. These
          resources include source code and binaries, concepts, governance rules
          and the actual running of the network.
          <div className="text-separator" />
          The Proof-of-Community governance model allows Tagion users to create,
          maintain and develop incentives and rules relevant to their local
          environment or use case. Everyone has an equal right to join the
          community.
          <div className="text-separator" />
          Once someone becomes part of the community, reputation and voting
          power have to be earned. They cannot be bought or mined. Through
          action, reciprocity and respect, each community member builds their
          reputation score to shape the network continuously.
          <div className="text-separator" />
          With time and active participation, Tagion evolves into a Commons with
          a self-sustainable revenue model where all community benefits.
          Ownership and governance become shared resources as users pay for
          utilising the system and are paid for their work.
          <div className="text-separator" />
          Those with deep knowledge of the environment are rewarded for their
          action and granted a more weighted reputation to act on. Local
          autonomy is enhanced — a core principle for fair common good resource
          management.
        </>
      ),
    },
    {
      subTitle: "Hashgraph consensus — a blockchain alternative",
      body: (
        <>
          Hashgraph-based consensus is the underlying technology that enables
          decentralised decision-making in the Tagion network. Hashgraph ensures
          consensus among nodes by providing a mathematically proven, finite
          solution to the Byzantine generals' problem.
          <div className="text-separator" />
          Unlike classical blockchain-based systems, Hashgraph guarantees a
          secure and reliable network with no uncertain order or probabilistic
          solutions. Guaranteed tamper-proof ordering with full security is an
          essential building block enabling collaborative action. No one can
          undercut or front-run anyone else when carrying out transactions.
          <div className="text-separator" />
          To ensure a permissionless system with a reduced risk of Sybil
          attacks, Tagion introduces a unique Node Swapping mechanism where
          nodes will be randomly swapped in and out. With weights based on their
          reputational score and their score as a node operator, nodes will be
          swapped in. New nodes must earn sufficient scores to qualify for
          swapping.
        </>
      ),
    },
    {
      subTitle: "A customisable distributed database",
      body: (
        <>
          The DART enables local autonomy at scale thanks to sub-DARTS. These
          sub-ecosystems enable individuals and communities to host environments
          with their own governance rules and applications. Each sub-DART has
          its own rules written in its database, and the user configures and
          decides these rules.
          <div className="text-separator" />
          Referring back to Elinor Ostrom's principles of effective common good
          resource management, the DART is a crucial component enabling
          collective action, local autonomy and diversity directly on the
          network.
          <div className="text-separator" />
          DART reduces the risk of a single point of failure and data
          manipulation by distributing data across multiple nodes and sharding
          it within sectors.
        </>
      ),
    },
    {
      subTitle:
        "Tagion is pioneering money as a Commons as a future-proof DLT-based monetary system.",
      body: (
        <>
          Tagion, with unique DLT features and community governance, promotes
          fairness, transparency and inclusivity. Money as a Commons requires
          collective action, local autonomy and diversity.
          <div className="text-separator" />
          Building this is no small task.{" "}
          <b className="dark-text-color">
            Jump on{" "}
            <a
              className="underlined-link"
              href={ExternalLinks.DISCORD}
              target="_blank"
            >
              Discord
            </a>{" "}
            and say hi. Let's build the future.
          </b>
          <div className="text-separator" />
          References: Ostrom, E. (1990).{" "}
          <i>
            Governing the Commons: The Evolution of Institutions for collective
            action.
          </i>{" "}
          Cambridge university press. Chicago
        </>
      ),
    },
  ],
};

export const whyTagionusesHashgraphArticleData: ArticleDataType = {
  name: "Why Tagion uses Hashgraph",
  timeToRead: "3 min",
  dateOfCreation: "18 Aug 2023",
  mainImgData: {
    path: reliableConsensusImg,
    alt: "reliable consensus image",
    style: { border: `1px solid ${Colors.MAIN_DARK}` },
  },
  description:
    "We recently had the privilege of sitting down with Theis Simonsen, co-founder of Tagion, to delve into the narrative behind Tagion's evolution. In this article, we invite you to explore the intriguing origins of Tagion and gain insights into the rationale behind adopting Hashgraph technology — a choice that sets Tagion apart in the world of blockchain and distributed systems.",
  author: "Steffen Nyholt Petersen",
  labels: [0, 2],
  linkTo: "why-tagion-uses-hashgraph",
  textContent: [
    {
      body: (
        <>
          We recently had the privilege of sitting down with Theis Simonsen,
          co-founder of Tagion, to delve into the narrative behind Tagion's
          evolution. In this article, we invite you to explore the intriguing
          origins of Tagion and gain insights into the rationale behind adopting
          Hashgraph technology — a choice that sets Tagion apart in the world of
          blockchain and distributed systems.
        </>
      ),
    },
    {
      subTitle: "The Birth of a Vision",
      body: (
        <>
          Tagion's inception was sparked by an encounter between Carsten B.
          Rasmussen, a pioneer in payment systems, and Theis Simonsen, an
          academic exploring innovation and economic governance. Both found
          themselves navigating the aftermath of the financial crisis, and a
          casual conversation at a summer gathering laid the foundation for a
          revolutionary idea.
          <div className="text-separator" />
          Inspired by the possibilities presented by cryptocurrencies like
          Bitcoin and intrigued by the limitations of traditional financial
          systems, Tagion's founders set out on a shared mission. With the
          addition of Kristian B. Vestergaard, a digital product innovator from
          GN Audio A/S, the trio embarked on a journey to forge an independent
          and equitable network infrastructure, with inclusivity at its core.
        </>
      ),
    },
    {
      subTitle: "Navigating Challenges",
      body: (
        <>
          Yet, every trailblazing journey is marked by challenges, and Tagion's
          path was no exception. Initial concepts leaned toward a conventional
          blockchain system. However, concerns regarding scalability,
          governance, and community integration soon emerged. The turning point
          came when Carsten introduced an innovative application of Hashgraph —
          Leemon Baird's solution to the Byzantine Generals' Problem with a
          unique Node Swapping mechanism — a mechanism no one else has.
        </>
      ),
    },
    {
      subTitle: "The Byzantine Generals' Problem",
      body: (
        <>
          Picture a group of military commanders orchestrating an attack on a
          fortress, communicating only through messengers. Amidst this, some
          commanders may betray the cause by issuing misleading orders. This
          scenario encapsulates the Byzantine Generals' Problem — a problem to
          solve in designing a communication strategy for consensus among loyal
          leaders despite the presence of deceptive counterparts. This concept
          has parallels in securing computer systems.
        </>
      ),
    },
    {
      subTitle: "Hashgraph's Take on Byzantine Generals' Problem",
      body: (
        <>
          At the time of Tagion' inception, both Bitcoin and Ethereum
          blockchains were using Proof of Work consensus mechanism. In PoW,
          miners solve intricate puzzles to validate transactions and add them
          to the blockchain. Yet, PoW has limitations, from energy inefficiency
          to scalability concerns. It also potentially paves the way for
          centralisation, a contradiction to the decentralised ethos that
          underpins blockchain technology.
        </>
      ),
    },
    {
      subTitle: "Enter Hashgraph: An Innovative Solution",
      body: (
        <>
          Hashgraph, as embraced by Tagion, addresses these drawbacks by
          introducing Virtual Voting — a form of asynchronous Byzantine Fault
          Tolerance (aBFT) algorithm. In this system:
          <div className="text-separator" />
          <ol>
            <li>
              <b className="dark-text-color">Gossip Protocol</b> connects nodes
              through information sharing.
            </li>
            <li>
              <b className="dark-text-color">Timestamps and Ordering</b>{" "}
              establish a chronological event sequence.
            </li>
            <li>
              <b className="dark-text-color">Finality</b> emerges as a
              supermajority consensus, confirming agreed-upon transactions.
            </li>
          </ol>
          <div className="text-separator" />
          Through Hashgraph, Tagion attains decentralised consensus, enabling
          honest nodes to synchronise even in the face of potentially malicious
          participants.
        </>
      ),
    },
    {
      subTitle: "Decentralisation Amplified",
      body: (
        <>
          Tagion implements a unique Node Swapping mechanism to enable
          decentralisation, as well as reliable consensus. This system randomly
          rotates nodes, determined by their reputational scores and operational
          efficacy. By reducing susceptibility to Sybil attacks, this approach
          preserves the system's integrity. Becoming a node involves a process
          wherein new operators must accumulate sufficient scores before
          joining.
        </>
      ),
    },
    {
      subTitle:
        "Leveraging the strengths of Hashgraph and Tagion's innovative concepts, a future characterised by inclusivity, heightened security, and operational efficiency emerges as a compelling prospect.",
      body: (
        <>
          Next time, we'll delve into Tagion's innovative DART Distributed
          Database. Stay tuned!
          <div className="text-separator" />
          <b className="dark-text-color">
            Jump on{" "}
            <a
              className="underlined-link"
              href={ExternalLinks.DISCORD}
              target="_blank"
            >
              Discord
            </a>{" "}
            and say hi. Let's build the future.
          </b>
        </>
      ),
    },
  ],
};

export const tagionStandsOutFromTheCrowdArticleData: ArticleDataType = {
  name: "Tagion Stands Out from the Crowd",
  timeToRead: "4 min",
  dateOfCreation: "23 Sep 2023",
  description:
    "We held the 3rd Tagion Community Townhall to discuss the technical infrastructure and economic principles — the backbones of Tagion network that make it unique. Thanks everyone for joining!",
  author: "Irina Panovich",
  descriptiveImgData: {
    path: hashgraphSchemeImg,
    alt: "hashgraph scheme",
    style: { border: `1px solid ${Colors.MAIN_DARK}` },
  },
  labels: [0, 2],
  linkTo: "tagion-stands-out-from-the-crowd",
  textContent: [
    {
      body: (
        <>
          We held the 3rd Tagion Community Townhall to discuss the technical
          infrastructure and economic principles — the backbones of Tagion
          network that make it unique. Thanks everyone for joining!
          <div className="text-separator" />
          In this article, we share the key takeaways from the session. You can
          read the papers here:{" "}
          <CustomLink
            linkTo={ExternalLinks.TAGION_WHITEPAPER}
            isExternalLink
            className="underlined-link"
          >
            Whitepaper
          </CustomLink>{" "}
          and{" "}
          <CustomLink
            linkTo={ExternalLinks.TAGION_TOKENOMICS}
            isExternalLink
            className="underlined-link"
          >
            Tokenomics
          </CustomLink>
          .
          <img src={discordMeetingImg} className="without_margin_bottom" />
        </>
      ),
    },
    {
      subTitle: "Tagion separates the consensus and the database layers",
      body: (
        <>
          We've engineered Tagion with two distinct layers — the consensus and
          the database layers. This is different to most blockchain systems,
          where these layers are combined. In Tagion, the consensus layer is the
          Hashgraph where nodes agree on the system's state.
          <img src={exampleOfTheHashgraphSchemeImg} className="with_border" />
          Then, we have the DART, the database part of the system. Here, we save
          the current state, and read what we have agreed upon and what is
          stored in the database.
          <img src={structureOfDARTDatabaseSchemeImg} className="with_border" />
          Distributed DART database retains byzantine proof from the consensus
          layer.
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            The benefit of having these two separate allows specialisation and
            scalability of the network.
          </div>
          <div className="text-separator" />
          Those involved in consensus to focus on that specific role and vice
          versa. You can opt to be part of both, but this is not a requirement.
        </>
      ),
    },
    {
      subTitle: "Tagion solves the blockchain trilemma",
      body: (
        <>
          The trilemma is the challenge of achieving scalability, security and
          decentralisation —all three critical components of a great DLT system.
          <div className="text-separator" />
          Most blockchains are secure and decentralised but struggle with
          scalability. In contrast, layer-two systems prioritise scalability but
          sacrifice security. Some systems opt for a leader-based approach to
          achieve security and scalability but lose on decentralisation.
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            Tagion distinguishes itself from other DLT systems and achieves
            scalability, security and decentralisation simultaneously thanks to
            its unique infrastructure:
          </div>
          <img
            src={hashgraphSchemeImg}
            className="with_border without_margin_bottom"
          />
        </>
      ),
    },
    {
      subTitle: "1. Scalability",
      body: (
        <>
          Scalability is important if you want to achieve a high volume of
          transactions with many people reading and writing to the database at
          the same time.
          <div className="text-separator" />
          In Tagion, we use the DART and Hashgraph to achieve scalability. To be
          scalable, we need to write, read and remove information to and from
          the database very quickly.
          <div className="text-separator" />
          The Hashgraph is fast in writing information. It's faster than
          blockchain systems because it only sends the minimum amount of
          messages you need to reach consensus.
          <div className="text-separator" />
          From a user point of view, being able to read data without having to
          keep the full state of the system throughout time is an advantage.
          Tagion is a stateless network, meaning that any nodes need only to
          remember the system's current state.
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            Deleting obsolete data is a unique advantage of Tagion's distributed
            database in the DLT space. It reduces barriers to participation in
            the system.
          </div>
        </>
      ),
    },
    {
      subTitle: (
        <span style={{ letterSpacing: "-0.28px" }}>2. Decentralisation</span>
      ),
      body: (
        <>
          Having a single point of failure can be risky in the long run, so it's
          important to decentralise.
          <div className="text-separator" />
          Our infrastructure doesn't just prioritise security and scalability;
          it also champions decentralisation through a unique node swapping
          mechanism. Tagion is the first DLT to run decentralised while
          employing Hashgraph for consensus.
          <img src={poolsSchemeImg} className="with_border" />
          Passive nodes waiting to be swapped into the active pool.
          <div className="text-separator" />
          In the active pool, a fixed amount of nodes participate in the
          Hashgraph consensus. To join the passive pool, nodes must stake a
          minimum fixed amount of TGN tokens, signalling their vested interest
          in the network. Passive nodes are also chosen based on their seniority
          — how long they have participated in the network. There is an
          unlimited amount of nodes that can be passive.
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            What makes the system fair and equitable is that no matter how much
            a node has staked or how old it is, it can be swapped out.
            Therefore, the consensus is not skewed by the amount of staked TGNs.
          </div>
        </>
      ),
    },
    {
      subTitle: "3. Security",
      body: (
        <>
          Security is a very important aspect of any network. Mechanisms need to
          be in place to reduce risk of malicious actors taking over the network
          or have disagreement of the state of the database.
          <div className="text-separator" />
          In tagion, we use time-based staking to ensure sybil resistance and
          achieve security.
          <img
            src={seniorityProbabilityMultiplierSchemeImg}
            className="with_border"
          />
          To read about the technical infrastructure and staking mechanism in
          more detail, please read the{" "}
          <CustomLink
            linkTo={ExternalLinks.TAGION_WHITEPAPER}
            isExternalLink
            className="underlined-link"
          >
            Whitepaper
          </CustomLink>{" "}
          and{" "}
          <CustomLink
            linkTo={ExternalLinks.TAGION_TOKENOMICS}
            isExternalLink
            className="underlined-link"
          >
            Tokenomics
          </CustomLink>
          .
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            Join us next time! To stay up to date follow us on Tagion
            (@TagionOfficial) / X (twitter.com).
          </div>
        </>
      ),
    },
  ],
};

export const engineeringTokenomicsForTheLongRunArticleData: ArticleDataType = {
  name: "Engineering Tokenomics for the Long Run",
  timeToRead: "1 min",
  dateOfCreation: "27 Sep 2023",
  description:
    "Tokenomics can be compared to a garden. Just as a well-tended garden requires the right balance of plants, nutrients, and care to flourish, a successful tokenomics system relies on the careful cultivation of incentives both on supply and demand sides to create a thriving long-term ecosystem.",
  author: "Irina Panovich",
  mainImgData: {
    path: incentivesBenefitingEcosystemImg,
    alt: "incentives benefiting ecosystem image",
    style: { border: `1px solid ${Colors.MAIN_DARK}` },
  },
  labels: [0, 2],
  linkTo: "engineering-tokenomics-for-the-long-run",
  textContent: [
    {
      body: (
        <>
          Tokenomics can be compared to a garden. Just as a well-tended garden
          requires the right balance of plants, nutrients, and care to flourish,
          a successful tokenomics system relies on the careful cultivation of
          incentives both on supply and demand sides to create a thriving
          long-term ecosystem.
        </>
      ),
    },
    {
      subTitle:
        "How do we create incentive mechanisms to achieve an economic equilibrium in the long-run?",
      body: (
        <>
          <img
            src={supplyAndDemandSidesImg}
            alt="supply and demand sides description image"
            className="without_margin_top"
          />
          We approach tokenomics from both the supply and demand sides.
          <div className="text-separator" />
          On the supply side, we explore how the token is distributed and
          allocated, what are the vesting terms and token emissions.
          <div className="text-separator" />
          On the demand side the central question is what mechanisms drive the
          demand of the token.
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            Demand is essential for the token to function as a utility token.
          </div>
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            Let's dive deeper. Listen via this link:{" "}
            <CustomLink
              linkTo={ExternalLinks.TAGION_TOWNHALL_3}
              isExternalLink
              className="underlined-link"
            >
              {ExternalLinks.TAGION_TOWNHALL_3}
            </CustomLink>
          </div>
          <div className="text-separator" />
          <div className="inter_600 main_dark_text_color">
            Join us next time!
          </div>
          Stay up to date via{" "}
          <CustomLink
            linkTo={ExternalLinks.TWITTER}
            isExternalLink
            className="underlined-link"
          >
            Twitter
          </CustomLink>{" "}
          and join the chat via{" "}
          <CustomLink
            linkTo={ExternalLinks.DISCORD}
            isExternalLink
            className="underlined-link"
          >
            Discord
          </CustomLink>{" "}
          or{" "}
          <CustomLink
            linkTo={ExternalLinks.TELEGRAM}
            isExternalLink
            className="underlined-link"
          >
            Telegram
          </CustomLink>
          .
        </>
      ),
    },
  ],
};

export const articlesData = [
  redefiningMoneyArticleData,
  whyTagionusesHashgraphArticleData,
  tagionStandsOutFromTheCrowdArticleData,
  engineeringTokenomicsForTheLongRunArticleData,
];
