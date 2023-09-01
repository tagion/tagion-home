import React from "react";
import { PageNotFound } from "../components";
import { Layout } from "../templates";

const NotFoundPage: React.FC = () => {
  return (
    <Layout withPaddingTop={false} withoutFooter isPageWithDarkBackground>
      <PageNotFound />
    </Layout>
  );
};

export default NotFoundPage;

export { Head } from "../components/head";
