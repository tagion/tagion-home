import React from "react";

import { Layout } from "../templates/layout";
import { ComingSoon } from "../components";

const GetTagionsPage = () => {
  return (
    <Layout withPaddingTop={false} isHeaderShownOnTop>
      <ComingSoon />
    </Layout>
  );
};

export default GetTagionsPage;

export { Head } from "../components/head";
