import React from "react";
import { PageProps, navigate } from "gatsby";
import { PageNotFound } from "../components";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  const pathname = location.pathname ? location.pathname : "";
  const isComingSoonPage = coomingSoonPages.some((page) => page === pathname);

  if (isComingSoonPage) {
    navigate("/coming-soon");
  }

  return !isComingSoonPage ? <PageNotFound /> : <></>;
};

export default NotFoundPage;

export { Head } from "../components/head";

const coomingSoonPages = [
  "/about/",
  "/blog/",
  "/community/",
  "/explore/",
  "/docs/",
];
