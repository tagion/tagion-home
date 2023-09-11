import React from "react";

import { Layout } from "../templates/layout";
import { termsOfUseData } from "../content";
import { InformationBlockWrapper } from "../wrappers";
import { PrivacyPolicyAndTermsOfUseBlock } from "../blocks";

const TermsOfUsePage = () => {
  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper>
        <PrivacyPolicyAndTermsOfUseBlock
          content={termsOfUseData}
          pageTitle="Terms of use"
        />
      </InformationBlockWrapper>
    </Layout>
  );
};

export default TermsOfUsePage;

export { Head } from "../components/head";
