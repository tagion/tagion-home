import React from "react";

import { Layout } from "../templates/layout";
import { ComingSoon } from "../components";

const CommunityPage = () => {
  return (
    <Layout withPaddingTop={false} isHeaderShownOnTop>
      <ComingSoon />
    </Layout>
  );
};

export default CommunityPage;

export { Head } from "../components/head";
