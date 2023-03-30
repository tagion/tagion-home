import React, { useState } from "react";
import classNames from "classnames/bind";

import { Button, Card, FAQ, Form, Label } from "../components";
import { Layout } from "../templates/layout";

import batmanIcon from "../assets/images/batman.svg";

import * as styles from "../styles/pages/index.module.scss";

const cx = classNames.bind(styles);

const IndexPage = () => {
  const [choosenLabel, setChoosenLabel] = useState("");

  return (
    <Layout>
      {/*the code below is for testing purposes only */}
      <>
        <FAQ />
        <div style={{ margin: "10px auto", width: "100%", maxWidth: "1170px" }}>
          <Label
            name="Testnet running"
            boxShadow={true}
            isTitleLabel={true}
            isDecreases={false}
            withBorder={true}
          />
          <br />
          <Button
            name="Learn more"
            onClick={() => {
              console.log("click");
            }}
          />
          <br />
          <br />
          <Button
            name="View more"
            isWhite={true}
            isNotWide={true}
            onClick={() => {
              console.log("click");
            }}
          />
        </div>

        <div className={cx("filter")}>
          {labelsContent &&
            labelsContent.map(({ name }) => (
              <Label
                key={name}
                name={name}
                isActive={choosenLabel === name}
                withBorder={true}
                onClick={setChoosenLabel}
              />
            ))}
        </div>

        <div className={cx("filter")}>
          {labelsContent &&
            labelsContent.map(({ name }) => (
              <Label
                key={name}
                name={name}
                isActive={choosenLabel === name}
                isGrayTextColor={true}
                onClick={setChoosenLabel}
              />
            ))}
        </div>

        <div className={cx("talk_with_us_form")}>
          <div className={cx("text")}>
            <span>Talk with us</span>
            <span>
              Need some extra help and guidance? <br />
              We`re here for it.
            </span>
          </div>
          <Form />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            maxWidth: "1170px",
            width: "100%",
            margin: "auto",
          }}
        >
          {temporaryCardsContentSource &&
            temporaryCardsContentSource.map((cardContent) => (
              <Card
                key={cardContent.title}
                title={cardContent.title}
                description={cardContent.description}
                widthInPx={cardContent.cardWidth}
                img={batmanIcon}
              />
            ))}
        </div>
        {/* ---------------------- */}
        <div>
          <h2>Tweets about Tagion</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              maxWidth: "1170px",
              width: "100%",
              margin: "auto",
            }}
          >
            {tweetCards &&
              tweetCards.map((tweetCard, index) => (
                <Card
                  key={index}
                  tweetInfo={{
                    nickname: tweetCard.nickname,
                    name: tweetCard.name,
                  }}
                  description={tweetCard.description}
                  img={batmanIcon}
                />
              ))}
          </div>
        </div>
        {/* ---------------------- */}
        <div>
          <h2>Upcoming events and community activities</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              maxWidth: "1170px",
              width: "100%",
              margin: "auto",
            }}
          >
            {upcomingEventsContent &&
              upcomingEventsContent.map((upcomingEvent, index) => (
                <Card
                  key={index}
                  isUpcomingEventCard={true}
                  linkWithArrowInfo={{
                    linkTo: "https://www.google.com.ua/",
                    name: "Learn more",
                  }}
                  img={batmanIcon}
                  title={upcomingEvent.title}
                  description={upcomingEvent.description}
                />
              ))}
          </div>
        </div>
        {/* ---------------------- */}
        <div>
          <h2>Value for contributors</h2>
          <div>
            {linksCardContent &&
              linksCardContent.map((linkCardContent, index) => (
                <Card
                  key={index}
                  title={linkCardContent.title}
                  description={linkCardContent.description}
                  linkWithArrowInfo={{ linkTo: linkCardContent.linkTo }}
                  isLinkCard={true}
                  img={batmanIcon}
                />
              ))}
          </div>
        </div>
        {/* ---------------------- */}
        <div>
          <h2>Start contributing and receive rewards (coming soon) </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              maxWidth: "1170px",
              margin: "auto",
            }}
          >
            {contributingCardContent &&
              contributingCardContent.map((linkContent, index) => (
                <Card
                  key={index}
                  description={linkContent.description}
                  isContributingCard={true}
                  widthInPx={!index ? 570 : undefined}
                />
              ))}
          </div>
        </div>
        {/* ---------------------- */}
        <div>
          <h2>Explore our ecosystem</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              maxWidth: "1170px",
              // width: "50%",
              margin: "auto",
            }}
          >
            {tagionEcosystemCardContent &&
              tagionEcosystemCardContent.map((cardContent, index) => (
                <Card
                  key={index}
                  title={cardContent.title}
                  description={cardContent.description}
                  isTagionEcosystemCard={true}
                />
              ))}
          </div>
        </div>
        {/* ---------------------- */}
        <div>
          <h2>Value for contributors</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              maxWidth: "1170px",
              margin: "auto",
            }}
          >
            {valueForContributorsCardContent &&
              valueForContributorsCardContent.map((cardContent, index) => (
                <Card
                  key={index}
                  title={cardContent.title}
                  description={cardContent.description}
                  isValueForContributorsCard={true}
                  img={cardContent.img}
                />
              ))}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";

// ========================================================================================
// all objects will be removed later. Сurrently used only for test filling of cards with content
const temporaryCardsContentSource = [
  {
    title: "Open, interoperable and modular sub-ecosystems",
    description:
      "Everyone can build their own ecosystems and connect to external networks with ease.",
    cardWidth: 470,
  },
  {
    title: "Tagion Commons serving everyone’s economic interests",
    description:
      "Governing as a Commons is an efficient way of developing, maintaining, utilising and operating resources.",
    cardWidth: 671,
  },
  {
    title: "Performance challenging current market systems",
    description:
      "High performance with low bandwidth is key to creating a real alternative economic solution.",
    cardWidth: 671,
  },
  {
    title: "Real world efficient financial products ",
    description:
      "Everyone everywhere can participate in a sustainable economy.",
    cardWidth: 470,
  },
];

const tweetCards = [
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    nickname: "@Lorem",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    nickname: "@Lorem",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    nickname: "@Lorem",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    nickname: "@Lorem",
  },
];

const upcomingEventsContent = [
  {
    title: "Tagion Community Meetup",
    description:
      "Join your local Tagion enthusiasts at the next cozy meetup in Copenhagen",
  },
  {
    title: "Tagion Co-Founder joins panel debate on climate",
    description:
      "Learn how Tagion contributes to tackling climate finance issues",
  },
  {
    title: "Welcome our new community ambassadors!",
    description:
      "John Doe joins the squad to share their expertise in building scalable DLT networks",
  },
];

const linksCardContent = [
  {
    title: "GitHub",
    description: "Read and contribute to code base",
    linkTo: "https://github.com/tagion",
  },
  {
    title: "Documentation",
    description: "Read and contribute to docs",
    linkTo: "https://www.linkedin.com/in/rostik-smikh/",
  },
  {
    title: "Discord",
    description: "Find your creative squad",
    linkTo: "https://www.linkedin.com/in/rostik-smikh/",
  },
  {
    title: "Twitter",
    description: "Share the love",
    linkTo: "https://www.linkedin.com/in/rostik-smikh/",
  },
  {
    title: "Telegram",
    description: "Join the chat",
    linkTo: "https://www.linkedin.com/in/rostik-smikh/",
  },
  {
    title: "Medium",
    description: "Read our latest, write your story",
    linkTo: "https://www.linkedin.com/in/rostik-smikh/",
  },
];

const contributingCardContent = [
  {
    description: "Run a node",
    linkTo: "",
  },
  {
    description: "Suggest improvements to Tagion.org ",
    linkTo: "",
  },
  {
    description: "Suggest improvements to Tagion.org ",
    linkTo: "",
  },
];

const tagionEcosystemCardContent = [
  {
    title: "Transactions in progress",
    description: "100",
  },
  {
    title: "Epoch number",
    description: "100",
  },
  {
    title: "Epoch timestamp",
    description: "100",
  },
  {
    title: "Hashgraph rounds",
    description: "100",
  },
];

const valueForContributorsCardContent = [
  {
    title: "Grow your reputation",
    description: "Engage in community and network governance ",
    img: batmanIcon,
  },
  {
    title: "Get Tagion rewards",
    description: "Join early, explore and play Get Tagions in return",
    img: batmanIcon,
  },
];

const labelsContent = [
  {
    name: "ALL",
  },
  {
    name: "Governance",
  },
  {
    name: "Development",
  },
  {
    name: "Tagion.org",
  },
  {
    name: "Network Testing",
  },
];
