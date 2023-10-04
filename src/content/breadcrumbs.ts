import { InternalLinks } from "../common/enums";

export const getArticleBreadcrumbsNestingData = (lastBreadcrumb: string) => [
  {
    name: "Blog",
    linkTo: InternalLinks.BLOG,
    stateToNewPage: { selectedFilterIndex: "0" },
  },
  {
    name: "Articles",
    linkTo: InternalLinks.BLOG,
    stateToNewPage: { selectedFilterIndex: "0" },
  },
  { name: lastBreadcrumb },
];
