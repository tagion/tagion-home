import React from "react";

import { Layout } from "../templates/layout";
import { ComingSoon } from "../components";

const BlogPage = () => {
  return (
    <Layout withPaddingTop={false} isHeaderShownOnTop>
      <ComingSoon />
    </Layout>
  );
};

export default BlogPage;

export { Head } from "../components/head";
