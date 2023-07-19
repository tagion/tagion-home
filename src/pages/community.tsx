import React from "react";

import { Layout } from "../templates/layout";
// import { ComingSoon } from "../components";
import { ValueForContributorsBlock } from "../blocks/value-for-contributors";
import { GradientSpotsWrapper } from "../components";
import { LetsTalkBlock, SubscribeToOurNewsletterBlock } from "../blocks";
import { mainPageGradients } from "../content";

const CommunityPage = () => {
  return (
    <Layout withPaddingTop={false}>
      {/* <ComingSoon /> */}
      <div style={{ height: "120px" }} />
      <ValueForContributorsBlock />
      <div style={{ height: "120px" }} />
      <GradientSpotsWrapper
        gradients={mainPageGradients.subscribeToNewsletterBlock}
      >
        <LetsTalkBlock />
        <SubscribeToOurNewsletterBlock />
      </GradientSpotsWrapper>
    </Layout>
  );
};

export default CommunityPage;

export { Head } from "../components/head";
