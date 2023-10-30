import React from "react";

export const ourVisionAndMissioBlockData = [
  {
    title: "Research and Development",
    description:
      "Establishing foundational technology and governance concepts and prototypes.",
    label: "2017 - 2022",
  },
  {
    title: "Utility and Adoption",
    description: (
      <>
        Building real utility and adoption.
        <br />
        Providing customisable infrastructure for a businesses, communities and
        developers.
      </>
    ),
    label: "2023 - 2027",
    style: {
      // todo improve logic when multiple breakpoints have the same objects
      title: {
        tablet: { width: "200px" },
        desktop: { width: "200px" },
        desktop_large: { width: "200px" },
      },
    },
  },
  {
    title: "Integrated Financial Ecosystem",
    description:
      "Capital market with robust marketplace and use cases powered by genuine governance and voting system that takes decisions on a social and monetary level.",
    label: "2028 - 2033",
    style: {
      title: {
        tablet: { width: "347px" },
        desktop: { width: "347px" },
        desktop_large: { width: "347px" },
        desktop_max: { width: "400px" },
      },
      description: {
        mobile: { width: "231px" },
        tablet: { width: "330px" },
        desktop: { width: "330px" },
        desktop_large: { width: "330px" },
      },
    },
  },
];
