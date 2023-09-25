import React, { CSSProperties, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { createPortal } from "react-dom";

import { SocialLinks } from "../../components";
import { useResizeEvent } from "../../hooks";
import { PageSizes } from "../../common/enums";

import * as styles from "./article.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  pageTitle: string;
  author: string;
  textContent: Array<{
    subTitle: string;
    body: React.JSX.Element;
  }>;
  mainImgData: {
    path: string;
    alt: string;
    style: CSSProperties;
  };
  timeToRead: string;
  dateOfCreation: string;
}

export const ArticleBlock: React.FC<InputProps> = ({
  pageTitle,
  author,
  mainImgData,
  textContent,
  timeToRead,
  dateOfCreation,
}) => {
  const [isDesktopLarge, setIsDesktopLarge] = useState(false);
  const [
    desktopNavigationBlockWrapperElement,
    setDesktopNavigationBlockWrapperElement,
  ] = useState<HTMLElement | null>(null);

  const authorInfoBlock = () =>
    author && (
      <div
        className={`${cx("author_info")} author_info`}
        // todo handle id
        id="website_info_block"
      >
        <span className={`${cx("author_label")} author_label inter-16`}>
          Author
        </span>
        <span className={`${cx("author_name")} subtitle-font-28_2-36`}>
          {author}
        </span>
      </div>
    );

  useResizeEvent({
    resizeHandler: () => {
      setIsDesktopLarge(() => window.innerWidth >= PageSizes.DESKTOP_LARGE);
    },
  });

  useEffect(() => {
    const desktopNavigationBlockWrapperElement = document.getElementById(
      "desktop_navigation_block_wrapper"
    );

    desktopNavigationBlockWrapperElement &&
      setDesktopNavigationBlockWrapperElement(
        () => desktopNavigationBlockWrapperElement
      );
  }, []);

  return (
    <div className={`${cx("article_block")}`}>
      <div className={`${cx("article_info")} inter-16`}>
        <span className={cx("date_of_creation")}>{dateOfCreation}</span> ·{" "}
        <span className={cx("time_to_read")}>{timeToRead} read</span>
      </div>
      <div className={`${cx("page_title")} title-font`}>{pageTitle}</div>
      <img
        src={mainImgData.path}
        alt={mainImgData.alt}
        className={cx("main_img")}
        style={mainImgData.style}
      />
      <div className={cx("body_text")}>
        {textContent?.length &&
          textContent.map((item) => (
            <React.Fragment key={item.subTitle}>
              <span className={`${cx("subTitle")} subtitle-font-28-36`}>
                {item.subTitle}
              </span>
              <span className={"body-font"}>{item.body}</span>
            </React.Fragment>
          ))}
      </div>

      {authorInfoBlock()}
      {desktopNavigationBlockWrapperElement &&
        createPortal(authorInfoBlock(), desktopNavigationBlockWrapperElement)}

      <SocialLinks
        className={cx("social_links")}
        withCopyLinkButton
        withHovering={isDesktopLarge}
        removeLink="github"
        onCopyLinkClick={() =>
          navigator.clipboard.writeText(window.location.href)
        }
      />
    </div>
  );
};
