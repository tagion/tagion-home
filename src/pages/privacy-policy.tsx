import React from "react";

import { Layout } from "../templates/layout";
import { privacyPolicyData } from "../content";
import { InformationBlockWrapper } from "../wrappers";

const PrivacyPolicyPage = () => {
  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper
        content={privacyPolicyData}
        pageTitle="Privacy Policy"
      />
    </Layout>
  );
};

export default PrivacyPolicyPage;

export { Head } from "../components/head";
