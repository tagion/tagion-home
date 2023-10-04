import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import { Layout } from "../../templates";
import { InformationBlockWrapper } from "../../wrappers";
import { PartnerAndUseCasesBlock } from "../../blocks";
import { ExternalLinks } from "../../common/enums";
import { getStaticPath } from "../../helpers";

interface InputProps {
  data: {
    partner: {
      partnerId: string;
      pageTitle: string;
      aboutText: Array<{ paragraph?: string; list?: Array<string> }>;
      mainImgSrc: string;
      logoSrc: string;
      logoWidth: string;
    };
    allUseCase: {
      nodes: Array<{
        name: string;
        description: string;
        pageTitle: string;
        mainImgSrc: string;
        isImgDisplayedInRelatedInformationBlock: boolean;
      }>;
    };
  };
}

const PartnerPage: React.FC<InputProps> = ({
  data: { partner, allUseCase },
}) => {
  const [mainImgSrc, setMainImgSrc] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

  useEffect(() => {
    getStaticPath(partner.mainImgSrc).then(
      (res) => res?.default && setMainImgSrc(res.default)
    );
    getStaticPath(partner.logoSrc).then(
      (res) => res?.default && setLogoSrc(res.default)
    );
  }, []);

  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper>
        <PartnerAndUseCasesBlock
          pageTitle={partner.pageTitle}
          aboutText={partner.aboutText}
          relatedInformationBlockData={{
            data: allUseCase.nodes,
            title: "Use cases",
            isStaticImg: true,
          }}
          mainImgSrc={mainImgSrc}
          logo={{ src: logoSrc, width: partner.logoWidth }}
          websiteLink={
            ExternalLinks[partner.partnerId as keyof typeof ExternalLinks]
          }
          buttonLinkName="Visit Website"
        />
      </InformationBlockWrapper>
    </Layout>
  );
};

export default PartnerPage;

export { Head } from "../../components/head";

export const query = graphql`
  query ($name: String!) {
    partner(name: { eq: $name }) {
      partnerId
      pageTitle
      aboutText {
        paragraph
      }
      mainImgSrc
      logoSrc
      logoWidth
    }

    allUseCase {
      nodes {
        name
        description
        pageTitle
        mainImgSrc
        isImgDisplayedInRelatedInformationBlock
      }
    }
  }
`;
