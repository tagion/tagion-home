import React from "react";
import classNames from "classnames/bind";

import * as styles from "./privacy-policy-and-terms-of-use.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  pageTitle: string;
  content: Array<{
    title?: string;
    description: JSX.Element;
  }>;
}
export const PrivacyPolicyAndTermsOfUseBlock: React.FC<InputProps> = ({
  pageTitle,
  content,
}) => {
  return (
    <>
      <div className={`${cx("page_title")} prompt-regular`}>{pageTitle}</div>
      <div className={cx("content")}>
        {content.length &&
          content.map(({ title, description }) => (
            <div className={cx("block")}>
              {title && (
                <div
                  className={`${cx(
                    "title"
                  )} prompt-regular subtitle-font-28-36`}
                >
                  {title}
                </div>
              )}
              <div className={cx("description")}>{description}</div>
            </div>
          ))}
      </div>
    </>
  );
};
