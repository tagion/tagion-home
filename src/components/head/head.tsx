import * as React from "react";
import { HeadFC } from "gatsby";

import { InternalLinks } from "../../common/enums";

const pageTitles = [
  { path: InternalLinks.MAIN, title: "Tagion" },
  { path: InternalLinks.ABOUT, title: "Tagion | Origins" },
  { path: InternalLinks.BLOG, title: "Tagion | Blog" },
  { path: InternalLinks.LEARNANDFOLLOW, title: "Tagion | Learn and Follow" },
  { path: InternalLinks.COMMUNITY, title: "Tagion | Your Invitation" },
  { path: InternalLinks.ECOSYSTEM, title: "Tagion | Technology" },
  { path: InternalLinks.PRIVACY_POLICY, title: "Tagion | Privacy Policy" },
  { path: InternalLinks.TERMS_OF_USE, title: "Tagion | Terms of use" },
  { path: InternalLinks.GET_TAGIONS, title: "Tagion | Get Tagions" },
  { path: InternalLinks.PARTNERS, title: "Tagion | Partners" },
  { path: InternalLinks.USE_CASES, title: "Tagion | Use cases" },
];

export const Head: HeadFC = (props) => {
  const title = pageTitles.findLast((pageTitle) => {
    return props.location.pathname.includes(pageTitle.path);
  })?.title;

  return <title>{title || "Not Found"}</title>;
};
