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
    description:
      "Enabling real-world use and adoption through a modular distributed infrastructure and robust developer environment.",
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
    title: "Common Good Network Infrastructure",
    description:
      "Growing an independent system governed as a Commons that powers diverse decentralised applications.",
    label: "2028 - 2033",
    style: {
      title: {
        tablet: { width: "347px" },
        desktop: { width: "347px" },
        desktop_large: { width: "347px" },
        desktop_max: { width: "400px" },
      },
    },
  },
];
