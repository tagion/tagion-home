import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { PageProps } from "gatsby";

import { Layout } from "../../templates/layout";
import { ArticlesBlock, GlossaryBlock } from "../../blocks";
import { InformationBlockWrapper } from "../../wrappers";
import { PageSizes } from "../../common/enums";
import { PageFilter } from "../../components";
import { blogPageSectionsNameData } from "../../content/blog-page-sections";

import * as styles from "../../styles/pages/blog.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  location: PageProps["location"] & {
    state: { [key: string]: number | string };
  };
}

const BlogPage = ({ location: { state } }: InputProps) => {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState<string>("0");
  const selectedFilterIndexProp = state?.["selectedFilterIndex"];

  useEffect(() => {
    selectedFilterIndexProp &&
      setSelectedFilterIndex(() => selectedFilterIndexProp.toString());
  }, [selectedFilterIndexProp]);

  return (
    <Layout
      withPaddingBottom
      scrollHeightForTransparentHeader={{ mobile: 20, desktop_large: 100 }}
    >
      <InformationBlockWrapper
        changeViewAfter={PageSizes.DESKTOP_LARGE}
        gridBreakpoints={{
          lg: { firstColumn: 5, secondColumn: 7 },
          xl: { firstColumn: 5, secondColumn: 7 },
        }}
        navigationSideTitle="Blog"
        showNavigationMenu={false}
        insertElementIntoNavigationSide={
          <PageFilter
            filterItems={blogPageSectionsNameData}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
            classNames={{
              wrapper: cx("pageFilter_wrapper"),
              desktopFilter: cx("pageFilter_desktopFilter"),
            }}
          />
        }
        classNames={{
          navigationSideWrapper: cx("IBW_navigation_side_wrapper"),
          informationBlockWrapper: cx("IBW_information_block_wrapper"),
        }}
      >
        {selectedFilterIndex === "0" && <ArticlesBlock />}
        {selectedFilterIndex === "1" && <GlossaryBlock />}
      </InformationBlockWrapper>
    </Layout>
  );
};

export default BlogPage;

export { Head } from "../../components/head";
