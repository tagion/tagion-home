import React from "react";

export const ourVisionAndMissioBlockData = [
  {
    title: "Research and Development",
    description:
      "Establishing foundational technology and governance concepts and prototypes. Founding of Decard Group AG. Token sales to fund technical development.",
    label: "2017 - 2022",
  },
  {
    title: "Utility and Adoption",
    description: (
      <>
        Building real utility and adoption. Providing customisable infrastructure for businesses, communities and developers. Staged decentralisation of Tagion.
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
    title: "Integrated Decentralised Ecosystem",
    description:
      "Diverse applications in core industries powered by genuine governance and voting systems that decentralises decisions on a social and monetary level.",
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
