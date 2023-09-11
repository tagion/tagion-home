import React, { useEffect, useState } from "react";

import { graphql } from "gatsby";
import { Layout } from "../../templates";
import { InformationBlockWrapper } from "../../wrappers";
import { PartnerAndUseCasesBlock } from "../../blocks";
import { ExternalLinks } from "../../common/enums";
import { ComingSoon } from "../../components";

interface InputProps {
  data: {
    partner: {
      partnerId: string;
      pageTitle: string;
      aboutText: Array<string>;
      mainImgSrc: string;
      logoSrc: string;
      logoWidth: string;
    };
    allUseCases: {
      nodes: Array<{
        description: string;
        pageTitle: string;
        mainImgSrc: string;
        isImgDisplayedInRelatedInformationBlock: boolean;
      }>;
    };
  };
}

const PartnerPage: React.FC<InputProps> = ({
  data: { partner, allUseCases },
}) => {
  const [mainImgSrc, setMainImgSrc] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

  const getStaticPath = async (imgSrc: string) =>
    await import(`../../assets/images/partners/${imgSrc}`);

  useEffect(() => {
    getStaticPath(partner.mainImgSrc).then((res) => setMainImgSrc(res.default));
    getStaticPath(partner.logoSrc).then((res) => setLogoSrc(res.default));
  }, []);

  return (
    <ComingSoon />
    // <Layout withPaddingBottom>
    //   <InformationBlockWrapper>
    //     <PartnerAndUseCasesBlock
    //       pageTitle={partner.pageTitle}
    //       aboutText={partner.aboutText}
    //       relatedInformationBlockData={{
    //         data: allUseCases.nodes,
    //         title: "Use cases",
    //       }}
    //       mainImgSrc={mainImgSrc}
    //       logo={{ src: logoSrc, width: partner.logoWidth }}
    //       websiteLink={
    //         ExternalLinks[partner.partnerId as keyof typeof ExternalLinks]
    //       }
    //     />
    //   </InformationBlockWrapper>
    // </Layout>
  );
};

export default PartnerPage;

export { Head } from "../../components/head";

export const query = graphql`
  query ($name: String!) {
    partner(name: { eq: $name }) {
      partnerId
      pageTitle
      aboutText
      mainImgSrc
      logoSrc
      logoWidth
    }

    allUseCases {
      nodes {
        description
        pageTitle
        mainImgSrc
        isImgDisplayedInRelatedInformationBlock
      }
    }
  }
`;
