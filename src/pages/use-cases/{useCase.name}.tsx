import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import { Layout } from "../../templates";
import { InformationBlockWrapper } from "../../wrappers";
import { PartnerAndUseCasesBlock } from "../../blocks";
import { ExternalLinks } from "../../common/enums";
import { getStaticPath } from "../../helpers";
import { articlesData } from "../../content/articles";

interface InputProps {
  data: {
    useCase: {
      pageTitle: string;
      aboutText: Array<{ paragraph?: string; list?: Array<string> }>;
      mainImgSrc: string;
      logoSrc: string;
      logoWidth: string;
      useCaseId: string;
    };
  };
}

const UseCasesPage: React.FC<InputProps> = ({ data: { useCase } }) => {
  const [mainImgSrc, setMainImgSrc] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

  useEffect(() => {
    useCase?.mainImgSrc &&
      getStaticPath(useCase.mainImgSrc).then(
        (res) => res?.default && setMainImgSrc(res.default)
      );
    useCase?.logoSrc &&
      getStaticPath(useCase.logoSrc).then(
        (res) => res?.default && setLogoSrc(res.default)
      );
  }, []);

  const relatedArticles = articlesData.slice(0, 3);

  const mappedRelatedArticles = relatedArticles.map((article) => ({
    // todo rename to 'link' after deleting img staticPath
    name: `/blog/articles/${article.linkTo}`,
    description: article.description,
    pageTitle: article.name,
    mainImgSrc:
      article.mainImgData?.path || article.descriptiveImgData?.path || "",
    isImgDisplayedInRelatedInformationBlock: true,
  }));
  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper>
        <PartnerAndUseCasesBlock
          pageTitle={useCase.pageTitle}
          aboutText={useCase.aboutText}
          relatedInformationBlockData={{
            data: mappedRelatedArticles,
            title: "Related articles",
            // todo move all data from .yaml files to js and delete 'staticPath' functionality
            isStaticImg: false,
          }}
          mainImgSrc={mainImgSrc}
          logo={{ src: logoSrc, width: useCase.logoWidth }}
          websiteLink={
            ExternalLinks[useCase.useCaseId as keyof typeof ExternalLinks]
          }
          buttonLinkName="Partner Details"
        />
      </InformationBlockWrapper>
    </Layout>
  );
};

export default UseCasesPage;

export { Head } from "../../components/head";

export const query = graphql`
  query ($name: String!) {
    useCase(name: { eq: $name }) {
      aboutText {
        paragraph
        list
      }
      description
      logoSrc
      logoWidth
      mainImgSrc
      name
      pageTitle
      useCaseId
    }
  }
`;
