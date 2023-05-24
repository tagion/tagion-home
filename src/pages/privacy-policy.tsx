import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { privacyPolicyData } from "../content";
import { InformationBlockWrapper } from "../wrappers";

import * as styles from "../styles/pages/privacy-policy.module.scss";

const cx = classNames.bind(styles);

const PrivacyPolicyPage = () => {
  return (
    <Layout withPaddingBottom>
      <InformationBlockWrapper>
        <div className={cx("page_title")}>Privacy Policy</div>
        <div className={cx("privacy_policy_content")}>
          {privacyPolicyData.length &&
            privacyPolicyData.map(({ title, description }) => (
              <div className={cx("block")}>
                <div className={cx("title")}>{title}</div>
                <div className={cx("description")}>{description}</div>
              </div>
            ))}
        </div>
      </InformationBlockWrapper>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export { Head } from "../components/head";
