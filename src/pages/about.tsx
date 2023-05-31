import React from "react";

import { Layout } from "../templates/layout";
import { ComingSoon } from "../components";

const AboutPage = () => {
  return (
    <Layout withPaddingTop={false} isHeaderShownOnTop>
      <ComingSoon />
    </Layout>
  );
};

export default AboutPage;

export { Head } from "../components/head";
