import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { navigate } from "gatsby";

import { Card } from "../../components";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import { PageSizes } from "../../common/enums";
import { getStaticPath } from "../../helpers";

import * as styles from "./related-information.module.scss";

import { ReactComponent as SmallArrowLinkIcon } from "../../assets/images/small_arrow_link.svg";

const cx = classNames.bind(styles);

interface InputProps {
  title: string;
  data: Array<{
    name: string;
    description: string;
    pageTitle: string;
    isImgDisplayedInRelatedInformationBlock: boolean | null;
    mainImgSrc: string;
  }>;
}

export const RelatedInformationBlock: React.FC<InputProps> = ({
  title,
  data,
}) => {
  const [staticImagePaths, setStaticImagesPaths] = useState<{
    [key: string]: string;
  }>({});
  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => {
      breakpointDeterminator();
    },
  });

  useEffect(() => {
    window.innerWidth >= PageSizes.DESKTOP_LARGE &&
      data.forEach(
        (item) =>
          item.isImgDisplayedInRelatedInformationBlock &&
          item.mainImgSrc &&
          getStaticPath(item.mainImgSrc).then(
            (res) =>
              res?.default &&
              setStaticImagesPaths((staticImagePaths) => ({
                ...staticImagePaths,
                [item.pageTitle]: res.default,
              }))
          )
      );
  }, [pageSize]);

  return (
    <div className={cx("related_information_block")}>
      <div className={`${cx("title")} subtitle-font-32-36-50`}>{title}</div>
      <div className={cx("cards_wrapper")}>
        {data.map((item, i) => {
          const staticImagePath = staticImagePaths[item.pageTitle];
          const withImg =
            staticImagePath && window.innerWidth >= PageSizes.DESKTOP_LARGE;

          return (
            <Card
              key={i}
              title={
                <span>
                  {item.pageTitle}
                  <SmallArrowLinkIcon />
                </span>
              }
              description={item.description}
              img={
                withImg
                  ? {
                      path: staticImagePath,
                      alt: `${item.pageTitle} image`,
                    }
                  : undefined
              }
              classNames={{
                card: cx("card"),
                mainContent: cx("card_mainContent"),
                title: cx("card_title"),
                img: cx("card_imgWrapper"),
              }}
              onClick={() => navigate(`/use-cases/${item.name}`)}
            />
          );
        })}
      </div>
    </div>
  );
};
