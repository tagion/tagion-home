import React from "react";
import { PageProps, navigate } from "gatsby";
import { PageNotFound } from "../components";

const NotFoundPage: React.FC<PageProps> = () => {
  const isComingSoonPage = coomingSoonPages.some(
    (page) => page === window.location.pathname
  );
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
