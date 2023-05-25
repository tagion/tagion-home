import React from "react";

import { Layout } from "../templates/layout";
import { termsOfUseData } from "../content";
import { InformationBlockWrapper } from "../wrappers";

const TermsOfUsePage = () => {
  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper
        content={termsOfUseData}
        pageTitle="Terms of use"
      />
    </Layout>
  );
};

export default TermsOfUsePage;

export { Head } from "../components/head";
