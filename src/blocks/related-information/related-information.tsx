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
    mainImgSrc?: string;
  }>;
  isStaticImg?: boolean;
}

export const RelatedInformationBlock: React.FC<InputProps> = ({
  title,
  data,
  isStaticImg,
}) => {
  const [withImg, setWithImg] = useState<boolean>();
  const [staticImagePaths, setStaticImagesPaths] = useState<{
    [key: string]: string;
  }>({});

  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => {
      breakpointDeterminator();
      setWithImg(() => window.innerWidth >= PageSizes.DESKTOP_LARGE);
    },
  });

  // todo move all data from .yaml files to js and delete 'staticPath' functionality
  useEffect(() => {
    isStaticImg &&
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
  }, [pageSize, isStaticImg]);

  return (
    <div className={cx("related_information_block")}>
      <div className={`${cx("title")} subtitle-font-32-36-50`}>{title}</div>
      <div className={cx("cards_wrapper")}>
        {data.map((item, i) => {
          // todo move all data from .yaml files to js and delete 'staticPath' functionality
          const staticImagePath = isStaticImg
            ? staticImagePaths[item.pageTitle]
            : item.mainImgSrc;
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
                withImg && staticImagePath
                  ? {
                      path: staticImagePath as string,
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
              onClick={() =>
                // todo move all data from .yaml files to js and delete 'staticPath' functionality
                navigate(
                  title === "Use cases" ? `/use-cases/${item.name}` : item.name
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};
