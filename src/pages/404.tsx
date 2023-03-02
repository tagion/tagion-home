import * as React from "react";
import { PageProps } from "gatsby";
import { PageNotFound } from "../components";

const NotFoundPage: React.FC<PageProps> = () => {
  return <PageNotFound />;
};

export default NotFoundPage;

export { Head } from "../components/head";
