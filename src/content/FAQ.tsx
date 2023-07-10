import React from "react";
import { sendEmail } from "../helpers";

export const FAQBlockData = [
  {
    title: "General Tagion",
    questions: [
      {
        valueName: "What is Tagion Program?",
        bulletedList: [
          <>
            The group of projects aims to launch the Tagion Protocols Network
            (TPN) and achieve its true decentralization. The program is managed
            under the Tagion Program GitHub organization. The scope of the
            program includes:
            <ul>
              <li>Development and standardization of Tagion Protocols;</li>
              <li>Development of the Tagion Origin client; </li>
              <li>Development of tools for ecosystem developers;</li>
              <li>Development of community;</li>
              <li>Development of knowledge base.</li>
            </ul>
          </>,
        ],
      },
      {
        valueName: "What is Tagion?",
        bulletedList: [
          "The decentralized non-political monetary system that used and governed openly as a common good.",
        ],
      },
      {
        valueName: "Who governs Tagion?",
        bulletedList: [
          <>
            The system's users govern Tagion by a reputational trust score model
            and Proof of Community model. More, we are trying to extend the
            governance model to reward all actors in the model, divided into the
            following main categories:
            <ul>
              <li>Sense-makers: core concept developers;</li>
              <li>Value-makers: programmers and nodes;</li>
              <li>Relation makers: evangelists and services on top;</li>
              <li>Decision-makers: core developers and node operators.</li>
            </ul>
          </>,
        ],
      },
      {
        valueName: "What is the business model behind Tagion?",
        bulletedList: [
          "The business model behind Tagion is to allow network participants, such as nodes and service providers, to make money either by being rewarded for helping with operating the network (nodes) or from earning money from services being provided on top of the network, e.g., fees and interests (service providers).",
        ],
      },
      {
        valueName: "Is Tagion compliant (Financial regulation)?",
        bulletedList: [
          "Tagion follows a dualistic approach to regulation giving privacy in the network for its users and making it possible for the users and service providers to exchange compliance records seamlessly and efficiently, where the users control the data. By this, the service providers can cater to local regulations. Tagion does not have embedded compliance to any jurisdiction. In that aspect, the network is totally neutral. So, every legal entity must be compliant with its local jurisdiction.",
        ],
      },
      {
        valueName: "What is Adaptive money supply, and how does it work?",
        bulletedList: [
          "Adaptive currency automatically increases and decreases in volume with the demands of the money. Tagion is inspired by the equation of exchange trying to maintain a stable internal price level by regulating the money supply based on the speed of money and the system's adoption. The adoption is an arbitrary measure of the underlying commodities Tagions are used to Trade. A sophisticated algorithm burns and spins money to secure a stable value of Tagions.",
        ],
      },
      {
        valueName: "How do the consensus mechanisms work? ",
        bulletedList: [
          "Every cryptocurrency blockchain operates using a consensus mechanism. It is a system that users of a blockchain network follow to agree on the legitimacy of transactions. This system ensures that all legitimate transactions are recorded on the blockchain and that each copy contains all valid transactions. ",
        ],
      },
    ],
  },
  {
    title: "Tagion for users",
    questions: [
      {
        valueName: "Where can I get tagions?",
        bulletedList: [
          <>
            Tagion's private pre-sales are currently in progress. Our investor
            relations team will happily answer any questions about investing in
            Tagion at{" "}
            <span className={"email-interaction"} onClick={() => sendEmail()}>
              ir@tagion.com
            </span>
            .
          </>,
        ],
      },
      {
        valueName: "When can I use tagions?",
        bulletedList: [
          "We are working collaboratively to make the switch to a better money system. In the meantime, it's unlikely you'll be able to spend tagions at your local grocery store. However, as we grow, we're developing new commercial banking solutions alongside Tagion. We expect businesses to shift to alternative payment solutions because of their higher efficiency and lower cost.",
        ],
      },
      {
        valueName: "How can I become a part of Tagion?",
        bulletedList: [
          "Tagion is still in its early days, so you have a chance to help us build and become a valuable member of our growing community with a say in the future development of Tagion. Remember - it's yours as much as it's ours.",
        ],
      },
      {
        valueName: "Where can I learn more about the technology behind it? ",
        bulletedList: [
          <>
            You can find all the technical information in the{" "}
            <a
              className="underlined-link"
              href="/resources/tech-paper.pdf"
              target="_blank"
            >
              Tagion Technical Paper
            </a>
            . Join our friendly community on various social media platforms to
            learn about Tagion firsthand!
          </>,
        ],
      },
    ],
  },
];
