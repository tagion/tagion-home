import * as React from "react";
import { HeadFC } from "gatsby";

const pageTitles = [
  { path: "/", title: "Tagion" },
  // { path: "/about/", title: "Tagion | About" },
  // { path: "/blog/", title: "Tagion | Blog" },
  // { path: "/community/", title: "Tagion | Community" },
  // { path: "/ecosystem/", title: "Tagion | Ecosystem" },
  // { path: "/docs/", title: "Tagion | Docs" },
  { path: "/coming-soon/", title: "Coming Soon" },
];

export const Head: HeadFC = (props) => {
  const title = pageTitles.find(
    (pageTitle) => pageTitle.path === props.location.pathname
  )?.title;

  return <title>{title || "Not Found"}</title>;
};
