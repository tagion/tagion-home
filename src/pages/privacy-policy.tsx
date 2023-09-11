import React from "react";

import { Layout } from "../templates/layout";
import { privacyPolicyData } from "../content";
import { InformationBlockWrapper } from "../wrappers";
import { PrivacyPolicyAndTermsOfUseBlock } from "../blocks";

const PrivacyPolicyPage = () => {
  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper>
        <PrivacyPolicyAndTermsOfUseBlock
          content={privacyPolicyData}
          pageTitle="Privacy Policy"
        />
      </InformationBlockWrapper>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export { Head } from "../components/head";
