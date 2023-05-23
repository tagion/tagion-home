import React, { useState } from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { Button, Input } from "../components";

import * as styles from "../styles/pages/coming-soon.module.scss";

const cx = classNames.bind(styles);

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  
  return (
    <Layout withPaddingTop={false}>
      <div className={cx("coming_soon_page")}>
        <div className={cx("content")}>
          <div className={cx("title")}>
            Coming
            <br />
            Soon
          </div>
          <div className={cx("form_name")}>
            Sign up to our
            <br />
            newsletter
          </div>
          <form className={cx("form")}>
            <Input
              label="Email address"
              name="email"
              onChange={(e) => setEmail(() => e.target.value)}
              value={email}
              isGrayTextColor
              className={cx("email_input")}
            />
            <Button name="Subscribe" isWhite />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoonPage;

export { Head } from "../components/head";
