import React from "react";

import { Layout } from "../templates/layout";
// import { ComingSoon } from "../components";
import { ValueForContributorsBlock } from "../blocks/value-for-contributors";

const CommunityPage = () => {
  return (
    <Layout withPaddingTop={false}>
      {/* <ComingSoon /> */}
      <div style={{ height: "120px" }} />
      <ValueForContributorsBlock />
      <div style={{ height: "120px" }} />
    </Layout>
  );
};

export default CommunityPage;

export { Head } from "../components/head";
