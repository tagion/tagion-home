import React from "react";
import classNames from "classnames/bind";

import { Button, Card } from "../components";
import { Layout } from "../templates/layout";
import { PageSizes } from "../common/enums";
import { Carousel } from "../components/carousel";

import batmanIcon from "../assets/images/batman.svg";
import { ReactComponent as ArrowLeftIcon } from "../assets/images/timeline_arrow_left.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/images/timeline_arrow_right.svg";

import * as styles from "../styles/pages/index.module.scss";

const cx = classNames.bind(styles);

const CommunityPage = () => {
  const carouselItemCreator = (
    index: number,
    firstShowedIndex: number,
    isMobileSize: boolean,
    item: {
      title: string;
      description: string;
    },
    itemsLength: number,
    maximusShowed: number
  ) => {
    return (
      <Card
        className={"event"}
        key={index}
        isUpcomingEventCard={true}
        linkWithArrowInfo={{
          linkTo: "https://www.google.com.ua/",
          name: "Learn more",
        }}
        img={batmanIcon}
        title={item.title}
        description={item.description}
        withoutShadow={
          !isMobileSize &&
          (firstShowedIndex + (maximusShowed - 1) < index ||
            firstShowedIndex > index)
        }
        isNotVisible={
          isMobileSize &&
          firstShowedIndex - 1 === index &&
          firstShowedIndex - 1 !== itemsLength - 2
        }
      />
    );
  };

  return (
    <Layout>
      <Carousel
        items={upcomingEventsContent}
        carouselItemCreator={carouselItemCreator}
        carouselName="upcomingEvents"
        slideMinWidth={370}
        nextButtonId="next-button-events"
        prevButtonId="prev-button-events"
        additionalContent={{
          topSideClassName: cx("timeline_top_content"),
          title: {
            text: (
              <div className={cx("title")}>
                Upcoming events and community activities
              </div>
            ),
            wrapperClassName: cx("timeline_title"),
          },
          buttons: {
            wrapperClassName: cx("timeline_buttons"),
            prevButton: (
              <Button Icon={<ArrowLeftIcon />} id="prev-button-tweets" />
            ),
            nextButton: (
              <Button Icon={<ArrowRightIcon />} id="next-button-tweets" />
            ),
          },
        }}
        maximusShowedItems={3}
        breakpoints={{
          mobile: {
            pageWidth: PageSizes.MOBILE,
            itemWidth: 294,
            marginBeetwenItems: 16,
            firstItemMargin: 24,
          },
          desktop: {
            pageWidth: PageSizes.DESKTOP,
            itemWidth: 370,
            marginBeetwenItems: 30,
          },
        }}
      />
    </Layout>
  );
};

export default CommunityPage;

export { Head } from "../components/head";

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
  {
    title: "222",
    description:
      "Join your local Tagion enthusiasts at the next cozy meetup in Copenhagen",
  },
  {
    title: "333",
    description:
      "Learn how Tagion contributes to tackling climate finance issues",
  },
  {
    title: "444",
    description:
      "John Doe joins the squad to share their expertise in building scalable DLT networks",
  },
];
