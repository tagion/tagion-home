import * as React from "react";
import { HeadFC } from "gatsby";

const pageTitles = [
  { path: "/", title: "Tagion" },
  // { path: "/about/", title: "Tagion | About" },
  // { path: "/blog/", title: "Tagion | Blog" },
  // { path: "/community/", title: "Tagion | Community" },
  // { path: "/explore/", title: "Explore" },
  // { path: "/docs/", title: "Docs" },
  { path: "/coming-soon/", title: "Coming soon" },
  { path: "/privacy-policy/", title: "Tagion | Privacy Policy" },
];

export const Head: HeadFC = (props) => {
  const title = pageTitles.find(
    (pageTitle) => pageTitle.path === props.location.pathname
  )?.title;

  return <title>{title || "Not Found"}</title>;
};
