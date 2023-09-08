import * as React from "react";
import { HeadFC } from "gatsby";

const pageTitles = [
  { path: "/", title: "Tagion" },
  { path: "/about/", title: "Tagion | About" },
  { path: "/blog/", title: "Tagion | Blog" },
  { path: "/community/", title: "Tagion | Community" },
  { path: "/ecosystem/", title: "Tagion | Ecosystem" },
  { path: "/privacy-policy/", title: "Tagion | Privacy Policy" },
  { path: "/terms-of-use/", title: "Tagion | Terms of use" },
  { path: "/get-tagions/", title: "Tagion | Get Tagions" },
  { path: "/partners/", title: "Tagion | Partners" },
];

export const Head: HeadFC = (props) => {
  const title = pageTitles.findLast((pageTitle) => {
    return props.location.pathname.includes(pageTitle.path);
  })?.title;

  return <title>{title || "Not Found"}</title>;
};
