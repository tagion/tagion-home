import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import { Layout } from "../../../templates";
import { InformationBlockWrapper } from "../../../wrappers";
import { ArticleBlock } from "../../../blocks";
import { getArticleBreadcrumbsNestingData } from "../../../content/breadcrumbs";

type ArticleDataType = {
  name: string;
  timeToRead: string;
  dateOfCreation: string;
  author: string;
  mainImgData: {
    path: string;
    alt: string;
  };
  textContent: Array<{
    subTitle: string;
    body: React.JSX.Element;
  }>;
};

interface InputProps {
  data: {
    article: {
      name: string;
      dataObjectName: string;
    };
  };
}

const ArticlePage: React.FC<InputProps> = ({ data: { article } }) => {
  const [articleData, setArticleData] = useState<ArticleDataType | null>(null);

  useEffect(() => {
    article &&
      getFileWithContent()
        .then((data) => {
          setArticleData(data[article.dataObjectName] as ArticleDataType);
        })
        .catch((e) =>
          console.error("An error occurred during importing file:", e)
        );
  }, [article]);

  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper
        breadcrumbsData={getArticleBreadcrumbsNestingData(
          articleData?.name || ""
        )}
      >
        {articleData && (
          <ArticleBlock
            pageTitle={articleData.name}
            textContent={articleData.textContent}
            mainImgData={articleData.mainImgData}
            author={articleData.author}
            timeToRead={articleData.timeToRead}
            dateOfCreation={articleData.dateOfCreation}
          />
        )}
      </InformationBlockWrapper>
    </Layout>
  );
};

export default ArticlePage;

export { Head } from "../../../components/head";

export const query = graphql`
  query ($name: String!) {
    article(name: { eq: $name }) {
      name
      dataObjectName
    }
  }
`;

export const getFileWithContent = async (): Promise<{
  [key: string]: Array<Object> | Object;
}> => await import(`../../../content/articles`);
