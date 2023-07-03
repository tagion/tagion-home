import * as React from "react";
import { HeadFC } from "gatsby";

const pageTitles = [
  { path: "/", title: "Tagion" },
  { path: "/about/", title: "Tagion | About" },
  { path: "/blog/", title: "Tagion | Blog" },
  { path: "/community/", title: "Tagion | Community" },
  // { path: "/docs/", title: "Docs" },
  { path: "/privacy-policy/", title: "Tagion | Privacy Policy" },
  { path: "/terms-of-use/", title: "Tagion | Terms of use" },
  { path: "/get-tagions/", title: "Tagion | Get Tagions" },
];

export const Head: HeadFC = (props) => {
  const title = pageTitles.find(
    (pageTitle) => pageTitle.path === props.location.pathname
  )?.title;

  return <title>{title || "Not Found"}</title>;
};
